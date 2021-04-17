import React from 'react';

class Question extends React.Component {

    createAnswer() {
        const colleague = this.props.colleague;
        const team = this.props.team;
        
        fetch(`http://localhost:8080/confirmationanswers/answers/${colleague}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({colleague: colleague, team: team})
        }).then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error("Can't update answers!");
            }
            return res.json();
        })
        .then(resData => {
            return this.props.answer(resData.answer._id);
        })
        .catch(this.catchError);
    }

    componentDidMount() {
        this.createAnswer()
    }

    render() {
        return(
            <>
                <h2 className="title">{this.props.level + 1}. {this.props.question.title}</h2>
                <p>{this.props.question.question}</p>
                <ul>
                    {this.props.question.checks.map( check => {return <li key={check}>{check}</li>})}
                </ul>
            </>
        )
    }
}

export default Question;