import React, { Component } from "react";
import "./loginModal.scss";

class LoginModal extends Component {
  render() {
    const { isActive, closeModal } = this.props;
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
              id="idInfo"
              className="inputInfo"
              type="text"
              placeholder="Email address"
            />
            <input
              id="passwordInfo"
              className="inputInfo"
              type="password"
              placeholder="Password"
            />
            <div className="forgetText">
              <a href="http://localhost:3000/Account">Forgot Password?</a>
            </div>
            <button className="loginBtn" type="button">
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
