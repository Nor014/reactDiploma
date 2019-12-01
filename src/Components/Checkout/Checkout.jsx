import React from 'react';
import { connect } from 'react-redux';
import { checkout } from '../../actions/actions';
import Preloader from '../Preloader/Preloader';


class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      phone: '',
      address: '',
      formError: false
    }
  }

  onCheckBtn = () => {
    this.setState(prevState => ({ ...prevState, checked: !prevState.checked, formError: false }))
  }

  onInputBtn = (event) => {
    const { id, value } = event.target
    this.setState(prevState => ({ ...prevState, [id]: value, formError: false }))
  }

  onSubmitBtn = () => {
    const { checked, phone, address } = this.state

    if (checked && phone.length > 0 && address.length > 0) {
      const data = {
        owner: {
          phone: phone,
          address: address
        },
        items: this.props.items.map(el => {
          return {
            id: el.productId,
            price: el.price,
            count: el.amount
          }
        })
      }

      this.props.checkout(data, 'http://localhost:7070/api/order');
      this.setState(prevState => ({ ...prevState, checked: false, phone: '', address: '', formError: false }));
    } else {
      this.setState(prevState => ({ ...prevState, formError: true }))
    }
  }

  render() {
    const { success, loading, error } = this.props.checkoutState
    const className = this.props.className ? `checkout ${this.props.className}` : 'checkout'

    return (
      <div className={className}>
        <h2 className="checkout__title">Оформить заказ</h2>

        <div className={this.state.formError ? 'checkout__form-error error_visible' : 'checkout__form-error'}>
          <p>Указаны не все данные</p>
        </div>

        {loading
          ? <Preloader />
          : <form className="checkout__wrap">
            <label className='checkout__label' htmlFor='phone'>Телефон</label>
            <input type="text" id='phone' className='checkout__input' placeholder='Ваш телефон' value={this.state.phone} onChange={this.onInputBtn} />

            <label className='checkout__label' htmlFor='address'>Адрес</label>
            <input type="text" id='address' className='checkout__input' placeholder='Адрес доставки' value={this.state.address} onChange={this.onInputBtn} />

            <label className='checkout__checkbox-label'>
              <input type="checkbox" id='check' className='checkout__checkbox' checked={this.state.checked} onChange={this.onCheckBtn} />
              Согласен с правилами доставки</label>

            <button className="btn checkout__btn" type='button' onClick={this.onSubmitBtn}>Оформить</button>
          </form>
        }
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  const { checkoutState } = state
  return {
    checkoutState: checkoutState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkout: (data, url) => dispatch(checkout(data, url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)