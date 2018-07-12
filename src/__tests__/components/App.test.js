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
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

// *** Count Display / State ***

test("renders a count display", () => {
  const wrapper = appShallowWrapper();
  const countDisplay = findByTestAttr(wrapper, "count-display");
  expect(countDisplay.length).toBe(1);
});

test("counter in component state starts at 0", () => {
  const wrapper = appShallowWrapper();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("counter can not go below 0", () => {
  const counter = 0;
  const wrapper = appShallowWrapper(null, { counter });

  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  wrapper.update();

  const countDisplay = findByTestAttr(wrapper, "count-display");
  expect(countDisplay.text()).toContain(counter);
});

// *** Increment Btn ***

test("renders an increment button", () => {
  const wrapper = appShallowWrapper();
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
});

test("clicking app button increments the counter display", () => {
  const counter = 10;
  const wrapper = appShallowWrapper(null, { counter });

  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  wrapper.update();

  const countDisplay = findByTestAttr(wrapper, "count-display");
  expect(countDisplay.text()).toContain(counter + 1);
});

// *** Decrement Btn ***

test("renders a decrement button", () => {
  const wrapper = appShallowWrapper();

  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  expect(decrementButton.length).toBe(1);
});

test("clicking app button decrements the counter display", () => {
  const counter = 10;
  const wrapper = appShallowWrapper(null, { counter });

  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  wrapper.update();

  const countDisplay = findByTestAttr(wrapper, "count-display");
  expect(countDisplay.text()).toContain(counter - 1);
});

// *** Error Display ***

test("renders an error display element if errorShown state is true", () => {
  const errorShown = true;
  const wrapper = appShallowWrapper(null, { errorShown });
  const errorDisplay = findByTestAttr(wrapper, "error-display");

  expect(errorDisplay.length).toBe(1);
});

test("error-display not rendered when initially rendered", () => {
  const wrapper = appShallowWrapper();
  const errorDisplay = findByTestAttr(wrapper, "error-display");

  expect(errorDisplay.length).toBe(0);
});

test("error display is shown once user clicks decremenet button when counter is at 0", () => {
  const counter = 0;
  const errorShown = false;
  const wrapper = appShallowWrapper(null, { counter, errorShown });

  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  wrapper.update();

  const countDisplay = findByTestAttr(wrapper, "count-display");
  const errorDisplay = findByTestAttr(wrapper, "error-display");

  expect(countDisplay.text()).toContain(0);
  expect(errorDisplay.length).toBe(1);
});
