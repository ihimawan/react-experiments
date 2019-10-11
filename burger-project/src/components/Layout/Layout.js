import React from "react";
import Aux from "../../hoc/Aux/Aux";
import classes from "./Layout.css";

const layout = props => {
  return (
    <Aux>
      <div>header</div>
      <main className={classes.content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
