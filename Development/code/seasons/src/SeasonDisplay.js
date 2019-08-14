import React from 'react';
// Webpack: open source dependency inside app 
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "It's freezing out here",
        iconName: "snowflake"
    }
}

const SeasonDisplay = props => {
    const season = getSeason(3.44444, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]


    return (
        <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}  />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} /></div>
    );
}

const getSeason = (lat, month) => {
    // ternerary operator
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
}

export default SeasonDisplay;