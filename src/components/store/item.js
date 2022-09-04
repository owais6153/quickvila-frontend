import { Link } from "react-router-dom";
import { homeUrl } from "../../shared/helper";
const StoreItem = (props) => {
  return (
    <Link to={`/stores/${props.store.id}`}>
      <div className="c-box">
        <div className="brand">
          <img src={props.store.logo} alt={props.store.name} />
        </div>
        <div className="figure">
          <img src={props.store.cover} alt={props.store.name} />
        </div>
        <div className="ctn">
          <p>
            20K
            <br />
            <span>followers</span>
          </p>
          <p>
            {props.store.products_count > 100
              ? "100+"
              : props.store.products_count}
            <br /> <span>Product{props.store.products_count > 1 && "s"}</span>
          </p>
        </div>
        <h4>{props.store.name}</h4>
      </div>
    </Link>
  );
};
export default StoreItem;
