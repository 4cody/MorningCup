import { FETCH_HEADLINES } from '../actions/types';

const initialState = {
  headlines: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_HEADLINES:
      return {
        ...state,
        headlines: payload,
      };
    default:
      return state;
  }
}
