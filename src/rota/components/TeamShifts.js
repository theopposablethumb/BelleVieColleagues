import React from 'react';
import Team from './Team';
import TeamCapacity from './TeamCapacity';
import TeamUtilisation from './TeamUtilisation';
import Meeting from './Meeting';
import Shift from './Shift';

import {shifts} from './../data';
import AssignSupport from './AssignSupport';


class TeamShifts extends React.Component {
    state = {
        selectedColleague: null,
        assignColleague: null,
        selectedShift: null
    }

    assignColleague = (colleague) => {
        this.setState({assignColleague: colleague});
        if (colleague === this.state.assignColleague) {
            this.setState({assignColleague: null})
        }
    }

    selectColleague = (colleague) => {
        this.setState({selectedColleague: colleague});
        if (colleague === this.state.selectedColleague) {
            this.setState({selectedColleague: null})
        }
    }

    selectShift = (shift) => {
        console.log(shift);
        this.setState({selectedShift: shift});
        console.log(this.state.selectedShift);
        if (shift === this.state.selectedShift) {
            console.log('the same');
            this.setState({selectedShift: null});
        }
    }

    assignToShift = () => {
        if (this.state.assignColleague && this.state.selectedShift) {
            return this.state.selectedShift;
        }
    }

    renderShifts = () => {
        let displayedShifts = [];
        if (this.state.selectedColleague) {
            displayedShifts = shifts.filter(shift => {return shift.colleagues[0].id === this.state.selectedColleague});
            return (
                <div className="shifts">
                    {displayedShifts.map(shift => <Shift key={shift.id} id={shift.id} day={shift.day} start={shift.startTime} end={shift.endTime} activities={shift.activities} assignedSupport={shift.colleagues} selectShift={this.selectShift} selected={this.state.selectedShift} assignToShift={this.assignToShift} colleagueAssignment={this.state.assignColleague} />)}
                </div>
            );
        } else {
            displayedShifts = shifts;
            return (
                <div className="shifts">
                    {displayedShifts.map(shift => <Shift key={shift.id} id={shift.id} day={shift.day} start={shift.startTime} end={shift.endTime} activities={shift.activities} assignedSupport={shift.colleagues} selectShift={this.selectShift} selected={this.state.selectedShift} assignToShift={this.assignToShift} colleagueAssignment={this.state.assignColleague} />)}
                </div>
            );
        }
    }

    render() {
        return(
            <>
                <TeamCapacity />
                <TeamUtilisation team={'Oxford'} />
                <div className="rota">
                    <Team selectColleague={this.selectColleague} selectedColleague={this.state.selectedColleague} />
                    <Meeting />
                    <h2>Team Commited Working Hours</h2>
                    {this.renderShifts()}
                </div>
                <AssignSupport assignColleague={this.assignColleague} assignedColleague={this.state.assignColleague} open={this.state.selectedShift ? 'open' : 'close'} shift={this.state.selectedShift} />
            </>
        )
    }
}

export default TeamShifts;