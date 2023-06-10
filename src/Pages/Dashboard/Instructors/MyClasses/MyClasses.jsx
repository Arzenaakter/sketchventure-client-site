import { useQuery } from "@tanstack/react-query";

import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const MyClasses = () => {
    const {user} = useAuth()
    
    const [axiosSecure] = useAxiosSecure();

    const {  data: Myclasses =[]} = useQuery({
        queryKey : ['classes' , user?.email],
      
        queryFn: async()=>{
            const res = await axiosSecure(`/addClasses/${user?.email}`)
            console.log('res from axios', res);
            return res.data;
        },
    })
    



console.log('Myclasses',Myclasses );

    
    return (
        <div>
            my classes 
        </div>
    );
};

export default MyClasses;