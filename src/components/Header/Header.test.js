import React from "react";
import { shallow } from "enzyme";
import Header from "./";

import { findByTestAttr } from "../../testUtils";

const setup = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe("component/element rendering", () => {
  it("header component renders without error", () => {
    const wrapper = setup();
    const headerContainer = findByTestAttr(wrapper, "header-container");

    expect(headerContainer.length).toBe(1);
  });
});
