import React from 'react';
import { Link } from 'react-router-dom'

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
          <Link to={`/catalog/${data.id}.html`} className="btn product-card__btn">Заказать</Link>
        </div>
      </div>
    )
  }
}