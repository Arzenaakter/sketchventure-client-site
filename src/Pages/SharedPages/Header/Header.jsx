import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { authContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const {user, LogOut} = useContext(authContext)


  const handleLogout =()=>{
    LogOut()
    .then(()=>{
      Swal.fire({
        title: 'Logout successful',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    })
    .catch(err =>console.log(err))

  }

    const navLinks = <>
            <li>
               <NavLink to ='/'>Home</NavLink>
            </li>
            <li>
               <NavLink to ='/instructors'>Instructors</NavLink>
            </li>
            <li>
               <NavLink to ='/classes'>Classes</NavLink>
            </li>
           
            {
              user ? 
              <>
               <li>
                   <NavLink to ='/dashboard '>Dashboard </NavLink>
                </li>
                <li>
            <p>
               
            <img src={user?.photoURL} alt="" className="border w-10 h-10 rounded-full" />
            </p>
                </li>
                <li>
                <button onClick={handleLogout} className="btn btn-outline btn-sm text-white text-center ">Log Out</button>
                </li>
              
           </>
              :<>
              <li>
              <p><Link to="/login" className="btn btn-sm bg-[#ED1C24] border-0 text-white hover:text-black">Login</Link></p>
              </li>
              </>
            }

    </>



  return (
    <div className="navbar bg-[#2D2D2D] text-white py-2 ">
        <div className="container mx-auto">
        <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* small device menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2  rounded-box w-52">
           {navLinks}
          </ul>
        </div>
        <Link to ='/' className="text-white italic navName normal-case lg:text-2xl"><span className="text-4xl ">S</span>ketchVenture</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
       
        
      </div>

   

        </div>
      
       
      
    </div>
  );
};

export default Header;
