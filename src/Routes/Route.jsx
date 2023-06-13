import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import AllClass from "../Pages/AllClass/AllClass";
import AdminFeedBack from "../Pages/Dashboard/Admin/AdminFeedBack";
import AddClasses from "../Pages/Dashboard/Instructors/AddClassses/AddClasses";
import MyClasses from "../Pages/Dashboard/Instructors/MyClasses/MyClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/MangeClasses/ManageClasses";
import EnrolledClasses from "../Pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import MySelectedClass from "../Pages/Dashboard/Student/MySelectedClass/MySelectedClass";
import PaymentHistory from "../Pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import PaymentPage from "../Pages/Dashboard/Student/PaymentPage/PaymentPage";
import Error from "../Pages/Errorpage/Error";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
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
          path:'/instructor',
          element:<Instructors></Instructors>
        },
        {
          path:'/classes',
          element:<AllClass></AllClass>

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
          element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path:'/dashboard/manageUser',
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path:'/dashboard/adminFeedBack/:id',
          element:<AdminFeedBack></AdminFeedBack>
        },
        {
          path:'/dashboard/addClass',
          element:<InstructorRoute><AddClasses></AddClasses></InstructorRoute>
        },
        {
          path:'/dashboard/myClass',
          element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path:'/dashboard/mySelectedClass',
          element:<PrivateRoute><MySelectedClass></MySelectedClass></PrivateRoute>
        },
        {
          path:'/dashboard/enrolledClass',
          element:<PrivateRoute><EnrolledClasses></EnrolledClasses></PrivateRoute>
        },
        {
          path:'/dashboard/paymentPage',
          element:<PrivateRoute><PaymentPage></PaymentPage></PrivateRoute>
        },
        {
          path:'/dashboard/paymentHistory',
          element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        },
      ]

    },
    {
        path: '*',
        element:<Error></Error>
    }
  ]);
  export default router;