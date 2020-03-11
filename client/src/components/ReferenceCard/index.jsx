import './referencecard.css';
import React from 'react';

const ReferenceCard = ({referenceData}) => {
    console.log(referenceData);
    return (
        <div>
            <h1>
                {referenceData.name}
            </h1>
            <p>
               Description: {referenceData.desc}
            </p>
            <h4>
                Duration: {referenceData.duration}
            </h4>
            <h4>
                Level: {referenceData.level}
            </h4>
        </div>
    )
}

export default ReferenceCard;