import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import axios from '../../axios';
import { db } from '../../firebase';

function Payment() {

  const [{ basket, user}, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const history = useHistory();

  useEffect(() => {
    // Generate a special stripe secret that allows us to chatge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'POST',
        // Stripe expects the total in a currencies subunits
        // for $1, we have to pass as 100.
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
  }, [basket]);

  console.log('secret key >>>>>', clientSecret)

  const handleSubmit = e => {
    e.preventDefault();
    setProcessing(true);

    const payload = stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {

      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

      setProcessing(false);
      setSucceeded(true);
      setError(null);

      dispatch({
        type: 'EMPTY_BASKET'
      })

      // We don't want the uses to come back to the payment page 
      // by clicking back button, so we replace the url
      history.replace('/orders')
    })

  }

  const handleChange = e => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  }

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
            <p>{user ? user.email : ''}</p>
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
          <div className="payment__card">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className="payment__priceContainer">
                <CurrencyFormat 
                  value={getBasketTotal(basket)}
                  renderText={(value) => (
                      <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />
                <button className="payment__processing" disabled={processing || disabled || succeeded}>
                  { processing ? 'Processing' : 'Buy Now'}
                </button>
              </div>
            </form>
            
                  { error && <div>{error}</div> }
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Payment
