import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationBar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    color: ${({isUser}) => isUser ? 'dodgerblue': 'tan'};
    background-color: #FAEBD7;
    padding: 10px; 
`

export const NavLinks = styled(Link)`

`