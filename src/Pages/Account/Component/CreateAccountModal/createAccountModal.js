import React, { Component } from "react";
import "./createAccountModal.scss";

class CreateAccountModal extends Component {
  render() {
    const { isActive, closeModal } = this.props;
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
              className="inputEmail"
              type="text"
              placeholder="Email address"
            />
            <div className="notInputEmail">Please enter a valid email address</div>
            <input
              className="inputPw"
              type="password"
              placeholder="Password"
            />
            <div className="notInputPw">Password does not meet requirements</div>
            <input
              className="confirmPw"
              type="password"
              placeholder="Confirm Password"
            />
            <div className="notConfirmPw">Password does not match</div>
            <input className="inputName" type="text" placeholder="Name" />
            <div className="notInputName">Please enter name</div>
            <div className="policyCheck">
              <input className="policyCheckbox" type="checkbox" />
              <span className="policyCheckText">
                Yes, I want to receive news and product emails. Read our
                <a
                  className="privacyPolicy"
                  href="http://localhost:3000/Account"
                >
                  privacy policy
                </a>
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
                  <a
                    className="reCAPCHATLink"
                    href="http://localhost:3000/Account"
                  >
                    Privacy
                  </a>
                  -
                  <a
                    className="reCAPCHATLink"
                    href="http://localhost:3000/Account"
                  >
                    Terms
                  </a>
                </div>
              </div>
            </div>

            <button className="createBtn" type="button">
              CREATE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccountModal;
