import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const usePayment = () => {
    const {user} = useAuth()

    const {data: paymentHistory =[]} = useQuery({
        queryKey: ['paymentHistory',user?.email],
        queryFn: async()=>{
            const res = await fetch(`https://summer-camp-server-side-xi.vercel.app/payment-history/${user?.email}`);
            return res.json();

        }
    })
    return [paymentHistory]
};

export default usePayment;