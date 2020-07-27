import React, {useEffect, useState} from 'react';
import '../styles/DropdownStyles.css';
import strokeIcon from '../icons/Vector 1 (Stroke).png';
import '../styles/strokeIconStyles.css';
import List from './List'
import Info from './InformationCard'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';

export default function CountriesDropdown({title}){

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const countries = useSelector(state => state.listOfCountries);
    const selectedCountries  = useSelector(state => state.country);
    // const selectedCountry = useSelector(state => state.country);

        const toggleDropdown = () => {
        setOpen(!open);
        dispatch(actions.fetchCountries());

    };

    return(
        <div className="Dropdown">
            <img
                className="Stroke"
                src={strokeIcon}
                onClick={() => toggleDropdown}
            />
            <div>
                <a className="CountryDropdown">{title}</a>
            </div>
            {open && (
                <div className="CountryDropdownList">
                    <List countries={countries}/>
                </div>
            )}
        </div>
    )
}
