import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

const modal = props => {
  return (<Aux>
    <div className={classes.Modal} style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-10)',
      opacity: props.show ? '1' : '0'
    }}>
      {props.children}</div>
    <Backdrop show={props.show} onClick={props.closePurchaseHandler}/>
  </Aux>)
};

export default modal;
