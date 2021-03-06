import React, { Component } from "react";

import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Auxs";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Builder Control</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
