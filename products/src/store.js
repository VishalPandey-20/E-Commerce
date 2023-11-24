import counterReducer from "./redux/Reducer";
import { legacy_createStore as createStore } from "redux";

const store = createStore(counterReducer);

export default store;
