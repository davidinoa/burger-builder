import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])]
        .map((element, i) => {
          return <BurgerIngredient key={ingredient + i} type={ingredient} />
        });
    })
    .reduce((output, element) => {
      return output.concat(element);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  };

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
        {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
};

export default Burger;