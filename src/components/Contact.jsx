import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    const { refc } = this.props;
    return <div ref={refc} className="contact">Contact</div>;
  }
}

export default Contact;
