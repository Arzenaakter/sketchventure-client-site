import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const Choose = () => {
  return (
    <section className="  py-8">
      <div className="mb-10 px-10 lg:px-0 container mx-auto  ">
        <motion.h3
          className="text-3xl  font-bold text-center  mt-10  mb-20 text-[var(--primary)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Why Choose Us
        </motion.h3>

        <div className="flex lg:flex-row flex-col justify-center gap-10 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="w-[100%] lg:w-[50%]"
          >
            {/*  */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex lg:flex-row flex-col justify-center items-center gap-5 mb-4"
            >
              <span>
                <BsArrowRight size={24} />
              </span>
              <div>
                <h3 className="font-bold text-xl lg:text-2xl mb-2">
                  Inspiring Campus
                </h3>
                <p className="tex-[10px] lg:text-sm">
                  Our summer camp takes place in a beautiful and inspiring
                  setting that provides the perfect backdrop for artistic
                  exploration. Surrounded by nature and a supportive community,
                  campers can find endless inspiration for their creative
                  endeavors.
                </p>
              </div>
            </motion.div>
            {/*  */}
            {/*  */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex lg:flex-row flex-col mb-4 justify-center items-center gap-5"
            >
              <span>
                <BsArrowRight size={24} />
              </span>
              <div>
                <h3 className="font-bold text-xl lg:text-2xl mb-2">
                  Focus on Fun and Growth
                </h3>
                <p className="tex-[10px] lg:text-sm">
                  While learning and skill development are essential aspects of
                  our art school, we prioritize fun and personal growth as well.
                  Our campers not only improve their artistic abilities but also
                  build confidence, teamwork skills, and lasting friendships
                  during their unforgettable summer experience.
                </p>
              </div>
            </motion.div>
            {/*  */}
            {/*  */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="flex lg:flex-row flex-col mb-4 justify-center items-center gap-5"
            >
              <span>
                <BsArrowRight size={24} />
              </span>
              <div>
                <h3 className="font-bold text-xl lg:text-2xl mb-2">
                  Expert Faculty
                </h3>
                <p className="tex-[10px] lg:text-sm">
                  Our summer camp art school boasts a team of experienced and
                  passionate art instructors who are not only accomplished
                  artists themselves but also skilled at nurturing young talent.
                  They provide personalized attention, fostering creativity and
                  skill development in each camper.
                </p>
              </div>
            </motion.div>
            {/*  */}
          </motion.div>
          <motion.div
            className="w-[100%] lg:w-[40%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img
              src="https://img.freepik.com/free-vector/curiosity-people-concept-illustration_114360-11034.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
