import Result from './Result';

let Confirmation = (props) => {
    console.log(props.values);

    return(
        <>
            <h2>Thank you for submitting your confirmation practices</h2>
            <p>Reviewing your confirmation practices is a great opportunity to reflect on how well you're doing and your contribution to the wellbeing of the people we support</p>
            
            <h3>{props.values.team} Team</h3>
            
           <Result value={'Safety'} valueScore={props.values.safeScore} valueReason={props.values.safeReason} valueImprovement={props.values.safeImprovement} />
           <Result value={'People'} valueScore={props.values.peopleScore} valueReason={props.values.peopleReason} valueImprovement={props.values.peopleImprovement} />
           <Result value={'Compassion'} valueScore={props.values.compassionScore} valueReason={props.values.compassionReason} valueImprovement={props.values.compassionImprovement} />
           <Result value={'Feedback'} valueScore={props.values.feedbackScore} valueReason={props.values.feedbackReason} valueImprovement={props.values.feedbackImprovement} />
           <Result value={'Communication'} valueScore={props.values.commScore} valueReason={props.values.commReason} valueImprovement={props.values.commImprovement} />
           <Result value={'Responsible'} valueScore={props.values.responsibleScore} valueReason={props.values.responsibleReason} valueImprovement={props.values.responsibleImprovement} />
           <Result value={'Productivity'} valueScore={props.values.productivityScore} valueReason={props.values.productivityReason} valueImprovement={props.values.productivityImprovement} />
        </>
    )
}

export default Confirmation;