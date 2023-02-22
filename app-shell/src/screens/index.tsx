import { ReactElement, ReactNode } from "react";
import { Footer } from "../core/design-system/footer";
import Header from "../core/design-system/header";
import { Sidebar } from "../core/design-system/sidebar";
import { Container, Main } from "./styles";

const Screen = ({
  children,
}: {
  children: ReactNode | string;
}): ReactElement => (
  <Container>
    <Header />
    <Sidebar />
    <Main>{children}</Main>
    <Footer />
  </Container>
);
export default Screen;
