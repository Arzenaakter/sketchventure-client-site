import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PopularInstructor = () => {
  const [instructors, setInstructor] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-side-xi.vercel.app/users/instructors")
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);

  const populars = [...instructors].sort(
    (a, b) => (b.enrolledStudent || 0) - (a.enrolledStudent || 0)
  );
  const slicedArray = populars.slice(0, 6);

  return (
    <section className="mb-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <motion.h3
          className="text-3xl  font-bold text-center  mt-10 text-[var(--primary)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Our Popular Instructor
        </motion.h3>
        <motion.p
          className=" text-center mt-3 mb-10 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Meet the creative minds who make learning fun and inspire every child
          to imagine more.
        </motion.p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {slicedArray.map((user, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-orange-100/20 to-orange-200/20 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4 border border-[var(--primary)]">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h4 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h4>

              {/* Enrolled Students */}
              {user.enrolledStudent > 0 && (
                <p className="mt-3 text-xs text-gray-900 font-medium">
                  {user.enrolledStudent} Students Enrolled
                </p>
              )}

              {/* Email */}
              <p className="mt-2 text-xs text-gray-400 break-all">
                {user.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructor;
