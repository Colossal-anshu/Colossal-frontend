import { combineReducers } from 'redux';

const reducers = combineReducers({
    test() {
        return 'Test value'
    }
});

export default reducers;