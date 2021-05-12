import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import {colleagueAnswers} from '../../api/confirmationPractices';

class HistoricalResults extends React.Component {
    state = {
        answers: [],
        hasLoaded: false
    }

    getAnswers = () => {
        let email = this.props.user.attributes.email;
        colleagueAnswers(email).then((res) => {
            const answers = res.data.listAnswerss.items[0].answers;
            this.setState({answers: answers, hasLoaded: true});
        })
    }

    componentDidMount() {
        this.getAnswers();
    }

    renderAnswers = () => {
        console.log(this.state.answers)
        return (this.state.answers.map(answer => {
            return(
                <p>{answer}</p>
            )
        }))
    }
    
    render() {
        return(
            <>
                <div className="section tabs">
                    <Link to={"/"}>Questions</Link>
                    <Link to={"/completed-confirmation-practices"}>Previous Answers</Link>
                </div>
                <div>
                    {this.state.hasLoaded ? this.renderAnswers() : null}
                </div>
            </>
        )
    }
}

export default HistoricalResults