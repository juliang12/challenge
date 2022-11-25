import Footer from "components/ui/Footer/Footer";
import { Nabvar } from "components/ui/Navbar";
import { FC, ReactNode } from "react";
import { ContainerLayout } from "styles/Layout/Layout";

interface Props {
  children: ReactNode | ReactNode[];
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Nabvar />
      <ContainerLayout>{children}</ContainerLayout>
      <Footer />
    </>
  );
};

export default Layout;
