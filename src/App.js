import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Switch, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

const MainSection = styled.section`
  overflow-x: hidden;
`;
function App() {
  let location = useLocation();
  return (
    <MainSection>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </AnimatePresence>
    </MainSection>
  );
}

export default App;
