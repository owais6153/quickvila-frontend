const Alert = ({ error, type }) => {
  return (
    <div className={`alert alert-${type}`}>
      {error &&
        Object.keys(error).map((key, index) => {
          return error[key].map((er) => <span>{er}</span>);
        })}
    </div>
  );
};
export default Alert;