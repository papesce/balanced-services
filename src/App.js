import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MediaQuery from "react-responsive";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Device Test</div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <div>You are a desktop or laptop</div>
          <MediaQuery query='(min-device-width: 1824px)'>
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery query='(max-width: 1224px)'>
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
        <MediaQuery query='(orientation: portrait)'>
          <div>You are portrait</div>
        </MediaQuery>
        <MediaQuery query='(orientation: landscape)'>
          <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery query='(min-resolution: 2dppx)'>
          <div>You are retina</div>
        </MediaQuery>
      </div>
    );
  }
}

export default App;
