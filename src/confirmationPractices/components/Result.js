import React from 'react';

let Result = (props) => {
    return(
        <div className="result">
            <h2>{props.question.title} - <strong>Score {props.score}</strong></h2>
            <h3>Why I gave myself this score</h3>
            <p>{props.reason}</p>
            <h3>What I intend to do to improve</h3>
            <p>{props.improvement}</p>
        </div>
    )
}

export default Result;
