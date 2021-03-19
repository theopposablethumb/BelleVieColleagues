import React from 'react';
import Colleague from './Colleague';
import Progress from './Progress';
import {calculateTotalHours, calculateTotalVisits} from '../util/helpers';
import {colleagues} from '../data';

class AssignSupport extends React.Component {

    selectedColleague = (id) => {
        if (this.props.assignedColleague === id) {
            return 'selected';
        } else if (this.props.assignedColleague) {
            return 'unselected';
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className={`${this.props.open} assignSupport`}>
                <div className="handle"></div>
                <div className="inner">
                    <h2>Assign Support for this shift</h2>
                    <p>{calculateTotalVisits() * 4} / {calculateTotalHours() * 4} hours scheduled</p>
                    <Progress complete={calculateTotalVisits()} total={calculateTotalHours()} />
                    <ul>
                    {colleagues.map(colleague => {
                        return(
                            <li onClick={() => this.props.assignColleague(colleague.id)} className={this.selectedColleague(colleague.id)}>
                                <Colleague id={colleague.id} supportView={true} />
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        )
    }
    
}

export default AssignSupport;