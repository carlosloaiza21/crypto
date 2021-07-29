import { combineReducers } from "redux";
import userReducer from "./userReducer";
import criptoReducer from "./criptoReducer";

const RootReducer = combineReducers({
    userReducer,
    criptoReducer
});

export default RootReducer;