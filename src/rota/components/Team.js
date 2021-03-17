import React from 'react';
import Colleague from './Colleague';
import {colleagues} from './../data';

class Team extends React.Component {
    render() {
        return(
            <ul className="team">
                {colleagues.map(colleague => <li key={colleague.id}><Colleague id={colleague.id} monthView={true} /></li>)}
            </ul>
        )  
    }
}

export default Team;