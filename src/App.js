import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DataCollection from './util/DataCollection';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data: [],
        newText: ""
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
              <span>{doc.id} - {doc.text}</span>
            </div>
          )
        })}

        <input 
          type="text" 
          value={this.state.newText} 
          onChange={ event => {
            this.setState({newText:event.target.value});
          }}
        />
        <button onClick={async ()=>{
          let item = {text: this.state.newText};
          let docref = await DataCollection.insert(item)
          let newData = [...this.state.data];

          item.id = docref.id;

          newData.push(item);
          this.setState({
            data: newData,
            newText: ""
          });

        }}>submit</button>

      </div>
    );
  }
}

export default App;
