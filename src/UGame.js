import React, { Component } from "react";
import { connect } from "react-redux";
import { getGames } from "./actions";
import SingleGame from "./SingleGame";

class UGame extends Component {
  componentWillMount() {
    this.props.getGames();
   
  }
  handleonClick=()=>{
    const a=this.value
    console.log(a);
  }
 

  render() {
    const { games } = this.props;
    console.log(this.props)

    return (
      <div>
        <div className="Buttons">
          <p>Ratings</p>
          <button value= {1} onClick={this.handleonClick}>1</button>
          <button value={2} onClick={this.handleonClick}>2</button>
          <button value={3} onClick={this.handleonClick}>3</button>
          <button value={4} onClick={this.handleonClick}>4</button>
          <button value={5} onClick={this.handleonClick}>5</button>
        </div>
        <table className="table">
        
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Game Name</th>
          <th scope="col">Game Type</th>
          <th scope="col">Game Rating</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {games.map(game => {
          const { id, name, gameType, rating } = game;
          return (
            <SingleGame
              key={id}
              id={id}
              name={name}
              gameType={gameType}
              rating={rating}
            />
          );
        })}
      </tbody>
    </table></div>
      
    );
  }
}

const mapStatetoProps = ({ gamereducer }) => {
  return {
    games: gamereducer.games
  };
};

export default connect(
  mapStatetoProps,
  { getGames }
)(UGame);
