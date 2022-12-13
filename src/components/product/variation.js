const Variations = ({ options, variations }) => {
  return (
    <>
      {Object.keys(options).map((key) => {
        return options[key].map((i) => {
          console.log(i.name);
          return <div key={i.name}>{i.name}</div>;
        });
      })}
    </>
  );
};
export default Variations;
