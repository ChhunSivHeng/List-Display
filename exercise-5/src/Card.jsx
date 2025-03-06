import React from "react";

const Card = ({ image, name, hobbies, gender, address }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Hobbies:</strong> {hobbies.join(", ")}</p>
      
    </div>
  );
};

export default Card;
