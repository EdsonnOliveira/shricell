import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import reducers from "../reducers";

const makeStore = () => {
    const store = createStore(reducers);
    return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });