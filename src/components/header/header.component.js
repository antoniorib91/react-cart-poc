import React from 'react';
import logo from '../../logo.svg';
import ShopIconComponent from '../shared/shop/shopIcon.component';

const template = (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">React App
    <img src={logo} className="App-logo" alt="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto"></ul>
      <div className="my-2 my-lg-0">
          <ShopIconComponent></ShopIconComponent>
      </div>
    </div>
  </nav>
);

class HeaderComponent extends React.Component {

  constructor(props) {
    super();
    console.log(props)
    // this.props.logoSrc = props.logoSrc;
  }

  render() {
    return template;
  }
}

export default HeaderComponent;