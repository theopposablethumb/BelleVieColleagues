import React from 'react';
import Helmet from 'react-helmet';

class CreateConfirmationPractices extends React.Component {
    state = {
        newCheck: [1],
        title: null,
        question: null,
        checks: [],
        isSubmitted: false,
        submittedQuestion: null
    }

    addNewCheck = (e) => {
        e.preventDefault();
        let i = this.state.newCheck.length +1;
        this.setState({newCheck: [...this.state.newCheck, i]})
    }

    updateValue(e, type) {
        let key = type;
        if (key === 'check') {
            this.setState({checks: [...this.state.checks, e.target.value]})
        } else {
            this.setState({[key]: e.target.value});
        }
    }

    createQuestion = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/confirmationpractices/questions', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: this.state.title, question: this.state.question, checks: this.state.checks})
        }).then(res => {
            if (res.status !== 200 && res.status !== 201) {
              throw new Error("Can't update status!");
            }
            return res.json();
          }).then(data => {
                console.log(data);
                this.setState({isSubmitted: true, submittedQuestion: data.question})
          })
    }

    renderQuestion() {
        if (this.state.isSubmitted) {
            return(
                <>
                    <h2>{this.state.submittedQuestion.title}</h2>
                    <p>{this.state.submittedQuestion.question}</p>
                    <ul>{this.state.submittedQuestion.checks.map(check => {return(<li key={check}>{check}</li>)})}</ul>
                </>
            )
        }
    }

    render() {
        return(
            <>
                <Helmet>
                    <title>Create Confirmation Practices</title>
                </Helmet>
                <div className="section offwhitebg">
                    <div className="content">
                        <div className="question">
                            {this.renderQuestion()}
                        </div>
                        <form>
                            <label for="title">Title</label>
                            <input name="title" type="text" onChange={ (e) => this.updateValue(e, 'title')}></input>

                            <label for="question">Question</label>
                            <textarea name="question" rows="4" cols="50" onChange={ (e) => this.updateValue(e, 'question')}></textarea>
                            <h3>Checks</h3>
                            {this.state.newCheck.map(check => {return(
                                <div key={check}>
                                    <label for={`check`}>Check</label>
                                    <input name={`check`} type="text" onBlur={ (e) => this.updateValue(e, 'check')}></input>
                                </div>
                            )})}
                            <button className="dark" onClick={(e) => {this.addNewCheck(e)}}>Add another check</button>
                            <button className="dark" onClick={(e) => {this.createQuestion(e)}}>Create Confirmation Practice</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateConfirmationPractices;