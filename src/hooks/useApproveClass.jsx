import { useQuery } from "@tanstack/react-query";


const useApproveClass = () => {


    const {data: Popular =[]} = useQuery({
        queryKey: ['Popular'],
        queryFn: async()=>{
            const res = await fetch('https://summer-camp-server-side-xi.vercel.app/AllClasses');
            return res.json();

        }
    })
    return [Popular]
};

export default useApproveClass;