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

function App() {
  const [state, dispatch] = useStateValue();

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
          <Payment/>
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
