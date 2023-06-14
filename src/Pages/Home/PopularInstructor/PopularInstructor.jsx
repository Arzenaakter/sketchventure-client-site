
import { Fade, Slide } from "react-awesome-reveal";
import useApproveClass from "../../../hooks/useApproveClass";
const PopularInstructor = () => {
    const [Popular] = useApproveClass()
   
    const populars = Popular.sort((a, b) => b.enrolledStudent - a.enrolledStudent);
     const slicedArray = populars.slice(0, 6);
    
    return (
        <div className="my-20 px-10 lg:px-0 ">
             <Slide>
                  <h3 className="text-3xl  font-bold text-center mb-5 ">Our Popular Instructor</h3>
                </Slide>
                <Fade delay={1e3} cascade damping={1e-1}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        slicedArray.map(popularIntructor=><div key={popularIntructor._id} className="card w-ful bg-base-100 shadow-xl image-full">
                        <figure><img src={popularIntructor.classImage} alt="Shoes" /></figure>
                        <div className="card-body">
                          <h2 className="card-title">Name: {popularIntructor.instructorName}</h2>
                          <p>Email: {popularIntructor.instructorEmail}</p>
                          <p>Class Name: {popularIntructor.className}</p>
                          <p>Price: ${popularIntructor.price}</p>
                          
                        </div>
                      </div>
                     
                        )
                    }

                </div>
                </Fade>
            
        </div>
    );
};

export default PopularInstructor;