import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Navigation from "./navigation/navigation.js";
import LandingPage from "./landing-page/landing-page.js";

import { Provider } from 'react-redux';
import reducer from "./reducers";
import { createStore } from 'redux';

const store = createStore(reducer);

export default class App extends Component {
  constructor(){
    super();
    this.test=this.test.bind(this);
    this.changeActivePage=this.changeActivePage.bind(this);
    this.state={
      activePage:<LandingPage/>
    }
  }

  test(){
    axios.post("/test").then((result)=>{
      // console.log(result.data);
      this.changeActivePage();
    })
  }

  changeActivePage(){
    // this.setState({
    //   activePage:"This is the current active page!!"
    // })
    this.props.dispatch({
      activePage:"This is the current active page!!"
    })
  }

  render() {
    return (
      <Provider store={store} >
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Navigation/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{this.props.activePage}</div>
        <button onClick={this.test}>Server Test</button>
        <button onClick={this.changeActivePage}>Change Active Page</button>
      </div>
      </Provider>
    );
  }
}
