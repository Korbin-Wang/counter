import { START, STOP, MINUS_ONE_SECOND, SET } from './action';


export function counterDown(state = { timeLeft: 10, isOn: false, counterOn: false }, action) {
  switch (action.type) {
    case START: {
      return { ...state, isOn: true, counterOn: true };
    }
    case STOP: {
      return { ...state, isOn: false, counterOn: false };
    }
    case MINUS_ONE_SECOND: {
      const res = state.timeLeft - 1;
      return { ...state, timeLeft: res };
    }
    case SET: {
      const res = action.payload;
      return { ...state, timeLeft: res };
    }
    default:
      return state;
  }
}
