import { motion } from "framer-motion";

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

  return (
    <section>
      <div className="my-20 px-10 lg:px-0 container mx-auto">
        <motion.h3
          className="text-3xl  font-bold text-center mb-5 mt-10 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}>
          UpComing Classes
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {upComingClasses.map((classes, index) => (
            <motion.div
              whileHover={{ scale: 0.8 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              key={index}
              className="flex-col   ">
              <img src={classes.classImage} alt="" className="h-3/4 w-full" />
              <div className="border px-2 mt-2 border-black hover:bg-slate-600 hover:text-white py-4">
                <h1 className="font-semibold ">
                  Class Name: {classes.className}
                </h1>
                <p>Price: ${classes.Price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
