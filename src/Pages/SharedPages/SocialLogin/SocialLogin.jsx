import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../../AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    const {googleSignIn, userProfile} = useContext(authContext)

    const  location = useLocation()
    const navigate = useNavigate()
  
    const from = location.state?.from?.pathname || '/'


    
    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            

         const saveUser = {name: loggedUser.displayName, email:loggedUser.email, role: 'student'};
          fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(saveUser)
          })
          .then(res =>res.json())
          .then(() =>{
            navigate(from,{replace: true})
          })


            userProfile(loggedUser.displayName,loggedUser.photoURL)
        } )
        .catch(err =>{
           console.log(err);
        })
    }

    return (
        <button onClick={handleGoogleLogin} className="btn btn-outline  hover:btn-outline btn-dark"><FcGoogle size={24}/>Login with Google</button>
    );
};

export default SocialLogin;