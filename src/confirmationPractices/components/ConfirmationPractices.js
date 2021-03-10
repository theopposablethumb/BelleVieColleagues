import React from 'react';
import {UpdateSpreadSheet} from '../../api/Sheets'; 
import {questions} from '../data';
import {teams} from '../data';
import Question from './Question';
import Fields from './Fields';
import Confirmation from './ConfirmationResults'


class confirmationPractices extends React.Component {
    state = {
        answers: [],
        level: 0,
        team: null,
        isSubmitted: false
    };
    
    team(e) {
        this.setState({team: e.target.value});
    }

    setAnswers = (answer) => {
        this.setState({answers: [...this.state.answers, answer]});
        this.setState({level: this.state.level +1})
    }

    completeForm = () => {
        let name = this.props.user.attributes.name;
        let email = this.props.user.attributes.email;
        let token = this.props.user.attributes.website;
        let answers = this.state.answers;
        if (this.state.team === null) {
            alert('Please select your team');
        } else {
            this.setState({isSubmitted: true});
            UpdateSpreadSheet(name, email, token, answers);
        }
    }

    renderFormConfirmation() {
        if (this.state.isSubmitted === true && this.state.team) {
            return <Confirmation values={this.state} />
        } else {
            return (
                <>
                    <form>
                        <label htmlFor="team"><strong>First please select your team</strong></label>
                        <select name="team" defaultValue="default" required onChange={(e) => {this.team(e)}}>
                            <option value="default" disabled>Select Team</option>
                            {teams.map( team => {return <option key={team} value={team}>{team}</option>})}
                        </select>
                    </form>

                    <div>
                        <Question question={questions[this.state.level]} />
                        <Fields question={questions[this.state.level].title} saveAnswers={this.setAnswers} level={this.state.level} complete={this.completeForm} />
                    </div>
                </>
            )
        }
    }

    render() {
        return(
            <>{this.renderFormConfirmation()}</>
        )
    }
}

export default confirmationPractices;