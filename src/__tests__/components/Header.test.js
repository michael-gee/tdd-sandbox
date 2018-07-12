import React from "react";
import { shallow } from "enzyme";

import Header from "../../components/Header";

// Provides Shallow Wrapper to the app component
const appShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<Header {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

test("renders component without error", () => {
  const wrapper = appShallowWrapper();
  const headerContainer = findByTestAttr(wrapper, "header-container");
  expect(headerContainer.length).toBe(1);
});
