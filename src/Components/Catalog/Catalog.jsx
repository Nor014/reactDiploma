import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { catalogLoad } from '../../actions/actions';
import ProductCard from '../ProductCard/ProductCard';
import CatalogNav from './CatalogNav/CatalogNav';
import LoadMore from './LoadMore/LoadMore';
import Banner from '../Banner/Banner';
import CatalogSearch from './CatalogSearch/CatalogSearch'


class Catalog extends React.Component {
  componentDidMount = () => {
    this.props.searchState.value === ''
      ? this.props.componentLoad('http://localhost:7070/api/items')
      : this.props.componentLoad(`http://localhost:7070/api/items?q=${this.props.searchState.value}`)
  }

  render() {
    const { items, loading, error } = this.props.catalogState;
    const { fromMainPage } = this.props;
    const searchValue = this.props.searchState.value;

    return (
      <div className="catalog container">

        {!fromMainPage && <Banner />}
        {!fromMainPage && <CatalogSearch searchValue={searchValue} />}

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
  const { catalogState, searchState } = state
  return {
    catalogState: catalogState,
    searchState: searchState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentLoad: (url) => dispatch(catalogLoad(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)