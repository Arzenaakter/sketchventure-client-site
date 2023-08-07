import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="bg-[#2D2D2D] text-[#fff] py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="my-20 px-10 lg:px-0 container mx-auto">
        <div className="flex md:flex-row flex-col gap-20 justify-center">
          <div className="md:w-[40%] w-[100%]">
            <h3 className="text-3xl  font-bold text-center md:text-start mb-5 ">
              About Us
            </h3>
            <p className="text-center md:text-start text-sm">
              Welcome to SketchVenture, the ultimate summer camp art school
              where creativity knows no bounds! At SketchVenture, we believe in
              nurturing the artistic potential within every child and providing
              them with a memorable summer filled with imagination, inspiration,
              and a whole lot of fun. SketchVenture was born out of a shared
              passion for art and education. As art enthusiasts ourselves, we
              noticed the lack of opportunities for young minds to explore their
              creativity in a supportive and engaging environment during the
              summer months. We envisioned a space where budding artists could
              come together, learn, and express themselves freely, away from the
              rigors of traditional academic settings. With this vision in mind,
              we embarked on a journey to create SketchVenture, a place where
              art becomes a magical adventure. Since our establishment, we have
              been committed to fostering an inclusive and vibrant community of
              artists, where each child can find their unique voice and discover
              their artistic prowess.
            </p>
          </div>
          <div className="w-[100%] md:w-[50%]">
            <div>
              <img
                className="w-96"
                src="https://img.freepik.com/free-photo/mosaic-puzzle-art-kids-children-s-creative-game_155003-16243.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
            </div>
            <div className="z-10 -mt-24 ms-16">
              <img
                className="w-96"
                src="https://img.freepik.com/free-photo/people-meeting-community-center_23-2149155276.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
