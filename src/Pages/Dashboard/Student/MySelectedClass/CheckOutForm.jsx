import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const CheckOutForm = ({ selectedClass }) => {
  const { price, className, InstructorName, std_id, _id, availableSeats } =
    selectedClass;

  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState([]);
  const [processing, setProccessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProccessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    setProccessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        std_name: user?.displayName,
        transactionId: paymentIntent.id,
        date: new Date(),
        price: price,
        InstructorName: InstructorName,
        className: className,
        std_id: _id,
        selectedClass_id: std_id,
        availableSeats: availableSeats,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.deletedResult.insertedId) {
          Swal.fire("Payment successful");
        }
      });
    }
  };

  return (
    <div className="px-10 lg:px-0">
      <form
        className="w-2/3 m-8 border p-10 bg-slate-300 rounded-md mx-auto shadow-lg"
        onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "green",
                "::placeholder": {
                  color: "black",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn common-btn btn-block mt-7"
          type="submit"
          disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      {setCardError && <p className="text-red-500 ms-4">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500 ms-4">
          {" "}
          Transaction sucessed with transactionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;
