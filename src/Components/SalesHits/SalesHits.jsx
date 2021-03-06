import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { loadHits } from '../../actions/actions';
import ProductCard from '../ProductCard/ProductCard';
import Error from '../Error/Error';


class SalesHits extends React.Component {
  componentDidMount = () => {
    this.props.componentLoad()
  }

  render() {
    const { hits, loading, error } = this.props.state;

    return (
      <div className="sales-hits container">
        <div className="container__title">Хиты продаж!</div>

        {loading && <Preloader />}
        {error && <Error error={error} retry={this.props.componentLoad} />}

        {hits &&
          <div className="container__wrap">
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
    componentLoad: () => dispatch(loadHits())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesHits)