import React, {useState} from "react";

function PlantCard({plant, handleDelete}) {
  const [inStock, setInStock] = useState(true)
  const [price, setPrice] = useState(plant.price)

  function handlePriceChange(newPrice){
    setPrice(newPrice)
    fetch(`http://localhost:6001/plants/${plant.id}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({price: newPrice})
    })
     .then(res => res.json())
     .then(data => {
        setPrice(data.price)
      })
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {price}
        <input type="text" value={price} onChange={e => handlePriceChange(e.target.value)} />
      </p> 
      {inStock ? (
        <button className="primary" onClick={() => setInStock(!inStock)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button onClick={() => handleDelete(plant.id)}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
