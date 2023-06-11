
import { useState } from "react";
import { useEffect } from "react";


const ManageClasses = () => {

   const [classes, setClasses] =  useState([])

 

    useEffect(()=>{
        fetch('http://localhost:5000/addClasses')
        .then(res=> res.json())
        .then(data => setClasses(data))
    },[])


    // Approve
    const handleApprove = id =>{
      console.log(id);
    }






    return (
        <div>
            <h1>Manage Classes</h1>


            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
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

      {
        classes.map((classInfo,index) =><tr
        key={classInfo._id}
        >
            <th>
              {index + 1}
            </th>
            <td>
              
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={classInfo.classImage} />
                  </div>
              </div>
            </td>

            <td>
           {classInfo.className}
            
            </td>
            <td> {classInfo.instructorName}</td>
            <td> {classInfo.instructorEmail}</td>
            <td>{classInfo.availableSeats}</td>
            <td>{classInfo.price}</td>
            <td>
            <td>{classInfo.status ===  'approve' ?'Approved' : classInfo.status === 'deny' ? 'Denied' : ' Pending'}</td>
              
            </td>
            <td className="space-y-2 ">
                <button onClick={()=>handleApprove(classInfo._id)}  className="btn common-btn btn-sm  text-[12px] w-20">Approve</button>
                <button  className="btn common-btn btn-sm text-[12px] w-20">Deny</button>
                <button  className="btn common-btn btn-sm text-[12px] w-20">Feedback</button>
            </td>
          </tr>)

      }
      
      
      
    
    </tbody>
    
    
  </table>
</div>




        </div>
    );
};

export default ManageClasses;