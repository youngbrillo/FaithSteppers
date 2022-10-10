import logo from './logo.svg';
import './App.css';
import './Styles/FaithStepper_style.css';

import React, { Component } from 'react';

import {Header, SideBar, Content} from './Components'
 
class App extends Component {
  render() {
    return (
      <div className="fs_Column fs_fullWidth" >
        <Header />
        <div  className="fs_Row fs_fullHeight" >
          <SideBar />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;


const defaultApp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;
