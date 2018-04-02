import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import db from './util/db';

class App extends Component {
  //a
  constructor(props) {
      super(props);
      db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  }
  
  //b
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          sdifjoweifjewo
        </p>
      </div>
    );
  }
}

export default App;
