import About from "../About/About";
import Banner from "../Banner/Banner";
// import Carosel from "../Carosel/Carosel";
import Choose from "../Choose/Choose";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import Latest from "../Latest/Latest";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Reviews from "../Reviews/Reviews";
import Upcoming from "../UpComing/Upcoming";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Carosel></Carosel> */}
      <PopularClass></PopularClass>
      <Latest></Latest>
      <PopularInstructor></PopularInstructor>
      <About></About>
      <Upcoming></Upcoming>
      <Contact></Contact>
      <Gallery></Gallery>
      <Reviews></Reviews>
      <Choose></Choose>
    </div>
  );
};

export default Home;
