import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// Components
import Header from "./Header";
// Utils
import checkValidData from "../utils/validate";
import { NETFLIX_BACKGROUND } from "../utils/constant";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [showPassword, setshowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleClick = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const error = checkValidData(
      fullName?.current?.value,
      email.current.value,
      password.current.value
    );
    if (error !== null) return setErrorMessage(error?.message);
    setErrorMessage(null);
    if (isSignInForm) {
      console.log("Sign In");
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ", " + errorMessage);
        });
    } else {
      console.log("Sign Up");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ", " + errorMessage);
        });
    }
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
            ref={fullName}
            placeholder="Full Name"
            className="p-4 rounded-md bg-black/60 border border-gray-500 focus:border-2 text-white focus:border-white focus:outline-none"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="p-4 mt-4 rounded-md bg-black/60 border border-gray-500 focus:border-2 text-white focus:border-white focus:outline-none"
        />
        <input
          type={showPassword ? "text" : "password"}
          ref={password}
          placeholder="Password"
          className="p-4 mt-4 rounded-md bg-black/60 border border-gray-500 focus:border-2 text-white focus:border-white focus:outline-none"
        />
        <p
          className="relative text-gray-500 text-sm mt-2 ml-auto right-0 cursor-pointer"
          onClick={handleShowPassword}
        >
          {showPassword ? "Hide" : "Show"} Password
        </p>
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="bg-[#E50914] text-white p-2 mt-6 rounded-md"
          onClick={handleButtonClick}
        >
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
      {/* <div className="absolute bottom-0 w-full">
        <Footer />
      </div> */}
    </div>
  );
};

export default Login;
