import React, { useState } from "react";

function PlantCard({ id, name, image, price }) {
  
  const [stock, setInStock] = useState("true");
  
  function isInStock() {
    setInStock(stock => !stock);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={isInStock} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
