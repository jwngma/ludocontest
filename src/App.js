import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/features" component={Header} />
          <Route exact path="/presentation" component={Header} />
          <Route exact path="/download" component={Header} />
          <Route exact path="/about" component={Header} />

          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
      {/* <Header /> */}
    </div>
  );
}

export default App;
