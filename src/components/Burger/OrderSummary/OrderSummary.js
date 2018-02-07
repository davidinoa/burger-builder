import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredient => (
      <li key={ingredient}>
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
      <p>Continue to Checkout?</p>
      <Button buttonType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button buttonType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
};

export default OrderSummary;