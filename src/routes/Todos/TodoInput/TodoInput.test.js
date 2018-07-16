import React from "react";
import { shallow } from "enzyme";
import TodoInput from "./";

import { findByTestAttr } from "../../../testUtils";

const todoInputShallowWrapper = (props = {}) => {
  return shallow(<TodoInput {...props} />);
};

describe("component/element rendering", () => {
  it("TodoList component renders without error", () => {
    const wrapper = todoInputShallowWrapper();
    const todoListContainer = findByTestAttr(wrapper, "todoInput-container");

    expect(todoListContainer.length).toBe(1);
  });
});
