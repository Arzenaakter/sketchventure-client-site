import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-[#2D2D2D] text-[#000]  py-20 relative lg:px-0 px-10 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto bg-white md:py-10 flex md:flex-row flex-col gap-20 md:h-[320px] h-auto">
        <div className="  bg-[#8a1014]   z-10 md:w-[40%] w-[100%] p-5 md:-ms-16 shadow-xl space-y-3">
          <h4 className="text-center py-2 font-semibold">
            Contact Information{" "}
          </h4>
          <p className="flex  items-center gap-2">
            <AiOutlineMail size={24} /> arzenaakter@gmail.com{" "}
          </p>
          <p className="flex  items-center gap-2">
            <BiPhone size={24} /> +8801766179470{" "}
          </p>
          <p className="flex  items-center gap-2">
            <CiLocationOn size={24} /> Bogura, Bangladesh{" "}
          </p>
          <p className="flex  items-center justify-center gap-4 pt-6">
            <AiFillLinkedin size={24} />
            <AiFillGithub size={24} />
            <AiFillFacebook size={24} />
          </p>
        </div>
        <div className="   md:w-[50%] w-[100%]   z-10 ">
          <h4 className=" py-2 font-semibold text-xl mb-2 text-center md:text-start ">
            Contact Us{" "}
          </h4>
          <form
            action="https://formspree.io/f/mzbldnbk"
            method="POST"
            className="text-center md:text-start py-3 md:py-0">
            <div className="md:space-x-5  flex-col md:flex-row">
              <input
                type="text"
                name="firstName"
                id=""
                className=" p-2 bg-[#2D2D2D] "
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                id=""
                className="bg-[#2D2D2D] p-2 my-2 md:my-0 "
                placeholder="Last Name"
              />
            </div>
            <div className="md:space-x-5 flex-col md:flex-row md:my-5">
              <input
                type="text"
                name="email"
                id=""
                className="bg-[#2D2D2D] p-2 my-2 md:my-0 "
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                id=""
                className="bg-[#2D2D2D] p-2 "
                placeholder="Mobile Number"
              />
            </div>
            <input
              type="text"
              name="msg"
              id=""
              placeholder="Message"
              className="bg-[#2D2D2D] md:w-[82%] p-2 block my-2 md:my-0 mx-auto md:mx-0"
            />
            <input
              type="submit"
              value="Send"
              className="mt-3 common-btn px-6  hover:text-white"
            />
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
