import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";

const composedMiddleware = compose(
  applyMiddleware(thunk),
  applyMiddleware(logger)
);

export const store = createStore(rootReducer, composedMiddleware);
