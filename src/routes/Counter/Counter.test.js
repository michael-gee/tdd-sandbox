import React from "react";
import { shallow } from "enzyme";
import Counter from "./";

import { findByTestAttr } from "../../testUtils";

// *** FUNCTIONS ***

const counterShallowWrapper = (props = {}, state = null) => {
  const wrapper = shallow(<Counter {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

describe("component/element rendering", () => {
  it("Counter component render", () => {
    const wrapper = counterShallowWrapper();
    const appComponent = findByTestAttr(wrapper, "counter-container");

    expect(appComponent.length).toBe(1);
  });

  it("count-display render", () => {
    const wrapper = counterShallowWrapper();
    const countDisplay = findByTestAttr(wrapper, "count-display");

    expect(countDisplay.length).toBe(1);
  });

  it("increment-button render", () => {
    const wrapper = counterShallowWrapper();
    const incrementButton = findByTestAttr(wrapper, "increment-button");

    expect(incrementButton.length).toBe(1);
  });

  it("decrement-button render", () => {
    const wrapper = counterShallowWrapper();
    const decrementButton = findByTestAttr(wrapper, "decrement-button");

    expect(decrementButton.length).toBe(1);
  });

  it("error-display not rendered when Counter initially rendered", () => {
    const wrapper = counterShallowWrapper();
    const errorDisplay = findByTestAttr(wrapper, "error-display");

    expect(errorDisplay.length).toBe(0);
  });

  it("renders an error display element if errorShown state is true", () => {
    const errorShown = true;
    const wrapper = counterShallowWrapper(null, { errorShown });
    const errorDisplay = findByTestAttr(wrapper, "error-display");

    expect(errorDisplay.length).toBe(1);
  });

  // *** Error Display ***
  it("error-display element is rendered once user clicks decremenet button when counter is at 0", () => {
    const counter = 0;
    const errorShown = false;
    const wrapper = counterShallowWrapper(null, { counter, errorShown });

    const decrementButton = findByTestAttr(wrapper, "decrement-button");
    decrementButton.simulate("click");
    wrapper.update();

    const countDisplay = findByTestAttr(wrapper, "count-display");
    const errorDisplay = findByTestAttr(wrapper, "error-display");

    expect(countDisplay.text()).toContain(0);
    expect(errorDisplay.length).toBe(1);
  });

  it("error-display element renders again once user clicks increment button when counter is at 0 and errorShown is true", () => {
    const counter = 0;
    const errorShown = true;
    const wrapper = counterShallowWrapper(null, { counter, errorShown });

    const decrementButton = findByTestAttr(wrapper, "increment-button");
    decrementButton.simulate("click");
    wrapper.update();

    const countDisplay = findByTestAttr(wrapper, "count-display");
    const errorDisplay = findByTestAttr(wrapper, "error-display");

    expect(countDisplay.text()).toContain(1);
    expect(errorDisplay.length).toBe(0);
  });
});

describe("component state config tests", () => {
  it("counter in component state starts at 0", () => {
    const wrapper = counterShallowWrapper();
    const initialCounterState = wrapper.state("counter");

    expect(initialCounterState).toBe(0);
  });

  it("counter can not go below 0", () => {
    const counter = 0;
    const wrapper = counterShallowWrapper(null, { counter });

    const decrementButton = findByTestAttr(wrapper, "decrement-button");
    decrementButton.simulate("click");
    wrapper.update();

    const countDisplay = findByTestAttr(wrapper, "count-display");

    expect(countDisplay.text()).toContain(counter);
  });

  // *** Increment Btn ***
  it("clicking app button increments the counter display", () => {
    const counter = 10;
    const wrapper = counterShallowWrapper(null, { counter });

    const incrementButton = findByTestAttr(wrapper, "increment-button");
    incrementButton.simulate("click");
    wrapper.update();

    const countDisplay = findByTestAttr(wrapper, "count-display");

    expect(countDisplay.text()).toContain(counter + 1);
  });

  // *** Decrement Btn ***
  it("clicking app button decrements the counter display", () => {
    const counter = 10;
    const wrapper = counterShallowWrapper(null, { counter });

    const decrementButton = findByTestAttr(wrapper, "decrement-button");
    decrementButton.simulate("click");
    wrapper.update();

    const countDisplay = findByTestAttr(wrapper, "count-display");

    expect(countDisplay.text()).toContain(counter - 1);
  });
});
