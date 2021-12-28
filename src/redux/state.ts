import { currencyReducer } from './currencyReducer';
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    currency: currencyReducer,
});
export type IGlobalState = ReturnType<typeof reducers>;

export const store = createStore(reducers);