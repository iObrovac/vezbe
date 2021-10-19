import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/layout/nav";
import Baloon from "./pages/baloon";
import Home from "./pages/home";
import Lista from "./pages/lista";
import MemoryCards from "./pages/memoryCards";
import SquaresFlow from "./pages/squaresFlow";

function App() {
  return (
    <Router>
      <div className="layout">
        <Nav />
        <Switch>
          <Route path="/memory-cards" component={() => <MemoryCards />} />
          <Route path="/baloon" component={() => <Baloon />} />
          <Route exact path="/" component={() => <Home />} />
          <Route path="/squares-flow" component={() => <SquaresFlow />} />
          <Route path="/lista" component={() => <Lista />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
