import React, {useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, search, handleDelete}) {
  const filteredPlants = plantList.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <ul className="cards">
      {filteredPlants.map(plant => <PlantCard key={plant.id} plant={plant} handleDelete={handleDelete}/>)}
    </ul>
  );
}

export default PlantList;
