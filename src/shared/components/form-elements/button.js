const Button = (props) => {
  return (
    <button className={`btn ${props.className}`} type={props.type}>
      {props.children || props.text}
    </button>
  );
};
export default Button;
