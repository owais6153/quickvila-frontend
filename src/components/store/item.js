import { homeUrl } from "../../shared/helper";

const StoreItem = (props) => {
  return (
    <div className="c-box">
      <div className="brand">
        <a>
          <img src={homeUrl("images/Ellipse 5.png")} />
        </a>
      </div>
      <div className="figure">
        <img src={homeUrl("images/Card 1.png")} />
      </div>
      <div className="ctn">
        <p>
          20K
          <br />
          <span>followers</span>
        </p>
        <p>
          100+
          <br /> <span>Products</span>
        </p>
      </div>
      <h4>
        <a>chanel</a>
      </h4>
    </div>
  );
};
export default StoreItem;
