import styled from "styled-components";

interface Props{
    mode?: string
}

export const InputContainer = styled.div`
width: 100%;
max-width: 80%;
display: flex;
justify-content: center;
margin: 20px 0;
`;

export const FormContainer = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const InputText = styled.input`
width: 300px;
padding: 10px;
border-radius: 8px;
height: 25px;
font-size: 15px;
` 

export const Button = styled.button<Props>`
padding: 15px 40px;
background-color: ${(props) => props.mode ? "#cb4327" : "#32262a"};
color: #fff;
border-radius: 5px;
border: none;
margin: 15px 0;
cursor: pointer;
&:hover{
    box-shadow: 1px 0px 15px 0px rgba(0,0,0,0.45);
-webkit-box-shadow: 1px 0px 15px 0px rgba(0,0,0,0.45);
-moz-box-shadow: 1px 0px 15px 0px rgba(0,0,0,0.45);
transition: ease-in-out .1s;
}
`;


export const Error = styled.p`
width: 100%;
max-width: 500px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background-color: red;
color: #fff;
text-transform: uppercase;
font-weight: 600;
border-radius: 5px;
`;


export const SelectSearchStyle = styled.select`
width: 325px;
height: 50px;
padding: 10px;
border-radius: 5px;
font-size: 15px;
`

export const TextArea = styled.textarea`
resize: none;
width: 300px;
height: 70px;
border-radius: 5px;
`