import React, { useState } from 'react'
import * as FAicon from 'react-icons/fa'
import * as AIicon from 'react-icons/ai'
import { sidebarData } from './sidebarData.js'
import { Link } from 'react-router-dom'
import getRandomRecipe from '../../fetch.js'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>  
            {/* BACKGROUND BACK COLOR */}
            <div className="back"></div>

            {/* HAMBURGER MENU ICON */}
            <div className="navbar">
                <Link to='#' className='menu-icon'>
                    <FAicon.FaBars onClick={showSidebar} />
                </Link>

            {/* SEARCH BAR */}
                <form className="search-form">
                    <input className="btn search-bar" type="text" placeholder="Search for recipe" />
                    <button className="btn search-btn" type="submit" onClick={(e) => {
                        e.preventDefault()
                        getRandomRecipe()
                    }}><FAicon.FaSearch /></button>
                </form>
            </div>

            {/* OPENED MENU */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-list' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-icon'>
                            <AIicon.AiOutlineClose />
                        </Link>
                    </li>
                    {sidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.name}>
                                <Link to={item.path}>
                                    {item.icon} {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
