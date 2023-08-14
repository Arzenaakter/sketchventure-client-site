import { Slide } from "react-awesome-reveal";
import usePayment from "../../../../hooks/usePayment";

const EnrolledClasses = () => {
  const [paymentHistory] = usePayment();
  return (
    <div className="px-10 lg:px-0">
      <Slide>
        <h1 className="text-3xl font-bold text-center my-5">
          Enrolled Classes
        </h1>
      </Slide>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Enroll Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {paymentHistory.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.className}</td>
                <td>{payment.InstructorName}</td>
                <td>$ {payment.price}</td>
                <td> {payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
