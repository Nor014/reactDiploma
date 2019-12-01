import React from 'react';
import Banner from '../Banner/Banner';
import Checkout from '../Checkout/Checkout';
import { connect } from 'react-redux';
import nanoid from 'nanoid';
import { addToCart, deleteFromCart } from '../../actions/actions';

class Cart extends React.Component {
  componentDidMount = () => {
    if (this.props.productState.data !== '') {
      const productData = this.props.productState;

      const productObj = {
        id: nanoid(),
        productId: productData.data.id,
        name: productData.data.title,
        size: productData.avaliableSizes.find(el => el.checked).size,
        amount: productData.amount,
        price: productData.data.price
      }

      this.props.addToCart(productObj)
    }
  }

  onDeleteBtn = (id) => {
    this.props.deleteFromCart(id)
  }

  render() {
    const { items } = this.props.cartState;
    const { success } = this.props.checkoutState;
    const totalCost = items.reduce((acomulator, el) => acomulator + el.price * el.amount, 0);


    return (
      <div className="cart-page">
        <Banner />

        <div className="cart">
          <h2 className="cart__title">Корзина</h2>


          <table className='cart__table'>
            <tbody>
              <tr className='catr__table-head'>
                <td>#</td>
                <td width='265px'>Название</td>
                <td width='135px'>Размер</td>
                <td width='130px'>Кол-во</td>
                <td width='180px'>Стоимость</td>
                <td width='175px'>Итого</td>
                <td width='160px'>Действия</td>
              </tr>

              {items.map((el, index) =>
                <tr key={el.id}>
                  <td>{index + 1}</td>
                  <td width='265px' className='cart__table-name'>{el.name}</td>
                  <td width='135px'>{el.size}</td>
                  <td width='130px'>{el.amount}</td>
                  <td width='180px'>{el.price}</td>
                  <td width='175px'>{Number(el.amount) * Number(el.price)} руб.</td>
                  <td width='160px'>
                    <button className='btn cart__table__btn' onClick={() => this.onDeleteBtn(el.id)}>Удалить</button>
                  </td>
                </tr>
              )}

              <tr>
                <td colSpan='5' className='cart__table-total-cost'>Общая стоимость</td>
                <td>{totalCost} руб.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {success && <div className='checkout__success'>Заказ успешно оформлен</div>}
        {items.length > 0 ? <Checkout items={items} /> : <Checkout items={items} className='checkout_disabled' />}
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  const { productState, cartState, checkoutState } = state
  return {
    productState: productState,
    cartState: cartState,
    checkoutState: checkoutState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    deleteFromCart: (id) => dispatch(deleteFromCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

