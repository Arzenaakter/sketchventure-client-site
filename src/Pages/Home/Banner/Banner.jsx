import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiImbricatedArrows } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="pt-28 bg-gradient-to-r from-orange-100/20 to-orange-200/20 pb-10">
      <h3 className=" text-center font-bold text-2xl lg:text-5xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
        Discover Joy of Art at Summer Camp
      </h3>
      <p className=" text-center px-10 lg:px-40 mt-4 text-gray-700 text-sm lg:text-lg ">
        Join us this summer for an exciting art camp that will ignite your
        creativity! Our art camp is the perfect opportunity for young artists to
        explore various art forms and express themselves in a supportive and
        inspiring environment. With a wide range of engaging activities, such as
        painting, sculpting, and mixed media projects.
      </p>
      <div className="flex justify-center mt-6">
        <div className="relative w-52 h-[60px] flex items-center justify-center">
          {/* Animated circular border */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 200 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              x="2"
              y="2"
              width="196"
              height="46"
              rx="23"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="500"
              strokeDashoffset="500"
              animate={{ strokeDashoffset: [500, 0, -500] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <defs>
              <linearGradient
                id="gradient"
                x1="0"
                y1="0"
                x2="200"
                y2="50"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="var(--primary)" />
                <stop offset="1" stopColor="var(--secondary)" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Button content */}
          <Link
            to="/login"
            id="order"
            className="relative z-10 w-full text-center rounded-full text-white font-medium text-lg px-4 py-2 
          bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]  shadow-lg
          hover:from-[var(--secondary)] hover:to-[var(--primary)] 
          transition-all duration-300 flex items-center justify-center gap-2"
          >
            Join Now <GiImbricatedArrows size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
