import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Navigation from "./navigation/navigation.js";
import LandingPage from "./landing-page/landing-page.js";

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
      console.log(result.data);
    })
  }

  changeActivePage(){
    this.setState({
      activePage:"This is the current active page!!"
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Navigation/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{this.state.activePage}</div>
        <button onClick={this.test}>Server Test</button>
        <button onClick={this.changeActivePage}>Change Active Page</button>
      </div>
    );
  }
}
