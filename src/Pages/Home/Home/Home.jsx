import Carosel from "../Carosel/Carosel";
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
            
        </div>
    );
};

export default Home;