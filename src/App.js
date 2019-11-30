import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import MainScreen from './Components/MainScreen/MainScreen';
import AboutShop from './Components/AboutShop/AboutShop';
import Contacts from './Components/Contacts/Contacts';
import Error404 from './Components/Error404/Error404';
import Catalog from './Components/Catalog/Catalog';
import Product from './Components/Product/Product';
import store from './store/store';

import './App.css';
import './Components/Header/Header.css'
import './Components/Header/Nav/Nav.css'
import './Components/Header/HeaderSearch/HeaderSearch.css'
import './Components/Header/HeaderCart/HeaderCart.css'
import './Components/Footer/Footer.css'
import './Components/Footer/FooterNav/FooterNav.css'
import './Components/FooterPayment/FooterPayment.css'
import './Components/Footer/FooterContacts/FooterContacts.css'
import './Components/Banner/Banner.css'
import './Components/AboutShop/AboutShop.css'
import './Components/Contacts/Contacts.css'
import './Components/Preloader/Preloader.css'
import './Components/ProductCard/ProductCard.css'
import './Components/SalesHits/SalesHits.css'
import './Components/Catalog/CatalogNav/CatalogNav.css'
import './Components/Catalog/LoadMore/LoadMore.css'
import './Components/Catalog/CatalogSearch/CatalogSearch.css'
import './Components/Product/Product.css'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className='content'>
            <Switch>
              <Route exact path='/' component={MainScreen} />
              <Route exact path='/about.html' component={AboutShop} />
              <Route exact path='/contacts.html' component={Contacts} />
              <Route exact path='/catalog.html' component={Catalog} />
              <Route exact path='/catalog/:id.html' component={Product} />
              <Route path='*' component={Error404} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
