import React from "react";
import { shallow } from "enzyme";

import App from "../../components/App";

// *** FUNCTIONS ***

// Provides Shallow Wrapper to the app component
const appShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

// Finds a single element in the App component by its data-test attribute
const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

// App component shallow render
test("renders without error", () => {
  const wrapper = appShallowWrapper();
  const appComponent = findByTestAttr(wrapper, "app-container");
  expect(appComponent.length).toBe(1);
});

test("includes a BrowserRouter (as Router) component from react-router-dom", () => {
  const wrapper = appShallowWrapper();
  const browserRouterComponent = findByTestAttr(wrapper, "browser-router");

  expect(browserRouterComponent.length).toBe(1);
});
