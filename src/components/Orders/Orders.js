import React, { useEffect } from 'react';
import './Orders.css';

const Orders = ({ orders, removeOrder}) => {
  const orderEls = orders.map(order => {
    return (
      <div
        className="order"
        key={order.id}
      >
        <h3>{order.name}</h3>
        <ul className="ingredient-list">
          {order.ingredients.map(ingredient => {
            return <li key={`${order.name}-${ingredient}`}>{ingredient}</li>
          })}
        </ul>
        <button
          onClick={e => removeOrder(e.target.key) }
        >
          Cancel Order
        </button>
      </div>
    )
  });

  return (
    <section
      data-cy="orders-container"
    >
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}

export default Orders;