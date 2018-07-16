import actions from "../../actions/todos-actions";
import todosReducer, { initialState } from "./";

describe("todos-reducer", () => {
  it("returns initial state if no new state is passed", () => {
    expect(todosReducer(initialState, {})).toEqual(initialState);
  });
});
