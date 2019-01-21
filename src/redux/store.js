import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const storeInstance = createStore(reducer, applyMiddleware(thunk));

export default storeInstance;
