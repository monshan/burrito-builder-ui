import React, { useState } from 'react';
import { postOrder } from '../../apiCalls';

const OrderForm = ({ addOrder }) => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    if (name && ingredients.length) {
      const newOrder = {
        name: name,
        ingredients: ingredients
      }
      postOrder(newOrder)
        .then(response => {
          if (response.ok) {
            return addOrder(response)
          }
          throw Error(response)
        })
        .then(() => clearInputs())
        .catch(err => console.log(err));
      // return clearInputs();
    }
    return window.alert("Please enter both a Name and at least 1 ingredient to place an order!")
  }

  const clearInputs = () => {
    setName('');
    setIngredients([]);
  }

  const handleIngredientChange = (actionIng, checked) => {
    if (checked) {
      return setIngredients([...ingredients, actionIng])
    }
    if (!checked) {
      const updated = ingredients.filter(ing => ing !== actionIng)
      return setIngredients([...updated])
    }
  }

  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];

  const ingredientButtons = possibleIngredients.map(ingredient => {
    return (
      <>
      <input
        type="checkbox"
        id={ ingredient }
        key={ `${ingredient}-checkbox` }
        name="burritoIng"
        value={ ingredient }
        onChange={event => handleIngredientChange(event.target.value, event.target.checked) }
        />
      <label for={ ingredient }>{ ingredient }</label>
      </>
    )
  });


  return (
    <form
      data-cy="form"
    >
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={ name }
        onChange={e => setName(e.target.value)}
      />
      
      { ingredientButtons }

      <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>

      <button onClick={e => handleSubmit(e)}>
        Submit Order
      </button>
    </form>
  )  
}

export default OrderForm;