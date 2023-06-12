
import { useForm } from "react-hook-form";
import {  useParams } from "react-router-dom";
import Swal from "sweetalert2";


const AdminFeedBack = () => {
    const id = useParams();
    const { register,handleSubmit,reset  } = useForm();
     
   
   
    const onSubmit = (data) => {

        console.log(id.id);
        fetch(`http://localhost:5000/addClasses/feedback/${id.id}`, {
            method: "PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
          })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                reset()
              if (data.modifiedCount) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Feedback is submitted ",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });


       

    }


    return (
        
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card  w-full shadow-2xl bg-base-100">
            <form className="card-body w-96" onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Denied reason</span>
                </label>
                <input
                  type="text"
                  name="feedback"
                  className="input input-bordered py-10"
                  {...register("feedback", { required: true })}
                />
                
              </div>


             

              <div className="form-control mt-6">
              <input
                 className="btn common-btn"
                  type="submit"
                  value="Submit"
                />
               
              </div>
              
            </form>
          </div>
        </div>
      </div>
       
    );
};

export default AdminFeedBack;