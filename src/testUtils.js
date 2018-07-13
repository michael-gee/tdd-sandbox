// GLOBAL TEST CONFIG FUNCTIONS

// Finds a single element in the App component by its data-test attribute
export const findByTestAttr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);
};
