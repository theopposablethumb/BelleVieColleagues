import React from 'react';

class Profile extends React.Component {
    state = {
        team: null,
        role: null
    }

    getColleague() {
        fetch(`http://localhost:8080/colleague/tesni.moyo@belleviecare.co.uk`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }).then(res => {
            if (res.status !== 200) {
                throw new Error("Failed to fetch colleague");
            }
            return res.json();
            }).then(data => {
                let team = data.team.replace(/ .*/,'');
                this.setState({team: team, role: data.role});
            })
    }

    componentDidMount() {
        this.getColleague();
    }

    render() {
        return (
            <div className="flex profile left">
                <img src={this.props.user.attributes.picture}  alt={this.props.user.attributes.name} />
                <div>
                    <h2>Welcome {this.props.user.attributes.name}</h2>
                    <p>{this.props.user.attributes.email}</p>
                    <p>{this.state.team} Team</p>
                    <p>{this.state.role}</p>
                </div>
            </div>
        ); 
    }
    
}

export default Profile;