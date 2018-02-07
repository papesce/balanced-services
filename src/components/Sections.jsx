import React, { Component } from "react";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";


class Sections extends Component {
  constructor(props){
    super(props);
    this.refCallback = this.refCallback.bind(this);
  }
  refCallback = (nodeId) => (section) => {
    // debugger;
    const { registerNode } = this.props;
    registerNode(nodeId, section);
  };
  render() {
    return (
      <div>
        <Main refc={this.refCallback("main")}/>
          <About refc={this.refCallback("about")}/>
          <Contact refc={this.refCallback("contact")}/>
          <Services refc={this.refCallback("services")}/>
      </div>
    );
  }
}

export default Sections;
