import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    const { refc } = this.props;
    return <div ref={refc} className="about">About</div>;
  }
}

export default About;
