import { useQuery } from "@tanstack/react-query";

import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const MyClasses = () => {
    const {user} = useAuth()
    
    const [axiosSecure] = useAxiosSecure();

    const {  data: Myclasses =[]} = useQuery({
        queryKey : ['classes' , user?.email],
      
        queryFn: async()=>{
            const res = await axiosSecure.get(`/addClasses/${user?.email}`)
            // console.log('res from axios', res);
            return res.data;
        },
    })
    

    // update 
    // const handleUpdate = id =>{
    // //    TODO
    //     fetch(`http://localhost:5000/addClasses/myclass/${id}`,{
    //         method:"PUT",
    //         headers:{
    //             'content-type' : 'application/json'
    //         },
    //         body:JSON.stringify()
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //     })

    // }


    
    return (
        <div>
          <h1 className="txt-4xl font-bold text-center mb-4">My Classes : {Myclasses.length}</h1>
          <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Status</th>
        <th>total Enrolled Student </th>
        <th>Feedback</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        Myclasses.map( (classes,index) => <tr key={classes._id}>
            <th>{index + 1}</th>
            <td>{classes.className}</td>
            <td>{classes.status}</td>
            <td>{classes.enrolledStudent}</td>
            <td>{classes.feedback}</td>
            <td>
                <button className="btn btn-sm common-btn" >Update</button>
            </td>
         
          
          </tr>)

      }
     
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyClasses;