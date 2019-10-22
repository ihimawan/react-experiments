import React from "react";

const buildControl = props => {

    const styles = {
        color: "blue",
        textAlign: "center"
    }

    return (<div style={styles}>
      <button onClick={props.remove.bind(this, props.type)}>-</button>
      {props.label}
      <button onClick={props.add.bind(this, props.type)}>+</button>
    </div>
  );
};

export default buildControl;
