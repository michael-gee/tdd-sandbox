export const initialState = {
  todo1: {
    id: "todo1",
    message: "this is the first to do!"
  },
  todo2: {
    id: "todo2",
    message: "this is the second to do!"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
