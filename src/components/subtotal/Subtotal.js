import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat 
        // value={getBasketTotal(basket)} 
        value={basket?.reduce((total, itm) =>  total + parseFloat(itm.price), 0)}
        decimalScale={2}
        displayType={'text'} 
        thousandSeparator={true} 
        prefix={'$'} 
        renderText={value => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )} 
      />
      <div>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Subtotal
