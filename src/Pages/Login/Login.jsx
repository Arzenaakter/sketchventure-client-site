import { useState } from "react";
import { FiEye,FiEyeOff } from 'react-icons/fi';
import {FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const {LogIn,googleSignIn,userProfile} = useContext(authContext);
    const { register,handleSubmit, formState: { errors },  reset,  } = useForm();

    const [show, setShow] = useState(false);
    // const [error,setError] =useState([]);


    const  location = useLocation()
    const navigate = useNavigate()
  
    const from = location.state?.from?.pathname || '/'



    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from,{replace: true})
            userProfile(loggedUser.displayName,loggedUser.photoURL)
        } )
        .catch(err =>{
            alert(err)
        })
    }




const onSubmit = (data) => {
  LogIn(data.email,data.password)
    .then((result) => {
        const loggedUser = result.user;

        Swal.fire({
          title: 'LogIn successful',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        navigate(from,{replace: true})
        reset()


        console.log(loggedUser);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
        
      });


}





    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card  w-full shadow-2xl bg-base-100">
            <form className="card-body w-96" onSubmit={handleSubmit(onSubmit)}>

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


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input 
          type={show? "text": 'password'}
          name="password"
          placeholder=" password"
          className="input input-bordered relative"
          {...register("password", {
            required: " password is required",
           
          })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

               <p onClick={()=>setShow(!show)} className='mt-12 ms-72 z-10 absolute' >
                <small>
                    {
                        show? <span className=" "><FiEyeOff  size={24}/></span>: <span className=""><FiEye size={24}/></span>
                    }
                </small>

               </p>

               
              </div>
              <div className="form-control mt-6">
              <input
                 className="btn bg-[#ED1C24] border-0 text-white hover:text-black"
                  type="submit"
                  value="Login"
                />
                <label className="label">
                <p className="text-center">
              <small>
                New Here ?{" "}
                <Link to="/signup" className="text-blue-500">
                  Create an account
                </Link>
              </small>
            </p>
                </label>
              </div>
              <div className="divider">OR</div>
              <div className="form-control mt-2">
                <button onClick={handleGoogleLogin} className="btn btn-outline  hover:btn-outline btn-dark"><FcGoogle size={24}/>LogIn with Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;