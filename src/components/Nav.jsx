import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { resp: false ,
          expanded: true};
  }
  myFunction = () => {
    // debugger;
    this.setState(prevState => {
      return { resp: !prevState.resp };
    });
  };
  componentWillMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = event => {
    var scroll = this.getCurrentScroll();
    // console.log("scroll");
    if (scroll >= 300) {
      this.setState({expanded: false});
    } else {
      this.setState({expanded: true});
    }
  };
  getCurrentScroll = () => {
    return window.pageYOffset || document.documentElement.scrollTop;
  };
  render() {
    const { scrollTo } = this.props;
    return (
      <nav>
        <div
          className={`topnav 
          ${this.state.expanded ? " expanded" : ""}
          ${this.state.resp ? " responsive" : ""}`
        }
          id="myTopnav"
        >
          <a href="#main" className="active">
            Balanced Services
          </a>
          <a href="#services" onClick={event => scrollTo("services")}>
            Services
          </a>
          <a href="#about" onClick={event => scrollTo("about")}>
            About
          </a>
          <a href="#contact" onClick={event => scrollTo("contact")}>
            Contact
          </a>
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
