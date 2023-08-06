import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer/Footer";
import Header from "../Pages/SharedPages/Header/Header";

const Main = () => {
  return (
    <div className="">
      <Header></Header>
     
     <Outlet></Outlet>
      {/* <div className="container mx-auto">
     
      </div> */}
  
     
      <Footer></Footer>
    </div>
  );
};

export default Main;
