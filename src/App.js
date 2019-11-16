import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Components/Header/Header';
import MainScreen from './Components/MainScreen/MainScreen';
import store from './store/store';

import './App.css';
import './Components/Header/Header.css'
import './Components/Nav/Nav.css'
import './Components/HeaderSearch/HeaderSearch.css'
import './Components/HeaderCart/HeaderCart.css'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className='content'>
            <Route exact path='/' component={MainScreen} />
          </div>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
