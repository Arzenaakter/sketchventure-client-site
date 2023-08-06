import About from "../About/About";
import Carosel from "../Carosel/Carosel";
import Contact from "../Contact/Contact";
import Gallery from "../Gallery/Gallery";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Upcoming from "../UpComing/Upcoming";

const Home = () => {
    return (
        <div >
            <Carosel></Carosel>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <About></About>
            <Upcoming></Upcoming>
            <Contact></Contact>
            <Gallery></Gallery>
            
        </div>
    );
};

export default Home;