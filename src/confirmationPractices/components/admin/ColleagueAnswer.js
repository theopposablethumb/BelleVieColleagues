import React from 'react';
import { colleagueAnswer } from '../../../api/confirmationPractices';
import Result from '../Result';

class ColleagueAnswer extends React.Component {
    state = {
        hasLoaded: false,
        colleague: null,
        team: null,
        date: null,
        answers: null
    }

    getColleagueAnswer = () => {
        let id = this.props.match.params.id;
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        colleagueAnswer(id).then(res => {
           let date = res.data.getAnswers.createdAt;
           let d = new Date(date);    
           let year = d.getFullYear();
           let day = d.getDate();
           let monthName = months[d.getMonth()];
           let dayName = days[d.getDay()];
           let longDate = `${dayName}, ${day} ${monthName} ${year}`;
           this.setState({colleague: res.data.getAnswers.colleague, team: res.data.getAnswers.team, date: longDate, answers: res.data.getAnswers.answers, hasLoaded: true});
        })
    }

    componentDidMount() {
        this.getColleagueAnswer();
    }

    renderAnswer = () => {
        if (this.state.hasLoaded) {
            return (
                this.state.answers.map(answer => {
                    return <Result question={answer.question} score={answer.score} reason={answer.reason} improvement={answer.improvement} />
                })
            )
        }
    }

    render() {
        return(
            <div className="section">
                <div class="content">
                    <h1>Confirmation Practices for {this.state.colleague}</h1>
                    <p><strong>{this.state.team} team, {this.state.date}</strong></p>
                    {this.renderAnswer()}
                </div>
            </div>
        )
    }
}

export default ColleagueAnswer;