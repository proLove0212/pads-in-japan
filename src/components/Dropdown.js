import styled from "styled-components";
import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa";

const DropContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
display: grid;
align-items: center;
top: ${({isOpen}) => (isOpen ? '0' : '-100%' ) };
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '1' : '0' ) };
background-color: #253851;
`;

const CloseDropdown = styled.div`
button {
    background-color: transparent;
    color: #FDFFFF;
    font-size: 25px;
    cursor: pointer;
    position: absolute;
    border: none;
    top: 20px;
    right: 24px;

    @media screen and (max-width: 1024px) {
        font-size: 61.04px;
    }
    
    @media screen and (max-width: 430px) {
       font-size: 25px;
    }
}
`;

const DropWrap = styled.div`
`;

const DropMenu = styled.div`
display: flex;
flex-direction: column;
text-align: center;

`;

const LinkContainer = styled.div`
padding: 12px 24px;
`;

const DropLink = styled(Link)`
font-size: 25px;
text-decoration: none;
color: #FDFFFF;
transition: 0.3s ease-in-out;

&:hover {
    color: #CA4C2D;
    transition: 0.3s ease-in-out;
}

@media screen and (max-width: 1024px) {
    font-size: 61.04px;
}

@media screen and (max-width: 430px) {
   font-size: 25px;
}
`;

const SignupBtn = styled.button`
font-size: 25px;
padding: 12px 24px;
background-color: transparent;
color: #FDFFFF;
border: 2px solid #FDFFFF;
border-radius: 4px;
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover {
    border: 2px solid #CA4C2D;
    background-color: #CA4C2D;
    color: #FDFFF;
    transition: 0.3s ease-in-out;
}

@media screen and (max-width: 1024px) {
    font-size: 61.04px;
}

@media screen and (max-width: 430px) {
   font-size: 25px;
}
`;

const SigninBtn = styled.button`
font-size: 25px;
padding: 12px 24px;
background-color: #CA4C2D;
color: #FDFFFF;
border: 2px solid #CA4C2D;
border-radius: 4px;
cursor: pointer;
transition: 0.3s ease-in-out;

&:hover {
    border: 2px solid #772822;
    background-color: #772822;
    color: #FDFFF;
    transition: 0.3s ease-in-out;
}

@media screen and (max-width: 1024px) {
    font-size: 61.04px;
}

@media screen and (max-width: 430px) {
   font-size: 25px;
}
`;


export default function Dropdown({isOpen, toggle}) {
    return (
        <DropContainer isOpen={isOpen} onClick={toggle}>
            <CloseDropdown onClick={toggle}>
                <button><FaTimes/></button>
            </CloseDropdown>
            <DropWrap>
                <DropMenu>
<LinkContainer>
<DropLink to="/">Buy</DropLink>
</LinkContainer>
<LinkContainer>
<DropLink to="/">Rent</DropLink>
</LinkContainer>
<LinkContainer>
<DropLink to="/">Area</DropLink>
</LinkContainer>
<LinkContainer>
<DropLink to="/">Blog</DropLink>
</LinkContainer>
<LinkContainer>
<DropLink to="/">
<SignupBtn>Sign Up</SignupBtn> 
</DropLink>
</LinkContainer>
<LinkContainer>
<DropLink to="/">
<SigninBtn>Sign In</SigninBtn>  
</DropLink>
</LinkContainer>
                </DropMenu>
            </DropWrap>
        </DropContainer>
    )
}