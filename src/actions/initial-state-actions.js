import { CHANGE_INITIAL_STATE } from '../constants';

export const changeInitialState = () => ({
  type: CHANGE_INITIAL_STATE,
  payload: {
    message: 'Initial State Changed!!!!'
  }
})