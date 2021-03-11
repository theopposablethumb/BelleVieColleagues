import React from 'react';
import {colleagues} from './../data';

class Team extends React.Component {
    render() {
        return(
            <ul className="team">
                {colleagues.map(colleague => <li key={colleague.id}><img src={colleague.photo} alt={colleague.name} title={colleague.name} /><p>{colleague.contractedHours * 4} hours</p></li>)}
            </ul>
        )
    }
}

export default Team;