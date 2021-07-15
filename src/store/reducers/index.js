import newsReducer from "./newsReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  news: newsReducer,
});

export default appReducer;
