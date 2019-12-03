import React from 'react';
import { connect } from 'react-redux';
import { loadMoreForCategory } from '../../../actions/actions';
import Preloader from '../../Preloader/Preloader';
import Error from '../../Error/Error';


class LoadMore extends React.Component {

  onLoadMoreBtn = () => {
    const { nav } = this.props.state;
    const { items } = this.props.catalogState;

    const id = nav.length > 0 ? nav.find(el => el.active).id : undefined;
    const amoutnToMiss = items.length;
    const search = this.props.searchState.value;

    let url;

    if (search !== '') {
      url = `http://localhost:7070/api/items?q=${search}&offset=${amoutnToMiss}`
    } else {
      url = id !== 'All' && id !== undefined
        ? `http://localhost:7070/api/items?categoryId=${id}&offset=${amoutnToMiss}`
        : `http://localhost:7070/api/items?offset=${amoutnToMiss}`
    }

    this.props.loadMore(url);
  }

  render() {
    const { loading, error, disabled } = this.props.loadMoreState;
    const className = disabled ? 'btn load-more__btn disabled' : 'btn load-more__btn';
    return (
      <div className="load-more">
        {loading
          ? <Preloader />
          : error
            ? <Error error={error} retry={this.onLoadMoreBtn} />
            : <button className={className} onClick={this.onLoadMoreBtn}>Загрузить ещё</button>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { catalogNavState, loadMoreState, catalogState, searchState } = state
  return {
    state: catalogNavState,
    loadMoreState: loadMoreState,
    catalogState: catalogState,
    searchState: searchState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMore: (url) => dispatch(loadMoreForCategory(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore)