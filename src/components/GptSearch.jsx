import { NETFLIX_BACKGROUND } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          src={NETFLIX_BACKGROUND}
          alt="netflix-background"
          className="bg-no-repeat bg-cover w-full h-full brightness-50 absolute z-0"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
