import styled from "styled-components";
import { NewPadsData } from "../data/NewPadsData";
import Thumbnail01 from "./Thumbnail01";

const NewPadSec = styled.div``;

const Header = styled.div`
padding: 16px 32px;
`;

const PadContainer = styled.div``;

const PadWrapper = styled.div``;

const PadGrid = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 24px;
margin: 0 32px;
list-style-type: none;
padding-bottom: 64px;

@media screen and (max-width: 1024px) {
    margin: 0 16px;
     }
`;

export default function NewPads() {
return (<NewPadSec>
    <Header>
        <h2>Check Out These New Pads</h2>
    </Header>
    <PadContainer>
        <PadWrapper>
            <PadGrid>
                <Thumbnail01 newpads={NewPadsData}/>
            </PadGrid>
        </PadWrapper>
    </PadContainer>
</NewPadSec>)
}