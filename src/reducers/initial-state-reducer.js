import { CHANGE_INITIAL_STATE } from '../constants';

export default (state = {
  message: 'This is the initial state of the application.'
}, action) => {
  if(action.type === CHANGE_INITIAL_STATE) {
    return { ...state, message: action.payload.message };
  }

  return state;
}