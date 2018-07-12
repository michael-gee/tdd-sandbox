import React from "react";
import { shallow } from "enzyme";

import Home from "../../components/Routes/Home";

// Provides Shallow Wrapper to the app component
const appShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<Home {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

test("renders component without error", () => {
  const wrapper = appShallowWrapper();
  const homeContainer = findByTestAttr(wrapper, "home-container");

  expect(homeContainer.length).toBe(1);
});
