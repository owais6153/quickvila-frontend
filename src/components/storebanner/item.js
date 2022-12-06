import { Link } from "react-router-dom";
const StoreBannerItem = ({ banner }) => {
  return (
    <div className="col-lg-6 mb-sm-5 mb-lg-0">
      <div
        className="coldiv"
        style={{
          backgroundImage: `url('${banner.thumbnail}')`,
        }}
      >
        <p>{banner.subtitle}</p>
        <h3>{banner.title}</h3>
        <Link to={banner.action}>shop now</Link>
      </div>
    </div>
  );
};
export default StoreBannerItem;
