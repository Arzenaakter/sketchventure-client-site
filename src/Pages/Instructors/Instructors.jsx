import { useEffect } from "react";
import { useState } from "react";


const Instructors = () => {
    const [instructors, setInstructor] = useState([]);

    useEffect(()=>{
        fetch('https://summer-camp-server-side-xi.vercel.app/users/instructors')
        .then(res => res.json())
        .then(data =>setInstructor(data))
    },[])




    return (
        <section>
        <div className="my-20 px-10 lg:px-0 container mx-auto">
            <h1 className="font-bold text-center text-4xl mb-5">Total Instructor : {instructors.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
                {
                    instructors.map(ins =><div key={ins._id} className="card w-full bg-base-100 shadow-xl">
                    <figure><img src={ins.img} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{ins.name}</h2>
                      <p>Email: {ins.email}</p>
                      <p>Role: {ins.role}</p>
                     
                    </div>
                  </div>)
                }
            </div>
            
        </div></section>
    );
};

export default Instructors;