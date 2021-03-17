import React from 'react';

import Activity from './Activity';
import Colleague from './Colleague';

import {colleagues} from './../data';

class Shift extends React.Component {
    state = { 
        open: false,
    }

    capitalise = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    openShift(e) {
        e.preventDefault();
        if (this.state.open === false) {
            this.setState({open: true});
        } else {
            this.setState({open: false})
        }
    }

    totalVisitsDuration() {
        let visits = this.props.activities.filter(activity => {return activity.type === 'visit'});
        let duration = [];

        visits.forEach(visit => {
            duration.push(visit.duration);
        });
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return duration.reduce(reducer);
    }

    numberOfVisits() {
        let visits = this.props.activities.filter(activity => {return activity.type === 'visit'});
        if (visits > 1) {
            return visits.length + ' visits';
        } else {
            return visits.length + ' visit';
        }
    }

    renderActivity(activity) {
        if (activity.type === 'visit') {
            return (
                <div className="visit" key={activity.person}>
                    <h4>{activity.person}</h4>
                    <p>{this.capitalise(activity.day)}: {activity.startTime} - {activity.endTime}</p>
                </div>
            )
        } else if (activity.type === 'free') {
            return (
                <div className="free" key={activity.person}>
                    <h4>{this.capitalise(activity.day)}: {activity.startTime} - {activity.endTime}</h4>
                    <p>Available time for team support</p>
                </div>
            )
        }
    }

    getWsw() {
        let wswId = this.props.assignedSupport[0].id;
        
        return (
            <div className="support">
                <Colleague id={wswId} />
            </div>
        )
    }

    render() {
        return (
            <div className={this.state.open ? 'shift' : 'shift close'}>
                <button onClick={(e) => this.openShift(e)}>
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPlRyaWFuZ2xlPC90aXRsZT4KICAgIDxnIGlkPSJUZWFtLVNoaWZ0cyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlNoaWZ0LVBsYW5uaW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjgyLjAwMDAwMCwgLTg2Mi4wMDAwMDApIiBmaWxsPSIjMzAzMDMwIj4KICAgICAgICAgICAgPGcgaWQ9IlJ1bi1TdW1tYXJ5LUNvcHktMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLjAwMDAwMCwgODU0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlRyaWFuZ2xlIiBwb2ludHM9IjI2NyA4IDI3MiAxMyAyNjIgMTMiPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="shift control" />
                </button>
                <h4>{this.capitalise(this.props.day)}: {this.props.start} - {this.props.end} </h4>
                <div className="stats close">
                    <p>{this.numberOfVisits()}, {this.totalVisitsDuration()}hrs contact time</p>
                </div>
                <div className="stats open">
                    <p> {this.totalVisitsDuration()} hours in visits</p>
                    <p>X hour Y minutes travel time</p>
                </div>

                {this.props.activities.map(activity => <Activity activity={activity} />)}
                {this.getWsw()}
            </div>
        );
    }
    
}

export default Shift;