import React from 'react';
import Banner from '../Banner/Banner';
import Preloader from '../Preloader/Preloader';
import { connect } from 'react-redux';
import { loadProduct } from '../../actions/actions';

class Product extends React.Component {
  componentDidMount = () => {
    const { id } = this.props.match.params
    const url = ` http://localhost:7070/api/items/${id}`;

    this.props.loadComponent(url);
  }

  render() {
    const { data, loading, error } = this.props.state
    console.log(this.props)

    return (
      <div className="product">
        <Banner />

        {loading && <Preloader />}



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
    loadComponent: (url) => dispatch(loadProduct(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)