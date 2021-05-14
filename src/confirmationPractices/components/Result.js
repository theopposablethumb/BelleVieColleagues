import React from 'react';

let Result = (props) => {
    if (props.historic) {
        return (
            <div className="result">
                <h3>{props.question} - <strong>Score {props.score}</strong></h3>
                <p><strong>Why I gave myself this score...</strong> {props.reason}</p>
                <p><strong>What I intend to do to improve...</strong> {props.improvement}</p>
            </div>
        )
    } else {
        return(
            <div className="result">
                <h2>{props.question} - <strong>Score {props.score}</strong></h2>
                <h3>Why I gave myself this score</h3>
                <p>{props.reason}</p>
                <h3>What I intend to do to improve</h3>
                <p>{props.improvement}</p>
            </div>
        )
    }

    
}

export default Result;
