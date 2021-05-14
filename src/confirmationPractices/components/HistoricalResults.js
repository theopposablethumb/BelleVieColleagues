import React from 'react';
import {colleagueAnswers} from '../../api/confirmationPractices';
import Results from './Results';
import Navigation from './Navigation';

class HistoricalResults extends React.Component {
    state = {
        answers: [],
        hasLoaded: false
    }

    getAnswers = () => {
        let email = this.props.user.attributes.email;
        colleagueAnswers(email).then((res) => {
            const answers = res.data.listAnswerss.items;
           
            this.setState({answers: answers, hasLoaded: true});
        })
    }

    componentDidMount() {
        this.getAnswers();
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
            return (
                <>
                    <Results key={i} date={longDate} answers={answer} />
                </>
            )
        }))
    }
    
    render() {
        return(
            <>
                <Navigation path={this.props.match.path} circle={this.props.circle} />
                <div className="section whitebg results">
                    {this.state.hasLoaded ? this.renderAnswers() : null}
                </div>
            </>
        )
    }
}

export default HistoricalResults