import React, { useEffect, useState } from "react";

const RatingStars = ({ ratings }) => {
  const [style, setStyle] = useState({
    width: "0%",
  });

  useEffect(
    function () {
      const starPercentage = (ratings / 5) * 100;
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

      setStyle(() => ({
        width: starPercentageRounded,
      }));
    },
    [ratings]
  );
  return (
    <div className="stars-outer">
      <div className="stars-inner" style={style}></div>
    </div>
  );
};

export default RatingStars;
