import React from 'react';
import {Link} from 'react-router-dom'; 
import styled from 'styled-components';
export const NavigationBar = styled.nav`
    display: flex;
    justify-content: space-around;
    color: dodgerblue;
    background-color: #FAEBD7;
`
export const NavBar = () => {
    const pages = ['home', 'profile', 'view', 'connect'];
    const navBarLinks = pages.map((page, indx) => {
        return (
            <Link key={indx} to={'/'+page}>{page.toUpperCase()+' '}</Link>
        )
    });
    return <NavigationBar>{navBarLinks}</NavigationBar>; 
}