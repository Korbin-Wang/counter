export const START = 'accumulator/counter/START';
export const STOP = 'accumulator/counter/STOP';
export const MINUS_ONE_SECOND = 'accumulator/counter/MINUS_ONE_SECOND';
export const SET = 'accumulator/counter/SET';

export function start() {
  return {
    type: START,
  };
}

export function stop() {
  return {
    type: STOP,
  };
}

export function minusOneSecond() {
  return {
    type: MINUS_ONE_SECOND,
  };
}

export function set(val) {
  return {
    type: SET,
    payload: val,
  };
}
