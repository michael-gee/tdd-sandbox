import React from "react";
import { shallow } from "enzyme";
import TodoList from "./";

import { findByTestAttr, checkProps } from "../../../testUtils";

const defaultProps = {
  todos: {
    todo1: {
      id: "todo1",
      message: "This is my first todo!"
    }
  }
};

const setup = (props = {}) => {
  const componentProps = { ...defaultProps, ...props };
  return shallow(<TodoList {...componentProps} />);
};

describe("component/element rendering", () => {
  it("TodoList component renders without error", () => {
    const wrapper = setup();
    const todoListContainer = findByTestAttr(wrapper, "todoList-container");

    expect(todoListContainer.length).toBe(1);
  });

  it("renders no-todos-display-message element if there are no todos", () => {
    const todos = {};
    const displayMessage =
      "Currently there are 0 to dos. Type in a to do in the input field provided to get started!";
    const wrapper = setup({ todos });
    const todoListDislayContainer = findByTestAttr(
      wrapper,
      "no-todos-display-message"
    );

    expect(todoListDislayContainer.length).toBe(1);
    expect(todoListDislayContainer.text()).toContain(displayMessage);
  });

  it("renders todos-list if todos Object.keys().length > 1", () => {
    const wrapper = setup();
    const todosListUL = findByTestAttr(wrapper, "todos-list");

    expect(todosListUL.length).toBe(1);
  });
});

describe("props config", () => {
  it("does not throw warning with expected props", () => {
    checkProps(TodoList, defaultProps);
  });
});
