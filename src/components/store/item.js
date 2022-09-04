const StoreItem = (props) => {
  return (
    <div className="c-box">
      <div className="brand">
        <a>
          <img src={props.store.logo} alt={props.store.name} />
        </a>
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
          <br /> <span>Products</span>
        </p>
      </div>
      <h4>
        <a>{props.store.name}</a>
      </h4>
    </div>
  );
};
export default StoreItem;
