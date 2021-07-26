import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/about" exact component={About} /> */}
      </Switch>

      <Footer />
    </>
  );
}

export default App;
