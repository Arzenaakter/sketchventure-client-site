
import { useEffect } from "react";


const ManageClasses = () => {

 

    useEffect(()=>{
        fetch('http://localhost:5000/addClasses')
        .then(res=> res.json())
        .then(data => console.log(data))
    },[])



    return (
        <div>
            manage classes
        </div>
    );
};

export default ManageClasses;