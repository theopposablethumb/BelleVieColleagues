let Question = (props) => {
    return(
        <>
            <h2>{props.question.title}</h2>
            <p>{props.question.question}</p>
            <ul>
                {props.question.checks.map( check => {return <li key={check}>{check}</li>})}
            </ul>
        </>
    )
}

export default Question;