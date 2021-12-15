import React from 'react'
import { Meal } from './Meal.js'

export const Random = ({ meal }) => {
    return (
        <div className="random-meal">
            <Meal meal={meal} />
        </div>
    )
}
