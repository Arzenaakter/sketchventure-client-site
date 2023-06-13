import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Slide } from "react-awesome-reveal";
import { useLocation } from "react-router-dom";
// import useSelectedClass from "../../../../hooks/useSelectedClass";
import CheckOutForm from "../MySelectedClass/CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);

const PaymentPage = () => {
    const location = useLocation();
    // const { price,Class_id,ClassName,InstructorName } = location.state || {}
    const { selectedClass } = location.state || {}
    // console.log(selectedClass);
   


    return (
        <div className="w-full">
              <Slide>
              <h1 className="text-3xl font-bold text-center mb-5">Payment Page</h1>
                </Slide>
      
         <Elements stripe={stripePromise}>
            {/* <CheckOutForm price={price} Class_id={Class_id} ClassName={ClassName} InstructorName={}> */}
            <CheckOutForm selectedClass={selectedClass}>

            </CheckOutForm>
         </Elements>
        
        </div>
    );
};

export default PaymentPage;