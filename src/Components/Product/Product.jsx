import React from 'react';
import Banner from '../Banner/Banner';
import Preloader from '../Preloader/Preloader';
import { connect } from 'react-redux';
import { loadProduct, changeCheckbox } from '../../actions/actions';

class Product extends React.Component {
  componentDidMount = () => {
    const { id } = this.props.match.params
    const url = ` http://localhost:7070/api/items/${id}`;

    this.props.loadComponent(url);
  }

  onChechboxClick = (event) => {
    const { value } = event.target
    this.props.changeCheckbox(value)
  }

  render() {
    const { data, loading, error, avaliableSizes } = this.props.state;
    console.log(this.props.state)

    return (
      <div className="product-page">
        <Banner />

        {loading && <Preloader />}

        {data !== '' &&
          <div className="product">
            <h2 className="product__name">{data.title}</h2>
            <div className="product__inner">

              <div className="product__img-inner">
                <img src={data.images[0]} alt={data.title} className="product__img" />
              </div>

              <div className="product__body">
                <table className="product__table">
                  <tbody>
                    <tr>
                      <td>Артикул</td>
                      <td>{data.sku}</td>
                    </tr>
                    <tr>
                      <td>Производитель</td>
                      <td>{data.manufacturer}</td>
                    </tr>
                    <tr>
                      <td>Цвет</td>
                      <td>{data.color}</td>
                    </tr>
                    <tr>
                      <td>Материалы</td>
                      <td>{data.material}</td>
                    </tr>
                    <tr>
                      <td>Сезон</td>
                      <td>{data.season}</td>
                    </tr>
                    <tr>
                      <td>Повод</td>
                      <td>{data.reason}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="product__sizes">
                  <p className="product__sizes-text">Размеры в наличии:</p>
                  {avaliableSizes.map((el, index) =>
                    <label className={el.checked ? 'product__input-lable product_checked' : 'product__input-lable'} key={index}>
                      <input className='product__input' type='checkbox' value={el.size} checked={el.checked} onClick={this.onChechboxClick} />
                      {el.size}</label>)}
                </div>
              </div>
            </div>

          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { productState } = state
  return {
    state: productState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadComponent: (url) => dispatch(loadProduct(url)),
    changeCheckbox: (size) => dispatch(changeCheckbox(size))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)