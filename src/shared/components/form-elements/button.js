const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`btn ${props.className}`} type={props.type} disabled={props.disabled}>
      {props.children ? props.children : props.text}
    </button>
  );
};
export default Button;
