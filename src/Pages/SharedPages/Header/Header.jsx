import { Link, NavLink } from "react-router-dom";

import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
// import DarkMode from "./DarkMode";

const Header = () => {
  const { user, LogOut } = useAuth();

  const handleLogout = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          title: "Logout successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((err) => console.log(err));
  };

  const navLinks = (
    <>
      <li className="font-medium text-base">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink to="/instructor">Instructors</NavLink>
      </li>
      <li className="font-medium text-base">
        <NavLink to="/classes">Classes</NavLink>
      </li>

      {user && (
        <li className="font-medium text-base">
          <NavLink to="/dashboard">Dashboard </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar  border-b bg-white z-50 fixed py-2  mx-auto">
      <div className="container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
              className="menu menu-sm dropdown-content mt-3 p-2 z-10 bg-[#2D2D2D] text-white rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-white italic navName normal-case lg:text-2xl"
          >
            <span className="text-4xl ">S</span>ketchVenture
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end   flex items-center gap-4 ">
          <div>
            {user ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded text-white font-medium text-sm 
                 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] 
                  hover:from-[var(--secondary)] hover:to-[var(--primary)] transition-all duration-300 "
                >
                  Log Out
                </button>
                <div>
                  <img
                    title={user?.displayName}
                    src={user?.photoURL}
                    alt=""
                    className="border w-10 h-10 rounded-full hidden md:block "
                  />
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="  px-4 py-2 rounded text-white font-medium text-sm 
                 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] 
                  hover:from-[var(--secondary)] hover:to-[var(--primary)] transition-all duration-300"
              >
                Login
              </Link>
            )}
          </div>
          {/* <div className=" flex-shrink">
            <DarkMode></DarkMode>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
