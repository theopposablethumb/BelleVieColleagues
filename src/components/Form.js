import React from 'react';

let Form = (props) => {
    console.log(props);
    <>
        <label htmlFor="props.score">Score</label>
        <p className="rangeVal">{props.updateRangeValue()}</p>
        <input type="range" min="1" max="5" name="props.score" defaultValue="3" onChange={ () => this.props.updateRangeValue()}></input>

        <label htmlFor="props.reason">Why I gave myself this score</label>
        <textarea name="props.reason" rows="4" cols="50" onBlur={this.saveValue}></textarea>

        <label htmlFor="props.improvement">What am I going to focus on to improve my score over the next 2 weeks</label>
        <textarea name="props.improvement" rows="4" cols="50" onChange={this.saveValue}></textarea>
    </>
}

export default Form;