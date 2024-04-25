import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  const [search, setSearch] = useState('')

  function fetchPlants(){
    fetch('http://localhost:6001/plants')
    .then(res=>res.json())
    .then(data => {
      setPlantList(data)
    })
  }

  useEffect(fetchPlants, [])

  function addPlant(plant){
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(plant)
    })
    .then(res => res.json())
    .then((data) => {
      setPlantList([...plantList, data])
    })
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plantList={plantList} search={search}/>
    </main>
  );
}

export default PlantPage;
