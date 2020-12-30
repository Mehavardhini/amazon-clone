import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import Order from '../order/Order';

function Orders() {

  const [{ user }, dispatch ] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db
      .collection('users')
      .doc(user.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => {
        setOrders(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data()
        })))
      })
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <div className="orders">
      <h1>Your orders</h1>

      {orders?.map((order) => (
        <Order order={order} key={order.id}/>
      ))}
    </div>
  )
}

export default Orders
