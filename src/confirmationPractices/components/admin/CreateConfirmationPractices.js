import React from 'react';
import Helmet from 'react-helmet';

import UpdateQuestion from './UpdateQuestion';

class CreateConfirmationPractices extends React.Component {
    state = {
        questions: [],
    }

    getQuestions = () => {
        fetch('http://localhost:8080/confirmationpractices/questions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            if (res.status !== 200) {
              throw new Error("Failed to fetch questions");
            }
            return res.json();
          }).then(data => {
                console.log(data);
                this.setState({questions: data.questions});
          })
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