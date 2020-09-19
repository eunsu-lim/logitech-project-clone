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
              id="idInfo"
              className="inputInfo"
              type="text"
              placeholder="Email address"
            />
            <input
              className="inputInfo"
              type="password"
              placeholder="Password"
            />
            <input
              className="inputInfo"
              type="password"
              placeholder="Confirm Password"
            />
            <input className="inputInfo" type="text" placeholder="Name" />
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
