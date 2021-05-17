import React from 'react';
import {colleagueAnswers} from '../../api/confirmationPractices';
import Navigation from './admin/Navigation';

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
                <Navigation circle={this.props.circle} path={this.props.match.path} />
                <div>
                    {this.state.hasLoaded ? this.renderAnswers() : null}
                </div>
            </>
        )
    }
}

export default HistoricalResults