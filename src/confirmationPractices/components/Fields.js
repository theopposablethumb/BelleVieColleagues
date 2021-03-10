import React from 'react';
import {questions} from './../data';

class Fields extends React.Component {
    state = {
        score: '3',
        reason: null,
        improvement: null
    }
    
    updateValue(event, type) {
        let key = type;
        this.setState({[key]: event.target.value});
    }

    save(e) {
        e.preventDefault()
        if (this.props.level < questions.length - 1) {
            this.props.saveAnswers(this.state);
            document.getElementById('title').scrollIntoView({ behavior: 'smooth' });
        } else {
            this.props.complete();
        }
        
    }

    button() {
        if (this.props.level < questions.length - 1) {
            return <button className="dark">Next</button>
        } else {
            return <button className="dark">Complete</button>
        }
    }

    render() {
        let score = this.props.question + 'Score';
        let reason = this.props.question + 'Reason';
        let improvement = this.props.question + 'Improvement';
    
        return (
            <form onSubmit={ (e) => this.save(e) }>
                <label htmlFor={score} >Score <strong>{this.state.score}</strong></label>
                <input type="range" min="1" max="5" name={score} defaultValue="3" onChange={ (e) => this.updateValue(e, 'score')} ></input>
    
                <label htmlFor={reason}>Why I gave myself this score</label>
                <textarea name={reason} rows="4" cols="50" onChange={ (e) => this.updateValue(e, 'reason')}></textarea>
    
                <label htmlFor={improvement}>What am I going to focus on to improve my score over the next 2 weeks</label>
                <textarea name={improvement} rows="4" cols="50" onChange={ (e) => this.updateValue(e, 'improvement') } ></textarea>

                {this.button()}
            </form>
        )
    }
   
    
}

export default Fields;