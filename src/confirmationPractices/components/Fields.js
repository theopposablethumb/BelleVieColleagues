import React from 'react';
import {questions} from './../data';

class Fields extends React.Component {
    state = {
        score: '3',
        reason: null,
        improvement: null,
        reasonDisplay: '',
        improvementDisplay: '' 
    }


    submitAnswer() {
        let answer = this.props.answer;
        let question = this.props.question._id;
        let score = this.state.score;
        let reason = this.state.reason;
        let improvement = this.state.improvement;
        
        fetch(`http://localhost:8080/confirmationanswers/answers/${answer}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({question: question, score: score, reason: reason, improvement: improvement})
        }).then(res => {
            if (res.status !== 200 && res.status !== 201) {
              throw new Error("Can't update answers!");
            }
            return res.json();
          })
          .then(resData => {
            console.log(resData);
          })
          .catch(this.catchError);
    };
    
    updateValue(e, type) {
        let key = type;
        let displayValue = type + 'Display';
        this.setState({[key]: e.target.value});
        this.setState({[displayValue]: e.target.value});
    }

    save(e) {
        e.preventDefault();
        let answers = Object.assign({}, this.state);
        this.submitAnswer();
        if (this.props.level < questions.length - 1) {
            this.props.saveAnswers(answers);
            document.querySelector('.title').scrollIntoView({ behavior: 'smooth' });
        } else {
            this.props.saveAnswers(answers);
            this.props.complete();
        }
        
    }

    clearDisplayValue(e) {
        this.setState({reasonDisplay: '', improvementDisplay: ''});
    }

    button() {
        if (this.props.level < questions.length - 1) {
            return <button onClick={ (e) => this.clearDisplayValue(e) } className="dark">Next</button>
        } else {
            return <button className="dark">Complete</button>
        }
    }

    render() {
        let score = this.props.question.title + 'Score';
        let reason = this.props.question.title + 'Reason';
        let improvement = this.props.question.title + 'Improvement';
        return (
            <form onSubmit={ (e) => this.save(e) }>
                <label htmlFor={score} >Score <strong>{this.state.score}</strong></label>
                <input type="range" min="1" max="5" name={score} defaultValue="3" onChange={ (e) => this.updateValue(e, 'score')} ></input>
    
                <label htmlFor={reason}>Why I gave myself this score</label>
                <textarea name={reason} rows="4" cols="50" onChange={ (e) => this.updateValue(e, 'reason')} value={this.state.reasonDisplay}></textarea>
    
                <label htmlFor={improvement}>What am I going to focus on to improve my score over the next 2 weeks</label>
                <textarea name={improvement} rows="4" cols="50" onChange={ (e) => this.updateValue(e, 'improvement') } value={this.state.improvementDisplay} ></textarea>

                {this.button()}
            </form>
        )
    }
   
    
}

export default Fields;