import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center my-4">
      <div className="flex justify-center h-96  ">
        <img
          src="https://design4users.com/wp-content/uploads/2017/02/webdesign-404.gif"
          alt="404 page"
        />
      </div>
        <Link to='/'>  <button className="btn btn-error mt-4 ">Back to Home</button></Link>
    </div>
  );
};

export default Error;
