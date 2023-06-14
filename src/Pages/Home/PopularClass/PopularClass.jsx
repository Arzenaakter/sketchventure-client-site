import { Fade, Slide } from "react-awesome-reveal";
import useApproveClass from "../../../hooks/useApproveClass";


const PopularClass = () => {
    const [Popular] = useApproveClass()
   
   const populars = Popular.sort((a, b) => b.enrolledStudent - a.enrolledStudent);
    const slicedArray = populars.slice(0, 6);
    




    return (
        <div className="my-20 px-10 lg:px-0">
             <Slide>
                  <h3 className="text-3xl  font-bold text-center mb-5 ">Popular Classes</h3>
                </Slide>
                <Fade  cascade damping={1e-1}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        slicedArray.map(popularClass=><div key={popularClass._id} className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                          <img src={popularClass.classImage} alt="classImage" className="rounded-xl" />
                        </figure>
                        <div className="card-body  ">
                          <h2 className="card-title">Class Name: {popularClass.className}</h2>
                          <p>Instructor Name: {popularClass.instructorName}</p>
                          <p>Price: $ {popularClass.price}</p>
                          <p>Enrolled Student: {popularClass.enrolledStudent}</p>
                          
                        </div>
                      </div>
                        )
                    }

                </div>
                </Fade>
            
        </div>
    );
};

export default PopularClass;