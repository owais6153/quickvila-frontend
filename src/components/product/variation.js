import { useState, useEffect } from "react";

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
  const [displayError, setDisplayError] = useState(false);

  const updatePricing = (buttonFlag) => {
    var flag = null;
    var price = 0;
    var saleprice = 0;
    var id = 0;
    for (let i in variations) {
      flag = null;

      let variants = variations[i].variants;
      for (var key in selected) {
        if (flag !== false) {
          if (variants[key].name === selected[key]) {
            flag = true;
          } else {
            flag = false;
          }
        }
      }

      if (flag === true) {
        price = variations[i].price;
        saleprice = variations[i].sale_price;
        id = variations[i].id;
        console.log(variations[i].name);
        break;
      }
    }

    if (flag === true) {
      setDisplayError(false);
      updateDetail(buttonFlag, price, saleprice, id);
    } else {
      setDisplayError(true);
      updateDetail(false);
    }
  };
  const changeHandler = (e) => {
    let s = selected;
    s[e.target.dataset.labelname] = e.target.value;
    setSelected(s);

    let optionslength = Object.keys(options).length;
    let selectedlegth = Object.keys(selected).length;

    if (optionslength == selectedlegth) {
      updatePricing(true);
    }
  };

  useEffect(() => {
    updateDetail(false);
  }, []);

  return (
    <div id="variations">
      {displayError && (
        <p style={{ color: "red" }}>
          Sorry! The selected options are not in the stock.
        </p>
      )}
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
