import React from 'react'

export const Meal = ({ meal }) => {
    const { strMeal, strMealThumb, strCategory, strArea,
        // strInstructions
    } = meal

    return (
        <div className='meal-card'>
            <div className='meal'>
                <div className="meal-header">
                    <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className="meal-body">
                    <h4>{strMeal}</h4>
                    <p>{strArea} {strCategory}</p>
                    <button className='btn check-recipe' onClick={() => {
                        console.log('check recipie button');
                    }}>Recipe</button>
                    {/* <p>{strInstructions}</p> */}
                    <button className='btn meal-delete'>Love it</button>
                </div>
            </div>
        </div>
    )
} 