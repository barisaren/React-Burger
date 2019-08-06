import { DELETE_GAME, GET_GAMES,ADD_GAME,SORT_GAME } from "./types";
import gameslist from "../DB/gamelist";

 export const getGames = () => {
  return async dispatch => {

    dispatch({ type: GET_GAMES, payload: gameslist.game });
  };
};
export const addGames = () => {
    return async dispatch => {
  
      dispatch({ type: ADD_GAME, payload: gameslist.game });
    };
  };
  export const deleteGames = (id) => {
    return async dispatch => {
  
      dispatch({ type: DELETE_GAME, payload: id });
    };
  };
  export const sortGames = (sortbyrating) => {
    return async dispatch => {
      
      dispatch({ type: SORT_GAME, payload:sortbyrating});

        
      
    };
  };
