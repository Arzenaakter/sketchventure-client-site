import { useState } from "react";
import { useEffect } from "react";
import { Link  } from "react-router-dom";
import Swal from "sweetalert2";





const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
 

  useEffect(() => {
    fetch("http://localhost:5000/addClasses")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [classes]);

  // Approve
  const handleApprove = (id) => {
    console.log(id, "approve");

    fetch(`http://localhost:5000/addClasses/approve/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Approved successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // deny
  const handleDeny = (id) => {
    console.log(id, "deny");

    fetch(`http://localhost:5000/addClasses/deny/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Denied successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };


// 

  

  return (
    <div>
      <h1>Manage Classes</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classInfo, index) => (
              <tr key={classInfo._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={classInfo.classImage} />
                    </div>
                  </div>
                </td>

                <td>{classInfo.className}</td>
                <td> {classInfo.instructorName}</td>
                <td> {classInfo.instructorEmail}</td>
                <td>{classInfo.availableSeats}</td>
                <td>${classInfo.price}</td>
                <td>
                  <td>
                    {classInfo.status === "approve"
                      ? "Approved"
                      : classInfo.status === "deny"
                      ? "Denied"
                      : " Pending"}
                  </td>
                </td>
                <td className="space-y-2 ">
                  <button
                    onClick={() => handleApprove(classInfo._id)}
                    disabled={
                      classInfo.status === "approve" ||
                      (classInfo.status === "deny" && true)
                    }
                    className="btn common-btn btn-sm  text-[12px] w-20">
                    Approve
                  </button>

                  <button
                    onClick={() => handleDeny(classInfo._id)}
                    disabled={
                      classInfo.status === "approve" ||
                      (classInfo.status === "deny" && true)
                    }
                    className="btn common-btn btn-sm text-[12px] w-20">
                    Deny
                  </button>
{/* TODO */}
                  <Link to={`/dashboard/adminFeedBack/${classInfo._id}`} feedbackInfo={classInfo}><button  className="btn common-btn btn-sm text-[12px] w-20 mt-2">Feedback</button></Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*  */}
     
    </div>
  );
};

export default ManageClasses;
