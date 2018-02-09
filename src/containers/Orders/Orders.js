import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axiosOrders';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  componentDidMount () {
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render () {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default ErrorHandler(Orders, axios);