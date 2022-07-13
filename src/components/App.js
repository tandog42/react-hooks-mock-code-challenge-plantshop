import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  
  const [search, setSearch] = useState("")

  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(plant => {
        setPlants(plant);
      });
  }, []);

  const handlePlantSearch = plants.filter(plant =>  plant.name.toLowerCase().includes(search.toLowerCase))
 
 
  return (
    <div className="app">
      <Header />
      <PlantPage  handlePlantSearch={handlePlantSearch} search={search} setSearch={setSearch} plants={plants} />
    </div>
  );
}

export default App;
