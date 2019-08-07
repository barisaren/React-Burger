import React, { Component } from "react";
import { connect } from "react-redux";
import { addGames } from "./actions/gameactions";

class AddGame extends Component {
  state = {
    name: "",
    gameType: "",
    rating: ""
  };
  //inputvalue={name,type,rating}
  onSubmit = e => {
    e.preventDefault();
    const { name, gameType, rating } = this.state;
    this.props.addGames({ name, gameType, rating });
  };
  handleChange1 = e => {
    this.setState({ name: e.target.value });

    console.log("handleCHANGE1 worked!", this.state.gamename);
  };
  handleChange2 = e => {
    this.setState({ gameType: e.target.value });

    console.log("handleCHANGE2 worked!", this.state.gametype);
  };
  handleChange3 = e => {
    this.setState({ rating: e.target.value });

    console.log("handleCHANGE3 worked!", this.state.gamerating);
  };
  render() {
    return (
      <div className="adduser">
        <h4 className="addheader">Add new Game</h4>
        <div className="addbody">
          <form>
            <label htmlFor="name">Game Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Game Name"
              onChange={this.handleChange1}
            />
            <br />

            <label htmlFor="gametype">Game Type</label>
            <input
              type="text"
              name="gametype"
              placeholder="Enter Game Type"
              onChange={this.handleChange2}
            />
            <br />

            <label htmlFor="gamerating">Game Rating</label>
            <input
              type="text"
              name="gamerating"
              placeholder=" Enter Game Rating"
              onChange={this.handleChange3}
            />
            <br />
            <button type="submit" onClick={this.onSubmit}>
              Add Game
            </button>
          </form>
        </div>
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
  { addGames }
)(AddGame);
