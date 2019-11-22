import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { loadHits, deleteHits } from '../../actions/actions';
import ProductCard from '../ProductCard/ProductCard'


class SalesHits extends React.Component {
  componentDidMount = () => {
    this.props.componentLoad()
  }

  componentWillUnmount = () => {
    this.props.componentAumount()
  }

  render() {
    const { hits, loading, error } = this.props.state

    return (
      <div className="sales-hits">
        <div className="sales-hits__title">Хиты продаж!</div>

        {loading && <Preloader />}

        {hits &&
          <div className="sales-hits__wrap">
            {hits.map(el => <ProductCard key={el.id} data={el} />)}
          </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { hitsState } = state;
  return { state: hitsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    componentLoad: () => dispatch(loadHits()),
    componentAumount: () => dispatch(deleteHits())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesHits)