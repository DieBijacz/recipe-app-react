import React, { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa'

export const Meal = ({ meal }) => {
    // MEAL DATA
    const { strMeal, strMealThumb, strCategory, strArea } = meal

    // RATING
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)

    useEffect(() => {
        setRating(Math.ceil(Math.random() * 5))

    }, [])

    return (
        <div className='meal-card'>
            <div className='meal'>
                <div className="meal-header">
                    <img src={strMealThumb} alt={strMeal} />
                </div>
                <div className="meal-body">
                    <h4>{strMeal}</h4>

                    <div className="rating">
                        {/* create empty arr of undefined and map thru them */}
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1
                            // EACH STAR =>
                            return (
                                <label>
                                    <input type="radio" name="rating" value={ratingValue}
                                        onClick={
                                            () => setRating(ratingValue)
                                        }
                                    />
                                    <FaStar
                                        className="star"
                                        onMouseEnter={
                                            () => setHover(ratingValue)
                                        }
                                        onMouseLeave={
                                            () => setHover(null)
                                        }
                                        color={ratingValue <= (hover || rating) ? '#ffc107' : '#ccc'} />
                                </label>
                            )
                        }
                        )}
                    </div>

                    <p>{strArea} {strCategory}</p>
                    <button className='btn check-recipe' onClick={() => {
                        console.log('check recipie button');
                    }}>Recipe</button>
                    <button className='btn meal-delete'>Love it</button>
                </div>
            </div>
        </div>
    )
} 