import * as actions from '../actions/actionTypes';

export default function setCountries (state = {listOfCountries: [], country: '', results: []}, action) {
    switch (action.type) {
        case actions.SET_COUNTRIES:
            return Object.assign({}, state, {
                listOfCountries: action.countries
            });
        case actions.SELECT_COUNTRY:
            return Object.assign({}, state, {
                country: action.selectedCountry,
                results: action.selectedCountry
            });

        default: return state
    }
}








