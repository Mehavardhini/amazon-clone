import React from 'react';
import './Order.css';
import moment from 'moment';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{ moment.unix(order.data.created).format("MMMM Do YYYY, h:mma") }</p>
      <p className="order__id">{ order.id }</p>

      { order.data.basket?.map((product) => (
        <CheckoutProduct product={product} hideButton={true}/>
      )) }
      <CurrencyFormat 
        value={ order.data.amount / 100 }
        renderText={(value) => (
            <h3>Order Total: {value}</h3>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  )
}

export default Order
