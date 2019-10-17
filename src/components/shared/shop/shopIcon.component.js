import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import '../../../styles/css/header.css';

class ShopIconComponent extends React.Component {

    template = ( <FontAwesomeIcon className="blue" icon={faShoppingCart} onClick={this.handleClickShopCart} /> );

    constructor(props) {
        super();
        console.log(props);
    }

    handleClickShopCart(e) {
        // Aqui vai o redirect!!!
    }
    

    render() {
       return this.template;
    }

 
}

export default ShopIconComponent;