import { DATA } from 'actionTypes';

export function getPending() {
  return {
    type: DATA.GET_PENDING,
  };
}

export function getSuccess(response) {
  return {
    type: DATA.GET_SUCCESS,
    payload: response,
  };
}

export function getError(error) {
  return {
    type: DATA.GETTA_ERROR,
    payload: error,
  };
}
