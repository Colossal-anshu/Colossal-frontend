import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers/all-reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;