import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { loadHits } from '../../actions/actions';


class SalesHits extends React.Component {
  componentDidMount = () => {
    this.props.componentLoad()
  }

  render() {
    const { hits, loading, error } = this.props.state

    return (
      <div className="sales-hits">
        <div className="sales-hits__title">Хиты продаж!</div>

        {loading && <Preloader />}

        
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