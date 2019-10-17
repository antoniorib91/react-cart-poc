import React from 'react'


class CartItemComponent extends React.Component {
  
  constructor(props) {
    super();
  }

  render() {
    return <h1>{this.props.name}</h1>;
  }
}

export default CartItemComponent;