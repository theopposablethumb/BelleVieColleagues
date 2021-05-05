import Helmet from 'react-helmet';

import Result from './Result';

let Confirmation = (props) => {

    document.querySelector('h2').scrollIntoView({ behavior: 'smooth' });

    let printPage = (e) => {
        e.preventDefault();
        window.print();
    }

    let date = new Date().toUTCString();

    return(
        <>
            <Helmet>
                <title>Confirmation Practices - Results</title>
            </Helmet>
            <h2>Thank you for submitting your confirmation practices</h2>
            <p className="date"><strong>{date}</strong></p>
            <p>Reviewing your confirmation practices is a great opportunity to reflect on how well you're doing and your contribution to the wellbeing of the people we support</p>
            <p>Printing your confirmation practices will also give you the opportunity to save them as a PDF.</p>
            <button className="dark printMe" onClick={(e) => {printPage(e)}}>Print my results</button>
            
            <h3>{props.team} Team</h3>
            {props.answers.map((answer, i) => { return <Result question={answer.question} key={i} score={answer.score} reason={answer.reason} improvement={answer.improvement}  />})}
        </>
    )
}

export default Confirmation;