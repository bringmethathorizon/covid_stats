import React, {useState} from 'react';
import '../styles/ListStyles.css';
import'../styles/TextStyles.css'
import Country from './Country';
import Info from './InformationCard';

export default function List ({countries}) {

    return(
        <div className="ListContainer">
            {countries.map((val, key) =>
                <Country
                    key={key}
                    country={val}
                > {val.Country}
                </Country>
                )}
        </div>
    )
}
