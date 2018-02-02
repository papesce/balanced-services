import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Error404 = () => <div>Page Not Found</div>

class App extends Component {
  render() {
    // debugger;
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch> 
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route path="/" component={Error404}/> 
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
