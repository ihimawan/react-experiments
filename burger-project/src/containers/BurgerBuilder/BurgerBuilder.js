import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal.js";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingridients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    };
  }

  addIngridientHandler = type => {
    const oldCount = this.state.ingridients[type];
    const newCount = oldCount + 1;
    const updatedIng = {
      ...this.state.ingridients
    };
    updatedIng[type] = newCount;
    this.setState({
      ingridients: updatedIng
    });
  };

  removeIngridientHandler = type => {
    const oldCount = this.state.ingridients[type];
    if (oldCount <= 0) return;
    const newCount = oldCount - 1;
    const updatedIng = {
      ...this.state.ingridients
    };
    updatedIng[type] = newCount;
    this.setState({
      ingridients: updatedIng
    });
  };

  render = () => {
    return (
      <Aux>
        <Modal>happy?</Modal>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls
          addIngridientHandler={this.addIngridientHandler}
          removeIngridientHandler={this.removeIngridientHandler}
        />
      </Aux>
    );
  };
}

export default BurgerBuilder;
