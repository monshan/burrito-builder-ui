import React, { Component, useState } from 'react';

const OrderForm = () => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    this.clearInputs();
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
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={ name }
        onChange={e => setName(e.target.value)}
      />
      
      { ingredientButtons }

      <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>

      <button onClick={e => this.handleSubmit(e)}>
        Submit Order
      </button>
    </form>
  )  
}

// class OrderForm extends Component {
//   constructor(props) {
//     super();
//     this.props = props;
//     this.state = {
//       name: '',
//       ingredients: []
//     };
//   }


//   handleSubmit = e => {
//     e.preventDefault();
//     this.clearInputs();
//   }

//   clearInputs = () => {
//     this.setState({name: '', ingredients: []});
//   }

//   render() {
//     const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
//     const ingredientButtons = possibleIngredients.map(ingredient => {
//       return (
//         <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
//           {ingredient}
//         </button>
//       )
//     });

//     return (
//       <form>
//         <input
//           type='text'
//           placeholder='Name'
//           name='name'
//           value={this.state.name}
//           onChange={e => this.handleNameChange(e)}
//         />

//         { ingredientButtons }

//         <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

//         <button onClick={e => this.handleSubmit(e)}>
//           Submit Order
//         </button>
//       </form>
//     )
//   }
// }

export default OrderForm;
