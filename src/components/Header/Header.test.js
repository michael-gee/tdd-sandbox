import React from "react";
import { shallow } from "enzyme";
import Header from ".";

import { findByTestAttr } from "../../testUtils";

// Provides Shallow Wrapper to the app component
const headerShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<Header {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe("component/element rendering", () => {
  it("header component renders without error", () => {
    const wrapper = headerShallowWrapper();
    const headerContainer = findByTestAttr(wrapper, "header-container");

    expect(headerContainer.length).toBe(1);
  });
});
