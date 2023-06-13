import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { RiFileHistoryFill } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
 
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="">
      <div className="drawer lg:drawer-open  ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ">
          {/* Page content here */}

          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn mt-2 common-btn drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#2D2D2D] text-white">
            {/* Sidebar content here */}


         
            {/* admin dashboard start*/}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/admin">
                    <FaHome size={20} />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageClass">
                    <SiGoogleclassroom size={20} />
                    Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUser">
                    <FaUsers size={20} />
                    Manage Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink to="/dashboard/instructor">
                    <FaHome size={20} />
                    Instructor Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addClass">
                    <SiGoogleclassroom size={20} />
                    Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClass">
                    <FaUsers size={20} />
                    My Class
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/student">
                    <FaHome size={20} />
                    Student Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mySelectedClass">
                    <SiGoogleclassroom size={20} />
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledClass">
                    <FaUsers size={20} /> My Enrolled Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <RiFileHistoryFill size={20} /> Payment History
                  </NavLink>
                </li>
              </>
            )}

            <hr className="my-4" />

            <li>
              <NavLink to="/">
                <FaHome size={20} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructor">
                <FaUsers size={20} />
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                {" "}
                <SiGoogleclassroom size={20} />
                Classes
              </NavLink>
            </li>
            {/* admin dashboard end*/}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
