import React from 'react';

export default class ProductCard extends React.Component {
  
  render() {
    const { data } = this.props

    return (
      <div className="product-card">
        <div className="product-card__head">
          <img src={data.images[0]} alt={data.title} className="product-card__img" />
        </div>
        <div className="product-card__body">
          <div className="product-card__name">{data.title}</div>
          <div className="product-card__price">{data.price} руб.</div>
          <button type='button' className="btn product-card__btn">Заказать</button>
        </div>
      </div>
    )
  }
}