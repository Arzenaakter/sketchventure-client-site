import { Fade, Slide } from "react-awesome-reveal";


const Carosel = () => {
  return (
    <>
    <div className="carousel w-full  h-[400px] mx-auto px-10 lg:px-0">

      
  <div id="item1" className="carousel-item w-full bg-[#413F40] h-[400px] px-10 lg:px-0 lg:flex-row flex-col">
        <img src="https://i.ibb.co/PhWjYDB/240-F-71384111-r-Am-DE2wom-Ug-CEEWn-Pi-Ne0-VMQGc-Pupa-DW.jpg" className="lg:w-2/4 w-full" />
                <div className="p-10 text-white text-center ">
                <Slide>
                  <h3 className="text-xl md:text-4xl ">Discover Joy of Art at Summer Camp</h3>
                </Slide>
                <Fade >
                <p className="md:text-sm  md:mt-10 text-[8px]">
                Join us this summer for an exciting art camp that will ignite your creativity! Our art camp is the perfect opportunity for young artists to explore various art forms and express themselves in a supportive and inspiring environment. With a wide range of engaging activities, such as painting, sculpting, and mixed media projects.
                </p> </Fade>
                <button className="btn common-btn mt-10 ">Join Now</button>

                </div>
  </div> 
  <div id="item2" className="carousel-item w-full bg-[#413F40] h-[400px] px-10 lg:px-0 lg:flex-row flex-col">
  <img src="https://i.ibb.co/mb3xgkT/240-F-368659874-j-OOWx-ZQ8-Daw-Upt-C32ff8ech5l3-Hjbtf-A.jpg" className="lg:w-2/4 w-full" />
              <div className="p-10 text-white text-center">
                <Slide>
                  <h3 className="text-xl md:text-4xl ">Unleash Your Creativity at Art Camp</h3>
                </Slide>
                <Fade >
                <p className="md:text-sm  md:mt-10 text-[8px] ">
                Experience the joy of art this summer at our enriching art camp! Our camp is designed to introduce children to the wonderful world of art and foster their creativity. Through fun and interactive activities, campers will get hands-on experience in various art forms, including drawing, collage-making, and printmaking. Our passionate instructors will guide them in exploring different themes and techniques while encouraging individual expression. 
                </p> </Fade>
                <button className="btn common-btn mt-10">Join Now</button>

                </div>
  </div> 
  <div id="item3" className="carousel-item w-full bg-[#413F40] px-10 lg:px-0 lg:flex-row flex-col">
    <img src="https://i.ibb.co/PhWjYDB/240-F-71384111-r-Am-DE2wom-Ug-CEEWn-Pi-Ne0-VMQGc-Pupa-DW.jpg" className="lg:w-2/4 w-full"  />
    <div className="p-10 text-white text-center">
                <Slide>
                  <h3 className="text-xl md:text-4xl ">Immerse Yourself in Art at Summer Camp</h3>
                </Slide>
                <Fade >
                <p className="md:text-sm  md:mt-10 text-[8px]">
                Dive into a world of art and imagination at our immersive summer art camp! Designed for young artists seeking inspiration and new experiences, our camp offers a diverse range of creative activities. From painting and drawing to ceramics and digital art, campers will have the opportunity to explore different mediums and techniques under the guidance of professional artists. Our camp fosters a supportive and collaborative environment.
                </p> </Fade>
                <button className="btn common-btn mt-10">Join Now</button>

                </div>
  </div> 
  <div id="item4" className="carousel-item w-full bg-[#413F40] px-10 lg:px-0 lg:flex-row flex-col">
    <img src="https://i.ibb.co/mb3xgkT/240-F-368659874-j-OOWx-ZQ8-Daw-Upt-C32ff8ech5l3-Hjbtf-A.jpg" className="lg:w-2/4 w-full" />
            <div className="p-10 text-white text-center">
                <Slide>
                  <h3 className="text-xl md:text-4xl ">Unlock Your Artistic Potential at Camp</h3>
                </Slide>
                <Fade >
                <p className="md:text-sm  md:mt-10 text-[8px]">
                Unlock your artistic potential and unleash your inner artist at our engaging summer art camp! Whether you are a budding Picasso or just starting your artistic journey, our camp is the perfect place to develop your skills and nurture your creativity. Through a combination of hands-on projects, interactive workshops, and inspiring demonstrations, our experienced instructors will help you explore different art techniques and find your unique artistic voice.
                </p> </Fade>
                <button className="btn common-btn mt-10">Join Now</button>

                </div>
  </div>



</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
      
    </>
  );
};

export default Carosel;