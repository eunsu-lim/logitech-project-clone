import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./createAccountModal.scss";

class CreateAccountModal extends Component {
  constructor() {
    super();
    this.state = {
      createEmailValue: "",
      createPwValue: "",
      createConfirmPwValue: "",
      createNameValue: "",
      createEmailStatus: null,
      createPwStatus: null,
      createConfirmPwStatus: null,
      createNameStatus: null,
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
      createEmailStatus: this.state.createEmailValue.length >= 1,
      createPwStatus: null,
      createConfirmPwStatus: null,
      createNameStatus: null,
    });
  };

  enteredPw = () => {
    this.setState({
      createPwStatus: this.state.createPwValue.length >= 1,
      createConfirmPwStatus: null,
      createNameStatus: null,
    });
  };

  enteredConfirmPw = () => {
    this.setState({
      createConfirmPwStatus: this.state.createConfirmPwValue.length >= 1,
      createNameStatus: null,
    });
  };

  enteredName = () => {
    this.setState({
      createNameStatus: this.state.createNameValue.length >= 1,
    });
  };

  clickedCreateBtn = () => {
    const {
      createEmailStatus,
      createPwStatus,
      createConfirmPwStatus,
      createNameStatus,
      createEmailValue,
      createPwValue,
      createConfirmPwValue,
      createNameValue,
    } = this.state;
    const emailValid =
      createEmailValue.length > 1 &&
      createEmailValue.includes("@") &&
      createEmailValue.includes(".");
    const passwordValid = createPwValue.length >= 5;
    const passwordConfirmValid =
      createConfirmPwValue.length >= 5 &&
      createPwValue === createConfirmPwValue;
    const nameValid = createNameValue.length > 1;

    this.setState({
      createEmailStatus: emailValid,
      createPwStatus: passwordValid,
      createConfirmPwStatus: passwordConfirmValid,
      createNameStatus: nameValid,
    });

    const createAccountSucceed =
      createEmailStatus &&
      createPwStatus &&
      createConfirmPwStatus &&
      createNameStatus;

    if (createAccountSucceed) {
      fetch("http://10.58.1.236:8000/account/signup", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.createEmailValue,
          password: this.state.createPwValue,
          name: this.state.createNameValue,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.message === "SUCCESS") {
            alert("Sign Up Success!");
            // localStorage.setItem("token", result.Authorization);
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
      createEmailStatus,
      createPwStatus,
      createConfirmPwStatus,
      createNameStatus,
      createEmailValue,
      createPwValue,
      createConfirmPwValue,
      createNameValue,
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
                createEmailStatus === false
                  ? "inputEmail notInputEmailClicked"
                  : "inputEmail"
              }
              type="text"
              placeholder="Email address"
              onChange={this.saveAccount}
              onKeyUp={this.enteredEmail}
              value={createEmailValue}
              name="createEmailValue"
            />
            <div
              className={
                createEmailStatus === false
                  ? "notInputEmail notInputEmailClicked"
                  : "notInputEmail"
              }
            >
              Please enter a valid email address
            </div>
            <input
              className={
                createEmailStatus && createPwStatus === false
                  ? "inputPw notInputPwClicked"
                  : "inputPw"
              }
              type="password"
              placeholder="Password"
              onChange={this.saveAccount}
              onKeyUp={this.enteredPw}
              value={createPwValue}
              name="createPwValue"
            />
            <div
              className={
                createEmailStatus && createPwStatus === false
                  ? "notInputPw notInputPwClicked"
                  : "notInputPw"
              }
            >
              Password does not meet requirements
            </div>
            <input
              className={
                createEmailStatus &&
                createPwStatus &&
                createConfirmPwStatus === false
                  ? "confirmPw notConfirmPwClicked"
                  : "confirmPw"
              }
              type="password"
              placeholder="Confirm Password"
              onChange={this.saveAccount}
              onKeyUp={this.enteredConfirmPw}
              value={createConfirmPwValue}
              name="createConfirmPwValue"
            />
            <div
              className={
                createEmailStatus &&
                createPwStatus &&
                createConfirmPwStatus === false
                  ? "notConfirmPw notConfirmPwClicked"
                  : "notConfirmPw"
              }
            >
              Password does not match
            </div>
            <input
              className={
                createEmailStatus &&
                createPwStatus &&
                createConfirmPwStatus &&
                createNameStatus === false
                  ? "inputName notInputNameClicked"
                  : "inputName"
              }
              type="text"
              placeholder="Name"
              onChange={this.saveAccount}
              onKeyUp={this.enteredName}
              value={createNameValue}
              name="createNameValue"
            />
            <div
              className={
                createEmailStatus &&
                createPwStatus &&
                createConfirmPwStatus &&
                createNameStatus === false
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
                  to="http://localhost:3000/Account"
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
                    to="http://localhost:3000/Account"
                  >
                    Privacy
                  </Link>
                  -
                  <Link
                    className="reCAPCHATLink"
                    to="http://localhost:3000/Account"
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
