import React from 'react';

let Result = (props) => {
    return(
        <>
            <h2>{props.value} Score {props.valueScore}</h2>
            <h3>Why I gave myself this score</h3>
            <p>{props.valueReason}</p>
            <h3>What I intend to do to improve</h3>
            <p>{props.valueImprovement}</p>
        </>
    )
}

export default Result;
