const Alert = ({ error, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      {error &&
        Object.keys(error).map((key, index) => {
          return error[key].map((er, i) => (
            <span key={`${index}${i}`}>
              {er}
              <br />
            </span>
          ));
        })}
    </div>
  );
};
export default Alert;
