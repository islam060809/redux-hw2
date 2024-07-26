import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import coutryReducer from "./reducers/countryReducers";
import searchReducer from "./reducers/searchCountry";

const root=combineReducers({
    country:coutryReducer,
    search: searchReducer
})
const store = createStore(root, applyMiddleware(thunk))


export default store
