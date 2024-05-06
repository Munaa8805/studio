import React from "react";

const Card = ({ item }) => {
  return (
    <div className="group item hover:cursor-pointer">
      <img
        src={item.img1}
        alt={item.name}
        className="hidden w-full duration-200 md:block group-hover:scale-110 "
      />
      <img src={item.img2} className="w-full md:hidden" />
      <div className="item-gradient"></div>
      <h5>{item.name}</h5>
    </div>
  );
};

export default Card;
