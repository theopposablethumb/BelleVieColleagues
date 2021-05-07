import React from 'react';

class Fields extends React.Component {
    state = {
        question: this.props.questions[this.props.level],
        score: '3',
        reason: null,
        improvement: null,
        reasonDisplay: '',
        improvementDisplay: '' 
    }
    
    updateValue(e, type) {
        let key = type;
        let displayValue = type + 'Display';
        this.setState({[key]: e.target.value});
        this.setState({[displayValue]: e.target.value});
    }

    save(e) {
        e.preventDefault();
        let answers = Object.assign({}, this.state);
        delete answers.reasonDisplay;
        delete answers.improvementDisplay;
        if (this.props.level < this.props.questions.length - 1) {
            this.props.saveAnswers(answers);
            document.querySelector('.title').scrollIntoView({ behavior: 'smooth' });
        } else {
            this.props.saveAnswers(answers);
            this.props.complete();
        }
        
    }

    clearDisplayValue(e) {
        if (!this.props.team) {
            alert('Please select your team');
        }
        this.setState({reasonDisplay: '', improvementDisplay: ''});
    }

    button() {
        if (this.props.level < this.props.questions.length - 1) {
            return <button onClick={ (e) => this.clearDisplayValue(e) } className="dark">Next</button>
        } else {
            return <button className="dark">Complete</button>
        }
    }

    render() {
        let score = this.state.question.title + 'Score';
        let reason = this.state.question.title + 'Reason';
        let improvement = this.state.question.title + 'Improvement';
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