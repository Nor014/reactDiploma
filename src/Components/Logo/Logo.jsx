import React from 'react';
import logoImg from '../Logo/header-logo.png';
import { Link } from 'react-router-dom'

class Logo extends React.Component {

  render() {
    const className = this.props.class ? `logo ${this.props.class}` : 'logo'

    return (
      <Link excat to="/" className={className}>
        <img src={logoImg} alt="логотип BosaNoga" className='logo__img' />
      </Link>
    )
  }
}

export default Logo