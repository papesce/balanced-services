import React, { Component } from "react";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

class Sections extends Component {
  refCallback = section => {
    const { registerNode } = this.props;
    registerNode("services", section);
  };
  render() {
    return (
      <div>
        <Main />
        <About />
        <Contact />
        <div ref={this.refCallback}>
          <Services />
        </div>
      </div>
    );
  }
}

export default Sections;
