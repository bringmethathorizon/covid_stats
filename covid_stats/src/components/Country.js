import React from 'react';
import '../styles/ListStyles.css';
import '../styles/TextStyles.css';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';

export default function Country({country}) {

    const showSelectedCountry =  useSelector(state => state.results);
    const dispatch = useDispatch();

    const handleSelect = () => {
        // debugger
        dispatch(actions.selectCountries(country.Slug));
        // console.log('selected vcountry is', showSelectedCountry)
    };

    return(
        <div className="List">
            <div
                className="CountryDropdown"
                onClick={handleSelect}>
                {country.Country}
            </div>
            {showSelectedCountry.map((val,i) =>
                    <div>
                        {val.Active}
                    </div>
            )}
        </div>
    );
}
