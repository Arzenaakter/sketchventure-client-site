import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import Swal from "sweetalert2";


const ManageUsers = () => {

    // const [isAdmin, setIsAdmin] = useState(false)
    // const [isInstructor, setIsInstructor ] = useState( 'Instructor')

    const {data: users=[], refetch} = useQuery(['users'], async()=>{
        const res = await fetch('http://localhost:5000/users')
        console.log(users);
        return res.json();
    })


    // admin
    const handleMakeAdmin = id =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                // setIsAdmin(true)
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your are now Admin',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }
    // Instructor
    const handleMakeInstructor = id =>{
        fetch(`http://localhost:5000/users/instructor/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                // setIsAdmin(true)
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your are now Instructor',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }


    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold text-center mb-4">Total Users : {users.length}</h1>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map ((user,index)=>
            <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role ===  'admin' ?'Admin' : user.role === 'instructor' ? 'Instructor' : ' Student'}</td>
            <td>
                <button className="btn btn-sm btn-success"  onClick={()=>handleMakeAdmin(user._id)}>Make Admin</button>
                <button className="btn btn-sm btn-info" onClick={()=>handleMakeInstructor(user._id)}>Make Instructor</button>
            </td>
          </tr>
            )
      }
    
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;