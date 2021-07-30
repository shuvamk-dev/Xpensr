import React from "react";
import "./card.css";
const Card = ({ item }) => {
  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    ></div>
  );
};

export default Card;
