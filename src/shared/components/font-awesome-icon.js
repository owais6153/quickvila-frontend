const Icon = (props) => {
  return (
    <i className={props.icon || "img-icon"}>
      {props.url && <img src={props.url} alt="icon"/>}
    </i>
  );
};
export default Icon;
