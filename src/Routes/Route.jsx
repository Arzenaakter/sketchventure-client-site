import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import AddClasses from "../Pages/Dashboard/Instructors/AddClassses/AddClasses";
import MyClasses from "../Pages/Dashboard/Instructors/MyClasses/MyClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/MangeClasses/ManageClasses";
import Error from "../Pages/Errorpage/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
    {
      path:'/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'/dashboard/manageClass',
          element:<ManageClasses></ManageClasses>
        },
        {
          path:'/dashboard/manageUser',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'addClass',
          element:<AddClasses></AddClasses>
        },
        {
          path:'myClass',
          element:<MyClasses></MyClasses>
        }
      ]

    },
    {
        path: '*',
        element:<Error></Error>
    }
  ]);
  export default router;