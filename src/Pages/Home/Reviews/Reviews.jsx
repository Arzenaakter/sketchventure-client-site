import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section className="  py-8">
      <div className="my-10 px-10 lg:px-0 container mx-auto  ">
        <motion.h3
          className="text-3xl  font-bold text-center mb-10 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}>
          Client Reviews
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
          {/* 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=" mx-auto space-y-3  flex flex-col justify-center items-center">
            <div className="hexagon-wrapper ">
              <img
                className="hexagon-img"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
            </div>
            <h3 className="text-center font-bold">Michael</h3>
            <p className="text-center text-[12px]">
              An unforgettable summer filled with creativity and inspiration at
              the art school camp!
            </p>
          </motion.div>
          {/* 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
            className=" mx-auto space-y-3  flex flex-col justify-center items-center">
            <div className="hexagon-wrapper ">
              <img
                className="hexagon-img"
                src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
            </div>
            <h3 className="text-center font-bold">Alexander</h3>
            <p className="text-center text-[12px]">
              The art camp was a blast - I discovered my love for painting!
            </p>
          </motion.div>

          {/* 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            className=" mx-auto space-y-3 flex flex-col justify-center items-center">
            <div className="hexagon-wrapper ">
              <img
                className="hexagon-img"
                src="https://img.freepik.com/free-photo/handsome-smiling-man-looking-with-disbelief_176420-19591.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
            </div>
            <h3 className="text-center font-bold">Benjamin</h3>
            <p className="text-center text-[12px]">
              A fantastic experience that ignited my passion for sculpting!
            </p>
          </motion.div>

          {/* 4 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8 }}
            className=" mx-auto space-y-3 flex flex-col justify-center items-center">
            <div className="hexagon-wrapper ">
              <img
                className="hexagon-img"
                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
            </div>
            <h3 className="text-center font-bold">William</h3>
            <p className="text-center text-[12px]">
              The art school camp exceeded my expectations; I learned so much
              and had a ton of fun
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
