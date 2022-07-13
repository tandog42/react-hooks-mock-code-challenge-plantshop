import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {
  
  const handlePlantSearch = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <ul className="cards">
      { handlePlantSearch.map(aplant => (
        <PlantCard
          key={aplant.id}
          id={aplant.id}
          name={aplant.name}
          image={aplant.image}
          price={aplant.price}
        />
      ))}
    </ul>
  );
}

export default PlantList;
