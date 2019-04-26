import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state={

    text:""

  }
  handleInputAddText=(e)=>{
    console.log(e.target.value)
    this.setState({
      text: e.target.value
    })

  }
  handleResetClick =()=>
  this.setState({
    text: ""
  })

  render() {
    return (
      <div className="App">
      <input value ={this.setState.value} onChange={this.handleInputAddText} type="text"/>
      <button onClick={this.handleResetClick}>reset</button>
      <p className="text">{this.state.text.toUpperCase()}</p>
       
      </div>
    );
  }
}

export default App;
