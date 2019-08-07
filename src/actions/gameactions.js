import { DELETE_GAME, GET_GAMES, ADD_GAME, SORT_GAME } from "./types";
import gameslist from "../DB/gamelist";

export const getGames = () => {
  return async dispatch => {
    dispatch({ type: GET_GAMES, payload: gameslist.game });
  };
};
export const addGames = ({ name, gameType, rating }) => {
  return async dispatch => {
    const id = Math.floor(Math.random() * 200);

    dispatch({ type: ADD_GAME, payload: { id, name, gameType, rating } });
  };
};
export const deleteGames = id => {
  return async dispatch => {
    dispatch({ type: DELETE_GAME, payload: id });
  };
};
export const sortGames = sortbyrating => {
  return async dispatch => {
    dispatch({ type: SORT_GAME, payload: sortbyrating });
  };
};
