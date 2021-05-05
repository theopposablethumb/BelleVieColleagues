import React from 'react';
import Helmet from 'react-helmet';

import Question from './Question';
import Fields from './Fields';
import Confirmation from './ConfirmationResults'
import Progress from './Progress';


class confirmationPractices extends React.Component {
    state = {
        questions: [],
        level: 0,
        team: null,
        answer: null,
        answers: [],
        hasLoaded: false,
        isSubmitted: false,
    };


    getConfirmationPractices() {
        fetch(`http://localhost:8080/confirmationpractices/questions`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }).then(res => {
            if (res.status !== 200) {
                throw new Error("Failed to fetch confirmation practices");
            }
            return res.json();
            }).then(data => {
                this.setState({questions: data.questions});
            })
    }

    getColleague() {
        // let email = this.props.user.attributes.email;
        fetch(`http://localhost:8080/colleague/tesni.moyo@belleviecare.co.uk`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }).then(res => {
            if (res.status !== 200) {
                throw new Error("Failed to fetch colleague");
            }
            return res.json();
            }).then(data => {
                let team = data.team.replace(/ .*/,'');
                this.setState({team: team, hasLoaded: true});
            })
    }

    answer = (answer) => {
        console.log(answer);
        this.setState({answer: answer});
    }

    componentDidMount() {
        this.getConfirmationPractices();
        this.getColleague();
    }

    setAnswers = (answer) => {
        this.setState({level: this.state.level +1, answers: [...this.state.answers, answer]});
    }

    createAnswer() {
        let colleague = this.props.user.attributes.email;
        let team = this.state.team;
        let answers = this.state.answers;

        fetch(`http://localhost:8080/confirmationanswers/answers/${colleague}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({colleague: colleague, team: team, answers: answers})
        }).then(res => {
            if (res.status !== 200 && res.status !== 201) {
              throw new Error("Can't update answers!");
            }
        })
    }

    completeForm = () => {
        this.setState({isSubmitted: true});
        this.createAnswer();
    }

    renderFormConfirmation() {
        if (this.state.isSubmitted === true && this.state.team) {
            return <Confirmation answers={this.state.answers} />
        } else if (this.state.hasLoaded === true) {
            return (
                <>  
                    <div className="form">
                        <Question question={this.state.questions[this.state.level]} colleague={this.props.user.attributes.email} answer={this.answer} team={this.state.team} level={this.state.level} />
                        <Progress total={this.state.questions} progress={this.state.level} />
                        <Fields question={this.state.questions[this.state.level]} answer={this.state.answer} saveAnswers={this.setAnswers} level={this.state.level} complete={this.completeForm} email={this.props.user.attributes.email} team={this.state.team}/>  
                    </div> 
                </>
            )
        }
    }

    render() {
        return(
            <>
                <Helmet>
                    <title>Confirmation Practices</title>
                </Helmet>
                <div className="section offwhitebg">
                    <div className="content">
                    {this.renderFormConfirmation()}
                    </div>
                </div>
            </>
        )
    }
}

export default confirmationPractices;