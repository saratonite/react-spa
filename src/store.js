import { createStore , applyMiddleware} from 'redux';

import rootReducer  from './reducers/index';

import thunk from 'redux-thunk';

// Create Store
const store = createStore(rootReducer,{},applyMiddleware(thunk));

export default store;
