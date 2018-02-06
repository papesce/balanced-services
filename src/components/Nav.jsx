import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { resp: false };
  }
  myFunction = () => {
    // debugger;
    this.setState(prevState => {
      return { resp: !prevState.resp };
    });
  };
  render() {
    const { scrollTo } = this.props;
    return (
      <nav>
        <div
          className={`topnav ${this.state.resp ? " responsive" : ""}`}
          id="myTopnav"
        >
          <a href="#main" className="active">
            Balanced Services
          </a>
          <a onClick={scrollTo}>Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a
            className="icon"
            style={{ fontSize: "15px" }}
            onClick={this.myFunction}
          >
            &#9776;
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
