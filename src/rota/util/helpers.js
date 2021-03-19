import {colleagues, visits} from '../data';

export let reducer = (accumulator, currentValue) => accumulator + currentValue;

export let calculateTotalHours = () => {
    let totalHours = [];
    colleagues.map(colleague => {return totalHours.push(colleague.contractedHours)});
    return totalHours.reduce(reducer);
}

export let calculateTotalVisits = () => {
    let totalVisits = [];
    visits.map(visit => {return totalVisits.push(visit.duration)});
    return totalVisits.reduce(reducer);
};

export let numberOfVisits = () => {
    let totalVisits = [];
    visits.map(visit => {return totalVisits.push(visit.duration)});
    return totalVisits.length;
}

export let calculateTotalOvertime = () => {
    let totalOvertime = [];
    colleagues.map(colleague => {
        let hoursWorked = colleague.shifts.length * 5;
        if (hoursWorked > colleague.contractedHours) {
            return totalOvertime.push(hoursWorked - colleague.contractedHours)
        }
    });

    return totalOvertime.reduce(reducer);
}


export let calculatePercentage = (a, b) => {
    return Math.round((a / b) * 100);
} 