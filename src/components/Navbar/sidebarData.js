import React from 'react'
import * as GRicon from 'react-icons/gr'
import * as BIicon from 'react-icons/bi'

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
        title: 'World Wide',
        path: '/worldwide',
        icon: <BIicon.BiWorld />,
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