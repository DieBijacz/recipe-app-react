import React from 'react'
import getRandomRecipe from '../fetch.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faSearch} />

export const Header = () => {
    return (
        <header>
            <form className="search-form">
                <input className="btn search-bar" type="text" placeholder="Search for recipe" />
                <button onClick={(e) => {
                    e.preventDefault()
                    getRandomRecipe()
                }} className="btn search-btn" type="submit">{element}</button>
            </form>
        </header>
    )
}
