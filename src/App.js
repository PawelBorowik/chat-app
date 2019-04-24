import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state={

  }
  handleInputAddText=(e)=>{
    console.log(e.target.value)

  }

  render() {
    return (
      <div className="App">
      <input onChange={this.handleInputAddText} type="text"/>
      <button>reset</button>
      <p className="text"></p>
       
      </div>
    );
  }
}

export default App;
