import React from 'react';
import Result from './Result';

class Results extends React.Component {
    state = {
        open: false
    }

    openResult = (e) => {
        this.setState({open: !this.state.open});
    }

    render() {
        return(
            <div className="content">
                <h2 onClick={(e) => {this.openResult()}} className={this.state.open ? 'open' : 'closed'} >Confirmation Practices for {this.props.date}</h2>
                <div className={this.state.open ? 'open' : 'closed'} >
                    {this.props.answers.answers.map((answer, i) => { return(
                        <Result key={i} historic={true} question={answer.question} score={answer.score} reason={answer.reason} improvement={answer.improvement} />
                    ) } )}
                </div>
            </div>
            
        )
    }
}

export default Results;