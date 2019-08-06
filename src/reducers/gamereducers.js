import { GET_GAMES, ADD_GAME, DELETE_GAME, SORT_GAME } from "../actions/types";

const initialState = {
  games: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload
      };
    case ADD_GAME:
      return {
        ...state,
        games: [...state, action.payload]
      };
    case DELETE_GAME:
      return {
        ...state,
        games: state.games.filter((game)=>game.id!==action.payload)
      };
    case SORT_GAME:
      return {
        ...state,
        games: state.games.filter((game)=>game.rating>=1)  ,
      };

    default:
      return state;
  }
};
