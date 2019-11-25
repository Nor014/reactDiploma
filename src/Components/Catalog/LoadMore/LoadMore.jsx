import React from 'react';
import { connect } from 'react-redux';
import { loadMoreForCategory } from '../../../actions/actions';
import Preloader from '../../Preloader/Preloader'


class LoadMore extends React.Component {

  onLoadMoreBtn = () => {
    const { nav } = this.props.state;
    const { items } = this.props.catalogState;

    const id = nav.find(el => el.active).id;
    const amoutnToMiss = items.length;
    const url = id !== 'All'
      ? `http://localhost:7070/api/items?categoryId=${id}&offset=${amoutnToMiss}`
      : `http://localhost:7070/api/items?offset=${amoutnToMiss}`

    this.props.loadMore(url);
  }

  render() {
    const { loading, error, disabled } = this.props.loadMoreState;
    const className = disabled ? 'btn load-more__btn disabled' : 'btn load-more__btn';
    return (
      <div className="load-more">
        {loading
          ? <Preloader />
          : <button className={className} onClick={this.onLoadMoreBtn}>Загрузить ещё</button>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { catalogNavState, loadMoreState, catalogState } = state
  return {
    state: catalogNavState,
    loadMoreState: loadMoreState,
    catalogState: catalogState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMore: (url) => dispatch(loadMoreForCategory(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore)