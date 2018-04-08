import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DataCollection from './util/DataCollection';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data: []
      }
      this.loadData();
  }
  async loadData() {

    let data = await DataCollection.list();
    this.setState({data}); 
    
  }
  render() {
    return (
      <div className="App">
        

        {this.state.data.map(doc => {
          return (
            <div>
              <span>{doc.id}</span>
            </div>
          )
        })}

      </div>
    );
  }
}

export default App;
