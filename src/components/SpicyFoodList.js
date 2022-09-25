import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods, newFood]);
  }

  function handleRemoveFood(foodid){
    setFoods(foods.filter(food=>food.id !== foodid))
  }

/*   function handleHeatLevel(id){
   const newFoodArray = foods.map((food) =>{
    if (id==food.id){
      return{...food,
      heatLevel: heatLevel+1
    }}
    else{
      return food
    }})
    setFoods(newFoodArray); */

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleRemoveFood(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>

      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
