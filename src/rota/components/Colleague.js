import React from 'react';
import {colleagues, shifts, visits} from './../data'; 

let Colleague = (props) => {

    let wsw = colleagues.find(colleague => {return colleague.id === props.id});
    let shiftIds = [];
    let shiftsWorked = [];
    let activities = [];
    let visits = [];

    wsw.shifts.forEach(shift => { shiftIds.push(shift.id)});

    shiftIds.forEach(i => {
        let result = shifts.find(shift => {return shift.id === i});
        shiftsWorked.push(result);
    })
    
    shiftsWorked.forEach(shift => {
        shift.activities.forEach(
            activity => {
                if (activity.type === 'visit') {
                    visits.push(activity.duration)
                }
                activities.push(activity.duration)
            }
        )
    });

    let reducer = (accumulator, currentValue) => accumulator + currentValue;

    let hoursScheduled = activities.reduce(reducer);
    let visitingHours = visits.reduce(reducer);

    if (props.monthView) {
        hoursScheduled = hoursScheduled * 4;
        visitingHours = visitingHours * 4;
    }

    return (
        <div className="colleague">
            <img src={wsw.photo} alt={wsw.name} title={wsw.name} />
            <div>
                <p>{hoursScheduled} / {wsw.contractedHours} hours scheduled</p>
                <p>{visitingHours} hours contact time</p>
            </div>
        </div>
    )
}

export default Colleague;