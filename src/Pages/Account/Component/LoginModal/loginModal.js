import React, { Component } from "react";
import "./loginModal.scss";

class LoginModal extends Component {
  render() {
    const {
      isActive,
      closeModal,
      inputEmailStatus,
      inputPwStatus,
      handleEmailValue,
      handlePwValue,
      handleLoginBtn,
      handleInputEmailStatus,
    } = this.props;
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
                inputEmailStatus === null || inputEmailStatus
                  ? "inputIdInfo"
                  : "inputIdInfo notInputIdClicked"
              }
              type="text"
              placeholder="Email address"
              onChange={handleEmailValue}
              onKeyUp={handleInputEmailStatus}
            />
            <div
              className={
                inputEmailStatus === null || inputEmailStatus
                  ? "notInputId"
                  : "notInputId notInputIdClicked"
              }
            >
              Please enter a valid email address
            </div>
            <input
              className={
                inputPwStatus === null || inputPwStatus
                  ? "inputPwInfo"
                  : "inputPwInfo notInputPwClicked"
              }
              type="password"
              placeholder="Password"
              onChange={handlePwValue}
              onKeyUp={this.props.handleInputPwStatus}
            />
            <div
              className={
                inputPwStatus === null || inputPwStatus
                  ? "notInputPw"
                  : "notInputPw notInputPwClicked"
              }
            >
              Please provide a password
            </div>
            <div className="forgetText">
              <a href="http://localhost:3000/Account">Forgot Password?</a>
            </div>
            <button className="loginBtn" type="button" onClick={handleLoginBtn}>
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
            <a className="clickLink" href="http://localhost:3000/Account">
              CREATE AN ACCOUNT
            </a>
            <a className="clickLink" href="http://localhost:3000/Account">
              ABOUT LOGI ID
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
