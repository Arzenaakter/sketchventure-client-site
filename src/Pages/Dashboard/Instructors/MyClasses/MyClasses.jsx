import { useEffect } from "react";
import { useContext } from "react";
import { authContext } from "../../../../AuthProvider/AuthProvider";


const MyClasses = () => {
    const {user} = useContext(authContext);
    console.log('user',user);

    useEffect(()=>{
        fetch(`http://localhost:5000/addClasses/${user?.email}`)
        .then(res=> res.json())
        .then(data => console.log('data',data))
    },[user])
    return (
        <div>
            my classes
        </div>
    );
};

export default MyClasses;