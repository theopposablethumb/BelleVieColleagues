import React from 'react';
import FetchSpreadSheet from './Sheets'; 

import Confirmation from './ConfirmationResults'


class confirmationPractices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: null,
            safeScore: '3',
            safeReason: null,
            safeImprovement: null,
            peopleScore: '3',
            peopleReason: null,
            peopleImprovement: null,
            compassionScore: '3',
            compassionReason: null,
            compassionImprovement: null,
            feedbackScore: '3',
            feedbackReason: null,
            feedbackImprovement: null,
            commScore: '3',
            commReason: null,
            commImprovement: null,
            responsibleScore: '3',
            responsibleReason: null,
            responsibleImprovement: null,
            productivityScore: '3',
            productivityReason: null,
            productivityImprovement: null,
            isSubmitted: false
        };

        this.updateRangeValue = this.updateRangeValue.bind(this);
        this.saveValue = this.saveValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    saveValue(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
      }

    handleSubmit(event, name, email, token) {
        event.preventDefault();
        let inputs = this.state;
        let values = Object.values(inputs);
        let team = values.shift();
        values.pop();
        if (this.state.team === null) {
            alert('Please select your team');
        } else {
            this.setState({isSubmitted: true})
            FetchSpreadSheet(name, email, token, team, values);
        }
        
    }

    updateRangeValue(event) {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: event.target.value});
        this.saveValue(event);
    } 

    renderFormConfirmation() {
        console.log(this.state.isSubmitted + this.state.team)
        if (this.state.isSubmitted === true && this.state.team) {
            console.log('YOOHOO');
            return (
                <Confirmation values={this.state} />
            )
        }
    }

    render() {
        return(
            <>
            <form onSubmit={(event) => this.handleSubmit(event, this.props.name, this.props.email, this.props.accessToken)}>
                    <label htmlFor="team"><strong>First please select your team</strong></label>
                    <select name="team" defaultValue="default" required onChange={this.saveValue}>
                        <option value="default" disabled>Select Team</option>
                        <option value="Oxford">Oxford</option>
                        <option value="WitneyWantage">Witney and Wantage</option>
                        <option value="Abingdon">Abingdon</option>
                        <option value="Durham">Durham</option>
                        <option value="Caversham">Caversham</option>
                    </select>
                    <h2>Safe</h2>
                    <p> I am confident that I always deliver safe care and support.</p>
                    <ul>
                        <li>Do I always administer meds correctly?</li>
                        <li>Do I have sufficient stocks of PPE for 2 weeks and follow guidelines for its use?</li>
                        <li>Do I speak up when I make mistakes?</li>
                        <li>Do I write good notes, sharing important information on Birdie and Slack with colleagues?</li>
                    </ul>


    
                    <label htmlFor="safeScore">Score <strong>{this.state.safeScore}</strong></label>
                    <input type="range" min="1" max="5" name="safeScore" defaultValue="3" onChange={this.updateRangeValue}></input>
    
                    <label htmlFor="safeReason">Why I gave myself this score</label>
                    <textarea name="safeReason" rows="4" cols="50" onBlur={this.saveValue}></textarea>
    
                    <label htmlFor="safeImprovement">What am I going to focus on to improve my score over the next 2 weeks</label>
                    <textarea name="safeImprovement" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
                    <h2>Person Centered</h2>
                    <p>I am confident that I get to know people well. I understand their particular needs, but also take enough interest in what’s important to them, to help them have more good days.</p>
                    <ul>
                        <li>Can I tell you the difference between what’s important ‘to’ and ‘for’ someone?</li>
                        <li>Do I achieve more than completing the tasks on visits?</li>
                        <li>Do I know the outcomes people want and what we need to do to get there?</li>
                        <li>Can I describe a memorable moment I’ve created recently, that’s made someone’s day?</li>
                    </ul>
    
                    <label htmlFor="peopleScore">Score<strong>{this.state.peopleScore}</strong></label>
                    <input type="range" min="1" max="5" name="peopleScore" defaultValue="3" onChange={this.updateRangeValue}></input>
    
                    <label htmlFor="peopleReason">Why I gave myself this score</label>
                    <textarea name="peopleReason" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
                    <label htmlFor="peopleImprovement">What am I going to focus on to improve my score over the next 2 weeks</label>
                    <textarea name="peopleImprovement" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
                    <h2>Compassionate</h2>
                    <p>I am confident that people I support and colleagues would say that I am the kind of person who helps people out and goes the extra mile when possible. </p>
                    <ul>
                        <li>Do I treat people with compassion?  is this reflected in  the way I am at work.</li>
                        <li>Would my colleagues describe me as a team player?</li>
                        <li>Do I bring my whole self to work? Using my skills and talents?</li> 
                        <li>Am I flexible in helping the team out when needed?</li>
                    </ul>
    
                    <label htmlFor="compassionScore">Score <strong>{this.state.compassionScore}</strong></label>
                    <input type="range" min="1" max="5" name="compassionScore" defaultValue="3" onChange={this.updateRangeValue}></input>
    
                    <label htmlFor="compassionReason">Why I gave myself this score</label>
                    <textarea name="compassionReason" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
                    <label htmlFor="compassionImprovement">What am I going to focus on to improve my score over the next 2 weeks</label>
                    <textarea name="compassionImprovement" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
                    <h2>Feedback</h2>
                    <p>I am confident that I am receiving and giving my colleagues feedback – appreciation, recognition and encouragement.</p>
                    <ul>
                        <li>Am I encouraging others in my team to flourish?</li>
                        <li>Do I appreciate colleagues in team meetings and tell them when they are doing well?</li> 
                        <li>Do I celebrate on slack when I and others receive compliments?</li>
                    </ul>
    
                    <label htmlFor="feedbackScore">Score <strong>{this.state.feedbackScore}</strong></label>
                    <input type="range" min="1" max="5" name="feedbackScore" defaultValue="3" onChange={this.updateRangeValue}></input>
    
                    <label htmlFor="feedbackReason">Why I gave myself this score</label>
                    <textarea name="feedbackReason" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
                    <label htmlFor="feedbackImprovement">What am I going to focus on to improve my score over the next 2 weeks</label>
                    <textarea name="feedbackImprovement" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
                    <h2>Communicating compassionately</h2>
                    <p> I am asking for what I need to do my best work (either using Compassionate Communication with individuals,or  bringing tensions to the team meeting)</p>
                    <ul>
                        <li>Do I speak up when I see a problem or a mistake?</li>
                        <li>Do I use O (I observe) F (I feel)  N ( I need) R ( I request / ask) when challenging others?</li>
                        <li>Do I raise tensions at team meetings?</li>
                        <li>Does our team talk about the things that matter together, so we get the best from each other to keep improving?</li> 
                        <li>Are we following our team agreement? </li>
                    </ul>
    
                    <label htmlFor="commScore">Score<strong>{this.state.commScore}</strong></label>
                    <input type="range" min="1" max="5" name="commScore" defaultValue="3" onChange={this.updateRangeValue}></input>
                    
                    <label htmlFor="commReason">Why I gave myself this score</label>
                    <textarea name="commReason" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
                    <label htmlFor="commImprovement">What am I going to focus on to improve my score over the next 2 weeks</label>
                    <textarea name="commImprovement" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
    
                    <h2>Taking responsibility</h2>
                    <p> I am taking responsibility for my own growth and development. And I am supporting my buddy to focus on their own wellbeing to  become the best version of themself.</p>
                    <ul>
                        <li>Do I use confirmation practices to focus on my own improvement? </li>
                        <li>Do I think about my goals and how to achieve them between buddy meetings?</li>
                        <li>Am I supporting my buddy to be the best they can be at work?</li> 
                        <li>Am I supporting my buddy to focus on their own wellbeing?</li>
                    </ul>
    
                    <label htmlFor="responsibleScore">Score <strong>{this.state.responsibleScore}</strong></label>
                    <input type="range" min="1" max="5" name="responsibleScore" defaultValue="3" onChange={this.updateRangeValue}></input>
    
                    <label htmlFor="responsibleReason">Why I gave myself this score</label>
                    <textarea name="responsibleReason" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
                    <label htmlFor="responsibleImprovement">What am I going to focus on to improve my score over the next 2 weeks</label>
                    <textarea name="responsibleImprovement" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
    
                    <h2>Productivity</h2>
                    <p>I am accountable for my own productivity. I know how this contributes to the team being productive and reaching our magic number each month. </p>
                    <ul>
                        <li>Am I available for my whole shift and am I using the time effectively?</li>
                        <li>Am I creative and flexible with ideas to minimise gaps in shifts?</li>
                        <li>Do we work as a team to use all our contracted hours before using overtime? </li>
                    </ul>
    
                    <label htmlFor="productivityScore">Score <strong>{this.state.productivityScore}</strong></label>
                    <input type="range" min="1" max="5" name="productivityScore" defaultValue="3" onChange={this.updateRangeValue}></input> 
    
                    <label htmlFor="productivityReason">Why I gave myself this score</label>
                    <textarea name="productivityReason" rows="4" cols="50" onChange={this.saveValue}></textarea>
    
                    <label htmlFor="productivityImprovement">What am I going to focus on to improve my score over the next 2 weeks</label>
                    <textarea name="productivityImprovement" rows="4" cols="50" onChange={this.saveValue}></textarea>
                    <button className="dark" type="submit">Save</button>
                </form>
                {this.renderFormConfirmation()}
                </>
        )
    }
}

export default confirmationPractices;