import React from 'react';
import Helmet from 'react-helmet';
import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';

import UpdateQuestion from './UpdateQuestion';

class CreateConfirmationPractices extends React.Component {
    state = {
        questions: [],
    }

    getQuestions = async () => {
        const questions = await API.graphql({ query: queries.listQuestions });
        const allQuestions = questions.data.listQuestions.items;
        this.setState({questions: [...allQuestions]});
    };

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return(
            <>
                <Helmet>
                    <title>Create Confirmation Practices</title>
                </Helmet>
                <div className="section offwhitebg">
                    <div className="content">
                        <h1>Create Confirmation Practice Questions</h1>
                        <p>Create new questions for colleagues doing their regular buddy meetings</p>
                        {this.state.questions.map((question, i) => {return(<UpdateQuestion question={question} index={i} key={i} />)})}
                    </div>
                </div>
            </>
        )
    }
}

export default CreateConfirmationPractices;