import React from 'react'
import CardComponent from '../shared/card/card.component';
import OffersComponent from '../offers/offers.component';
import CartComponent from '../cart/cart.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../../styles/css/container.css';

class ContainerComponent extends React.Component {
  
  render() {
    return (
      <div className="container-fluid with-padding">
        <BrowserRouter>
          <Switch>
              <Route path="/" exact={true}>
                <CardComponent>
                  <OffersComponent></OffersComponent>
                </CardComponent>
              </Route>
              <Route path="/cart">
                <CardComponent>
                  <CartComponent></CartComponent>
                </CardComponent>
              </Route>
          </Switch>
        </BrowserRouter>
      </div>
     
    );
  }
}

export default ContainerComponent;

