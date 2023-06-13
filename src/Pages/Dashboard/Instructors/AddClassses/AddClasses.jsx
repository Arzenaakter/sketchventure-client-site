import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { authContext } from "../../../../AuthProvider/AuthProvider";

const AddClasses = () => {
  const { user } = useContext(authContext);
  console.log(user);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // TODO

    const addedClassInfo = {
      ...data,
      instructorName: user.displayName,
      instructorEmail: user.email,
      status: "pending",
      feedback : ' ',
      enrolledStudent: 0,
    };
    console.log(addedClassInfo);


    fetch('http://localhost:5000/addClasses',{
      method:'POST',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(addedClassInfo)
    })
    .then(res =>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Add class successfully',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })







    reset();
  };

  return (
    <div className="">
      <h2 className="text-center text-3xl mt-4 font-bold">Add a Class</h2>

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="card  w-full shadow-2xl bg-base-100">
            <form
              className="card-body w-full "
              onSubmit={handleSubmit(onSubmit)}>
              {/*  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                {/* instructor email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  id="instructorEmail"
                  className="input input-bordered relative"
                  value={user.email}
                  readOnly
                />
              </div>

              {/* instructor name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  id="instructorName"
                  className="input input-bordered relative"
                  value={user.displayName}
                  readOnly
                />
              </div>
              {/* Class Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  id="className"
                  className="input input-bordered relative"
                  {...register("className", { required: true })}
                />
              </div>
              {/* Class Image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Image URL</span>
                </label>
                <input
                  type="text"
                  id="classImage"
                  className="input input-bordered relative"
                  {...register("classImage", { required: true })}
                />
              </div>
              {/* Available seats */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available seats</span>
                </label>
                <input
                  type="number"
                  id="availableSeats"
                  className="input input-bordered relative"
                  {...register("availableSeats", { required: true, min: 0 })}
                />
              </div>
              {/* Price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  id="price"
                  className="input input-bordered relative"
                  {...register("price", { required: true, min: 0 })}
                />
              </div>

              </div>
              {/*  */}

              {/* submit */}
              <div className="form-control mt-6 ">
                <input
                  className="btn common-btn btn-block"
                  type="submit"
                  value="Add Class"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClasses;
