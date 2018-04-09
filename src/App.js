import React, { Component } from 'react';
import './App.css';
import Navigation from "./Navigation/Navigation.js";
import { Provider } from 'react-redux';
import reducer from "./reducers";
import { createStore } from 'redux';
import CurrentPage from './CurrentPage/CurrentPage';

const store = createStore(reducer);

export default class App extends Component {

  render() {
    return (
      <Provider store={store} >
          <div className="App">
            <div className="navigation-component">
              <Navigation />
            </div>
            <div className="currentpage-component">
              <CurrentPage />
            </div>
          </div>
      </Provider>
    );
  }
}

