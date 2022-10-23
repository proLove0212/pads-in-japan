import styled from "styled-components";
import NewsBackground from "../images/newsletterbackground.jpg";

const NewsSign = styled.div`
width: 100%;
height: 100vh;
position: relative;
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

const Background = styled.img`
width: 100%;
height: 100vh;
object-fit: cover;
position: absolute;
`;

const NewsSign02 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
`;

const TextSec = styled.div`
color: #FDFFFF;
text-align: center;
padding-bottom: 30vh;

@media screen and (max-width: 1024px) {
    padding-bottom: 15vh;
}

@media screen and (max-width: 428px) {

}

h2 {
font-size: 61.04px;
font-weight: 900;

@media screen and (max-width: 428px) {
    font-size: 48.83px;
    }
}

h3 {
font-size: 39.06px;
font-weight: 400;

@media screen and (max-width: 428px) {
    font-size: 25px;
    }
}
`;

const FormSec = styled.div`
@media screen and (max-width: 428px) {
    width: 100%;
    padding: 0 24px;
    }

form {
    width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;   
}

input {
    width: 520px;
    padding: 8px 16px;
    margin-bottom: 8px;
    opacity: 0.7;
    border-radius: 4px;

    @media screen and (max-width: 428px) {
    width: 100%;
    }
}

button {
    background-color: #CA4C2D;
color: #FDFFFF;
padding: 8px 16px;
border: none;
font-size: 16px;
border-radius: 4px;
cursor: pointer;

@media screen and (max-width: 428px) {
    width: 100%;
}
}

`;



export default function Newsletter() {
    return (
<NewsSign>
    <Wrapper>
    <Background src={NewsBackground} />
<NewsSign02>
<TextSec>
<h2>Sign up for our Newsletter.</h2>
<h3>Get the latest info on our new pads.</h3>
</TextSec>
<FormSec>
    <form>
        <input type="text" name="" id="" placeholder="My E-mail"/>
        <button>Subscribe</button>
    </form>
    </FormSec> 
</NewsSign02>
</Wrapper>
</NewsSign>
    )
}