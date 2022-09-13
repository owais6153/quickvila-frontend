import { homeUrl } from "../../shared/helper";

const VideoItem = ({ video }) => {
  return (
    <div className="vid-box">
      <img src={video.thumbnail} alt={video.title} />
      <div className="vid-butn">
        <img src={homeUrl("images/Group 16.png")} alt="videoplayer" />
      </div>
    </div>
  );
};
export default VideoItem;
