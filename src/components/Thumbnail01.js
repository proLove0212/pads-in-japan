import styled from "styled-components";


const PadThumb = styled.li`
border: 1px solid #A2ADAD;
`;

const ThumbImg = styled.div`
width: 100%;
`;

const ThumbImg02 = styled.img`
width: 100%;
object-fit: cover;
`;

const ThumbText = styled.div`
padding: 8px 16px;
font-size: 20px;
`;

const ThumbText02 = styled.div``;

const ThumbTitle = styled.div`
font-weight: 900;
color: #CA4C2D;
margin-bottom: 8px;
`;

const ThumbLocation = styled.div`
margin-bottom: 8px;
`;

const ThumbPrice = styled.div`
font-weight: 900;
margin-bottom: 24px;
`;

const ViewPad = styled.div``;

const ViewPadBtn = styled.button`
background-color: #CA4C2D;
color: #FDFFFF;
padding: 8px 16px;
border: none;
border-radius: 4px;

@media screen and (max-width: 1024px) {
    width: 100%;
    padding: 12px 24px;
    font-size: 20px;
     }
`;

export default function Thumbnail01({newpads}) {
    return (
        <>
        {newpads.map(({image, title, location, price}) => (
             <PadThumb>
            <ThumbImg>
                <ThumbImg02 src={image}/>
            </ThumbImg>
            <ThumbText>
                <ThumbText02>
                <ThumbTitle>{title}</ThumbTitle>
                <ThumbLocation>{location} </ThumbLocation>
                <ThumbPrice>{price}</ThumbPrice>
                </ThumbText02>
                <ViewPad>
                    <ViewPadBtn>View Details</ViewPadBtn>
                </ViewPad>
            </ThumbText>
        </PadThumb>
        ))}
       
        </>
    )
}