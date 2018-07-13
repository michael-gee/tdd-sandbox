import React from "react";
import { shallow } from "enzyme";
import Todos from ".";

import { findByTestAttr } from "../../testUtils";

// Provides Shallow Wrapper to the app component
const todosShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<Todos {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe("component/element rendering", () => {
  it("todos component renders without error", () => {
    const wrapper = todosShallowWrapper();
    const todosComponent = findByTestAttr(wrapper, "todos-container");

    expect(todosComponent.length).toBe(1);
  });
});
