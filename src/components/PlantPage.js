import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({handlePlantSearch, plants, search, setSearch}) {
  
  return (
    <main>
      <NewPlantForm plants={plants}/>
      <Search searchTerm={search} setSearch={setSearch}     />
      <PlantList plants={plants} search={search} />
    </main>
  );
}

export default PlantPage;
