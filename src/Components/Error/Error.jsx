import React from 'react';

class Error extends React.Component {
  render() {
    return (
      <div className="error">
        <p className='error__message'>{this.props.error}</p>
        <button className='btn error__btn' type='button' onClick={this.props.retry}>Загрузить компонент</button>
      </div>
    )
  }
}

export default Error