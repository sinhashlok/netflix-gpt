import { useSelector } from "react-redux";
// Components
import MovieList from "./MovieList";
import ShimmerMovieCards from "./ShimmerMovieCards";

const SecondaryContainer = () => {
  const { nowPlayingMovies, trendingMovies, popularMovies, upcomingMovies } =
    useSelector((state) => state?.movie);

  if (nowPlayingMovies === null)
    <div>
      <ShimmerMovieCards />
      <ShimmerMovieCards />
      <ShimmerMovieCards />
    </div>;

  return (
    <div className="bg-gradient-to-t from-black -mt-48 relative z-20">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Trending"} movies={trendingMovies} />
      <MovieList title={"Popular"} movies={popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
