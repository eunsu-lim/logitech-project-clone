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
      // 로그인 state----------
      emailValue: "",
      passwordValue: "",
      inputEmailStatus: null,
      inputPwStatus: null,
      //-----------------------
      // 회원가입 state------------------
      createEmailValue: "",
      createPwValue: "",
      createConfirmPwValue: "",
      createNameValue: "",
      createEmailStatus: null,
      createPwStatus: null,
      createConfirmPwStatus: null,
      createNameStatus: null,
      //--------------------------------
    };
  }
  // 모달 창 끄는 함수----------------------------------------------
  closeModal = (e) => {
    const isClickedAccountModal =
      e.target.className === "accountModalBackground isActive";
    const isClickedLoginModal =
      e.target.className === "loginModalBackGround isActive";

    (isClickedAccountModal || isClickedLoginModal) &&
      this.setState({
        loginModal: false,
        createAccountModal: false,
        createEmailValue: "",
      });
  };
  //---------------------------------------------------------------

  // 모달 창 켜는 함수---------------------------------------------
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
  //--------------------------------------------------------------
  // 로그인에 정보 입력 시 입력된 값 저장하는 함수
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
  //--------------------------------------------
  // 로그인에 정보 입력 시 빨간 기능 없애는 함수
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
  //-----------------------------------------------
  // 로그인 기능 구현하는 함수-----------------------------------------------------
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
          alert("The email or password you have entered is invalid");
        }
      });
  };
  //------------------------------------------------------------------------------

  // 회원가입에 정보 입력 시 입력된 값 저장하는 함수
  saveCreateEmail = (e) => {
    const { value } = e.target;
    this.setState({
      createEmailValue: value,
    });
  };

  saveCreatePw = (e) => {
    const { value } = e.target;
    this.setState({
      createPwValue: value,
    });
  };

  saveCreateConfirmPw = (e) => {
    const { value } = e.target;
    this.setState({
      createConfirmPwValue: value,
    });
  };

  saveCreateName = (e) => {
    const { value } = e.target;
    this.setState({
      createNameValue: value,
    });
  };
  //--------------------------

  // 회원가입 정보 입력 시 빨간 기능 없애는 함수

  // -----------------------------------------

  // 회원가입 기능 구현하는 함수-------------------------------------------
  // clickedCreateBtn = () => {
  //   fetch("http://10.58.5.78:8000/account/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.createEmailValue,
  //       password: this.state.createPwValue,
  //       name: this.state.createNameValue,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       const {
  //         createEmailValue,
  //         createPwValue,
  //         createConfirmPwValue,
  //         createNameValue,
  //       } = this.state;

  //       const emailValid =
  //         createEmailValue.length > 1 && createEmailValue.includes("@");
  //       const passwordValid = createPwValue.length >= 5;
  //       const passwordConfirmValid =
  //         createConfirmPwValue.length >= 5 &&
  //         createPwValue === createConfirmPwValue;
  //       const nameValid = createNameValue.length > 1;

  //       this.setState(
  //         {
  //           createEmailStatus: emailValid,
  //           createPwStatus: passwordValid,
  //           createConfirmPwStatus: passwordConfirmValid,
  //           createNameStatus: nameValid,
  //         },
  //         () => console.log(emailValid)
  //       );
  //       if (result.message === "SUCCESS") {
  //         alert("Sign Up Success!");
  //         // localStorage.setItem("token", result.Authorization);
  //         this.props.history.push("/ProductDetails");
  //       } else if (result.message === "ACCOUNT_ALREADY_EXIST") {
  //         alert("The email or password you have entered is invalid");
  //       }
  //     });
  // };
  //---------------------------------------------------------------------

  clickedCreateBtn = () => {
    const {
      createEmailStatus,
      createPwStatus,
      createConfirmPwStatus,
      createNameStatus,
    } = this.state;
    const succeed =
      createEmailStatus &&
      createPwStatus &&
      createConfirmPwStatus &&
      createNameStatus === true;
    if (succeed) {
      fetch("http://10.58.5.78:8000/account/signup", {
        method: "POST",
        body: JSON.stringify({
          email: this.state.createEmailValue,
          password: this.state.createPwValue,
          name: this.state.createNameValue,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          const emailValid =
            createEmailValue.length > 1 && createEmailValue.includes("@");
          const passwordValid = createPwValue.length >= 5;
          const passwordConfirmValid =
            createConfirmPwValue.length >= 5 &&
            createPwValue === createConfirmPwValue;
          const nameValid = createNameValue.length > 1;

          this.setState(
            {
              createEmailStatus: emailValid,
              createPwStatus: passwordValid,
              createConfirmPwStatus: passwordConfirmValid,
              createNameStatus: nameValid,
            },
            () => console.log(emailValid)
          );
          if (result.message === "SUCCESS") {
            alert("Sign Up Success!");
            // localStorage.setItem("token", result.Authorization);
            this.props.history.push("/ProductDetails");
          } else if (result.message === "ACCOUNT_ALREADY_EXIST") {
            alert("The email or password you have entered is invalid");
          }
        });
    }
    const {
      createEmailValue,
      createPwValue,
      createConfirmPwValue,
      createNameValue,
    } = this.state;

    const emailValid =
      createEmailValue.length > 1 && createEmailValue.includes("@");
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
  };
  //---------------------------------------------------------------------

  render() {
    const {
      loginModal,
      createAccountModal,
      inputEmailStatus,
      inputPwStatus,
      createEmailStatus,
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
          handleInputEmailStatus={this.handleInputEmailStatus}
          handleInputPwStatus={this.handleInputPwStatus}
          handleLoginBtn={this.handleLoginBtn}
          goToCreateAccountModal={this.goToCreateAccountModal}
        />
        <CreateAccountModal
          isActive={createAccountModal}
          closeModal={this.closeModal}
          saveCreateEmail={this.saveCreateEmail}
          email={this.state.createEmailValue}
          saveCreatePw={this.saveCreatePw}
          saveCreateConfirmPw={this.saveCreateConfirmPw}
          saveCreateName={this.saveCreateName}
          enteredEmail={this.enteredEmail}
          enteredPw={this.enteredPw}
          enteredConfirmPw={this.enteredConfirmPw}
          createPwStatus={this.createPwStatus}
          createConfirmPwStatus={this.createConfirmPwStatus}
          createNameStatus={this.createNameStatus}
          clickedCreateBtn={this.clickedCreateBtn}
          createEmailStatus={createEmailStatus}
        />
      </div>
    );
  }
}

export default Account;
