import React from 'react';
import '../styles/BackgroundCardStyles.css';
import InformationCard from './InformationCard';
import Dropdown from './CountriesDropdown';
import '../styles/InformationCardStyles.css';
import SignUp from './formikTest';

export default function BackgroundCard() {

    return(
        <div className="Background">
            <InformationCard
                date="26 June"/>

            <InformationCard/>
            <InformationCard/>
            <Dropdown
                title="sadss"/>
                {/*<SignUp/>*/}

        </div>
    )
}
