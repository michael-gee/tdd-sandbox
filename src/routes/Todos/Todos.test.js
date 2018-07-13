import React from "react";
import { shallow } from "enzyme";
import Todos from ".";

// Provides Shallow Wrapper to the app component
const appShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<Todos {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

describe("rendering", () => {
  it("todos component", () => {
    const wrapper = appShallowWrapper();
    const todosComponent = findByTestAttr(wrapper, "todos-container");

    expect(todosComponent.length).toBe(1);
  });
});
