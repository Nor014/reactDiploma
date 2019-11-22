import React from 'react';
import { NavLink } from 'react-router-dom'


class FooterNav extends React.Component {

  render() {
    return (
      <div className="footer-nav">
        <h3 className="footer-nav__title">Информация</h3>
        <ul className="footer-nav__items">
          <li className='footer-nav__item'>
            <NavLink exact to='/about.html' className='nav__link' activeClassName='active'>О магазине</NavLink>
          </li>
          <li className='footer-nav__item'>
            <NavLink exact to='/catalog.html' className='nav__link' activeClassName='active'>Каталог</NavLink>
          </li>
          <li className='footer-nav__item'>
            <NavLink exact to='/contacts.html' className='nav__link' activeClassName='active'>Контакты</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default FooterNav