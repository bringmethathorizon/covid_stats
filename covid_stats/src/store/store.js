import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import covid from './reducers/reducers';
import selectCountry from './reducers/selectReducer'
import rootReducer from './reducers/reducers';
import toggle from './reducers/reducers'


const store = createStore(covid, applyMiddleware(thunk, thunkMiddleware));

export default store;
