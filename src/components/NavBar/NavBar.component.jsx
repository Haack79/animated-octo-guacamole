import React from 'react';
import {Link} from 'react-router-dom'; 
import { NavigationBar, NavLinks } from './navBar.styles';

export const NavBar = () => {
    const pages = ['home', 'profile', 'view', 'connect'];
    const navBarLinks = pages.map((page, indx) => {
        return (
            <NavLinks key={indx} to={'/'+page}>{page.toUpperCase()+' '}</NavLinks>
        )
    });
    return <NavigationBar isUser={true}>{navBarLinks}</NavigationBar>; 
}