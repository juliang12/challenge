import styled from "styled-components";

interface Props{
    size?: string
    align?: string
}

export const CardContainer = styled.div<Props>`
width: ${(props) => props.size ? "500px" : "300px"}; 
height:  ${(props) => props.size ? "600px" : "450px"}; 
min-height: 450px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #32262a ;
color: #fff;
border-radius: 5px;
margin: 1rem 0;
`;


export const TitleCard = styled.h2`
font-size: 1.4rem;
font-weight: 600;
text-transform: uppercase;
color: #cb4327;
`;

export const SubtitleCard = styled.h4`
width: 50%;
height: 30px;
background: #cb4327;
text-align: center;
border-radius: 5px;
`

export const Paragraph = styled.p`
width: 90%;
min-height: 150px;
word-wrap: break-word;
padding: 5px;
background-color: #cb432780;
text-align: center;
&a{
    text-decoration: none;
}
`;

export const ParagraphDate = styled.p`
width: 90%;
word-wrap: break-word;
padding: 5px;
background-color: #cb432780;
text-align: center;
&a{
    text-decoration: none;
}
`


export const NoteListContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 2rem;
`

export const HeadContainer = styled.div<Props>`
width: 100%;
display: flex;
word-wrap: normal;
justify-content: ${(props)=> props.align ? "flex-end" : "center"} ;
gap: 15px;
margin-right: 5px;
align-items: center;
`

export const Icon = styled.div`
font-size: 25px;
cursor: pointer;
transition: ease-in 0.3s;
text-decoration: none;
color: #fff;

& a{
text-decoration: none;
}

&:hover{
    color: grey;
}
`
