import Helmet from 'react-helmet';

import Result from './Result';
import {questions} from './../data'

let Confirmation = (props) => {
    document.querySelector('h2').scrollIntoView({ behavior: 'smooth' });
    return(
        <>
            <Helmet>
                <title>Confirmation Practices - Results</title>
            </Helmet>
            <h2>Thank you for submitting your confirmation practices</h2>
            <p>Reviewing your confirmation practices is a great opportunity to reflect on how well you're doing and your contribution to the wellbeing of the people we support</p>
            
            <h3>{props.team} Team</h3>
            {props.answers.map((answer, i) => { return <Result score={answer.score} reason={answer.reason} improvement={answer.improvement} question={questions[i]} />})}
        </>
    )
}

export default Confirmation;