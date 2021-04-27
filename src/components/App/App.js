import React, { Component, useEffect, useState } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

const App = () => {
  const [orders, setOrders] = useState([])

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder])
  }

  useEffect(() => {
    getOrders()
      .then(result => setOrders(result.orders))
      .catch(err => console.error('Error fetching:', err));
  }, [orders])
  
  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm
          addOrder={ addOrder }
        />
      </header>

      <Orders
        orders={orders}
      />
    </main>
  );
}


export default App;
