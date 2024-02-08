import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
// Utils
import { NETFLIX_LOGO, NETFLIX_USER_LOGO } from "../utils/constant";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const path = useLocation().pathname;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [show, handleShow] = useState(true);
  const navigate = useNavigate();

  const handleHover = () => {
    handleShow(!show);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="absolute pl-48 w-full pt-6 bg-gradient-to-b from-black z-10 flex justify-between align-middle">
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
          <div className="z-10 ml-auto right-0 mr-48 flex flex-col items-end">
            <div className="flex items-center">
              <div className="flex items-end">
                <div className="mr-2 text-sm">{user?.displayName}</div>
                <img
                  src={user?.photoURL}
                  alt="user-img"
                  className="rounded-md w-8 mr-2"
                />
              </div>
              {/* <img
                src={NETFLIX_USER_LOGO}
                alt="netflix-user-logo"
                className="rounded-md w-8 mr-2"
              /> */}
              <div className="text-sm cursor-pointer" onMouseDown={handleHover}>
                ⬇️
              </div>
            </div>
            <div
              className={`absolute ${
                show && "hidden"
              } mt-8 bg-black text-white p-2 rounded-sm text-[12px] cursor-pointer`}
              onClick={handleSignOut}
            >
              Sign out of Netflix
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
