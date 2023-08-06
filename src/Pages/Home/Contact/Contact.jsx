import { AiOutlineMail,AiFillLinkedin,AiFillGithub ,AiFillFacebook} from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';
// import { GrLocation } from 'react-icons/Gr';

const Contact = () => {
    return (
        <section className="bg-[#2D2D2D] text-[#000] my-10 py-20 relative ">
            <div className="container mx-auto bg-white py-10 flex  justify-evenly  h-[320px] border">
                <div className="absolute w-[30%]  bg-[#ED1C24]  z-10 p-5 left-20 shadow-xl space-y-3">
                    <h4 className="text-center py-2 font-semibold">Contact Information </h4>
                    <p className='flex  items-center gap-2'><AiOutlineMail size={24}/> arzenaakter@gmail.com </p>
                    <p className='flex  items-center gap-2'><BiPhone size={ 24} /> +8801766179470 </p>
                    <p className='flex  items-center gap-2'><BiPhone size={24} /> Bogura, Bangladesh </p>
                    <p className='flex  items-center justify-center gap-4 pt-6'>
                        <AiFillLinkedin size={24} />
                        <AiFillGithub size={24} />
                        <AiFillFacebook size={24} />
                    </p>
                    
                </div>
                <div className=" w-[40%] ml-72   absolute z-10 ">
                    <h4 className=" py-2 font-semibold text-xl mb-2">Contact Us </h4>
                    <form action="https://formspree.io/f/mzbldnbk" method="POST">
                        <div className='space-x-5'>
                            <input type="text" name="firstName" id="" className='border-b-2 p-2 ' placeholder='First Name' />
                            <input type="text" name="lastName" id="" className='border-b-2 p-2 '  placeholder='Last Name'/>
                        </div>
                        <div className='space-x-5 my-5'>
                            <input type="text" name="email" id="" className='border-b-2 p-2 ' placeholder='Email' />
                            <input type="text" name="phone" id="" className='border-b-2 p-2 '  placeholder='Mobile Number'/>
                        </div>
                        <input type="text" name="msg" id="" placeholder='Message' className='border-b-2 w-[86%] p-2 block'  />
                        <input type="submit" value="Send" className='mt-3 common-btn px-6  hover:text-white' />
                    </form>
                </div>
            </div>

            
        </section>
    );
};

export default Contact;