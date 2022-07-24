import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const bindMiddleware = (middleware) => {
    return applyMiddleware(...middleware);
};

export const initStore = () => {
    return createStore(reducer,composeWithDevTools( bindMiddleware([thunkMiddleware])));
};
