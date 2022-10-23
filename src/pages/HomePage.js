import styled from "styled-components"
import Featured from "../components/Featured";
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
        </HomePageMain>
    )
}