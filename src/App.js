import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.test=this.test.bind(this);
  }

  test(){
    axios.post("/test").then((result)=>{
      console.log(result.data);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.test}>Server Test</button>
      </div>
    );
  }
}

export default App;
