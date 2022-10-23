import styled from "styled-components";
import {FaChevronRight} from "react-icons/fa";
import {FaChevronLeft} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const FeaturedSec = styled.div`
height: 100vh;
position: relative;
overflow: hidden;
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

const Slide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`;

const Slider = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

&::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.9;
    background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%);
}
`;

const SlideImg = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;

const SlideText = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
width: 100%;
left: 50%;
color: #FDFFFF;

@media screen and (max-width: 1024px) {
   left: initial;
   text-align: center;
   align-items: center;
    }

    


button {
    width: 180px;
    height: 42px;
    padding: 8px 16px;
    border: none;
    font-size: 16px;
    margin-top: 8px;
    background-color: #CA4C2D;
color: #FDFFFF;
cursor: pointer;
border-radius: 4px;

@media screen and (max-width: 1024px) {
    font-size: 31.25px;
  padding: 12px 24px; 
  height: initial;
  width: initial;
     }

     @media screen and (max-width: 428px) {
        font-size: 16px;
      padding: 12px 24px; 
      height: initial;
      width: initial;
         }

     
}

h1 {
    font-size: clamp(1.953rem, 2.5vw, 3.052rem);
    font-weight: bold;

    @media screen and (max-width: 1024px) {
        font-size: 61.04px;
         }

         @media screen and (max-width: 428px) {
            font-size: 48.83px;
            padding: 0 24px;
             }
}

h2 {
    font-weight: 400;

    @media screen and (max-width: 1024px) {
        font-size: 39.06px;
         }

         @media screen and (max-width: 428px) {
            font-size: 25px;
             }
    
}


`;

const SliderButtons = styled.div`
position: absolute;
display: flex;
padding-left: 32px;
bottom: 50px;
right: 50px;
z-index: 10;
width: 50%;

@media screen and (max-width: 1024px) {
    justify-content: space-between;
    width: 100%;
    right: initial;
    padding: 0 32px;
    
     }

`;

const ForwardBtn = styled.button`
width: 52px;
height: 52px;
border-radius: 50%;
font-size: 32px;
align-items: center;
display: flex;
justify-content: center;
cursor: pointer;
border: none;
background-color: #CA4C2D;
color: #FDFFFF;


@media screen and (max-width: 1024px) {
    width: 104px;
    height: 104px;
    font-size: 48.83px;
     }

     @media screen and (max-width: 428px) {
        width: 52px;
        height: 52px;
        font-size: 25px;
         }
`;

const BackBtn = styled.button`
width: 52px;
height: 52px;
border-radius: 50%;
font-size: 32px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border: none;
background-color: #CA4C2D;
color: #FDFFFF;
margin-right: 52px;

@media screen and (max-width: 1024px) {
    width: 104px;
    height: 104px;
    font-size: 48.83px;
     }

     @media screen and (max-width: 428px) {
        width: 52px;
        height: 52px;
        font-size: 25px;
         }
`;

export default function Featured({slides}) {

const [current, setCurrent] = useState(0);
const length = slides.length;
const timeout = useRef(null);

useEffect(() => {
const nextSlide = () => {
  setCurrent(current => (current === length - 1 ? 0 : current + 1))  
}

timeout.current = setTimeout(nextSlide, 10000)

return function () {
    if(timeout.current) {
        clearTimeout(timeout.current)
    }
}
}, [current, length])

const nextSlide = () => {
    if(timeout.current) {
        clearTimeout(timeout.current)
    }
    setCurrent(current === length - 1 ? 0 : current + 1)
}

const prevSlide = () => {
    if(timeout.current) {
        clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? length - 1 : current - 1)
}

if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}

    return (
<FeaturedSec>
<Wrapper>
    {slides.map((slide, index) => {
        return (
         <Slide key={index}>
            {index === current && (
               <Slider>
        <SlideImg src={slide.image} alt={slide.alt}/>
        <SlideText>
            <h1>{slide.title}</h1>
            <h2>{slide.location}</h2>
            <h2>{slide.price}</h2>
            <button>View Details</button>
        </SlideText>
    </Slider> 
            )}
    
</Slide>   
        );
    })}
<SliderButtons>
    <BackBtn onClick={prevSlide}><FaChevronLeft/></BackBtn>
    <ForwardBtn onClick={nextSlide}><FaChevronRight/></ForwardBtn>
</SliderButtons>
</Wrapper>
</FeaturedSec>
    )
}