import React from "react";

import classes from "./Burger.module.css";
import BurgerIngrident from "./BurgerIngredients/BurgerIngredients";

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(keys => {
      return [...Array(props.ingredients[keys])].map((_, index) => {
        return <BurgerIngrident key={keys + index} type={keys} />;
      });
    })
    .reduce((lastValue, currentValue) => {
      return lastValue.concat(currentValue);
    }, []);

  if (transformedIngredients.length === 0)
    transformedIngredients = <p>Please start adding ingredients</p>;

  return (
    <div className={classes.Burger}>
      <BurgerIngrident type="bread-top" />
      {transformedIngredients}
      <BurgerIngrident type="bread-bottom" />
    </div>
  );
};

export default Burger;
