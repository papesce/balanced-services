import React, {Component} from "react"
import "./Services.css"

class Services extends Component {
  render(){
    const { refc } = this.props;
    return <div ref={refc} className="services">Services</div>
  }
}

export default Services