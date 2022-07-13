import React, { useState } from "react";

function NewPlantForm() {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function submitHandler() {
    //e.preventDefault();
    const plant = { name, price, image };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plant),
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitHandler}>
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          value={name}
          placeholder="Plant name"
        />
        <input
          onChange={e => setImage(e.target.value)}
          type="text"
          name="image"
          value={image}
          placeholder="Image URL"
        />
        <input
          onChange={e => setPrice(e.target.value)}
          type="number"
          name="price"
          value={price}
          step="00.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
