import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngridient.css";

class BurgerIngridient extends Component {
  render = () => {
    let ingRes;
    switch (this.props.type) {
      case "bread-top":
        ingRes = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "bread-bottom":
        ingRes = <div className={classes.BreadBottom}></div>;
        break;
      case "meat":
        ingRes = <div className={classes.Meat}></div>;
        break;
      case "cheese":
        ingRes = <div className={classes.Cheese}></div>;
        break;
      case "salad":
        ingRes = <div className={classes.Salad}></div>;
        break;
      case "bacon":
        ingRes = <div className={classes.Bacon}></div>;
        break;
      default:
        break;
    }

    return ingRes;
  };
}

BurgerIngridient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngridient;
