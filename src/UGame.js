import React, { Component } from "react";
import { connect } from "react-redux";
import { getGames, sortGames } from "./actions";
import SingleGame from "./SingleGame";
import "./UGame.css";

const buttonlist = [1, 2, 3, 4, 5];

class UGame extends Component {
  componentWillMount() {
    this.props.getGames();
  }
  handleonClick = () => {
    const a = this.value;
    console.log(a);
  };

  render() {
    const { games, sortedgames, sorted } = this.props;
    console.log(this.props);

    return (
      <div>
        <div className="rating">
          {console.log(buttonlist)}
          {buttonlist.map(item => (
            <button key={item} onClick={() => this.props.sortGames(item)}>
              {item}
            </button>
          ))}
          <button onClick={this.props.getGames}>Show All</button>
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
            {!sorted &&
              games.map(game => {
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
            {sorted &&
              sortedgames.map(game => {
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
        </table>
      </div>
    );
  }
}

const mapStatetoProps = ({ gamereducer }) => {
  return {
    games: gamereducer.games,
    sortedgames: gamereducer.sortedgames,
    sorted: gamereducer.sorted
  };
};

export default connect(
  mapStatetoProps,
  { getGames, sortGames }
)(UGame);
