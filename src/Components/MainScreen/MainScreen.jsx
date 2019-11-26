import React from 'react';
import Banner from '../Banner/Banner';
import SalesHits from '../SalesHits/SalesHits';
import Catalog from '../Catalog/Catalog'

class MainScreen extends React.Component {
  render() {
    return (
      <section className="main-page">
        <Banner />
        <SalesHits />
        <Catalog fromMainPage={true} />
      </section>
    )
  }
}

export default MainScreen