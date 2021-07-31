import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers";
import thunk from "redux-thunk";

const STORE = createStore(
    RootReducer,
    applyMiddleware(thunk),
);

export default STORE;