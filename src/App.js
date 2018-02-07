import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sections from "./components/Sections";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import scrollIntoViewIfNeeded from "scroll-into-view-if-needed";

const Error404 = () => <div>Page Not Found</div>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.registerNode = this.registerNode.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }
  registerNode = (nodeId, node) => {
    // debugger;
    this[nodeId] = node;
  }
  scrollTo = (nodeId) => {
    if (this[nodeId]) {
      scrollIntoViewIfNeeded(this[nodeId], {
        duration: 1500
      });
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header scrollTo={this.scrollTo}/>
          <Sections registerNode={this.registerNode}/>
          {/* <Switch> 
            <Route exact path="/" component={Sections} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route path="/" component={Error404}/> 
          </Switch> */}
          <Footer /> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
