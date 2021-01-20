import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";

import ConfirmationPractices from "./ConfirmationPractices";
import Header from './Header';
import Profile from './Profile'
import Footer from './Footer'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        name: null,
        email: null,
      },
      isUserLoggedIn: false,
      accessToken: null
    };
    this.responseGoogle = this.responseGoogle.bind(this);
    this.logout = this.logout.bind(this);
  }

  responseGoogle = response => {
    console.log('Google'+response);
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true, accessToken: response.accessToken });
  };

  logout = () => {
    this.setState({isUserLoggedIn: false})
  };
  
  render() {
    console.log(this.state);
    return (
      <>
       <Header />
        <main>
          <div className="section offWhiteBg">

        {!this.state.isUserLoggedIn && (
          <div className="content">
            <GoogleLogin
              clientId={process.env.REACT_APP_GC_ID}
              render={renderProps => (
                <button className="dark login" onClick={renderProps.onClick} disabled={renderProps.disabled} >Log in with Google </button>
              )}
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              cookiePolicy={'single_host_origin'}
              scope={'email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.resource https://www.googleapis.com/auth/spreadsheets https://spreadsheets.google.com/feeds https://spreadsheets.google.com/feeds/ http://spreadsheets.google.com/feeds http://spreadsheets.google.com/feeds/ https://spreadsheets.google.com/feeds/spreadsheets https://spreadsheets.google.com/feeds/spreadsheets/private/full http://spreadsheets.google.com/feeds/spreadsheets/private/full https://spreadsheets.google.com/feeds/worksheets/ https://spreadsheets.google.com/tq https://spreadsheets.google.com/feeds/list/ https://spreadsheets.google.com/feeds/worksheet/ https://spreadsheets.google.com/feeds/cell/'}
              isSignedIn={true}
            />
          </div>

        )}

        {this.state.isUserLoggedIn && (
          <>
            <div className="content">
              <Profile userDetails={this.state.userDetails} />
              <GoogleLogout
                render={renderProps => (
                  <button className="dark logout" onClick={renderProps.onClick} >Log Out </button>
                )}
                onLogoutSuccess={this.logout}
              />
            </div>
            <div className="content">
              <ConfirmationPractices name={this.state.userDetails.name} email={this.state.userDetails.email} accessToken={this.state.accessToken} />
            </div>
          </>
        )}
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;