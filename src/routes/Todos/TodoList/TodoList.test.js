import React from "react";
import { shallow } from "enzyme";
import TodoList from ".";

import { findByTestAttr } from "../../../testUtils";

const todoListShallowWrapper = (props = {}) => {
  return shallow(<TodoList {...props} />);
};

describe("component/element rendering", () => {
  it("TodoList component renders without error", () => {
    const wrapper = todoListShallowWrapper();
    const todoListContainer = findByTestAttr(wrapper, "todoList-container");

    expect(todoListContainer.length).toBe(1);
  });
});
