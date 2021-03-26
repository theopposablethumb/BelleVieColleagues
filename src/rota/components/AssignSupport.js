import React from 'react';
import Colleague from './Colleague';
import Progress from './Progress';
import {calculateTotalHours, calculateTotalVisits, calculateTotalOvertime} from '../util/helpers';

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


    displayOvertime = () => {
        let overtime = calculateTotalOvertime(this.props.colleagues);
        if (overtime > 0) {
            return (
                <>
                    <p>{overtime} hours overtime, rota is unbalanced</p>
                    <Progress overtime={true} complete={calculateTotalOvertime(this.props.colleagues)} total={calculateTotalHours(this.props.colleagues)} />
                </>
            )
        }
    }

    render() {
        return (
            <div className={`${this.props.open} assignSupport`}>
                <div className="handle"></div>
                <div className="inner">
                    <h2>Assign Support for this shift</h2>
                    <p>{calculateTotalVisits(this.props.visits) * 4} / {calculateTotalHours(this.props.colleagues) * 4} hours scheduled</p>
                    <Progress complete={calculateTotalVisits(this.props.visits)} total={calculateTotalHours(this.props.colleagues)} />
                    {this.displayOvertime()}
                    <ul>
                    {this.props.colleagues.map(colleague => {
                        return(
                            <li key={colleague.id} onClick={() => this.props.assignColleague(colleague.id)} className={this.selectedColleague(colleague.id)}>
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