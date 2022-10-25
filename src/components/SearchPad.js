import styled from "styled-components";

const SearchPad01 = styled.div``;

const Header = styled.div`
padding: 16px 32px;
`;

const SearchForm = styled.div``;

const SearchRow = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
}
`;

const BtnCont = styled.div`

button {
    @media screen and (max-width: 1024px) {
        width: 50%;
    }
}
@media screen and (max-width: 1024px) {
    width: 100%;
}
`;

const OptionCont = styled.div`
@media screen and (max-width: 1024px) {
    width: 100%;
}

select {
    padding: 8px 16px;
    border: 1px solid #A2ADAD;
    color: #A2ADAD;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    
}
`;

const SearchBtnCont = styled.div`

@media screen and (max-width: 1024px) {
    width: 100%;
}
button {
    padding: 8px 16px;
    background-color: #CA4C2D;
    color: #FDFFFF;
    border: 1px solid #A2ADAD;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
}
`;


export default function SearchPads() {
    return (
<SearchPad01>
<Header>
<h2>Search for Pads</h2>
</Header>
<SearchForm>
<SearchRow>
    <BtnCont>
        <button className="search-option-btn active">Buy</button>
        <button className="search-option-btn">Rent</button>
    </BtnCont>
    <BtnCont>
    <button className="search-option-btn active">Area</button>
        <button className="search-option-btn">Train</button>
    </BtnCont>
<OptionCont>
<select name="" id="">
        <option value="">Nationwide</option>
    </select>
</OptionCont>
<OptionCont>
<select name="" id="">
        <option value="">All Cities</option>
    </select>    
</OptionCont>
<OptionCont>
<select name="" id="">
        <option value="">All Districts</option>
    </select>
</OptionCont>
<OptionCont>
<select name="" id="">
        <option value="">Max Price</option>
    </select>
</OptionCont>
<SearchBtnCont>
    <button>Search</button>
</SearchBtnCont>
</SearchRow>    
</SearchForm>
</SearchPad01>
    )
}