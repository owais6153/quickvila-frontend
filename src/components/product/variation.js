import React, { useState, useEffect } from "react";

const NotInStock = () => (
  <p style={{ color: "red" }}>
    Sorry! The selected options are not in the stock.
  </p>
);

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

const Variations = ({ options, variations, updateDetail }) => {
  const [selected, setSelected] = useState([]);
  const [render, reRender] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const updatePricing = (buttonFlag) => {
    var flag = null;
    var price = 0;
    var saleprice = 0;
    var name = "";
    var id = null;
    for (let i in variations) {
      flag = null;

      let variants = variations[i].variants;
      for (var key in variants) {
        if (flag !== false) {
          if (variants[key].name === selected[key]) {
            flag = true;
          } else {
            flag = false;
          }
        }
      }

      if (flag === true) {
        price = variations[i].price_to_display;
        saleprice = variations[i].sale_price_to_display;
        id = variations[i].id;
        name = variations[i].name;
        break;
      }
    }

    if (flag === true) {
      setDisplayError(false);
      updateDetail(buttonFlag, price, saleprice, id, name);
    } else {
      let optionslength = Object.keys(options).length;
      let selectedlegth = Object.keys(selected).length;
      if (optionslength == selectedlegth) {
        setDisplayError(true);
      }
      updateDetail(false);
    }
  };
  const changeHandler = (e) => {
    let s = selected;
    s[e.target.dataset.labelname] = e.target.value;
    setSelected(() => s);
    reRender(!render);

    updatePricing(true);
  };

  const checkForClasses = (key, i) => {
    let classes = "";

    if (selected[key] == i.name) {
      classes = "active";
    }

    return classes;
  };

  useEffect(() => {
    updateDetail(false);
  }, []);

  return (
    <div id="variations">
      {displayError && <NotInStock />}
      {Object.keys(options).map((key, index) => {
        return (
          <React.Fragment key={index}>
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
                    className={checkForClasses(key, i)}
                  />
                );
              })}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default Variations;
