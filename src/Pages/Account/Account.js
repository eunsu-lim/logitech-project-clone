import React, { Component } from "react";
import "./Account.scss";
import InfoBox from "./Component/infoBox";

class Account extends Component {
  render() {
    return (
      <div className="myAccount">
        <div className="myAccountTop">
          <div className="myAccountTextAndBtn">
            <h1 className="myAccountText">MY ACCOUNT</h1>
            <div className="loginAndCreateAccountBtn">
              <button type="button" className="loginBtn">
                <span>LOGIN</span>
              </button>
              <button type="button" className="createAccountBtn">
                <span>CREATE ACCOUNT</span>
              </button>
            </div>
          </div>
        </div>
        <InfoBox />
      </div>
    );
  }
}

export default Account;

