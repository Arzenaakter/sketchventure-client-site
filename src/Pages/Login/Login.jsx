import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../SharedPages/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { LogIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [show, setShow] = useState(false);
  // const [error,setError] =useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    LogIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;

        Swal.fire({
          title: "LogIn successful",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
        reset();

        console.log(loggedUser);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  return (
    <div className="hero min-h-screen pt-20 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card  w-full shadow-2xl bg-base-100">
          <form className="card-body w-96" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder=" password"
                className="input input-bordered relative"
                {...register("password", {
                  required: " password is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}

              <p
                onClick={() => setShow(!show)}
                className="mt-12 ms-72 z-10 absolute"
              >
                <small>
                  {show ? (
                    <span className=" ">
                      <FiEyeOff size={24} />
                    </span>
                  ) : (
                    <span className="">
                      <FiEye size={24} />
                    </span>
                  )}
                </small>
              </p>
            </div>
            <div className="form-control mt-6">
              <input
                className=" px-4 py-2 rounded text-white font-medium text-sm 
                 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] 
                  hover:from-[var(--secondary)] hover:to-[var(--primary)] transition-all duration-300"
                type="submit"
                value="Login"
              />
              <label className="label">
                <p className="text-center">
                  <small>
                    New Here ?{" "}
                    <Link to="/signup" className="text-blue-500">
                      Create an account
                    </Link>
                  </small>
                </p>
              </label>
            </div>
            <div className="divider">OR</div>
            <div className="form-control mt-2">
              <SocialLogin></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
