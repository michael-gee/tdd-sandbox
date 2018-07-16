import React from "react";
import { shallow } from "enzyme";
import { Todos } from "./";

import { findByTestAttr, checkProps } from "../../testUtils";

const defaultProps = {
  todosCount: 2,
  todos: [
    {
      id: "todo1",
      message: "first todo"
    },
    {
      id: "todo1",
      message: "second todo"
    }
  ]
};

const todosShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<Todos {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe("component/element shallow rendering", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = todosShallowWrapper({ ...defaultProps });
  });

  it("todos component renders without error", () => {
    const todosComponent = findByTestAttr(wrapper, "todos-container");

    expect(todosComponent.length).toBe(1);
  });
});

describe("props config", () => {
  it("does not throw warning with expected props", () => {
    checkProps(Todos, { ...defaultProps });
  });
});
