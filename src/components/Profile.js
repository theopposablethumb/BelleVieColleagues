import React from 'react';

let Profile = (props) => {
    return (
        <div class="flex profile left">
            <img src={props.userDetails.imageUrl}  alt={props.userDetails.name} />
            <div>
                <h2>Welcome {props.userDetails.givenName}</h2>
                <p>{props.userDetails.email}</p>
            </div>
        </div>
    ); 
}

export default Profile;