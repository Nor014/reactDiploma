import React from 'react';
import Banner from '../Banner/Banner'

class Error404 extends React.Component {

  render() {
    return (
      <div className="404">
        <Banner />
        <div class="404__text">
          <h2 class="404__title">Страница не найдена</h2>
          <p>Извините, такая страница не найдена!</p>
        </div>
      </div>
    )
  }
}

export default Error404