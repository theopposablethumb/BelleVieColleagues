import React from 'react';
import Helmet from 'react-helmet';
import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';

import UpdateQuestion from './UpdateQuestion';
import Navigation from './Navigation';

class CreateConfirmationPractices extends React.Component {
    state = {
        currentQuestions: [],
        questions: []
    }

    getQuestions = async () => {
        const questions = await API.graphql({ query: queries.listQuestions });
        const allQuestions = questions.data.listQuestions.items;
        const questionIds = [];
        allQuestions.forEach(question => {questionIds.push(question.id)});
        this.setState({currentQuestions: questionIds, questions: [...allQuestions]});
    };
    
    createNewConfirmationPractice = (e) => {
        e.preventDefault();
        let id = this.state.questions.length + 1
        const newQuestion = {
            id: id.toString(),
            title: 'Confirmation Practice',
            question: 'Describe the behaviours and outcomes for this confirmation practice',
            checks: ['Add a question that encourages reflection on this confirmation practice']
        };
        this.setState({questions: [...this.state.questions, newQuestion]});
    }

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return(
            <>
                <Helmet>
                    <title>Create Confirmation Practices</title>
                </Helmet>
                <Navigation circle={this.props.circle} />
                <div className="section offwhitebg">
                    <div className="content">
                        <h1>Create Confirmation Practice Questions</h1>
                        <p>Create new questions for colleagues doing their regular buddy meetings</p>
                        {this.state.questions.map((question, i) => {return(<UpdateQuestion question={question} currentQuestions={this.state.currentQuestions} index={i} key={i} />)})}
                        <button className="dark" onClick={(e) => { this.createNewConfirmationPractice(e) }}>Create new Confirmation Practice</button>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateConfirmationPractices;