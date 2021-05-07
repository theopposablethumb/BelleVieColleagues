import React from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Header from './common/Header';
import Footer from './common/Footer';
import Navigation from './common/Navigation';
import Profile from './common/Profile';
import ConfirmationPractices from './confirmationPractices/components/ConfirmationPractices';
import ReportingHours from './static/ReportingHours';
import AnnualLeave from './static/AnnualLeave';
import Faq from './static/Faq';
import Policies from './static/Policies';
import Contact from './common/Contact';

import TeamShifts from './rota/components/TeamShifts';
import CreateConfirmationPractices from './confirmationPractices/components/admin/CreateConfirmationPractices';


Amplify.configure(awsconfig);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getUser = this.getUser.bind(this);
    this.renderLogin = this.renderLogin.bind(this);

    this.state = {
      user: null,
      isLeaderShipCircle: false
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
      .then(userData => {
        const group = userData.signInUserSession.accessToken.payload["cognito:groups"];
        if (group.includes('leadershipCircle')) {
          this.setState({user: userData, isLeaderShipCircle: true});
        } else {
          this.setState({ user: userData })
        }
      })
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
          <Navigation circle={this.state.isLeaderShipCircle} />
          <div className="section whitebg">
            <div className="content">
              <button className="logout dark" onClick={() => Auth.signOut()}>Sign Out</button>
              <Profile user={this.state.user} />
            </div>
          </div>
          <Route path="/" exact render={props => ( <ConfirmationPractices {...props} user={this.state.user} circle={this.state.isLeaderShipCircle} /> ) } />
          {this.state.isLeaderShipCircle ? <Route path="/edit-confirmation-practices"  component={CreateConfirmationPractices} /> : null}
          <Route path="/reporting-hours" component={ReportingHours}></Route>
          <Route path="/annual-leave" component={AnnualLeave}></Route>
          <Route path="/faqs" component={Faq} />
          <Route path="/policies" component={Policies} />
          
          <Route path="/rota" component={TeamShifts} />
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
        <Helmet>
          <title>Team Hub BelleVie Care</title>
        </Helmet>
        <Header/>
        <main>
              {this.renderLogin()}
        </main>
        <Footer />
      </>
    )
  }

}

export default App;