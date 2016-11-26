import { DATA } from 'actionTypes';

const initialState = {
  pending: false,
  error: false,
};

export default function dataReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DATA.GET_ERROR:
      state.pending = false;
      state.error = true;
      state.result = action.payload;
      break;

    case DATA.GET_PENDING:
      state.pending = true;
      state.error = false;
      break;

    case DATA.GET_SUCCESS:
      state.pending = false;
      state.error = false;
      state.result = action.payload;
      break;

    default:
      break;
  }
  return state;
}
