import { createStore, applyMiddleware, combineReducers } from 'redux';
import placeReducer from '../reducers/place-reducer';
import filterReducer from '../reducers/filter-reducer';
import thunk from 'redux-thunk';

export default () => {
    const store = createStore(
        combineReducers({
            places: placeReducer,
            filters: filterReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}