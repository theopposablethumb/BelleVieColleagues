import React from 'react';

let Profile = (props) => {
    return (
        <div className="flex profile left">
            <img src={props.user.attributes.picture}  alt={props.user.attributes.name} />
            <div>
                <h2>Welcome {props.user.attributes.name}</h2>
                <p>{props.user.attributes.email}</p>
            </div>
        </div>
    ); 
}

export default Profile;