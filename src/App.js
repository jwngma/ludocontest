import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Presentation from "./components/Presentation";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />

        {/* <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/presentation" component={Presentation} />
          <Route exact path="/features" component={Feature} />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
