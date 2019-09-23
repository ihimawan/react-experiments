import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium'
import Cockpit from '../components/Cockpit/Cockpit'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App ')
  }

  render() {
    return (
      <StyleRoot>
        <div className="App">
          <Cockpit />
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
