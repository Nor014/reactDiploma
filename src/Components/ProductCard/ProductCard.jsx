import React from 'react';
import { Link } from 'react-router-dom';


export default class ProductCard extends React.Component {
  onImgError = (event) => {
    event.target.onerror = null;
    event.target.src = 'https://media.giphy.com/media/wZmCr7odNxKP6/giphy.gif';
  }

  render() {
    const { data } = this.props;
  
    return (
      <div className="product-card">
        <div className="product-card__head">
          <img src={data.images[0]} alt={data.title} className="product-card__img" onError={this.onImgError} />
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