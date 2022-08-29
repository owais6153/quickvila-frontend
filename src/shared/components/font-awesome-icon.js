const Icon = (props) => {
  return (
    <i className={props.icon || "img-icon"}>
      {props.url && <img src={props.url} />}
    </i>
  );
};
export default Icon;
