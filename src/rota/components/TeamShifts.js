import React from 'react';
import Team from './Team';
import Shift from './Shift';

import {shifts} from './../data';

class TeamShifts extends React.Component {
    render() {
        return(
            <>
                <Team />
                <h2>Team Commited Working Hours</h2>
                {shifts.map(shift => <Shift key={shift.id} day={shift.day} start={shift.startTime} end={shift.endTime} activities={shift.activities} assignedSupport={shift.colleagues} />)}
            </>
        )
    }
}

export default TeamShifts;