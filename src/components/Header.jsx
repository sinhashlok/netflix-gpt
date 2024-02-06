import { Link, useLocation } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/constant";

const Header = () => {
  const path = useLocation().pathname;
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
      </div>
    </div>
  );
};

export default Header;
