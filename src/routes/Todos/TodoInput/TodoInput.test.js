import React from "react";
import { shallow } from "enzyme";
import TodoInput from "./";

import { findByTestAttr } from "../../../testUtils";

const todoInputShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<TodoInput {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe("component/element shallow rendering", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = todoInputShallowWrapper();
  });

  it("TodoList component renders without error", () => {
    const todoListContainer = findByTestAttr(wrapper, "todoInput-container");

    expect(todoListContainer.length).toBe(1);
  });

  it("renders an input element to input new to do items", () => {
    const inputElement = findByTestAttr(wrapper, "todo-input");

    expect(inputElement.length).toBe(1);
  });

  it("renders a submit-button to submit inputted to do items", () => {
    const submitButton = findByTestAttr(wrapper, "todo-submit-button");

    expect(submitButton.length).toBe(1);
  });
});

describe("userInput state", () => {
  it("userInput component state should match initial input element value", () => {
    const userInput = "";
    const wrapper = todoInputShallowWrapper(null, { userInput });
    const initialUserInputState = wrapper.state("userInput");

    expect(initialUserInputState).toBe("");
  });

  it("userInput component state should match value of input element value when changed", () => {
    let userInput = "";
    const wrapper = todoInputShallowWrapper(null, { userInput });
    const inputElement = findByTestAttr(wrapper, "todo-input");

    inputElement.simulate("change", { target: { value: "My new value!" } });
    wrapper.update();

    const updatedUserInputState = wrapper.state("userInput");

    expect(updatedUserInputState).toBe("My new value!");
  });
});
