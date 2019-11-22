import React from 'react';
import Logo from '../Logo/Logo';
import Nav from './Nav/Nav';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderCart from './HeaderCart/HeaderCart'

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <div className="header__nav-inner">
          <Logo class='header__logo' />
          <Nav />
        </div>
        <div className="header__content">
          <HeaderSearch />
          <HeaderCart />
        </div>
      </div>
    )
  }
}

export default Header