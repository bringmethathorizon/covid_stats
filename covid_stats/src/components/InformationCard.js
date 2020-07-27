import React from 'react';
import '../styles/InformationCardStyles.css'
import '../styles/AmountOfCasesBoxStyles.css'
import * as statusText from '../other/statusTexts';
import AmountOfCasesBox from './AmountOfCasesBox';

export default function InformationCard({date}) {
    return(
        <div className="Card">

            <a className="Date">{date}</a>
            <a className="StatusActive">{statusText.infoCardActiveStatusTetx}</a>
            <a className="StatusDeaths">{statusText.infoCardDeathsStatusTetx}</a>
            <a className="StatusConfirmed">{statusText.infoCardConfirmedStatusTetx}</a>
            <a className="StatusRecovered">{statusText.infoCardRecoveredStatusTetx}</a>

            <div className="digitContainer">

             <div className="firstDigitContainer">
                <AmountOfCasesBox amount='44'/>
                <AmountOfCasesBox amount='2345'/>
             </div>

            <div className="secondDigitContainer">
                <AmountOfCasesBox amount='552'/>
                <AmountOfCasesBox amount='6885'/>
            </div>

            </div>

        </div>
    )
}
