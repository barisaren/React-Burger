import React, { Component } from "react";
import "./App.css";
import AddGame from "./Addgame";
import UGame from "./UGame";

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <AddGame />
        
        <UGame sortby={this.state}/>

        
      </div>
    );
  }
}

export default App;
