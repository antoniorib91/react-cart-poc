import React from 'react'
import CartItemComponent from './cart-item/cart-item.component';

class Cart extends React.Component {

  items = ['Maquina de Secar', 'Geladeira', 'Fogão'];

  render() {
    return (
      <div>
        { this.addItensTemplate() }
      </div>
    );
  }


  addItensTemplate() {
    return this.items.map(i => {
      return (
        <div key={i}>
          <CartItemComponent name={i}></CartItemComponent>
        </div>
      );
    })
  }
}

export default Cart;