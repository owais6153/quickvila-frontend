const Button = (props) => {
  return (
    <button {...props} className={`btn ${props.className}`} type={props.type}>
      {props.children || props.text}
    </button>
  );
};
export default Button;
