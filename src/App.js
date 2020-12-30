import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import Payment from './components/payment/Payment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'; 

function App() {
  const [state, dispatch] = useStateValue();
  const promise = loadStripe('pk_test_51I3rasD78onwPstXZjETdTP7SXmjP2Lurk5jlGlcgdGwazrVm2HAo6mow5tuhiBPbSnwl9ov93jLvGujvHW3QpU3000nVDSbFU');

  // Run only once
  useEffect(() => {
    auth.onAuthStateChanged(auth => {
      dispatch({
        type: 'SET_USER',
        user: auth ? auth.email : null
      })
    })
  }, []);

  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout/>
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
