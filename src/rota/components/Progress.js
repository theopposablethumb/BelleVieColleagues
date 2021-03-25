import {calculatePercentage} from '../util/helpers';

let Progress = (props) => {

    let completed = calculatePercentage(props.complete, props.total);

    return (
        <div className="progress">
            <div className="completed" style={{width: completed + '%'}}></div>
        </div>
    )
}

export default Progress;