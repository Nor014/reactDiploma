import React from 'react';
import Banner from '../Banner/Banner';
import { connect } from 'react-redux';

class Cart extends React.Component {
  componentDidMount = () => {
    const productData = this.props.productState;
    console.log(productData)
    const productObj = {
      name: productData.data.title,
      size: productData.avaliableSizes.find(el => el.checked).size,
      amount: productData.amount,
      price: productData.data.price
    }

    console.log(productObj)
  }

  render() {
    console.log(this.props)
    return (
      <div className="cart">
        <Banner />


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { productState } = state
  return {
    productState: productState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

