import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
// Utils
import { NETFLIX_LOGO } from "../utils/constant";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/store/userSlice";

const Header = () => {
  const path = useLocation().pathname;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [show, handleShow] = useState(true);
  const navigate = useNavigate();

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

  return (
    <div className="absolute pl-24 w-full pt-6 bg-gradient-to-b from-black z-10 flex justify-between align-middle">
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
              <div className="flex items-end">
                <div className="mr-2 text-sm text-white">
                  {user?.displayName}
                </div>
                <img
                  src={user?.photoURL}
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
