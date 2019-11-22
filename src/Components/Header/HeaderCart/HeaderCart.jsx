import React from 'react';
import { connect } from 'react-redux';


class HeaderCart extends React.Component {

  render() {
    const { items } = this.props.state;
    const cartClassName = items > 0 ? 'header-cart__label cart_active' : 'header-cart__label';
    console.log(this.props)

    return (
      <div className="header-cart">
        <button className='btn header-cart__btn' />
        <div className={cartClassName}>{items}</div>
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
