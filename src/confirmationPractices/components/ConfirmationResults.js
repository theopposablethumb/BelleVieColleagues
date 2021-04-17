import { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import Result from './Result';

let Confirmation = (props) => {
    const [answers, setState] = useState([]);

    document.querySelector('h2').scrollIntoView({ behavior: 'smooth' });

    console.log(props);
    
    useEffect(() => {
        const colleague = props.colleague
        fetch(`http://localhost:8080/confirmationanswers/colleague-latest-answers/${colleague}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(res => {
            if (res.status !== 200) {
                throw new Error("Failed to fetch answers");
            }
            return res.json();
        }).then(data => {
            console.log(data);
            setState(data.answers)
        })
    })

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
            {answers.answers.map((answer, i) => { return <Result key={i} score={answer.score} reason={answer.reason} improvement={answer.improvement}  />})}
        </>
    )
}

export default Confirmation;