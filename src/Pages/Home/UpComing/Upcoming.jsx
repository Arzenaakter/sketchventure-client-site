import { motion } from "framer-motion";
import { useRef } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Upcoming = () => {
  const upComingClasses = [
    {
      className: "Painting Workshop",
      classImage:
        "https://t4.ftcdn.net/jpg/03/64/58/49/240_F_364584967_SpqDE4XehtI1xL0AKs3I46pkSmq6wwZE.jpg",
      Price: 50,
    },
    {
      className: "Sculpture Making",
      classImage:
        "https://img.freepik.com/free-photo/side-view-woman-clay-sculpting_23-2149730894.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=ais",
      Price: 60,
    },
    {
      className: "Pottery Class",
      classImage:
        "https://img.freepik.com/premium-photo/pottery-class-group-workshop-happy-woman-design-sculpture-mold-clay-manufacturing-art-product-diversity-ceramic-retail-store-startup-small-business-owner-artist-studio-people-molding_590464-136225.jpg?size=626&ext=jpg&ga=GA1.1.1435761111.1680237800&semt=ais",
      Price: 55,
    },
    {
      className: "Drawing Techniques",
      classImage:
        "https://img.freepik.com/free-photo/high-angle-illustrator-drawing-ipad_23-2150172075.jpg?size=626&ext=jpg&ga=GA1.1.1435761111.1680237800&semt=ais",
      Price: 45,
    },
    {
      className: "Mixed Media Art",
      classImage:
        "https://img.freepik.com/free-photo/vintage-collage-with-pink-buildings_23-2150169197.jpg?size=626&ext=jpg&ga=GA1.1.1435761111.1680237800&semt=ais",
      Price: 70,
    },
    {
      className: "Watercolor Painting",
      classImage:
        "https://img.freepik.com/free-photo/abstract-acrylic-effect-variety-colourful-shapes_23-2148315543.jpg?size=626&ext=jpg&ga=GA1.1.1435761111.1680237800&semt=ais",
      Price: 65,
    },
  ];

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };
  return (
    <section>
      <div className="my-20 ">
        <motion.h3
          className="text-3xl  font-bold text-center  mt-10 text-[var(--primary)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          UpComing Classes
        </motion.h3>
        <motion.p
          className=" text-center mt-3 mb-10 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Discover what’s coming next and join our upcoming creative
          experiences.
        </motion.p>

        <div className="relative max-w-6xl mx-auto">
          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white text-[var(--primary)] rounded-full shadow-md hover:bg-gray-100"
          >
            <GoArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white text-[var(--primary)] rounded-full shadow-md hover:bg-gray-100"
          >
            <GoArrowRight size={20} />
          </button>

          {/* Cards Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 "
          >
            {upComingClasses.map((classes, index) => (
              <div
                key={index}
                className="  min-w-[373px]  bg-white rounded-lg shadow border border-[var(--primary)]"
              >
                <img
                  src={classes.classImage}
                  alt=""
                  className="h-3/4 w-full rounded-t-md"
                />
                <div className=" px-2 mt-2   py-4">
                  <h1 className="font-semibold text-[var(--primary)] ">
                    {classes.className}
                  </h1>
                  <p>Price: ${classes.Price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
