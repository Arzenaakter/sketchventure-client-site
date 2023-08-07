import useApproveClass from "../../../hooks/useApproveClass";
import { motion } from "framer-motion";

const PopularClass = () => {
  const [Popular] = useApproveClass();

  const populars = Popular.sort(
    (a, b) => b.enrolledStudent - a.enrolledStudent
  );
  const slicedArray = populars.slice(0, 6);

  return (
    <section>
      <div className="my-10 px-10 lg:px-0 container mx-auto">
        <motion.h3
          className="text-3xl  font-bold text-center mb-5 mt-10 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}>
          Popular Classes
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slicedArray.map((popularClass) => (
            <motion.div
              whileHover={{ scale: 0.8 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              key={popularClass._id}
              className="card w-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={popularClass.classImage}
                  alt="classImage"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body  ">
                <h2 className="card-title">
                  Class Name: {popularClass.className}
                </h2>
                <p>Instructor Name: {popularClass.instructorName}</p>
                <p>Price: $ {popularClass.price}</p>
                <p>Enrolled Student: {popularClass.enrolledStudent}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClass;
