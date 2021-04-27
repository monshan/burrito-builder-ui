export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postOrder = (newOrder) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newOrder)
  })
    .then(response => response.json())
}

export const deleteOrder = (id) => {
  return fetch(`/api/v1/orders/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  })
}