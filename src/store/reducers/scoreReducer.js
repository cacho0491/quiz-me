import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currentScore: 0,
  correctAnswers: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SCORE_SUCCESS:
      return {
        ...state,
        currentScore: state.currentScore + 10,
        correctAnswers: state.correctAnswers + 1,
      };
    case actionTypes.ADD_SCORE_FAIL:
      return {
        ...state,
        currentScore: state.currentScore - 5,
      };
    case actionTypes.RE_START_GAME:
      return {
        currentScore: 0,
        correctAnswers: 0,
      };
    default:
      return state;
  }
};

export default reducer;
