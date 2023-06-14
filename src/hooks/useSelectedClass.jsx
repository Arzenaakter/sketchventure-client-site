import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useSelectedClass = () => {


    const {user} = useAuth()


    const {data: selectedClass =[],refetch} = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async()=>{
            const res = await fetch(`https://summer-camp-server-side-xi.vercel.app/mySelectedClass?email=${user?.email}`);
     
            return res.json();

        }
    })
    return [selectedClass,refetch]
};

export default useSelectedClass;