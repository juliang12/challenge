import styled from "styled-components";

export const ContainerLayout = styled.div`
width: 100%;
max-width: 1240px;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
`

export const Navbar = styled.nav`
width: 100%;
height: 55px;
display: flex;
align-items: center;
justify-content: space-between;
max-width: 1240px;
background-color: #cb4327;
color: #fff;
padding: 0 20px;
margin: 0 auto;


& ul{
    display: flex;
    justify-content: center;
    align-items: center;
}

& li{
    padding: 0 10px;
    list-style: none;
}

& a{
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
}

& a:hover{
    border-bottom: 1px solid #fff;
}
`;

export const FooterStyle = styled.footer`
width: 100%;
height: 50px;
max-width: 1240px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
text-align: center;
background-color: #322623;
margin: 0 auto;
color: #fff;
` 