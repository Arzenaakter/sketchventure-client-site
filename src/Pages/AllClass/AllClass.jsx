
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
// import useAxiosSecure from "../../hooks/useAxiosSecure";



const AllClass = () => {
const [AllClasses , seAllClasses] = useState([])

const {user} = useAuth();
// const [axiosSecure] = useAxiosSecure();
const navigate = useNavigate();
const  location = useLocation();
//  const from = location.state?.from?.pathname || '/' ;

    useEffect(() => { 

        // axiosSecure.get('/AllClasses')
        // .then(res =>{
        //     seAllClasses(res.data);
        // })

        fetch('http://localhost:5000/AllClasses')
        .then(res => res.json())
        .then(data =>seAllClasses(data))
     }, [])
  
    //  get all users  
    const {data: userRole=[]} = useQuery({
        queryKey: ['userRole',user?.role],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/Allusers/${user?.email}`);
            return res.json();

        }
      

    })


     const handleSelect = classcard =>{
       

        if(user && user.email){

            const selectedCourse = {email:user.email,std_id: classcard._id,className:classcard.className, classImage:classcard.classImage, InstructorName:classcard.instructorName, InstructorEmail:classcard.instructorEmail,price:classcard.price, seats: classcard.availableSeats};

            fetch('http://localhost:5000/selectedClasses',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(selectedCourse)
            })
            .then(res=>res.json())
            .then(data =>{
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Course selected',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire('Please log in before selecting the course');
            navigate('/login', {state: {from:location}});
            
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
                      
                      <button
                  onClick={() => handleSelect(classcard)}
                  className="btn common-btn btn-sm"
                  disabled={classcard.availableSeats == 0 || userRole?.at(0)?.role === 'admin' || userRole?.at(0)?.role === 'instructor' }
                >
                                Select</button>

                      
                      </div>
                    </div>
                  </div>)
                }
            </div>
            
        </div>
    );
};

export default AllClass;