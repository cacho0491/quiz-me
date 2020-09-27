import * as actionTypes from "./actionTypes";

export const addScoreStart = () => {
  return {
    type: actionTypes.ADD_SCORE_START,
  };
};
export const addScoreSuccess = () => {
  return {
    type: actionTypes.ADD_SCORE_SUCCESS,
  };
};
export const addScoreFail = () => {
  return {
    type: actionTypes.ADD_SCORE_FAIL,
  };
};

export const reStartGame = () => {
  return {
    type: actionTypes.RE_START_GAME,
  };
};

export const addScore = () => {
  return (dispatch) => {
    dispatch(addScoreSuccess());
  };
};
