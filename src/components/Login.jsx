import Header from "./Header";
import { NETFLIX_BACKGROUND } from "../utils/constant";
import { useState } from "react";
import Footer from "./Footer";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [showPassword, setshowPassword] = useState(false);

  const handleShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleClick = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          src={NETFLIX_BACKGROUND}
          alt="netflix-background"
          className="bg-no-repeat bg-cover w-full h-screen brightness-50 absolute"
        />
      </div>
      <form className="absolute flex flex-col w-3/12 bg-black/70 p-12 my-36 mx-auto right-0 left-0 rounded-md">
        <label className="text-white text-3xl font-semibold mb-8">
          Sign {isSignInForm ? "In" : "Up"}
        </label>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 rounded-md bg-black/60 border border-gray-500 focus:border-2 text-white focus:border-white focus:outline-none"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 mt-4 rounded-md bg-black/60 border border-gray-500 focus:border-2 text-white focus:border-white focus:outline-none"
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="p-4 mt-4 rounded-md bg-black/60 border border-gray-500 focus:border-2 text-white focus:border-white focus:outline-none"
        />
        <p
          className="relative text-gray-500 text-sm mt-2 ml-auto right-0 cursor-pointer"
          onClick={handleShowPassword}
        >
          {showPassword ? "Hide" : "Show"} Password
        </p>
        <button className="bg-[#E50914] text-white p-2 mt-6 rounded-md">
          Sign In
        </button>
        <label className="mt-12 text-gray-400">
          {isSignInForm ? "New to Netflix? " : "Already have an Account?"}{" "}
          &nbsp;
          <span className="text-white cursor-pointer" onClick={handleClick}>
            Sign {isSignInForm ? "Up" : "In"} now.
          </span>
        </label>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
