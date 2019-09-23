import React, { useEffect, Fragment } from "react";
import classes from "./Person.css";
import withClass from "../../../hoc/WithClass.js";
import Aux from "../../../hoc/Aux.js";
import Radium from "radium";

const person = props => {
  useEffect(() => {
    // will execute for every render  cycle
    console.log("[person.js] useEffects");
  }, [props.name]); // if props.name changed

  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };

  return (
    <Aux>
      <p onClick={props.click}>
        My name is {props.name} and I am {props.age} years old {props.children}
      </p>
      <input
        type="text"
        onChange={props.nameChangeHandler}
        value={props.name}
      />
    </Aux>
  );
};

export default withClass(Radium(person), " Person");
