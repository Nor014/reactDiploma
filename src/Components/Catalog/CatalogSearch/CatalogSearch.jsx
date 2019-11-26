import React from 'react';
import { connect } from 'react-redux';


class CatalogSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.searchValue
    }
  }

  onInputChange = (event) => {
    const { value } = event.target

    this.setState((prevState) => {
      return { ...prevState, value: value }
    })
  }

  render() {
    return (
      <form className="catalog-search">
        <input type="text" className='catalog-search__input' placeholder='Поиск' value={this.state.value} onChange={this.onInputChange} />
      </form>
    )
  }
}

const mapStateToProps = (state) => {

  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogSearch)