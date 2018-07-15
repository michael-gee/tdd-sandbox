import React from "react";
import { shallow } from "enzyme";
import Home from ".";

import { findByTestAttr } from "../../testUtils";

const homeShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<Home {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe("component/element rendering", () => {
  it("Home component renders without error", () => {
    const wrapper = homeShallowWrapper();
    const homeContainer = findByTestAttr(wrapper, "home-container");

    expect(homeContainer.length).toBe(1);
  });
});
