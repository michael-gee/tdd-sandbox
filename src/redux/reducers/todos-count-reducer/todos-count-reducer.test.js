import todosCountReducer, { initialState } from "./";

describe("todos-count-reducer", () => {
  it("returns initial state if no new state is passed", () => {
    expect(todosCountReducer(initialState, {})).not.toBeUndefined();
  });
});
