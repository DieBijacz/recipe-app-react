import React from 'react'
import * as GRicon from 'react-icons/gr'

export const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <GRicon.GrHomeRounded />,
        name: 'nav-item'
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <GRicon.GrFavorite />,
        name: 'nav-item'
    },
    {
        title: 'Search by products',
        path: '/searchbyproducts',
        icon: <GRicon.GrSearch />,
        name: 'nav-item'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <GRicon.GrPhone />,
        name: 'nav-item'
    }
]