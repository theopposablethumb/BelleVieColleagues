import React from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports';

import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import ConfirmationPractices from './ConfirmationPractices';
import ConfirmationResults from './ConfirmationResults';

Amplify.configure(awsconfig);


class App extends React.Component {
  constructor(props) {
    super(props);

    this.getUser = this.getUser.bind(this);
    this.renderLogin = this.renderLogin.bind(this);

    this.state = {
      user: '',
    }
  }

  componentDidMount() {
    Hub.listen('auth', ({ payload: { event } }) => {
      switch (event) {
        case 'signIn':
          case 'cognitoHostedUI':
            this.getUser();
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

  renderLogin() {
    if (!this.state.user) {
      return (
        <>
          <button className="login dark" onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Sign In</button>
        </>
      )
      //"ya29.a0AfH6SMD67Ux8z4Zf53_hwP3e6bOF58Gey86qxrz3oNlt7t0_LoVEG-WlTqs4An4c5yL1DyCepVJdiPFHeOmVXUkbStUBQgfDJkyMD-jLrZZL2Q4qS6U2Lv7lRBasig-ts-OqwSXTw-AT9mNnolOKJOgb3y_jjwTsFiXQ8MM0Ms-e"

    } else {
      return (
        <>
          <div className="content">
            <button className="logout dark" onClick={() => Auth.signOut()}>Sign Out</button>
            <Profile user={this.state.user} />
          </div>
          <div className="content">
            <ConfirmationPractices user={this.state.user} />
          </div>
        </>
      )
    }
  }

  render() {
    return(
      <>
        <Header />
        <main>
          <div className="section offWhiteBg">
            {this.renderLogin()}
          </div>
        </main>
        <Footer />
      </>
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

