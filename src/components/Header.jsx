import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
// Utils
import {
  NETFLIX_LOGO,
  NETFLIX_USER_LOGO,
  SUPPORTED_LANGUAGES,
} from "../utils/constant";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/store/userSlice";
import { removeData } from "../utils/store/movieSlice";
import {
  removetoggleGptSearch,
  toggleGptSearch,
} from "../utils/store/gptSlice";
import { setLanguage } from "../utils/store/configSlice";
import { lang } from "../utils/languageConstants";

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const [show, handleShow] = useState(true);
  const navigate = useNavigate();
  const langKey = useSelector((state) => state.config.lang);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        dispatch(removeData());
        dispatch(removetoggleGptSearch());
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleHover = () => {
    handleShow(!show);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  return (
    <div className="absolute pl-24 w-full pt-6 bg-gradient-to-b from-black z-20 flex justify-between align-middle">
      <Link to="/">
        <img src={NETFLIX_LOGO} alt="netlfix-logo" className="w-[150px]" />
      </Link>
      <div>
        {path === "/" && (
          <div className="z-10 ml-auto right-0 mr-48">
            <select className="bg-black/70 border p-2 px-4 border-white text-white rounded-md mr-4">
              <option value="English">English</option>
              <option value="Hindi">हिंदी</option>
            </select>
            <Link to="/login">
              <button className="bg-[#E50914] text-white p-2 px-4 text-sm font-semibold rounded-md">
                Sign in
              </button>
            </Link>
          </div>
        )}
        {path === "/browse" && (
          <div className="z-10 ml-auto right-0 mr-24 flex flex-col items-end">
            <div className="flex items-center">
              <select
                className="bg-black/70 border p-2 px-2 border-white text-white rounded-md mr-2"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((language) => (
                  <option value={language.code}>{language.name}</option>
                ))}
              </select>
              <button
                className="py-2 px-4 mx-4 my-2 bg-purple-700 rounded-lg text-white font-semibold"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? "HomePage" : "GPT Search"}
              </button>
              <div className="flex items-end">
                <img
                  src={NETFLIX_USER_LOGO}
                  alt="user-img"
                  className="rounded-md w-8 mr-2"
                />
              </div>
              <div
                className="text-sm cursor-pointer text-white"
                onMouseDown={handleHover}
              >
                {show ? <TriangleDownIcon /> : <TriangleUpIcon />}
              </div>
            </div>
            <div
              className={`absolute ${
                show && "hidden"
              } mt-12 bg-black text-white p-2 rounded-sm text-[12px] cursor-pointer`}
              onClick={handleSignOut}
            >
              {lang[langKey].signOut}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
