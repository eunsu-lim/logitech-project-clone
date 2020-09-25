import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./loginModal.scss";
import {LoginAPI} from "../../../../../src/config/api" 

class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      emailValue: "",
      passwordValue: "",
      inputEmailStatus: null,
      inputPwStatus: null,
    };
  }

  

  saveLoginValue = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleInputEmailStatus = () => {
    const { emailValue } = this.state;
    this.setState({
      inputEmailStatus: emailValue.length >= 1,
      inputPwStatus: null,
    });
  };

  handleInputPwStatus = () => {
    const { passwordValue } = this.state;
    this.setState({
      inputPwStatus: passwordValue.length >= 1,
    });
  };

  handleLoginBtn = () => {
    const {
      emailValue,
      passwordValue,
      inputEmailStatus,
      inputPwStatus,
    } = this.state;

    const loginValid =
      emailValue.length > 1 &&
      emailValue.includes("@") &&
      emailValue.includes(".");
    const loginPwValid = passwordValue.length >= 5;

    this.setState({
      inputEmailStatus: loginValid,
      inputPwStatus: loginPwValid,
    });

    const loginSucceed = inputEmailStatus && inputPwStatus;

    if (loginSucceed) {
      fetch(`${LoginAPI}/account/signin`, {
        method: "POST",
        body: JSON.stringify({
          email: this.state.emailValue,
          password: this.state.passwordValue,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.Authorization) {
            localStorage.setItem("token", result.Authorization);
            this.props.history.push("/");
          } else if (result.message === "UNAUTHORIZED") {
            alert("The email or password you have entered is invalid");
          }
        });
    }
  };

  render() {
    const { isActive, closeModal } = this.props;
    const {
      inputEmailStatus,
      inputPwStatus,
      emailValue,
      passwordValue,
    } = this.state;
    return (
      <div
        onClick={closeModal}
        className={
          isActive ? "loginModalBackGround isActive" : "loginModalBackGround"
        }
      >
        <div className="loginModal">
          <header className="loginLogoContainer">
            <img
              className="loginLogo"
              alt="logitech logo"
              src="https://www.logitech.com/content/dam/logitech/common/en/logi-logo-dark.png"
            />
          </header>
          <div className="loginText">Log in with your Logi ID</div>
          <div className="inputInfoAndLoginBtn">
            <input
              className={
                inputEmailStatus === false
                  ? "inputIdInfo notInputIdClicked"
                  : "inputIdInfo"
              }
              type="text"
              placeholder="Email address"
              onChange={this.saveLoginValue}
              onKeyUp={this.handleInputEmailStatus}
              value={emailValue}
              name="emailValue"
            />
            <div
              className={
                inputEmailStatus === false
                  ? "notInputId notInputIdClicked"
                  : "notInputId"
              }
            >
              Please enter a valid email address
            </div>
            <input
              className={
                inputEmailStatus && inputPwStatus === false
                  ? "inputPwInfo notInputPwClicked"
                  : "inputPwInfo"
              }
              type="password"
              placeholder="Password"
              onChange={this.saveLoginValue}
              onKeyUp={this.handleInputPwStatus}
              value={passwordValue}
              name="passwordValue"
            ></input>
            <div
              className={
                inputEmailStatus && inputPwStatus === false
                  ? "notInputPw notInputPwClicked"
                  : "notInputPw"
              }
            >
              Please provide a password
            </div>
            <div className="forgetText">
              <Link to="/Account">Forgot Password?</Link>
            </div>
            <button
              className="loginBtn"
              type="button"
              onClick={this.handleLoginBtn}
            >
              Login
            </button>
          </div>
          <div className="orTextAndLine">
            <div className="orLine"></div>
            <div className="orText">OR</div>
            <div className="orLine"></div>
          </div>
          <div className="otherSiteBtns">
            <div className="otherSiteBtn" />
            <div id="facebook" className="otherSiteBtn" />
            <div id="google" className="otherSiteBtn" />
          </div>
          <div className="clickLinks">
            <Link className="clickLink" to="/Account">
              CREATE AN ACCOUNT
            </Link>
            <Link className="clickLink" to="/Account">
              ABOUT LOGI ID
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginModal);
