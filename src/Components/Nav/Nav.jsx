import React from 'react';
import { NavLink } from 'react-router-dom'


class Nav extends React.Component {

  render() {
    return (
      <nav className="navigation">
        <NavLink exact to='/' className='nav__link' activeClassName='active'>Главная</NavLink>
        <NavLink exact to='/catalog.html' className='nav__link' activeClassName='active'>Каталог</NavLink>
        <NavLink exact to='/about.html' className='nav__link' activeClassName='active'>О магазине</NavLink>
        <NavLink exact to='/contacts.html' className='nav__link' activeClassName='active'>Контакты</NavLink>
      </nav>
    )
  }
}

export default Nav