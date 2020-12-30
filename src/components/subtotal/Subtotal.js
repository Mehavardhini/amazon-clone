import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../../reducer';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat 
        // value={getBasketTotal(basket)} 
        value={ getBasketTotal(basket) }
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
        <button onClick={() => {history.push('/payment')}}>Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Subtotal
