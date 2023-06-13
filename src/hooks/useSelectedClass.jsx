import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectedClass = () => {


    const {user} = useAuth()


    const {data: selectedClass =[],refetch} = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/mySelectedClass?email=${user?.email}`);
     
            return res.json();

        }
    })
    return [selectedClass,refetch]
};

export default useSelectedClass;