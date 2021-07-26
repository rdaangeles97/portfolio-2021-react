import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
