import React from "react";
import { shallow } from "enzyme";
import Error from ".";

import { findByTestAttr } from "../../testUtils";

const errorShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<Error {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe("component/element rendering", () => {
  it("Error component renders without error", () => {
    const wrapper = errorShallowWrapper();
    const errorContainer = findByTestAttr(wrapper, "error-container");

    expect(errorContainer.length).toBe(1);
  });

  it("error-title element", () => {
    const wrapper = errorShallowWrapper();
    const errorContainer = findByTestAttr(wrapper, "error-title");

    expect(errorContainer.length).toBe(1);
  });
});

describe("prop config tests", () => {
  it("renders title from title prop", () => {
    const title = "This is the Error Title Prop!";
    const wrapper = errorShallowWrapper({ title });
    const errorTitle = findByTestAttr(wrapper, "error-title");

    expect(errorTitle.text()).toContain("This is the Error Title Prop!");
  });
});
