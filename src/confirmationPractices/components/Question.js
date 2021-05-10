import React from 'react';

const Question = (props) => {
    return(
        <>
            <h2 className="title">{props.level + 1}. {props.question.title}</h2>
            <p>{props.question.question}</p>
            <ul>
                {props.question.checks.map( check => {return <li key={check}>{check}</li>})}
            </ul>
        </>
    )
}

export default Question;