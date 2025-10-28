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
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h3
          className="text-3xl  font-bold text-center  mt-10 text-[var(--primary)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Popular Classes
        </motion.h3>
        <motion.p
          className=" text-center mt-3 mb-10 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Learn color, typography, and layout to create stunning, professional
          designs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {slicedArray.map((popularClass) => (
            <div
              key={popularClass._id}
              className="relative w-full 
                 rounded-md shadow-xl overflow-hidden group"
            >
              {/* Top Image Section */}
              <div className="relative h-52 overflow-hidden ">
                <img
                  src={popularClass.classImage}
                  alt={popularClass.className}
                  className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Top-left tag */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                  Featured
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-700 mb-1 leading-snug ">
                  {popularClass.className}
                </h2>

                {/* Instructor */}
                <p className="text-sm text-gray-600 mb-1">
                  Instructor:{" "}
                  <span className=" ">{popularClass.instructorName}</span>
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm text-gray-600">Enrolled Students</p>
                    <p className="text-lg font-semibold text-gray-700 bg-[#f3750e]/20 p-1 rounded-full w-10 h-10 text-center">
                      {popularClass.enrolledStudent}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-600">Price</p>
                    <p className="text-lg font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                      ${popularClass.price}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className=" flex justify-end">
                  <button
                    className=" px-5 py-1 text-sm font-semibold  rounded-full bg-white
                     border border-[var(--primary)] text-[var(--primary)]
                     hover:opacity-90 transition-opacity duration-20 hover:bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:text-white"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClass;
