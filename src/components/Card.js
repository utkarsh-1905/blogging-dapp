import React from "react";
import "../styles/card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card_info">
        <span className="card_title">{props.title}</span>
        <span className="author">{props.author}</span>
        <p className="card_desc">{props.desc.substring(0, 20)}</p>
      </div>
    </div>
  );
};

export default Card;
