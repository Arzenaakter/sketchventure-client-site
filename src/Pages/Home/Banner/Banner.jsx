import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Typewriter from "react-ts-typewriter";

const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          {/*  */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/children-playing-grass_1098-504.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais)",
            }}>
            <div className="hero-overlay bg-black bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w- text-white  ">
                <h1 className="mb-5 lg:text-7xl text-2xl font-bold ">
                  <Typewriter text=" Make Your Summer" />
                </h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1.5 }}
                  className="mb-5 lg:text-3xl text-xl font-bold italic">
                  Unforgettable !
                </motion.h2>
                <motion.button
                  initial={{ opacity: 0, height: "0 " }}
                  whileInView={{ opacity: 1, height: "100%" }}
                  transition={{ ease: "easeInOut", duration: 1.5 }}
                  className="btn common-btn mt-10">
                  Join Now
                </motion.button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="keen-slider__slide number-slide2">
          {/*  */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/group-girls-camping-forest_1303-9509.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais)",
            }}>
            <div className="hero-overlay bg-black bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w- text-white ">
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1.5 }}
                  className="mb-5 text-2xl lg:text-7xl font-bold">
                  Unleash Your Creativity
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1.5 }}
                  className="mb-5 lg:text-3xl text-xl font-bold italic">
                  at Summer Camp
                </motion.h2>
                <motion.button
                  initial={{ opacity: 0, height: "0 " }}
                  whileInView={{ opacity: 1, height: "100%" }}
                  transition={{ ease: "easeInOut", duration: 1.5 }}
                  className="btn common-btn mt-10">
                  Join Now
                </motion.button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <div className="keen-slider__slide number-slide3">
          {/*  */}
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/premium-photo/just-chilling-campsite-shot-group-young-friends-hanging-out-their-campsite_590464-38765.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais)",
            }}>
            <div className="hero-overlay bg-black bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w- text-white ">
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1.5 }}
                  className="mb-5 text-2xl lg:text-7xl font-bold">
                  Discover Joy of Art
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeInOut", duration: 1.5 }}
                  className="mb-5 lg:text-3xl text-xl font-bold italic">
                  at Summer Camp
                </motion.h2>
                <motion.button
                  initial={{ opacity: 0, height: "0 " }}
                  whileInView={{ opacity: 1, height: "100%" }}
                  transition={{ ease: "easeInOut", duration: 1.5 }}
                  className="btn common-btn mt-10">
                  Join Now
                </motion.button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        {/* <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div> */}
      </div>
    </>
  );
};

export default Banner;
