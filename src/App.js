import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/skills" exact component={Skills} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
