import { FooterStyle } from "styles/Layout/Layout";

const Footer = () => {
  const date = new Date();

  return (
    <FooterStyle>
      Todos los derechos reservados {date.getFullYear()}
    </FooterStyle>
  );
};

export default Footer;
