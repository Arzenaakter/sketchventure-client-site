import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";


const MySelectedClass = () => {
    const {user} = useAuth()
    console.log('user', user);



    const {data: selectedClass =[]} = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/mySelectedClass?email=${user?.email}`);
     
            return res.json();

        }
    })

console.log(selectedClass);


    return (
        <div>
            
        </div>
    );
};

export default MySelectedClass;