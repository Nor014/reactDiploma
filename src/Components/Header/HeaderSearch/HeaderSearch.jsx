import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchValue } from '../../../actions/actions';

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      active: false,
      redirect: false
    }
  }

  onSearchClick = () => {
    this.setState((prevState) => {
      if (prevState.redirect) {
        return { ...prevState, redirect: false, active: !prevState.active, searchValue: '' }
      }

      if (!prevState.active) {
        return { ...prevState, active: !prevState.active }
      }

      if (prevState.searchValue === '') {
        return { ...prevState, active: !prevState.active }
      }

      if (prevState.active && prevState.searchValue !== '') {
        this.props.setSearchValue(this.state.searchValue)
        return { ...prevState, redirect: !prevState.redirect, active: !prevState.active }
      }
    })
  }

  onSearchInputChange = (event) => {
    const { value } = event.target
    this.setState((prevState) => {
      return { ...prevState, searchValue: value }
    })
  }

  render() {
    const searchClassName = this.state.active ? 'header-search__input search_active' : 'header-search__input';

    return (
      <div className="header-search">
        <div className="header-search__input-wrap">
          <input type="text" className={searchClassName} onChange={this.onSearchInputChange} value={this.state.searchValue} />
        </div>
        <button type='button' className='btn header-search__btn' onClick={this.onSearchClick} />

        {this.state.redirect &&
          <Redirect to='/catalog.html' />}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchValue: (value) => dispatch(setSearchValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch)
