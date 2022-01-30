import React from 'react';
import {Link} from 'react-router-dom'; 
import styled from 'styled-components';
const navBar = styled.nav`
    display: flex;
    justify-content: flex-start;
    background-color: #FAEBD7;
`
export const NavBar = () => {
    const pages = ['home', 'profile', 'view', 'connect'];
    const navBarLinks = pages.map((page, _, indx) => {
        return (
            <navBar>
                <Link key={page+indx} to={'/'+page}>{page.toUpperCase()+' '}</Link>
            </navBar>
        )
    });
    return navBarLinks; 
}