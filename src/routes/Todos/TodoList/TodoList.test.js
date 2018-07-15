import React from "react";
import { shallow } from "enzyme";
import TodoList from ".";

import { findByTestAttr, checkProps } from "../../../testUtils";

const defaultProps = {
  todos: ["This is a todo!"]
};

const todoListShallowWrapper = (props = {}) => {
  const componentProps = { ...defaultProps, ...props };
  return shallow(<TodoList {...componentProps} />);
};

describe("component/element rendering", () => {
  it("TodoList component renders without error", () => {
    const wrapper = todoListShallowWrapper();
    const todoListContainer = findByTestAttr(wrapper, "todoList-container");

    expect(todoListContainer.length).toBe(1);
  });
});

describe("props config", () => {
  it("does not throw warning with expected props", () => {
    const expectedProps = { todos: [] };

    checkProps(TodoList, expectedProps);
  });
});
