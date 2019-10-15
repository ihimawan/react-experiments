import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal.js";
import Button from "../../components/UI/Button/Button"

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingridients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      purchasing: false
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

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  closePurchaseHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  render = () => {
    return (
      <Aux>
        <Modal show={this.state.purchasing} closePurchaseHandler={this.closePurchaseHandler}>
          <Button btnType="Success">CANCEL</Button>
          <Button btnType="Danger">OK</Button>
        </Modal>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls
            addIngridientHandler={this.addIngridientHandler}
            removeIngridientHandler={this.removeIngridientHandler}
            purchaseHandler={this.purchaseHandler}
        />
      </Aux>
    );
  };
}

export default BurgerBuilder;
