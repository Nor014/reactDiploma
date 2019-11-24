import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { catalogLoad } from '../../actions/actions';
import ProductCard from '../ProductCard/ProductCard';
import CatalogNav from './CatalogNav/CatalogNav';
import LoadMore from './LoadMore/LoadMore'


class Catalog extends React.Component {
  componentDidMount = () => {
    this.props.componentLoad('http://localhost:7070/api/items')
  }

  render() {
    const { items, loading, error } = this.props.catalogState

    return (
      <div className="catalog container">
        <div className="container__title">Каталог</div>

        <CatalogNav />

        {loading && <Preloader />}

        {items.length > 0 &&
          <>
            <div className="container__wrap">
              {items.map(el => <ProductCard key={el.id} data={el} />)}
            </div>

            <LoadMore />
          </>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { catalogState, catalogNavState } = state
  return {
    catalogState: catalogState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentLoad: (url) => dispatch(catalogLoad(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)