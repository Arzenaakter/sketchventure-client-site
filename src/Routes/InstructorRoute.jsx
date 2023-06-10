import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from '../hooks/useAuth';

const InstructorRoute = ({children}) => {
    const {user,loading }=  useAuth()
    const [isInstructor,isInstructorLoading] = useAdmin()

    const location = useLocation()

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }


    if(user && isInstructor){
        return children;
    }



    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );
};

export default InstructorRoute;