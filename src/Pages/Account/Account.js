import React, { Component } from "react";
import InfoBox from "./Component/infoBox";
import LoginModal from "./Component/LoginModal/loginModal";
import CreateAccountModal from "./Component/CreateAccountModal/createAccountModal";
import Nav from "../../Component/Nav/Nav";
import NavBottom from "../../Component/NavBottom/SearchBar";
import "./Account.scss";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      loginModal: false,
      createAccountModal: false,
    };
  }

  closeModal = (e) => {
    const isClickedAccountModal =
      e.target.className === "accountModalBackground isActive";
    const isClickedLoginModal =
      e.target.className === "loginModalBackGround isActive";

    (isClickedAccountModal || isClickedLoginModal) &&
      this.setState({
        loginModal: false,
        createAccountModal: false,
      });
  };

  openLoginModal = () => {
    const { loginModal } = this.state;
    this.setState({
      loginModal: !loginModal,
    });
  };

  openSignUpModal = () => {
    const { createAccountModal } = this.state;
    this.setState({
      createAccountModal: !createAccountModal,
    });
  };

  render() {
    const { loginModal, createAccountModal } = this.state;
    return (
      <>
        <Nav />
        <NavBottom />

        <div className="account">
          <div
            className="myAccount"
            onClick={
              (loginModal && this.openLoginModal) ||
              (createAccountModal && this.openSignUpModal)
            }
          >
            <div className="myAccountBox">
              <h1 className="myAccountText">MY ACCOUNT</h1>
              <div className="loginAndCreateAccountBtn">
                <button
                  type="button"
                  className="loginBtn"
                  onClick={this.openLoginModal}
                >
                  <span>LOGIN</span>
                </button>
                <button
                  type="button"
                  className="createAccountBtn"
                  onClick={this.openSignUpModal}
                >
                  <span>CREATE ACCOUNT</span>
                </button>
              </div>
            </div>
          </div>
          <InfoBox
            loginModal={loginModal}
            createAccountModal={createAccountModal}
            openLoginModal={this.openLoginModal}
            openSignUpModal={this.openSignUpModal}
          />
          <LoginModal isActive={loginModal} closeModal={this.closeModal} />
          <CreateAccountModal
            isActive={createAccountModal}
            closeModal={this.closeModal}
          />
        </div>
      </>
    );
  }
}

export default Account;
