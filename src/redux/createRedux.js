import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/rootReducer';

export default function configureStore(initialState={simpleCounter: {reduxCounter: 0}}) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware()
    );
}
