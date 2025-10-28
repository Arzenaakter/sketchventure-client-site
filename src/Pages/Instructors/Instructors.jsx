// import { useEffect } from "react";
// import { useState } from "react";

// const Instructors = () => {
//   const [instructors, setInstructor] = useState([]);

//   useEffect(() => {
//     fetch("https://summer-camp-server-side-xi.vercel.app/users/instructors")
//       .then((res) => res.json())
//       .then((data) => setInstructor(data));
//   }, []);

//   return (
//     <section>
//       <div className="pb-20 pt-36 px-10 lg:px-0 container mx-auto">
//         <h1 className="font-bold text-center text-3xl  mb-5">
//           Total Instructor : {instructors.length}
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
//           {instructors.map((ins) => (
//             <div key={ins._id} className="card w-full bg-base-100 shadow-xl">
//               <figure>
//                 <img src={ins.img} alt="Shoes" />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title">{ins.name}</h2>
//                 <p>Email: {ins.email}</p>
//                 <p>Role: {ins.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Instructors;

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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-3xl font-bold text-[var(--primary)] mt-5">
            Popular Instructors
          </h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
            Passionate educators who inspire creativity and growth.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {slicedArray.map((user, index) => (
            <div key={user._id} className="group relative">
              {/* Card */}
              <div className="relative h-full bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100">
                {/* Unique Top Wave Cutout (SVG) */}
                <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
                  <svg
                    className="absolute bottom-0 w-full h-12 text-[var(--primary)] opacity-10"
                    preserveAspectRatio="none"
                    viewBox="0 0 1200 120"
                    fill="currentColor"
                  >
                    <path d="M0,0 C300,80 900,80 1200,0 L1200,120 L0,120 Z" />
                  </svg>
                </div>

                {/* Floating Avatar with Ring */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className="w-24 h-24 rounded-full shadow-xl border-4 border-white overflow-hidden ring-4 ring-[var(--primary)] ring-opacity-20 bg-white p-1"
                    style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                  >
                    <img
                      src={user.img}
                      alt={user.name}
                      className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Top 3 Badge */}
                {index < 3 && (
                  <div className="absolute top-2 right-2 w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg z-30 animate-pulse">
                    #{index + 1}
                  </div>
                )}

                {/* Card Body */}
                <div className="pt-20 pb-6 px-6 text-center">
                  <h4 className="text-xl font-bold text-gray-800 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {user.name}
                  </h4>
                  <p className="text-sm font-semibold text-[var(--primary)] mt-1 capitalize">
                    {user.role}
                  </p>

                  {/* Enrolled Students Badge */}
                  {user.enrolledStudent > 0 && (
                    <div className="inline-flex items-center gap-1.5 mt-3 px-4 py-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/80 text-white text-xs font-bold rounded-full shadow-sm">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                      </svg>
                      {user.enrolledStudent} Students
                    </div>
                  )}

                  <p className="mt-4 text-xs text-gray-500 break-all font-medium">
                    {user.email}
                  </p>
                </div>

                {/* Unique Bottom Accent (Diagonal Line) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform origin-left skew-x-12"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructor;
