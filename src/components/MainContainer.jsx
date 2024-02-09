import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((state) => state?.movie?.nowPlayingMovies);
  if (!movies) return <div>Loading</div>;
  const mainMovie = movies?.at(0);

  return (
    <div>
      <VideoTitle
        title={mainMovie?.original_title}
        overview={mainMovie?.overview}
      />
      <VideoBackground id={mainMovie?.id} />
    </div>
  );
};

export default MainContainer;
