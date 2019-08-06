import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteGames } from "./actions";

class SingleGame extends Component {
  render() {
    const { id, name, gameType, rating } = this.props;
    return (
      <tr>
        <th scope="col">{id}</th>
        <th scope="col">{name}</th>
        <th scope="col">{gameType}</th>
        <th scope="col">{rating}</th>
        <th scope="col">
          <button onClick={() => this.props.deleteGames(id)}>Delete</button>
        </th>
      </tr>
    );
  }
}

export default connect(
  null,
  { deleteGames }
)(SingleGame);
