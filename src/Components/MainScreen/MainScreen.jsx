import React from 'react';
import Banner from '../Banner/Banner';
import SalesHits from '../SalesHits/SalesHits';

class MainScreen extends React.Component {

  render() {

    return (
      <section className="main-page">
        <Banner />
        <SalesHits />
      </section>
    )
  }
}

export default MainScreen