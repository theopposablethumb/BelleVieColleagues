import React, { useEffect, useState } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports';

import ConfirmationPractices from './ConfirmationPractices';

Amplify.configure(awsconfig);


class App extends React.Component {
  constructor(props) {
    super(props);

    this.getUser = this.getUser.bind(this);
    this.renderLogin = this.renderLogin.bind(this);

    this.state = {
      user: '',
      token: ''
    }
  }

  componentDidMount() {
    Hub.listen('auth', ({ payload: { event } }) => {
      switch (event) {
        case 'signIn':
          case 'cognitoHostedUI':
            this.getUser();
            this.getToken();
            break;
          case 'signOut':
            this.setState({user: null});
            break;
          case 'signIn_failure':
              console.log('sign in failure');
              break;
      }
    });
    this.getUser();
  }
  
  getUser() {
    Auth.currentAuthenticatedUser()
      .then(userData => this.setState({ user: userData}))
      .catch(err => this.setState({ user: null}));
  }

  getToken() {
    Auth.currentSession()
      .then(tokenData => this.setState({ token: tokenData}));
  }

  renderLogin() {
    console.log(this.state);
    if (!this.state.user) {
      return (
        <>
          <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Sign In</button>
        </>
      )
      
    } else {
      return (
        <>
          <button onClick={() => Auth.signOut()}>Sign Out</button>
          <ConfirmationPractices accessToken={this.state.token.idToken} />
        </>
      )
    }
  }

  render() {
    return(
      <div>
        {this.renderLogin()}
      </div>
    )
  }

}




/*
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

/*function getToken() {
  return Auth.currentUserCredentials()
  .then(let token = )
  let token = 
    let access = token.secretAccessKey;
    return access;
  }
console.log(Auth.currentAuthenticatedUser());

if (user !== undefined) {
  getToken();
  console.log(setUser());
}
//Auth.currentUserCredentials()
  return (
    <div>
      <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
      {user ? (
        <>
        <button onClick={() => Auth.signOut()}>Sign Out</button>
      
        </>
      ) : (
          <button onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Federated Sign In</button>
      )}
    </div>
  );
}

*/
export default App;

