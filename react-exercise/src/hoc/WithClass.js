import React from "react";

// const withClass = props => {
//   return <div className={props.classes}>{props.children}</div>;
// };

// wrapped component is what COMPONENT that going to be inside
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
