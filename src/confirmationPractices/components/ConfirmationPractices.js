import React from 'react';
import {UpdateSpreadSheet} from '../../api/Sheets'; 
import {questions} from '../data';
import {teams} from '../data';
import Question from './Question';
import Fields from './Fields';
import Confirmation from './ConfirmationResults'
import Progress from './Progress';


class confirmationPractices extends React.Component {
    state = {
        answers: [],
        level: 0,
        team: null,
        isSubmitted: false,
    };
    
    team(e) {
        this.setState({team: e.target.value});
    }

    setAnswers = (answer) => {
        this.setState({answers: [...this.state.answers, answer]});
        this.setState({level: this.state.level +1});

        if (!this.state.team) {
            alert('Please select your team');
            document.querySelector('select[name="team"]').scrollIntoView({ behavior: 'smooth' });
        } 
    }

    completeForm = () => {
        this.setState({isSubmitted: true});
    }

    renderFormConfirmation() {
        if (this.state.isSubmitted === true && this.state.team) {
            let name = this.props.user.attributes.name;
            let email = this.props.user.attributes.email;
            let token = this.props.user.attributes.website;
            let team = this.state.team;
        
            let answers = this.state.answers.map(answer => Object.values(answer));
            let values = Array.prototype.concat(...answers);

            UpdateSpreadSheet(name, email, team, token, values);

            return <Confirmation answers={this.state.answers} questions={questions} team={this.state.team} />
        } else {
            return (
                <>
                    <label htmlFor="team"><strong>First please select your team</strong></label>
                    <select name="team" defaultValue="default" required onChange={(e) => {this.team(e)}}>
                        <option value="default" disabled>Select Team</option>
                        {teams.map( team => {return <option key={team} value={team}>{team}</option>})}
                    </select>
                    
                    <div className="form">
                        <Question question={questions[this.state.level]} level={this.state.level} />
                        <Progress total={questions} progress={this.state.level} />
                        <Fields question={questions[this.state.level].title} saveAnswers={this.setAnswers} level={this.state.level} complete={this.completeForm} />  
                    </div> 
                </>
            )
        }
    }

    render() {
        return(
            <div className="section offwhitebg">
                <div className="content">
                    {this.renderFormConfirmation()}
                </div>
            </div>
        )
    }
}

export default confirmationPractices;