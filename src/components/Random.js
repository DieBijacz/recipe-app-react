import React, { useEffect, useState } from "react";
import { Meal } from './Meal.js'
import getRandomRecipe from '../fetch.js'

export const Random = () => {
    const [meal, setMeal] = useState([])
    useEffect(() => {
      getRandomRecipe(setMeal)
    }, [])

    return (
        <div className="random-meal">
            <Meal meal={meal}/>
        </div>
    )
}
