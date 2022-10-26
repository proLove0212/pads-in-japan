import { Link } from "react-router-dom";
import styled from "styled-components";
import {BiCopyright} from "react-icons/bi";
import {FaTwitter} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const FooterCont = styled.div`
width: 100%;
background-color: #772822;
color: #FDFFFF;
`;

const FooterHeader = styled.div`
padding: 12px 24px;

h2 {
    font-size: 31.25px;
    font-family: 'Offside', cursive;
}

@media screen and (max-width: 1024px) {
    h2 {
        text-align: center;
    }
}
`;

const LinkColumnRow = styled.div`
display: flex;
margin: 0 256px 64px;
justify-content: space-between;

@media screen and (max-width: 1024px) {
    margin: 0 24px 32px;
}

@media screen and (max-width: 430px) {
    display: block;
}

`;

const LinkColumn = styled.div`
@media screen and (max-width: 430px) {
    margin-bottom: 24px;
}
`;

const ColumnHead = styled.div`
padding: 8px 16px;
font-size: 16px;
font-weight: 900;
`;

const LinkColumn2 = styled.ul`
list-style-type: none;
`;

const LinkItem = styled.li`
padding: 8px 16px;
display: flex;
align-items: center;
`;

const FooterLink = styled(Link)`
text-decoration: none;
color: #FDFFFF;
display: flex;
align-items: center;

&:hover {
    text-decoration: underline;
}
`;

const SnsIcon = styled.div`
font-size: 25px;
margin-right: 16px;
`;

const Copyright = styled.div`
text-align: center;
padding: 12px 24px;

@media screen and (max-width: 1024px) {
    font-size: 12px;
}
`;

export default function Footer() {
    return (
        <FooterCont>
            <FooterHeader>
                <h2>PadsInJapan</h2>
            </FooterHeader>
<LinkColumnRow>
            <LinkColumn>
            <ColumnHead>Search Our Pads</ColumnHead>
            <LinkColumn2>
            <LinkItem>
            <FooterLink to="/">Buy</FooterLink>
            </LinkItem>
            <LinkItem>
            <FooterLink to="/">Rent</FooterLink>
            </LinkItem>
            <LinkItem>
            <FooterLink to="/">Short-term</FooterLink>
            </LinkItem>
            <LinkItem>
            <FooterLink to="/">Furnished</FooterLink>
            </LinkItem>
            </LinkColumn2>
            </LinkColumn>
            <LinkColumn>
            <ColumnHead>About Us</ColumnHead>
            <LinkColumn2>
            <LinkItem>
            <FooterLink to="/">Company Profile</FooterLink>
            </LinkItem>
            <LinkItem>
            <FooterLink to="/">Contact Us</FooterLink>
            </LinkItem>
            <LinkItem>
            <FooterLink to="/">FAQs</FooterLink>
            </LinkItem>
            <LinkItem>
            <FooterLink to="/">Blog</FooterLink>
            </LinkItem>
            </LinkColumn2>
            </LinkColumn>
            <LinkColumn>
            <ColumnHead>Follow Us</ColumnHead>
            <LinkColumn2>
            <LinkItem>
            <FooterLink to="/"><SnsIcon><FaTwitter/></SnsIcon>Twitter</FooterLink>
            </LinkItem>
            <LinkItem>
            <FooterLink to="/"><SnsIcon><FaFacebookF/></SnsIcon>Facebook</FooterLink>
            </LinkItem>
            <LinkItem>
            <FooterLink to="/">
                <SnsIcon><FaInstagram/></SnsIcon>Instagram</FooterLink>
            </LinkItem>
            </LinkColumn2>
            </LinkColumn>
</LinkColumnRow>
<Copyright>
<BiCopyright/>2022 PadsInJapan - Project Created by Joseph Arteaga
</Copyright>
        </FooterCont>
    )
}