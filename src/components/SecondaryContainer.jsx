import { useSelector } from "react-redux";
// Components
import MovieList from "./MovieList";
import ShimmerMovieCards from "./ShimmerMovieCards";
// Utils
import { lang } from "../utils/languageConstants";

const SecondaryContainer = () => {
  const { nowPlayingMovies, trendingMovies, popularMovies, upcomingMovies } =
    useSelector((state) => state?.movie);
  const langKey = useSelector((state) => state.config.lang);

  if (nowPlayingMovies === null)
    <div>
      <ShimmerMovieCards />
      <ShimmerMovieCards />
      <ShimmerMovieCards />
    </div>;

  return (
    <div className="bg-gradient-to-t from-black -mt-48 relative z-20">
      <MovieList
        title={lang[langKey].moviePlaying.nowPlaying}
        movies={nowPlayingMovies}
      />
      <MovieList
        title={lang[langKey].moviePlaying.trending}
        movies={trendingMovies}
      />
      <MovieList
        title={lang[langKey].moviePlaying.popular}
        movies={popularMovies}
      />
      <MovieList
        title={lang[langKey].moviePlaying.upcomingMovies}
        movies={upcomingMovies}
      />
    </div>
  );
};

export default SecondaryContainer;
