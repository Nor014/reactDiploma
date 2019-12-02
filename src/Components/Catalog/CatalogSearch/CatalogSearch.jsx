import React from 'react';
import { connect } from 'react-redux';
import { catalogLoad, setSearchValue } from '../../../actions/actions'


class CatalogSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.searchValue
    }
  }

  onSearchBtn = (event) => {
    if (this.state.value !== '') {
      const url = `http://localhost:7070/api/items?q=${this.state.value}`;
      this.props.catalogLoad(url);
      this.props.setSearchValue(this.state.value);
    }

    event.preventDefault()
  }

  onInputChange = (event) => {
    const { value } = event.target
    this.setState((prevState) => {
      return { ...prevState, value: value }
    })
  }

  render() {
    return (
      <form className="catalog-search" >
        <input type="text" className='catalog-search__input' placeholder='Поиск' value={this.state.value} onChange={this.onInputChange} />
        <button type='submit' className='btn catalog-search__btn' onClick={this.onSearchBtn} />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    catalogLoad: (url) => dispatch(catalogLoad(url)),
    setSearchValue: (value) => dispatch(setSearchValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogSearch)