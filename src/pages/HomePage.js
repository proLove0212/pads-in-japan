import styled from "styled-components"
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import NewPads from "../components/NewPads";
import Newsletter from "../components/Newsletter";
import SearchPads from "../components/SearchPad";
import { FeaturedData } from "../data/FeaturedData";


const HomePageMain = styled.div``;

export default function HomePage() {
    return (
        <HomePageMain>
         <Featured slides={FeaturedData}/> 
         <SearchPads/> 
         <NewPads/>
         <Newsletter/>
         <Footer/>
        </HomePageMain>
    )
}