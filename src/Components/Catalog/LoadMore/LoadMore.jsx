import React from 'react';
import { connect } from 'react-redux';
import { loadMoreForCategory } from '../../../actions/actions'


class LoadMore extends React.Component {

  onLoadMoreBtn = () => {
    const { nav } = this.props.state
    let id = nav.find(el => el.active).id
    const url = id !== 'All'
      ? `http://localhost:7070/api/items?categoryId=${id}&offset=6`
      : 'http://localhost:7070/api/items?offset=6'

    this.props.loadMore(url)
  }

  render() {

    return (
      <div className="load-more">
        <button className="btn load-more__btn" onClick={this.onLoadMoreBtn}>Загрузить ещё</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { catalogNavState } = state
  return {
    state: catalogNavState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMore: (url) => dispatch(loadMoreForCategory(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore)