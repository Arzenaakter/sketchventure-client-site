
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../hooks/useAuth";
import SocialLogin from "../SharedPages/SocialLogin/SocialLogin";


const SignUp = () => {
    const { createUser, userProfile,} = useAuth()
    const { register,handleSubmit,watch, formState: { errors },  reset,  } = useForm();

    const password = watch("password");
    // const confirm = watch("confirm");


    const  location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

// form submit
    const onSubmit = (data) => {
      createUser(data.email,data.password)
      .then(result =>{

        const SignUpUser = result.user;
        console.log(SignUpUser);

        // update profile s
        userProfile(data.name,data.photo)
        .then(()=>{

          const saveUser = {name: data.name, email:data.email, img:data.photo, role: 'student'};
          fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(saveUser)
          })
          .then(res =>res.json())
          .then(data =>{
            if(data.insertedId){
              Swal.fire({
                title: "Sign Up successful",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
              reset();
              navigate(from,{replace: true})
              
            }
          })
        })
        .catch(err=>{
          alert(err.message)
          console.log(err)
        })
        
        

      })


      .catch(err =>{
        alert(err.message)
        console.log(err)
      })



     
    }




    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card  w-full shadow-2xl bg-base-100">
            <form className="card-body w-96" onSubmit={handleSubmit(onSubmit)}>
{/* name */}
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Name field is required</span>
                )}
              </div>

              {/* email */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email field is required</span>
                )}
              </div>
              {/* photo */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo url"
                  className="input input-bordered"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <span className="text-red-500">
                    Photo URL field is required
                  </span>
                )}
              </div>
              {/* password */}

               <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            pattern: {
              value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              message: "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character",
            },
          })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>

      {/* confirm password */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <input
          type="password"
          name="confirm"
          placeholder="Confirm password"
          className="input input-bordered"
          {...register("confirm", {
            required: "Confirm password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirm && <p className="text-red-500">{errors.confirm.message}</p>}
      </div>




              <div className="form-control mt-6">

              <input
                  className="btn common-btn"
                  type="submit"
                  value="Sign Up"
                />
                <label className="label">
                <p className="text-center">
              <small>
                Already have an account?
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </small>
            </p>
                </label>

              </div>
              <div className="divider">OR</div>
              <div className="form-control mt-2">
               <SocialLogin></SocialLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;