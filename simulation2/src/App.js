import React, { Component } from 'react';
import './App.css';
import Header from './component/header/Header';
import route from './route';



class App extends Component {
  constructor(){
    super()
    this.state={
      houses:[]
    }
  }



  render() {

    return (
      <div className="App">
        <Header/>
        { route }
      </div>
    );
  }
}

export default App;
