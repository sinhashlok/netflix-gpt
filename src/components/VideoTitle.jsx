import { InfoOutlineIcon } from "@chakra-ui/icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-96 px-24 aspect-video w-screen bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="text-lg py-4 w-1/2 text-white">{overview}</p>
      <div className="flex">
        <button className="flex items-center bg-white text-lg align-middle px-6 py-1 rounded-md mr-4 hover:bg-white/70 cursor-pointer">
          <div className="text-4xl pr-2">▶️</div>
          <div>Play</div>
        </button>
        <button className="flex items-center bg-gray-500 text-white text-lg align-middle px-6 py-1 rounded-md hover:bg-gray-500/70 cursor-pointer">
          <div className="mr-4 pb-2 text-3xl">
            <InfoOutlineIcon />
          </div>
          <div>More info</div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
