import React from 'react';
import '../styles/AmountOfCasesBoxStyles.css';
import '../styles/TextStyles.css';

export default function ({amount}) {

    return (

        <div className="Box">
            <a className="AmountOfCasesText">{amount}</a>
        </div>
    )
}
