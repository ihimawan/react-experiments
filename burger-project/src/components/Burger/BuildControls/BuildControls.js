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
        <BuildControl
            label={control.label}
            type={control.type}
            add={props.addIngridientHandler}
            remove={props.removeIngridientHandler}
        />
    );
  });
  return <Aux>
    {controlsDiv}
    <button onClick={props.purchaseHandler}>Order now</button>
  </Aux>;
};

export default buildControls;
