import React from 'react';
import {Link} from 'react-router-dom';

import Navigation from '../Navigation';
import {teamAnswers} from '../../../api/confirmationPractices';

class ReviewTeamConfirmationPractices extends React.Component {
    state = {
        answers: [],
        hasLoaded: false
    }

    getAnswers = (team) => {
        teamAnswers(team).then((res) => {
            const answers = res.data.listAnswerss.items;
            this.setState({answers: answers, hasLoaded: true});
        })
    }

    setTeam = (e) => {
        let team = e.target.value;
        this.getAnswers(team);
    }

    renderAnswers = () => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return (this.state.answers.map((answer, i) => {
            let date = answer.createdAt;
            let d = new Date(date);    
            let year = d.getFullYear();
            let day = d.getDate();
            let monthName = months[d.getMonth()];
            let dayName = days[d.getDay()];
            let longDate = `${dayName}, ${day} ${monthName} ${year}`;
            let id = answer.id;
            return (
                <ul>
                    <li><Link to={`/colleague-answer/${id}`}>{longDate} - {answer.colleague}</Link></li>
                </ul>
            )
        }))
    }

    render() {
        return (
            <>
              <Navigation circle={this.props.circle} path={this.props.match.path} />  
              <div className="section offwhitebg">
                    <div className="content">
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
                    </div>
                </div>
                <div className="section whitebg results">
                    <div className="content">
                        {this.state.hasLoaded ? this.renderAnswers() : null}
                    </div>
                </div>
            </>
        )
    };
}

export default ReviewTeamConfirmationPractices;