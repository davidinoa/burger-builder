import React from 'react';
import classes from './Order.js';

const Order = (props) => (
  <div className={classes.Order}>
    <p>Ingredients</p>
    <p>Price: <strong>$5.45</strong></p>
  </div>
);

export default Order;