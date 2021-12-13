import React, { useEffect, useState } from "react";
import { Back } from "./components/Back.js";
import { Favorites } from "./components/Favorites.js";
import { Header } from "./components/Header.js";
import { Random } from "./components/Random.js";
import getRandomRecipe from './fetch.js'

const App = () => {
  // const api_term = `https://www.themealdb.com/api/json/v1/1/search.php?s='+term`
  // const api_id = `https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id`

  const [meal, setMeal] = useState([])
  useEffect(() => {
    getRandomRecipe(setMeal)
  }, [])

  return (
    <>
      <Back />
      <Header />
      {/* <Favorites /> */}
      <Random meal={meal} />
    </>
  );
}

export default App;
