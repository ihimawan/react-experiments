import React from "react";
import classes from "./Burger.css";
import BurgerIngridient from "./BurgerIngridient/BurgerIngridient";

const burger = props => {
  let ingridientsDiv = Object.keys(props.ingridients)
    .map(igName => {
      return [...Array(props.ingridients[igName])].map((_, i) => {
        return <BurgerIngridient type={igName} key={igName + i} />;
      });
    })
    .reduce((arr, curr) => {
      return arr.concat(curr);
    }, []);

  if (ingridientsDiv.length === 0) {
    ingridientsDiv = <p>Start the ingridients pls</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngridient type="bread-top" />
      {ingridientsDiv}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default burger;
