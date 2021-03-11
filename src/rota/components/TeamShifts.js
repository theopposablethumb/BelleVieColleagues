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
                {shifts.map(shift => <Shift day={shift.day} start={shift.startTime} />)}
            </>
        )
    }
}

export default TeamShifts;