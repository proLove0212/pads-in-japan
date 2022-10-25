import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import {BiMenuAltRight} from "react-icons/bi";


const NavBarOut = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 12px 24px;
position: fixed;
top: 0;
left: 0;
width: 100%;

z-index: 999;
`;

const NavLeft = styled.div`

`;

const NavCenter = styled.div`
@media screen and (max-width: 1024px) {
    display: none;
}
`;

const NavRight = styled.div`
display: flex;
align-items: center;


`;

const SiteLogo = styled(Link)`
font-family: 'Offside', cursive;
font-size: 25px;
text-decoration: none;
color: #FDFFFF;



`;

const LinkGroup = styled.div`
display: flex;

@media screen and (max-width: 1024px) {
}
`;

const LinkItem = styled.div`
padding: 12px 24px;
`;

const NavLink = styled(Link)`
text-decoration: none;
color: #FDFFFF;
font-size: 16px;
transition: 0.3s ease-in-out;

&:hover {
    color: #CA4C2D;
    transition: 0.3s ease-in-out;
}
`;

const SignupBtn = styled.button`
background-color: transparent;
color: #FDFFFF;
border: 2px solid #FDFFFF;
border-radius: 4px;
padding: 12px 24px;
margin-left: 12px;
font-size: 16px;
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover {
    border: 2px solid #CA4C2D;
    background-color: #CA4C2D;
    color: #FDFFF;
    transition: 0.3s ease-in-out;
}

@media screen and (max-width: 1024px) {
    display: none;
}
`;

const SigninBtn = styled.button`
background-color: #CA4C2D;
color: #FDFFFF;
border: 2px solid #CA4C2D;
border-radius: 4px;
padding: 12px 24px;
font-size: 16px;
margin-left: 12px;
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover {
    border: 2px solid #772822;
    background-color: #772822;
    color: #FDFFF;
    transition: 0.3s ease-in-out;
}

@media screen and (max-width: 1024px) {
    display: none;
}
`;

const SideMenuBtn = styled.button`
font-size: 32px;
cursor: pointer;
display: none;
background-color: transparent;
color: #FDFFFF;
border: none;
transition: 0.3s ease-in-out;

&:hover {
    color: #CA4C2D;
    transition: 0.3s ease-in-out;
}

@media screen and (max-width: 1024px) {
display: initial;
}


`

export default function NavBar({toggle}) {
    return (
       <NavBarOut>
        <NavLeft>
            <SiteLogo>
           PadsInJapan
            </SiteLogo>
        </NavLeft>
        <NavCenter>
            <LinkGroup>
            <LinkItem>
            <NavLink to="/">Buy</NavLink>
            </LinkItem>
            <LinkItem>
            <NavLink to="/">Rent</NavLink>
            </LinkItem>
            <LinkItem>
            <NavLink to="/">Area</NavLink>
            </LinkItem>
            <LinkItem>
            <NavLink to="/">Blog</NavLink>
            </LinkItem>
            </LinkGroup>
        </NavCenter>
        <NavRight>
        <NavLink to="/"><SignupBtn>Sign Up</SignupBtn></NavLink>
        <NavLink to="/"><SigninBtn>Sign In</SigninBtn></NavLink> 
            <SideMenuBtn onClick={toggle}>
<BiMenuAltRight/>
            </SideMenuBtn>
        </NavRight>
       </NavBarOut>
    )
}