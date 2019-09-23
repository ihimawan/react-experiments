import React, { useEffect, Fragment } from "react";
import "./Person.css";
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
    <Fragment>
      <div className="Person" style={style}>
        <p onClick={props.click}>
          My name is {props.name} and I am {props.age} years old{" "}
          {props.children}
        </p>
        <input
          type="text"
          onChange={props.nameChangeHandler}
          value={props.name}
        />
      </div>
    </Fragment>
  );
};

export default Radium(person);
