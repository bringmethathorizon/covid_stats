import covidApp from './reducers';
import toggleDropwdown from './ToggleDropdownReducer';
import {combineReducers} from "redux";

export default combineReducers({
    covidApp,
    toggleDropwdown
});

