import React from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {

  const [{ basket, user}, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">

        <h1 className="payment__heading">
          Checkout <Link to='/checkout'>({basket ? basket.length : 0 } items) </Link>
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            Delivery Address
          </div>
          <div className="payment__address">
            <p>{user}</p>
            <p>123 Main St</p>
            <p>Seattle</p>
            <p>WA - 98115</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            Review Items in Basket
          </div>
          <div className="payment_items">
            {
              basket.map((item) => (
                <CheckoutProduct
                  product={item}
                />
              ))
            }
          </div>
        </div> 
        <div className="payment__section">
          <div className="payment__title">
            Payment method
          </div>
          <div>
            
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Payment
