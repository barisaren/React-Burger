import React,{Component} from "react";
import "./App.css";
import Game from './Game/Game';
import gameslist from "./DB/gamelist";
import AddGame from "./Addgame";
import UGame from "./UGame";



 
  class App extends Component{
    
    
    constructor(props){
      super(props);
      
      this.state={
        game:gameslist.game
      }
      this.deleteBurger=this.deleteBurger.bind(this);

    }
    deleteBurger(id){
      let updateBurgers=this.state.game
      updateBurgers=updateBurgers.filter(game=>game.id!==id);
      this.setState({
        game:updateBurgers
      })
      console.log("app delete",id);


    }
  render(){
  return (
    <div className="App">
      <AddGame/>
      <UGame  deleteBurger ={this.deleteBurger} burgers={this.state.game}/>


      
       {/* <div className="Buttons">
      <p>Ratings</p>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>  */}
      
      
    </div>
  );
    }
}

export default App;
