import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./createAccountModal.scss";
import {LoginAPI} from "../../../../../src/config/api"
class CreateAccountModal extends Component {
  constructor() {
    super();
    this.state = {
      emailValue: "",
      passwordValue: "",
      confirmPwValue: "",
      nameValue: "",
      emailStatus: null,
      passwordStatus: null,
      confirmPwStatus: null,
      nameStatus: null,
    };
  }

  saveAccount = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  enteredEmail = () => {
    this.setState({
      emailStatus: this.state.emailValue.length >= 1,
      passwordStatus: null,
      confirmPwStatus: null,
      nameStatus: null,
    });
  };

  enteredPw = () => {
    this.setState({
      passwordStatus: this.state.passwordValue.length >= 1,
      confirmPwStatus: null,
      nameStatus: null,
    });
  };

  enteredConfirmPw = () => {
    this.setState({
      confirmPwStatus: this.state.confirmPwValue.length >= 1,
      nameStatus: null,
    });
  };

  enteredName = () => {
    this.setState({
      nameStatus: this.state.nameValue.length >= 1,
    });
  };

  clickedCreateBtn = () => {
    const {
      emailStatus,
      passwordStatus,
      confirmPwStatus,
      nameStatus,
      emailValue,
      passwordValue,
      confirmPwValue,
      nameValue,
    } = this.state;
    const emailValid =
      emailValue.length > 1 &&
      emailValue.includes("@") &&
      emailValue.includes(".");
    const passwordValid = passwordValue.length >= 5;
    const passwordConfirmValid =
      confirmPwValue.length >= 5 &&
      passwordValue === confirmPwValue;
    const nameValid = nameValue.length > 1;

    this.setState({
      emailStatus: emailValid,
      passwordStatus: passwordValid,
      confirmPwStatus: passwordConfirmValid,
      nameStatus: nameValid,
    });

    const createAccountSucceed =
      emailStatus &&
      passwordStatus &&
      confirmPwStatus &&
      nameStatus;

    if (createAccountSucceed) {
      fetch(`${LoginAPI}/account/signup`, {
        method: "POST",
        body: JSON.stringify({
          email: this.state.emailValue,
          password: this.state.passwordValue,
          name: this.state.nameValue,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.message === "SUCCESS") {
            alert("Sign Up Success!");
            this.props.history.push("/");
          } else if (result.message === "ACCOUNT_ALREADY_EXIST") {
            alert("The email or password you have entered is invalid");
          }
        });
    }
  };

  render() {
    const { isActive, closeModal } = this.props;
    const {
      emailStatus,
      passwordStatus,
      confirmPwStatus,
      nameStatus,
      emailValue,
      passwordValue,
      confirmPwValue,
      nameValue,
    } = this.state;

    return (
      <div
        onClick={closeModal}
        className={
          isActive
            ? "accountModalBackground isActive"
            : "accountModalBackground"
        }
      >
        <div className="createAccountModal">
          <header className="logoContainer">
            <img
              className="createAccountLogo"
              alt="logitech logo"
              src="https://www.logitech.com/content/dam/logitech/common/en/logi-logo-dark.png"
            />
          </header>
          <div className="createAccountTitle">CREATE AN ACCOUNT</div>
          <div className="createAccountText">
            Complete the following fields to create an account
          </div>
          <div className="inputInfoAndCreateBtn">
            <input
              className={
                emailStatus === false
                  ? "inputEmail notInputEmailClicked"
                  : "inputEmail"
              }
              type="text"
              placeholder="Email address"
              onChange={this.saveAccount}
              onKeyUp={this.enteredEmail}
              value={emailValue}
              name="emailValue"
            />
            <div
              className={
                emailStatus === false
                  ? "notInputEmail notInputEmailClicked"
                  : "notInputEmail"
              }
            >
              Please enter a valid email address
            </div>
            <input
              className={
                emailStatus && passwordStatus === false
                  ? "inputPw notInputPwClicked"
                  : "inputPw"
              }
              type="password"
              placeholder="Password"
              onChange={this.saveAccount}
              onKeyUp={this.enteredPw}
              value={passwordValue}
              name="passwordValue"
            />
            <div
              className={
                emailStatus && passwordStatus === false
                  ? "notInputPw notInputPwClicked"
                  : "notInputPw"
              }
            >
              Password does not meet requirements
            </div>
            <input
              className={
                emailStatus &&
                passwordStatus &&
                confirmPwStatus === false
                  ? "confirmPw notConfirmPwClicked"
                  : "confirmPw"
              }
              type="password"
              placeholder="Confirm Password"
              onChange={this.saveAccount}
              onKeyUp={this.enteredConfirmPw}
              value={confirmPwValue}
              name="confirmPwValue"
            />
            <div
              className={
                emailStatus &&
                passwordStatus &&
                confirmPwStatus === false
                  ? "notConfirmPw notConfirmPwClicked"
                  : "notConfirmPw"
              }
            >
              Password does not match
            </div>
            <input
              className={
                emailStatus &&
                passwordStatus &&
                confirmPwStatus &&
                nameStatus === false
                  ? "inputName notInputNameClicked"
                  : "inputName"
              }
              type="text"
              placeholder="Name"
              onChange={this.saveAccount}
              onKeyUp={this.enteredName}
              value={nameValue}
              name="nameValue"
            />
            <div
              className={
                emailStatus &&
                passwordStatus &&
                confirmPwStatus &&
                nameStatus === false
                  ? "notInputName notInputNameClicked"
                  : "notInputName"
              }
            >
              Please enter name
            </div>
            <div className="policyCheck">
              <input className="policyCheckbox" type="checkbox" />
              <span className="policyCheckText">
                Yes, I want to receive news and product emails. Read our
                <Link
                  className="privacyPolicy"
                  to="/Account"
                >
                  privacy policy
                </Link>
                .
              </span>
            </div>
            <div className="notRobotBox">
              <div className="notRobot">
                <input className="notRobotCheckbox" type="checkbox" />
                <span className="notRobotText">I'm not a robot</span>
              </div>
              <div className="reCAPTCHABox">
                <img
                  alt="reCAPTCHAImg"
                  src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                />
                <div className="reCAPCHAText">reCAPTCHA</div>
                <div>
                  <Link
                    className="reCAPCHATLink"
                    to="/Account"
                  >
                    Privacy
                  </Link>
                  -
                  <Link
                    className="reCAPCHATLink"
                    to="/Account"
                  >
                    Terms
                  </Link>
                </div>
              </div>
            </div>
            <button
              className="createBtn"
              type="button"
              onClick={this.clickedCreateBtn}
            >
              CREATE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CreateAccountModal);
