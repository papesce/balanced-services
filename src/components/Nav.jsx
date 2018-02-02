import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  state = { resp : false}
  myFunction = () =>  {
    // debugger;
    this.setState((prevState) => {return {resp: !prevState.resp }})
  }
  render() {
    return (
      <nav>
        <div className={`topnav ${this.state.resp ? " responsive" : ""}`} id="myTopnav">
          <a href="#home" class="active">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a
            href="javascript:void(0);"
            className="icon"
            style={{fontSize: "15px"}}
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
