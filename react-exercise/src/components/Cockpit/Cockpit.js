import React, { Component } from "react";
import Persons from "../Persons/Persons";

class Cockpit extends Component {
  constructor() {
    super();
    this.state = {
      showPersons: false
    };

    this.buttonRef = React.createRef();
  }

  componentDidMount = () => {
    this.buttonRef.current.click();
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    const style = {
      backgroundColor: this.state.showPersons ? "red" : "green",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    if (this.state.showPersons) {
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "white"
      };
    }

    return (
      <div>
        <h1>bla bitch</h1>

        <button
          onClick={this.togglePersonsHandler}
          style={style}
          ref={this.buttonRef}
        >
          Switch Name
        </button>

        {this.state.showPersons ? <Persons /> : null}
      </div>
    );
  }
}

// like shouldComponentUpdate - react will only rerender if the inputs changed; if not change, then will give back the stored component
// for optimization of functional component.
// example if props didn't change, then give the cached version of the component
export default React.memo(Cockpit);
