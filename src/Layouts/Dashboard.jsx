import { Link } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open  ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">



    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn mt-2 common-btn drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-[#2D2D2D] text-white">


      {/* Sidebar content here */}
            <li>
                    <Link to='/dashboard'>Admin Home</Link>
            </li>
            <li>
                    <Link to='/dashboard'>Manage Classes</Link>
            </li>
            <li>
                    <Link to='/dashboard'>Manage Users</Link>
            </li>
            <div className="divider"></div>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/'>Instructors</Link>
            </li>
            <li>
                <Link to='/'>Classes</Link>
            </li>
   



    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;