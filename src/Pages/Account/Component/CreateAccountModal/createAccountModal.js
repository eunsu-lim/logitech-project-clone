import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./createAccountModal.scss";

class CreateAccountModal extends Component {
  render() {
    const {
      isActive,
      closeModal,
      saveAccount,
      enteredEmail,
      enteredPw,
      enteredConfirmPw,
      enteredName,
      createEmailStatus,
      createPwStatus,
      createConfirmPwStatus,
      createNameStatus,
      createEmailValue,
      createPwValue,
      createConfirmPwValue,
      createNameValue,
      clickedCreateBtn,
    } = this.props;

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
            {/* ------------------------------ 여기서부터  -----------------------------------*/}
            <input
              className={
                createEmailStatus === false
                  ? "inputEmail notInputEmailClicked"
                  : "inputEmail"
              }
              type="text"
              placeholder="Email address"
              onChange={saveAccount}
              onKeyUp={enteredEmail}
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
            {/* 비밀번호 */}
            <input
              className={
                createEmailStatus && createPwStatus === false
                  ? "inputPw notInputPwClicked"
                  : "inputPw"
              }
              type="password"
              placeholder="Password"
              onChange={saveAccount}
              onKeyUp={enteredPw}
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
            {/* 비밀번호 확인 */}
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
              onChange={saveAccount}
              onKeyUp={enteredConfirmPw}
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
            {/* 이름 */}
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
              onChange={saveAccount}
              onKeyUp={enteredName}
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
            {/* --------------------------------- 여기까지 ---------------------------------- */}
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
              onClick={clickedCreateBtn}
            >
              CREATE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccountModal;
