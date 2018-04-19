import React, { Component } from 'react';
import './App.css';
import Navigation from "./Navigation/Navigation.js";
import { Provider } from 'react-redux';
import reducer from "./reducers";
import { createStore } from 'redux';
import CurrentPage from './CurrentPage/CurrentPage';
import Header from "./Header/Header";

const store = createStore(reducer);

export default class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <div id="app-header">
          <div className="header-component">
            {/* Header at top of page */}
            <Header />
          </div>
          <div className="App">
            <div className="navigation-component">
              {/* Red navbar with tabs */}
              <Navigation />
            </div>
            <div className="currentpage-component">
              {/* Whatever the current page is set to */}
              <CurrentPage />
            </div>
          </div>
          <footer>
            <div id="footer-details" className="footer-parts">
              <p>TYohoJr@Gmail.com</p>
              <p>630-204-0917</p>
            </div>
            <div id="footer-social" className="footer-parts">
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img className="social-sprites" src={require("./images/twitter.jpg")} alt="twitter" /></a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img className="social-sprites" src={require("./images/facebook.png")} alt="facebook" /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img className="social-sprites" src={require("./images/instagram.jpg")} alt="instagram" /></a>
            </div>
          </footer>
        </div>
      </Provider>
    );
  }
}
