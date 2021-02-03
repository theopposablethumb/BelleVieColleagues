import React from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Profile from './Profile';
import ConfirmationPractices from './ConfirmationPractices';
import Faq from './Faq';
import Policies from './Policies';
import Contact from './Contact';


Amplify.configure(awsconfig);



class App extends React.Component {
  constructor(props) {
    super(props);

    this.getUser = this.getUser.bind(this);
    this.renderLogin = this.renderLogin.bind(this);

    this.state = {
      user: null,
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
        <div className="section offWhiteBg">
          <div className="content">
            <p>Please login with your BelleVieCare.co.uk email address</p>
            <button className="login dark" onClick={() => Auth.federatedSignIn({provider: 'Google'})}>Sign In</button>
          </div>
        </div>
      )

    } else {
      return (
        <BrowserRouter>
          <Navigation />
          <div className="section whitebg">
            <div className="content">
              <button className="logout dark" onClick={() => Auth.signOut()}>Sign Out</button>
              <Profile user={this.state.user} />
            </div>
          </div>
          <div className="section offwhitebg">
            <div className="content">
              <Route path="/" exact render={props => ( <ConfirmationPractices {...props} user={this.state.user} /> ) } />
              <Route path="/faqs" component={Faq} />
              <Route path="/policies" component={Policies} />
            </div>
          </div>
          <div className="section whitebg">
            <div className="content">
              <Contact />
            </div>
          </div>
        </BrowserRouter>
      )
    }
  }

  render() {
    return(
      <>
        <Header />
        <main>
              {this.renderLogin()}
        </main>
        <Footer />
      </>
    )
  }

}

export default App;