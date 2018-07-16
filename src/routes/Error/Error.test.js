import React from "react";
import { shallow } from "enzyme";
import Error from "./";

import { findByTestAttr, checkProps } from "../../testUtils";

const defaultProps = {
  title: "title prop passed to Error component"
};

const errorShallowWrapper = (props = {}) => {
  const componentProps = { ...defaultProps, ...props };
  return shallow(<Error {...componentProps} />);
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
  it("does not throw warning with expected props", () => {
    checkProps(Error, defaultProps);
  });

  it("renders title from title prop", () => {
    const title = "This is the Error Title Prop!";
    const wrapper = errorShallowWrapper({ title });
    const errorTitle = findByTestAttr(wrapper, "error-title");

    expect(errorTitle.text()).toContain("This is the Error Title Prop!");
  });
});
