import { Fade, Slide } from "react-awesome-reveal";
import useAuth from "../../../../hooks/useAuth";
import usePayment from "../../../../hooks/usePayment";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [paymentHistory] = usePayment();

  const sortedPaymentHistory = paymentHistory
    .map((payment) => payment)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="px-10 lg:px-0">
      <div className="text-center font-bold mx-auto my-8">
        <Slide>
          <h1 className="text-3xl font-bold text-center my-5">
            Payment History
          </h1>
        </Slide>
        <Fade>
          <h1>Name: {user?.displayName}</h1>
          <h1>Email: {user?.email}</h1>
        </Fade>
      </div>
      <>
        <div className="overflow-x-auto mb-5">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Enroll Date</th>
                <th>TransactionId</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {sortedPaymentHistory.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment.className}</td>
                  <td>$ {payment.price}</td>
                  <td>{payment.date}</td>
                  <td>{payment.transactionId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default PaymentHistory;
