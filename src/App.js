import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Aboutpage from "./pages/about/Aboutpage";
import Contactpage from "./pages/contact/Contactpage";
import Career from "./pages/careers/career";
import Brand from "./pages/brands/Brand";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Aboutpage} />
            <Route path="/contact" component={Contactpage} />
            <Route path="/careers" component={Career} />
            <Route path="/brand" component={Brand} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
