import { motion } from "framer-motion";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const animation = { duration: 8000, easing: (t) => t };

const Latest = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 2,
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(0.5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 0.5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 0.5, true, animation);
    },
  });

  return (
    <section className=" text-[#000] py-8">
      <div className="my-10 px-10 lg:px-0 container mx-auto  ">
        <motion.h3
          className="text-3xl  font-bold text-center mb-10 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}>
          Latest Classes
        </motion.h3>

        {/* slider */}
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div className="bg-[#2D2D2D] text-white ">
              <img
                className="lg:h-48  h-20"
                src="https://img.freepik.com/free-vector/hand-draw-spring-landscape-scene-watercolor-background_1035-23819.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
              <h2 className="p-3 lg:text-sm text-[10px] ">
                Class Name: Painting Panorama
              </h2>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="bg-[#2D2D2D] text-white ">
              <img
                className="lg:h-48 h-20"
                src="https://img.freepik.com/premium-photo/sunset-camcorder-effect-style-creative-digital-painting_743855-1888.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
              <h2 className="p-3 lg:text-sm text-[10px]">
                Class Name: Daring Doodles
              </h2>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className="bg-[#2D2D2D] text-white ">
              <img
                className="lg:h-48 h-20"
                src="https://img.freepik.com/free-photo/painting-house-by-water_1340-22927.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
              <h2 className="p-3 lg:text-sm text-[10px]">
                Class Name: Crafty Kaleidoscope
              </h2>
            </div>
          </div>
          <div className="keen-slider__slide number-slide4">
            <div className="bg-[#2D2D2D] text-white ">
              <img
                className="lg:h-48 h-20"
                src="https://img.freepik.com/free-vector/hand-draw-mountain-landscape-scene-watercolor-background_1035-23805.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
              <h2 className="p-3 lg:text-sm text-[10px]">
                Class Name: Artistry Unleashed
              </h2>
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <div className="bg-[#2D2D2D] text-white ">
              <img
                className="lg:h-48 h-20"
                src="https://img.freepik.com/premium-photo/beautiful-sunny-grass-landscape-background-trees-mountains_174496-1605.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
              <h2 className="p-3 lg:text-sm text-[10px]">
                Class Name: Colorful Concoctions
              </h2>
            </div>
          </div>
          <div className="keen-slider__slide number-slide6">
            <div className="bg-[#2D2D2D] text-white ">
              <img
                className="lg:h-48 h-20"
                src="https://img.freepik.com/free-vector/beautiful-nature-landscape-hand-draw-watercolor-background_1035-23972.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
                alt=""
              />
              <h2 className="p-3 lg:text-sm text-[10px]">
                Class Name: Eclectic Easels
              </h2>
            </div>
          </div>
        </div>
        {/* slider */}
      </div>
    </section>
  );
};

export default Latest;
