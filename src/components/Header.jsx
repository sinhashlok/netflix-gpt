import { NETFLIX_LOGO } from "../utils/constant";

const Header = () => {
  return (
    <div className="absolute pl-48 w-full pt-6 bg-gradient-to-b from-black z-10">
      <img src={NETFLIX_LOGO} alt="netlfix-logo" className="w-[150px]" />
    </div>
  );
};

export default Header;
