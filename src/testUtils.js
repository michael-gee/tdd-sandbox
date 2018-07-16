import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from "./redux/reducers/index";

// GLOBAL TEST CONFIG FUNCTIONS

const initialState = {
  todosCount: 2,
  todos: {
    todo1: {
      id: "todo1",
      message: "this is the first to do!"
    },
    todo2: {
      id: "todo2",
      message: "this is the second to do!"
    }
  }
};

export const storeFactory = () => {
  createStore(rootReducer, initialState);
};

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
