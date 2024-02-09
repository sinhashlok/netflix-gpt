import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ movie }) => {
  const { original_title, poster_path, adult, genre_ids, vote_average } = movie;
  return (
    <div className="w-[164px] mr-8 cursor-pointer hover:opacity-50">
      <img src={IMG_CDN + poster_path} alt={original_title} className="" />
    </div>
  );
};

export default MovieCard;
