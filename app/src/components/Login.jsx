import React, { Component } from "react";

class Login extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  loginHelpBox = () => {
    if (this.props.demo) {
      return (
        <React.Fragment>
          <div className="pointerLogin"></div>
          <div className="loginHelpBox">
            <p className="helpBoxText">
              The login fields have already been filled, you just need to press
              log in
            </p>
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.loginHelpBox()}
        <div className="centreText titleDiv">
          <h1 className="title appleFont centreText">Login Page</h1>
        </div>
        <div className="pushDownLogin">
          <div className="loginField pushDownLogin">
            <p className="loginText">testuser@test.com</p>
          </div>
          <div className="loginField upperMargin">
            <p className="loginText">**********</p>
          </div>
          <div className="loginButtonDiv">
            <button
              className="loginButton"
              onClick={() =>
                this.props.changePage(
                  this.props.demo
                    ? this.props.pageNumbers.DemoAutofill
                    : this.props.pageNumbers.Autofill
                )
              }
            >
              <p className="loginButtonText appleFont">Log In</p>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
