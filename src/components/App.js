import React from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports';

import Header from './Header';
import Footer from './Footer';
import Profile from './Profile';
import ConfirmationPractices from './ConfirmationPractices';
import Rota from './Rota';


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
          default:
            this.setState({user: null});
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
          <p>Please login with your BelleVieCare.co.uk email address</p>
          <button className="login dark" onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Sign In</button>
        </>
      )

    } else {
      return (
        <>
          <div className="content">
            <button className="logout dark" onClick={() => Auth.signOut()}>Sign Out</button>
            <Profile user={this.state.user} />
            <Rota user={this.state.user} />
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
            <div className="content">
              {this.renderLogin()}
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

}

export default App;