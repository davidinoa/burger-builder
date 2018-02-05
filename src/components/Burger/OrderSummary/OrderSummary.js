import React from 'react';
import Aux from '../../../hoc/Aux'

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredient => (
      <li>
        <span style={{textTransform: 'capitalize'}}>
          {ingredient}: {props.ingredients[ingredient]}
        </span>
      </li>
    ));

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
    </Aux>
  )
};

export default OrderSummary;