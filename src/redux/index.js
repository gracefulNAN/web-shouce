import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger"; // 在控制台中打印redux日志；

import home from './modules/homeAction.js'

const logger = createLogger(); // initialize logger
const reducer = combineReducers({
  home,
});

let store = () => createStore(reducer, applyMiddleware(thunk, logger));
export default store;