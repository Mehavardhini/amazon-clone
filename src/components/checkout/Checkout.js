import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import Subtotal from '../subtotal/Subtotal';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img 
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="advertisement"
        />
        <div>
          <h2>Hello {user}</h2>
          <h3 className="checkout__title">Your shopping basket</h3>
          { basket?.map((itm) => ( <CheckoutProduct product={itm} key={itm.id}/> )) }
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
