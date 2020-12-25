import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat 
        // value={getBasketTotal(basket)} 
        value={15.645}  // Part of homework
        decimalScale={2}
        displayType={'text'} 
        thousandSeparator={true} 
        prefix={'$'} 
        renderText={value => ( // part of homework
          <>
            <p>
              Subtotal (0 items): <strong>{` ${value} `}</strong>
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
