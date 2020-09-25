import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Events from "./components/events/Events";
import Addevent from "./components/events/Addevent";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header title="Find My Events" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Events} />
                <Route exact path="/event/add" component={Addevent} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
