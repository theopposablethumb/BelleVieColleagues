import Helmet from 'react-helmet';

import Result from './Result';
import {questions} from './../data'

let Confirmation = (props) => {
    document.querySelector('h2').scrollIntoView({ behavior: 'smooth' });

    let printPage = (e) => {
        e.preventDefault();
        window.print();
    }

    let date = new Date().toUTCString();

    let answers = [];
    for (let i = 0; i < props.answers.length; i++) {
        let question = `${questions[i].title}%0D`;
        let score = `${props.answers[i].score}%0D`;
        let reason = `${props.answers[i].reason}%0D`;
        let improvement = `${props.answers[i].improvement}%0D%0D`;
        answers.push(question, score, reason, improvement);
    }
    let answersText = answers.toString().replace(/,/g, '').substr(0, 4000);

    return(
        <>
            <Helmet>
                <title>Confirmation Practices - Results</title>
            </Helmet>
            <h2>Thank you for submitting your confirmation practices</h2>
            <p className="date"><strong>{date}</strong></p>
            <p>Reviewing your confirmation practices is a great opportunity to reflect on how well you're doing and your contribution to the wellbeing of the people we support</p>
            <button className="dark printMe" onClick={(e) => {printPage(e)}}>Print my results</button>
            <a className="button dark mail" target="_blank" rel="noreferrer" href={`mailto: ${props.email}?subject=ConfirmationPractices&body=${answersText}`}>Email my results to me</a>
            <h3>{props.team} Team</h3>
            {props.answers.map((answer, i) => { return <Result key={i} score={answer.score} reason={answer.reason} improvement={answer.improvement} question={questions[i]} />})}
        </>
    )
}

export default Confirmation;