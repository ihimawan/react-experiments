import React from "react";
import BuildControl from "./BuildControl";
import Aux from "../../../hoc/Aux/Aux";

const controls = [
  {
    label: "Salad",
    type: "salad"
  },
  {
    label: "Bacon",
    type: "bacon"
  },
  {
    label: "Cheese",
    type: "cheese"
  },
  {
    label: "Meat",
    type: "meat"
  }
];

const buildControls = props => {
  const controlsDiv = controls.map(control => {
    return (
      <Aux>
        <BuildControl
          label={control.label}
          type={control.type}
          add={props.addIngridientHandler}
          remove={props.removeIngridientHandler}
        />
        <button onClick={props.purchaseHandler}>Order now</button>
      </Aux>
    );
  });
  return <div>{controlsDiv}</div>;
};

export default buildControls;
