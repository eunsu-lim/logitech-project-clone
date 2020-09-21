import React, { Component } from "react";
import InfoBox from "./Component/infoBox";
import LoginModal from "./Component/LoginModal/loginModal";
import CreateAccountModal from "./Component/CreateAccountModal/createAccountModal";
import "./Account.scss";

class Account extends Component {
  constructor() {
    super();
    this.state = {
      loginModal: false,
      createAccountModal: false,
      emailValue: "",
      passwordValue: "",
      inputEmailStatus: null,
      inputPwStatus: null,
      //회원가입 state
      createEmailStatus: null,
      createPwStatus: null,
      createConfirmPw: null,
      createName: null,
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

  handleClick = () => {
    const { loginModal } = this.state;
    this.setState({
      loginModal: !loginModal,
    });
  };

  handleCaClick = () => {
    const { createAccountModal } = this.state;
    this.setState({
      createAccountModal: !createAccountModal,
    });
  };

  handleEmailValue = (e) => {
    const { value } = e.target;
    this.setState({
      emailValue: value,
    });
  };

  handlePwValue = (e) => {
    const { value } = e.target;
    this.setState({
      passwordValue: value,
    });
  };

  handleLoginBtn = () => {
    fetch("http://10.58.5.78:8000/account/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.emailValue,
        password: this.state.passwordValue,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const { emailValue, passwordValue, inputEmailStatus } = this.state;
        if (inputEmailStatus === false) {
          this.setState({
            inputPwStatus: true,
          });
        }
        this.setState({
          inputEmailStatus: emailValue.length > 1 && emailValue.includes("@"),
        });
        if (inputEmailStatus === true && passwordValue.length < 5) {
          this.setState({
            inputPwStatus: false,
          });
        }
        if (result.Authorization) {
          localStorage.setItem("token", result.Authorization);
          this.props.history.push("/ProductDetails");
        } else if (result.message === "UNAUTHORIZED") {
          alert("This email is not registered or has a different password!");
        }
      });
  };

  // handleLoginBtn = () => {
  //   const { emailValue, passwordValue, inputEmailStatus } = this.state;
  //   if (inputEmailStatus === false) {
  //     this.setState({
  //       inputPwStatus: true,
  //     });
  //   }
  //   this.setState({
  //     inputEmailStatus: emailValue.length > 1 && emailValue.includes("@"),
  //   });
  //   if (inputEmailStatus === true && passwordValue.length < 5) {
  //     this.setState({
  //       inputPwStatus: false,
  //     });
  //   }
  // };

  handleInputEmailStatus = () => {
    const { emailValue } = this.state;
    this.setState({
      inputEmailStatus: emailValue.length >= 1,
    });
  };

  handleInputPwStatus = () => {
    const { passwordValue } = this.state;
    this.setState({
      inputPwStatus: passwordValue.length >= 1,
    });
  };

  render() {
    const {
      loginModal,
      createAccountModal,
      passwordValue,
      inputEmailStatus,
      inputPwStatus,
    } = this.state;
    return (
      <div className="account">
        <div
          className="myAccount"
          onClick={
            (loginModal && this.handleClick) ||
            (createAccountModal && this.handleCaClick)
          }
        >
          <div className="myAccountBox">
            <h1 className="myAccountText">MY ACCOUNT</h1>
            <div className="loginAndCreateAccountBtn">
              <button
                type="button"
                className="loginBtn"
                onClick={this.handleClick}
              >
                <span>LOGIN</span>
              </button>
              <button
                type="button"
                className="createAccountBtn"
                onClick={this.handleCaClick}
              >
                <span>CREATE ACCOUNT</span>
              </button>
            </div>
          </div>
        </div>
        <InfoBox
          loginModal={loginModal}
          createAccountModal={createAccountModal}
          handleClick={this.handleClick}
          handleCaClick={this.handleCaClick}
        />
        <LoginModal
          isActive={loginModal}
          inputEmailStatus={inputEmailStatus}
          inputPwStatus={inputPwStatus}
          closeModal={this.closeModal}
          handleEmailValue={this.handleEmailValue}
          handlePwValue={this.handlePwValue}
          handleLoginBtn={this.handleLoginBtn}
          handleInputEmailStatus={this.handleInputEmailStatus}
          handleInputPwStatus={this.handleInputPwStatus}
        />
        <CreateAccountModal
          isActive={createAccountModal}
          closeModal={this.closeModal}
          pwValue={passwordValue}
        />
      </div>
    );
  }
}

export default Account;
