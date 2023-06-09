import { Fade, Slide } from "react-awesome-reveal";

const Carosel = () => {
  return (
    <div className=" mx-auto px-8 lg:px-0">
      <div className="carousel w-full ">
        <div id="item1" className="carousel-item w-full ">
          <div className="">
            <img
              src="https://i.ibb.co/PhWjYDB/240-F-71384111-r-Am-DE2wom-Ug-CEEWn-Pi-Ne0-VMQGc-Pupa-DW.jpg"
              className="lg:w-[1200px]  "
              alt="Background"
            />
            <div className="flex justify-center items-center  ">
              <div className="text-3xl text-center  content hidden md:block  ">
                <Slide>
                  <h3 className="text-xl md:text-4xl ">Discover Joy of Art at Summer Camp</h3>
                </Slide>
                <Fade delay={1e3} cascade damping={1e-1} >
                   <p className="md:text-sm  md:mt-10 text-[8px]">   Join us this summer for an exciting art camp that will ignite your creativity! Our art camp is the perfect opportunity for young artists to explore various art forms and express themselves in a supportive and inspiring environment. With a wide range of engaging activities, such as painting, sculpting, and mixed media projects, our campers will have the chance to experiment with different techniques and materials. Whether you are a beginner or an experienced artist, our experienced instructors will guide you in honing your skills and discovering your artistic style. Do not miss out on this incredible opportunity to immerse yourself in the world of art and make lasting memories with fellow art enthusiasts!</p>
                </Fade>
                <button className="btn common-btn mt-10   ">Join Now</button>
              </div>
            </div>
          </div>
        </div>

        <div id="item2" className="carousel-item w-full">
          <div className="">
            <img
              src="https://i.ibb.co/mb3xgkT/240-F-368659874-j-OOWx-ZQ8-Daw-Upt-C32ff8ech5l3-Hjbtf-A.jpg"
              className="lg:w-[1200px] "
              alt="Background"
            />
            <div className="flex justify-center items-center">
              <div className="text-3xl text-center  content  ">

              <Slide>
                  <h3 className="text-xl md:text-4xl ">Unleash Your Creativity at Art Camp</h3>
                </Slide>
                <Fade delay={1e3} cascade damping={1e-1} >
                <p className="md:text-sm  md:mt-10 text-[8px]">
                Experience the joy of art this summer at our enriching art camp! Our camp is designed to introduce children to the wonderful world of art and foster their creativity. Through fun and interactive activities, campers will get hands-on experience in various art forms, including drawing, collage-making, and printmaking. Our passionate instructors will guide them in exploring different themes and techniques while encouraging individual expression. At our camp, children will not only create beautiful artwork but also develop important skills such as problem-solving, critical thinking, and self-confidence. Unleash your child is imagination and let them embark on a memorable artistic journey with us!
                </p> </Fade>
                <button className="btn common-btn mt-10">Join Now</button>
              </div>
            </div>
          </div>
        </div>

        <div id="item3" className="carousel-item w-full">
          <div className="">
            <img
              src="https://i.ibb.co/RQZ09r8/240-F-171216866-w-Fro3p-YDf-MFPy-Df-Rr-Dm-FKi0wmgq6-UZEG.jpg"
              className="lg:w-[1200px] "
              alt="Background"
            />
            <div className="flex justify-center items-center">
              <div className="text-3xl text-center  content  ">
                  <Slide>
                 <h3 className="text-xl md:text-4xl ">Immerse Yourself in Art at Summer Camp</h3>
                </Slide>
                <Fade delay={1e3} cascade damping={1e-1} >
                <p className="md:text-sm  md:mt-10 text-[8px]">
                Dive into a world of art and imagination at our immersive summer art camp! Designed for young artists seeking inspiration and new experiences, our camp offers a diverse range of creative activities. From painting and drawing to ceramics and digital art, campers will have the opportunity to explore different mediums and techniques under the guidance of professional artists. Our camp fosters a supportive and collaborative environment, allowing participants to learn from each other and build lasting friendships. Unleash your creativity, expand your artistic horizons, and create extraordinary masterpieces at our art camp this summer
                </p></Fade>
                <button className="md:text-sm  md:mt-10 text-[8px]">Join Now</button>
              </div>
            </div>
          </div>
        </div>

        <div id="item4" className="carousel-item w-full">
          <div className="">
            <img
              src="https://i.ibb.co/3YRVVvn/group-kindergarten-kids-friends-drawing-art-class-outdoors-53876-70164.jpg"
              className="lg:w-[1200px] "
              alt="Background"
            />
            <div className="flex justify-center items-center">
              <div className="text-3xl text-center  content  ">
              <Slide>
              <h3 className="text-xl md:text-4xl ">Unlock Your Artistic Potential at Camp</h3>
                </Slide>
               
                 <Fade delay={1e3} cascade damping={1e-1} >
                    <p className="md:text-sm  md:mt-10 text-[8px]">
                    Unlock your artistic potential and unleash your inner artist at our engaging summer art camp! Whether you are a budding Picasso or just starting your artistic journey, our camp is the perfect place to develop your skills and nurture your creativity. Through a combination of hands-on projects, interactive workshops, and inspiring demonstrations, our experienced instructors will help you explore different art techniques and find your unique artistic voice. From sketching and painting to mixed media and collage, our camp offers a well-rounded art education experience. Join us this summer and embark on a transformative artistic adventure that will leave you inspired and motivated!
                    </p>
                </Fade>
                <button className="btn common-btn mt-10">Join Now</button>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1">
          <img
            src="https://i.ibb.co/PhWjYDB/240-F-71384111-r-Am-DE2wom-Ug-CEEWn-Pi-Ne0-VMQGc-Pupa-DW.jpg"
            className="w-10 "
            alt="Background"
          />
        </a>
        <a href="#item2">
          <img
            src="https://i.ibb.co/mb3xgkT/240-F-368659874-j-OOWx-ZQ8-Daw-Upt-C32ff8ech5l3-Hjbtf-A.jpg"
            className="w-10 "
            alt="Background"
          />
        </a>
        <a href="#item3">
          <img
            src="https://i.ibb.co/RQZ09r8/240-F-171216866-w-Fro3p-YDf-MFPy-Df-Rr-Dm-FKi0wmgq6-UZEG.jpg"
            className="w-10 "
            alt="Background"
          />
        </a>
        <a href="#item4">
          <img
            src="https://i.ibb.co/3YRVVvn/group-kindergarten-kids-friends-drawing-art-class-outdoors-53876-70164.jpg"
            className="w-10 "
            alt="Background"
          />
        </a>
      </div>
    </div>
  );
};

export default Carosel;
