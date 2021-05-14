import React from 'react';
import Helmet from 'react-helmet';

import { getQuestions, createAnswers } from '../../api/confirmationPractices';

import Navigation from './Navigation';
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

    getConfirmationPractices = () => {
        getQuestions().then((res) => {
            const allQuestions = res.data.listQuestions.items;
            this.setState({questions: [...allQuestions], hasLoaded: true});
        });
        
    };
    

    // getColleague() {
    //     // let email = this.props.user.attributes.email;
    //     fetch(`http://localhost:8080/colleague/tesni.moyo@belleviecare.co.uk`, {
    //         method: 'GET',
    //         headers: {'Content-Type': 'application/json'},
    //     }).then(res => {
    //         if (res.status !== 200) {
    //             throw new Error("Failed to fetch colleague");
    //         }
    //         return res.json();
    //         }).then(data => {
    //             let team = data.team.replace(/ .*/,'');
    //             this.setState({team: team, hasLoaded: true});
    //         })
    // }

    setTeam = (e) => {
        let team = e.target.value;
        this.setState({team: team});
    }

    answer = (answer) => {
        this.setState({answer: answer});
    }

    componentDidMount() {
        this.getConfirmationPractices();
        // this.getColleague();
    }

    setAnswers = (answer) => {
        if (!this.state.team) {
            alert('Please select your team');
            document.querySelector('select[name="team"]').scrollIntoView({ behavior: 'smooth' });
        } 
        this.setState({level: this.state.level +1, answers: [...this.state.answers, answer]});
    }

    createAnswer() {
        createAnswers(this.props.user.attributes.email, this.state.answers, this.state.team)
        .then(res => {
            console.log(res);
        });
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
                    <label htmlFor="team">Please select your team</label>
                    <select name="team" defaultValue="default" required onChange={(e) => {this.setTeam(e)}}>
                        <option value="default" disabled>Select team</option>
                        <option value="Oxford">Oxford</option>
                        <option value="Witney">Witney</option>
                        <option value="Wantage">Wantage</option>
                        <option value="Abingdon">Abingdon</option>
                        <option value="Durham">Durham</option>
                        <option value="Henley">Henley</option>
                        <option value="Northumberland">Northumberland</option>
                    </select>
                    <div className="form">
                        <Question question={this.state.questions[this.state.level]} colleague={this.props.user.attributes.email} answer={this.answer} team={this.state.team} level={this.state.level} />
                        <Progress total={this.state.questions} progress={this.state.level} />
                        <Fields answer={this.state.answer} saveAnswers={this.setAnswers} question={this.state.questions[this.state.level].title} questions={this.state.questions} level={this.state.level} complete={this.completeForm} email={this.props.user.attributes.email} team={this.state.team}/>  
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
                <Navigation circle={this.props.circle} />
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