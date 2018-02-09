import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: ''
    }
  }

  render () {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input className={classes.Input} type='text' name='name' placeholder='Name' />
          <input className={classes.Input} type='email' name='email' placeholder='Email' />
          <input className={classes.Input} type='text' name='street' placeholder='Street' />
          <input className={classes.Input} type='text' name='zip' placeholder='Zip Code' />
          <Button buttonType='Success'>Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;