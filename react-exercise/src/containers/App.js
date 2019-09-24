import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "initialize message"
    };
  }

  render() {
    return (
      <StyleRoot>
        <div className="App">
          <AuthContext.Provider
            value={{
              message: this.state.message
            }}
          >
            <Cockpit />
          </AuthContext.Provider>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
