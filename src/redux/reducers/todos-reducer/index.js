import { ADD_TODO } from "../../constants";

export const initialState = [
  {
    id: "todo1",
    message: "this is the first to do!"
  },
  {
    id: "todo2",
    message: "this is the second to do!"
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(action.payload);
      return {};

    default:
      return state;
  }
};
