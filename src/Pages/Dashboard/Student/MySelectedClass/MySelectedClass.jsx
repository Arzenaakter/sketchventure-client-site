
import { FaTrashAlt } from 'react-icons/fa';
import { MdPayments } from 'react-icons/md';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useSelectedClass from '../../../../hooks/useSelectedClass';


const MySelectedClass = () => {

  const [selectedClass,refetch] = useSelectedClass()
    

const handleDelete = id =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
             fetch(`http://localhost:5000/mySelectedClass/${id}`,{
                 method:"DELETE"
             })
              .then(res=>res.json())
             .then(data=>{
             if(data.deletedCount > 0){
                    refetch();
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
         
        }
      })
   
}


    return (
        <div>
            <h1 className="text-4xl mb-5 font-bold text-center">Selected Course: {selectedClass.length}</h1>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Course Name</th>
        <th>Instructor Name</th>
        <th>Course price</th>
        <th>Pay</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {selectedClass.map ((selected,index) =><tr key={selected._id}>
        <th>{index + 1}</th>
        <td>{selected.className}</td>
        <td>{selected.InstructorName}</td>
        <td>$ {selected.price}</td>
 
        <td>
            {/* <Link to='/dashboard/paymentPage'
            state={{price:selected.price, Class_id:selected._id,ClassName:selected.className,InstructorName: selected.InstructorName}}
            > */}
            <Link to='/dashboard/paymentPage'
            state={{selectedClass:selected}}
            >
              <button><MdPayments  color="green" size={26} />
              
              </button></Link>
        </td>
        <td><button onClick={()=> handleDelete(selected._id)}><FaTrashAlt color="red" size={22} /></button></td>
      
      </tr>)}
      
    
    
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MySelectedClass;