import Carosel from "../Carosel/Carosel";
import Contact from "../Contact/Contact";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Upcoming from "../UpComing/Upcoming";

const Home = () => {
    return (
        <div >
            <Carosel></Carosel>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Upcoming></Upcoming>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;