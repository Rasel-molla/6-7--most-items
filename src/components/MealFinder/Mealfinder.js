import React, { useEffect, useState } from 'react';

const Mealfinder = () => {

const [search,setSearch] = useState ('');
const  [meals,setMeals] = useState ([]);


 const handleChange = event =>{
    //  console.log(event.target.value);
    setSearch(event.target.value);
 }
useEffect(()=>{
const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
fetch (url)
.then(res => res.json())
.then(data => setMeals(data.meals))

}, [search])
    return (
        <div>
            <h2>This is MealFinder </h2>
            {/* <input type="text" placeholder="Search Foot"> </input> */}
  <input type="text" onChange={handleChange} placeholder=" Search Food" />
     <p>Search: {search}</p>
     <p>Meal Found: {meals?.length || 0 }</p>

  <ul>
  {
         meals?.map(meal => <li>{meal.strMeal}</li>)
     }

  </ul>
       </div>
    );
};

export default Mealfinder;