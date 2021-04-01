import React from 'react';
import { API } from 'aws-amplify';

class Profile extends React.Component {
    state = {colleagues: []};

    async componentDidMount() {
        const data = await API.get('colleagues', '/colleagues');
        this.setState({ colleagues: data.colleagues })
    }
    
    render() {
        return (
            <div className="flex profile left">
                <img src={this.props.user.attributes.picture}  alt={this.props.user.attributes.name} />
                <div>
                    <h2>Welcome {this.props.user.attributes.name}</h2>
                    <p>{this.props.user.attributes.email}</p>
                </div>
            </div>
        ); 
    }
    
}

export default Profile;