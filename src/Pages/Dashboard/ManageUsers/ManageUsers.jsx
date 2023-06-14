import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageUsers = () => {
  const {loading} = useAuth()
 
//  todo disbale

  const [axiosSecure] = useAxiosSecure();

    const {data: users = [], refetch} = useQuery(['users'], async()=>{
        const res = await axiosSecure.get('/users')
       
        return res.data;
    },
    {
      enabled: !loading, 
    }
    )
    
 
    // admin
    const handleMakeAdmin = id =>{
        fetch(`https://summer-camp-server-side-xi.vercel.app/users/admin/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
         
            if(data.modifiedCount){
             
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'This user is now Admin',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
            }
        })

    }
    // Instructor
    const handleMakeInstructor = id =>{
        fetch(`https://summer-camp-server-side-xi.vercel.app/users/instructor/${id}`,{
            method:'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
      
            if(data.modifiedCount){
             
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'This user is now Instructor',
                    showConfirmButton: false,
                    timer: 1500
                  })
                
            }
        })

    }


    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold text-red-600 text-center mb-4">
              Total Users : {users.length}
              </h1>

            <div className="overflow-x-auto">
  <table className="table table-zebra border ">
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
            <td className="gap-2 flex">
                <button className="btn btn-sm common-btn text-[12px]" disabled={user.role === 'admin' && true}   onClick={()=>handleMakeAdmin(user._id)}>Make Admin</button>
                <button className="btn btn-sm common-btn text-[12px]" disabled={user.role === 'instructor' && true}  onClick={()=>handleMakeInstructor(user._id)}>Make Instructor</button>
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