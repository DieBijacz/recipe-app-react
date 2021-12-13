import React from 'react'


export const Meal = ({ title, img, strInstructions }) => {
    return (
        <div className='meal-card'>
            <div className='meal'>
                <div className="meal-header">
                    <img src={img} alt={title} />
                </div>
                <div className="meal-body">
                    <h4>{title}</h4>
                    <p>{strInstructions}</p>
                    <button className='btn btn-linear meal-delete'>Love it</button>
                </div>
            </div>
        </div>
    )
}