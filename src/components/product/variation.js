import { useState } from "react";

const VariationInput = ({ item, labelname, changeHandler, className }) => {
  return (
    <label style={{ backgroundColor: item.media }} className={className}>
      <input
        onChange={changeHandler}
        type="radio"
        name={`variation[${labelname}]`}
        value={item.name}
        data-labelname={labelname}
      />
      {item.name}
    </label>
  );
};

const Variations = ({ options, variations }) => {
  const [selected, setSelected] = useState([]);
  const changeHandler = (e) => {
    console.log(1);
    let s = selected;
    s[e.target.dataset.labelname] = e.target.value;
    setSelected(s);
  };
  return (
    <div id="variations">
      {Object.keys(options).map((key) => {
        return (
          <>
            <p>{key}</p>
            <div
              key={options[key][0].name}
              className={options[key][0].media != null ? "media" : "custom"}
            >
              {options[key].map((i, index) => {
                return (
                  <VariationInput
                    key={`${index}${i.name}`}
                    item={i}
                    labelname={key}
                    changeHandler={changeHandler}
                    className={selected[key] == i.name ? "active" : ""}
                  />
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Variations;
