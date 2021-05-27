import React from 'react';
import Helmet from 'react-helmet';

import { createAnswers } from '../../api/confirmationPractices';

import Navigation from './admin/Navigation';

class LeadershipConfirmationPractices extends React.Component {
    state = {
        score: null,
        improvement: null,
        isSubmitted: false,
        answer: []
    }

    updateValue(e, key) {
        this.setState({[key]: e.target.value});
    }

    createAnswer() {
        createAnswers(this.props.user.attributes.email, this.state.answer, 'Leadership Team')
        .then(res => {
            console.log(res);
        });
    }

    saveAnswer(e) {
        e.preventDefault();
        let answer = {question: 'How confident am I that I am on top of what matters to my role?', score: this.state.score, improvement: this.state.improvement};
        this.setState({answer: [...this.state.answer, answer]});
        this.createAnswer();
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Leadership Confirmation Practices</title>
                </Helmet>
                <Navigation circle={this.props.circle} path={this.props.match.path} />
                <div className="section offwhitebg">
                    <div className="content">
                        <div className="form">
                            <h2>How confident am I that I am on top of what matters to my role?</h2>
                            <ul>
                                <li>Is your action plan for the week realistic and does it help you keep on top of what matters</li>
                                <li>What support do you need from your colleagues?</li>
                            </ul>
                            <form onSubmit={ (e) => this.saveAnswer(e) }>
                                <label htmlFor="score">Score</label>
                                <input type="range" min="1" max="5" name="score" defaultValue="3" onChange={(e) => this.updateValue(e, 'score')} />

                                <label htmlFor="improvement">This week I intend to…</label>
                                <textarea rows="4" cols="50" name="improvement" onChange={(e) => this.updateValue(e, 'improvement')} />
                                <button class="dark">Complete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LeadershipConfirmationPractices;