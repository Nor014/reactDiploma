import React from 'react';
import { Redirect } from 'react-router-dom'

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
      if (!prevState.active || prevState.searchValue === '') {
        return { ...prevState, active: !prevState.active }
      } else {
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
          <input type="text" className={searchClassName} onChange={this.onSearchInputChange} />
        </div>
        <button type='button' className='btn header-search__btn' onClick={this.onSearchClick} />

        {this.state.redirect &&
          <Redirect to={{
            pathname: '/catalog.html',
            state: { value: this.state.searchValue }
          }} />}
      </div>
    )
  }
}

export default HeaderSearch