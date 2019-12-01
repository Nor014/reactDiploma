import React from 'react';
import { connect } from 'react-redux';


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
      console.log(111)
    } else {
      this.setState(prevState => ({ ...prevState, formError: true }))
    }

  }

  render() {
    return (
      <div className="checkout">
        <h2 className="checkout__title">Оформить заказ</h2>

        <div className={this.state.formError ? 'checkout__form-error error_visible' : 'checkout__form-error'}>
          <p>Указаны не все данные</p>
        </div>

        <form className="checkout__wrap">
          <label className='checkout__label' htmlFor='phone'>Телефон</label>
          <input type="text" id='phone' className='checkout__input' placeholder='Ваш телефон' value={this.state.phone} onChange={this.onInputBtn} />

          <label className='checkout__label' htmlFor='address'>Адрес</label>
          <input type="text" id='address' className='checkout__input' placeholder='Адрес доставки' value={this.state.address} onChange={this.onInputBtn} />

          <label className='checkout__checkbox-label'>
            <input type="checkbox" id='check' className='checkout__checkbox' checked={this.state.checked} onChange={this.onCheckBtn} />
            Согласен с правилами доставки</label>

          <button className="btn checkout__btn" type='button' onClick={this.onSubmitBtn}>Оформить</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)