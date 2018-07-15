import checkPropTypes from "check-prop-types";
// GLOBAL TEST CONFIG FUNCTIONS

// Finds a single element in the App component by its data-test attribute
export const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};

// Throws a console error in tests if props are not configured correctly
export const checkProps = (component, expectedProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );

  expect(propError).toBeUndefined();
};
