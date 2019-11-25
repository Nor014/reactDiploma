import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../../Preloader/Preloader';
import { catalogNavLoad, changeCatalogNav, loadNewCategory, catalogLoad } from '../../../actions/actions';

class CatalogNav extends React.Component {
  componentDidMount = () => {
    this.props.componentNavLoad('http://localhost:7070/api/categories')
  }

  onCatalogNavBtn = (id) => {
    this.props.componentNavChange(id);
    const url = id !== 'All' ? `http://localhost:7070/api/items?categoryId=${id}` : 'http://localhost:7070/api/items';
    this.props.componentCategoryLoad(url);
  }

  render() {
    const { nav, navLoading, navError } = this.props.catalogNavState;
    console.log(this.props)

    return (
      <ul className="catalog__nav">
        {navLoading && <Preloader />}
        {nav.length !== 0 &&
          <>
            {nav.map(el => <li key={el.id} className="catalog__nav-item">
              <button className={el.active ? 'btn catalog__btn catalog_btn_active' : 'btn catalog__btn'} type='button'
                onClick={() => this.onCatalogNavBtn(el.id)}>{el.title}</button>
            </li>)}
          </>}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  const { catalogNavState } = state
  return {
    catalogNavState: catalogNavState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentNavLoad: (url) => dispatch(catalogNavLoad(url)),
    componentNavChange: (id) => dispatch(changeCatalogNav(id)),
    componentCategoryLoad: (url) => dispatch(catalogLoad(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogNav)