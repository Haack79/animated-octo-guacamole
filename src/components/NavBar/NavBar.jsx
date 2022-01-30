import React from 'react';
import {Link} from 'react-router-dom'; 

export const NavBar = () => {
    const pages = ['home', 'profile', 'view', 'connect'];
    const navBarLinks = pages.map((page, _, indx) => {
        return (
            <nav>
                <Link key={page+indx} to={'/'+page}>{page.toUpperCase}hi</Link>
            </nav>
        )
    });
    return navBarLinks; 
}