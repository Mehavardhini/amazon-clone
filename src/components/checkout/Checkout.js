import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img 
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="advertisement"
          />
        </Link>
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout__right">
      <h2>Your subtotal</h2>
      </div>
    </div>
  )
}

export default Checkout
