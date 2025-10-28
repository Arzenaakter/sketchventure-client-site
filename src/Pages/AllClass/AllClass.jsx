import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AllClass = () => {
  const [AllClasses, seAllClasses] = useState([]);

  const { user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  //  const from = location.state?.from?.pathname || '/' ;

  useEffect(() => {
    fetch("https://summer-camp-server-side-xi.vercel.app/AllClasses")
      .then((res) => res.json())
      .then((data) => seAllClasses(data));
  }, []);

  //  get all users
  const { data: userRole = [] } = useQuery({
    queryKey: ["userRole", user?.role],
    queryFn: async () => {
      const res = await fetch(
        `https://summer-camp-server-side-xi.vercel.app/Allusers/${user?.email}`
      );
      return res.json();
    },
  });

  const handleSelect = (classcard) => {
    // console.log(typeof(classcard.availableSeats));

    if (user && user.email) {
      const selectedCourse = {
        email: user.email,
        std_id: classcard._id,
        className: classcard.className,
        classImage: classcard.classImage,
        InstructorName: classcard.instructorName,
        InstructorEmail: classcard.instructorEmail,
        price: classcard.price,
        availableSeats: classcard.availableSeats,
      };

      fetch("https://summer-camp-server-side-xi.vercel.app/selectedClasses", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedCourse),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Course selected",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire("Please log in before selecting the course");
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <section>
      <div className="pb-20 pt-36 px-10 lg:px-20 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {AllClasses.map((classcard) => (
            <div
              key={classcard._id}
              className={
                classcard.availableSeats == 0
                  ? "card card-compact w-full bg-red-500 shadow-xl "
                  : "card card-compact w-full bg-base-100 shadow-xl"
              }
            >
              <figure>
                <img
                  src={classcard.classImage}
                  className="h-48 w-full"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2
                  //   className="card-title text-[var(--primary)]"
                  className={
                    classcard.availableSeats == 0
                      ? "card-title "
                      : "card-title text-[var(--primary)]"
                  }
                >
                  {classcard.className}
                </h2>
                <h2 className="card-title">
                  Instructor: {classcard.instructorName}
                </h2>
                <p>Email: {classcard.instructorEmail}</p>
                <p>Price: ${classcard.price}</p>
                <p>Available Seats: {classcard.availableSeats}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleSelect(classcard)}
                    disabled={
                      classcard.availableSeats == 0 ||
                      userRole?.at(0)?.role === "admin" ||
                      userRole?.at(0)?.role === "instructor"
                    }
                    className={`px-4 py-1 rounded font-medium text-sm transition-all duration-300
    ${
      classcard.availableSeats == 0 ||
      userRole?.at(0)?.role === "admin" ||
      userRole?.at(0)?.role === "instructor"
        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
        : "text-white bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--secondary)] hover:to-[var(--primary)]"
    }`}
                  >
                    {classcard.availableSeats == 0 ? "Full" : "Select"}
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

export default AllClass;
