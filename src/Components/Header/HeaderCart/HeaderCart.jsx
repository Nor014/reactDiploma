import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class HeaderCart extends React.Component {
  render() {
    const { items } = this.props.state;
    const cartClassName = items.length > 0 ? 'header-cart__label cart_active' : 'header-cart__label';

    return (
      <div className="header-cart">
        <Link to='/cart.html' className='btn header-cart__btn' />
        <div className={cartClassName}>{items.length}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { cartState } = state
  return { state: cartState }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCart)
