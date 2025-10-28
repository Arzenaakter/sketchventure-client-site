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
    <section className="   py-20 relative lg:px-0 px-20 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="container mx-auto rounded-md w-[70%]  bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] md:py-10 lg:ps-5 flex md:flex-row flex-col gap-20 md:h-[320px] h-auto"
      >
        <div className="  bg-gray-100  rounded-md  z-10 md:w-[40%] w-[100%] p-5 md:-ms-16 shadow-2xl space-y-3">
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
          <h4 className=" py-2 font-semibold text-xl mb-2 text-center text-white md:text-start ">
            Contact Us{" "}
          </h4>
          <form
            action="https://formspree.io/f/mzbldnbk"
            method="POST"
            className="text-center md:text-start py-3 md:py-0"
          >
            <div className="md:space-x-5  flex-col md:flex-row">
              <input
                type="text"
                name="firstName"
                id=""
                className=" p-2 bg-gray-200"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                id=""
                className="bg-gray-200 p-2 my-2 md:my-0 "
                placeholder="Last Name"
              />
            </div>
            <div className="md:space-x-5 flex-col md:flex-row md:my-5">
              <input
                type="text"
                name="email"
                id=""
                className="bg-gray-200 p-2 my-2 md:my-0 "
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                id=""
                className="bg-gray-200 p-2 "
                placeholder="Mobile Number"
              />
            </div>
            <input
              type="text"
              name="msg"
              id=""
              placeholder="Message"
              className="bg-gray-200 md:w-[90%] p-2 block my-2 md:my-0 mx-auto md:mx-0"
            />
            <input
              type="submit"
              value="Send"
              className=" mt-2 md:w-[90%] px-4 py-2 rounded text-[var(--primary)] font-medium text-sm 
                 bg-gray-200
                  "
            />
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
