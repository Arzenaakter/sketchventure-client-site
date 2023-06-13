import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
    const {data: paymentHistory =[]} = useQuery({
        queryKey: ['paymentHistory'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/payment-history`);
            return res.json();

        }
    })
    return [paymentHistory]
};

export default usePayment;