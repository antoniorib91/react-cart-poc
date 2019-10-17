import React from 'react'

class CardComponent extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default CardComponent;