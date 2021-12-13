import React from 'react'
import { Meal } from './Meal.js'

export const Random = ({ meal }) => {
    return (
        <div className="random-meal">
            <Meal title={meal.strMeal} img={meal.strMealThumb} strInstructions={meal.strInstructions} />
        </div>
    )
}
