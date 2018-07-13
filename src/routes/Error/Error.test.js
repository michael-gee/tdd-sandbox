import React from "react";
import { shallow } from "enzyme";

import Error from ".";

// Provides Shallow Wrapper to the app component
const appShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<Error {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

// ERROR  COMPONENT
test("renders component without error", () => {
  const wrapper = appShallowWrapper();
  const errorContainer = findByTestAttr(wrapper, "error-container");

  expect(errorContainer.length).toBe(1);
});

// ERROR TITLE
test("renders a error-title element", () => {
  const wrapper = appShallowWrapper();
  const errorContainer = findByTestAttr(wrapper, "error-title");

  expect(errorContainer.length).toBe(1);
});

test("renders title from title prop", () => {
  const title = "This is the Error Title Prop!";
  const wrapper = appShallowWrapper({ title });
  const errorTitle = findByTestAttr(wrapper, "error-title");

  expect(errorTitle.text()).toContain("This is the Error Title Prop!");
});
