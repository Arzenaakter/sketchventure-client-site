import { useEffect } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";



const AllClass = () => {
const [AllClasses , seAllClasses] = useState([])

const {user} = useAuth();
const navigate = useNavigate()

    useEffect(() => { 
        fetch('http://localhost:5000/AllClasses')
        .then(res => res.json())
        .then(data =>seAllClasses(data))
     }, [])


     const handleSelect = id =>{
        console.log(id);
        if(!user){
            Swal.fire('Please log in before selecting the course')
            navigate('/login');
            
        }
     }
  



    return (
        <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    AllClasses.map(classcard =><div key={classcard._id} className={classcard.availableSeats == 0 ? 'card card-compact w-full bg-red-500 shadow-xl':'card card-compact w-full bg-base-100 shadow-xl'}>
                    <figure><img src={classcard.classImage} className='h-48 w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">Class Name: {classcard.className}</h2> 
                      <h2 className="card-title">Instructor: {classcard.instructorName}</h2> 
                      <p>Email: {classcard.instructorEmail}</p>
                      <p>Price: ${classcard.price}</p>
                      <p>Available Seats: {classcard.availableSeats}</p>
                      <div className="card-actions justify-end">
                        <button onClick={()=>handleSelect(classcard._id)} className="btn common-btn btn-sm" disabled={classcard.availableSeats == 0 && true }>Select</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
            
        </div>
    );
};

export default AllClass;