import { GET_GAMES, ADD_GAME, DELETE_GAME, SORT_GAME } from "../actions/types";

const initialState = {
  games: [],
  sortedgames: [],
  sorted: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
        sorted: false
      };
    case ADD_GAME:
      return {
        ...state,
        games: [...state.games, action.payload]
      };
    case DELETE_GAME:
      return {
        ...state,
        games: state.games.filter(game => game.id !== action.payload)
      };
    case SORT_GAME:
      return {
        ...state,
        sorted: true,
        sortedgames: state.games.filter(game => game.rating === action.payload)
      };

    default:
      return state;
  }
};
