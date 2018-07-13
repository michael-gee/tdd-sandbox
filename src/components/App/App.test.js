import React from "react";
import { shallow } from "enzyme";
import App from ".";

import { findByTestAttr } from "../../testUtils";

// *** FUNCTIONS ***

// Provides Shallow Wrapper to the app component
const appShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe("component/element rendering", () => {
  it("app component renders without error", () => {
    const wrapper = appShallowWrapper();
    const appComponent = findByTestAttr(wrapper, "app-container");

    expect(appComponent.length).toBe(1);
  });

  it("BrowserRouter (as Router) component from react-router-dom", () => {
    const wrapper = appShallowWrapper();
    const browserRouterComponent = findByTestAttr(wrapper, "browser-router");

    expect(browserRouterComponent.length).toBe(1);
  });

  it("Error Route component as a fallback page for any invalid urls", () => {
    const wrapper = appShallowWrapper();
    const browserRouterComponent = findByTestAttr(wrapper, "error-route");

    expect(browserRouterComponent.length).toBe(1);
  });
});
