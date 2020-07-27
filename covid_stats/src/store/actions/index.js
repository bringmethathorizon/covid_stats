import * as actions  from './actionTypes'
import axios from 'axios';

export const fetchCountries = () => {
    return function (dispatch) {
        // axios.get('https://api.covid19api.com/countries')
            axios.get('https://api.covid19api.com/countries')
            .then(res => {
                dispatch(setCountries(res.data));
                // console.log("DATA", res.data);
            })
            .catch(err => {
                //err handler
            })
    }
};

export const selectCountries = (country) => {
    return function (dispatch) {
        axios.get(`https://api.covid19api.com/total/dayone/country/${country}`)
            .then(res => {
                dispatch(selectCountry(res.data));
                console.log(country);
            })
            .catch(err => {
                //err handler
            })
    }
};

export const setCountries = countries => ({
    type: actions.SET_COUNTRIES,
    countries,
});

export const selectCountry = selectedCountry => ({
    type: actions.SELECT_COUNTRY,
    selectedCountry
});

