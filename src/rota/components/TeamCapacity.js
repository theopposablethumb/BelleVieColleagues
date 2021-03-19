import {calculateTotalHours, calculateTotalOvertime, calculateTotalVisits} from '../util/helpers';

let TeamCapacity = () => {

    let capacity = calculateTotalHours() * 4;
    let totalVisitingHours = calculateTotalVisits() * 4;

    return (
        <div className="capacity">
            <p>Team capacity is <strong>{capacity} hours</strong></p>
            <p>The team are currently supporting {totalVisitingHours} hours of visits</p>
            <p className="overtime">{calculateTotalOvertime() * 4} hours of overtime have been scheduled</p>
        </div>
    )
}

export default TeamCapacity;