import actions from "./";
import { ADD_TODO } from "../../constants";

describe("addTodo action creator", () => {
  it("returns an action with type ADD_TODO", () => {
    const action = actions.addTodo("user input");

    expect(action).toEqual({
      type: ADD_TODO,
      payload: { id: "1", message: "user input" }
    });
  });
});
