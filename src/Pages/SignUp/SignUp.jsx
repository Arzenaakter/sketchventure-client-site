import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../AuthProvider/AuthProvider";


const SignUp = () => {
    const {googleSignIn, createUser, userProfile,} = useContext(authContext)


    const [error,setError] =useState([]);

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
            setError(err.message)
        })
    }


    const handleSignIn =e =>{
        e.preventDefault();
        const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email,password,photo,name,confirm);
    setError('')

    if(password !== confirm){
        setError(" Password doesn't matched");
        return;
    }
    if(password.length < 6){
        setError(" Password must be 6 characters");
        return;
    }
   if(!/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/.test(password)){
        setError('Password should be one capital letter, one small letter, one special character and one number')
        return;
    }



        createUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            form.reset()

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Sign up successfully',
                showConfirmButton: false,
                timer: 1500
              })

              navigate(from,{replace: true})
              UpdateProfileUser(result.user,name,photo)
       
      

        })
        .catch(err =>{
            console.log(err);
            setError(err.message)
        })
  

        // user Profile
        const UpdateProfileUser =()=>{
            userProfile(name,photo)
            .then(()=>{
              console.log('user name updated');
            })
            .catch(error =>{
              console.log(error);
      
            })
         
        };
    }





    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card  w-full shadow-2xl bg-base-100">
            <form className="card-body w-96" onSubmit={handleSignIn}>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name"  name='name' required className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email"  name='email' required className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URl"  name='photo' required className="input input-bordered" />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type='password' placeholder="password" name='password' required className="input input-bordered" />
              
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm Password </span>
                </label>
                <input type='password' placeholder=" Confirm Password" name='confirm' required className="input input-bordered" />
              

                <label className="label">
                  <p className="text-red-500">{error}</p>
                </label>
              </div>





              <div className="form-control mt-6">
                <button className="btn bg-[#ED1C24] border-0 text-white hover:text-black" >Sign Up</button>
                <label className="label">
                <p className="text-center">
              <small>
                Already have an account?
                <Link to="/signup" className="text-blue-500">
                  Login
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

export default SignUp;