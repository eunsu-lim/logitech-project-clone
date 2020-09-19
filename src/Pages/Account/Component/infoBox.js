import React, { Component } from "react";
import InfoBoxTopLink from "./Link/infoBoxTopLink";
import InfoBoxBottomLink from "./Link/infoBoxBottomLink";
import infoBoxTop from "./dataOfInfoBoxTop";
import infoBoxBottom from "./dataOfInfoBoxBottom";
import "./infoBox.scss";

class InfoBox extends Component {
  state = {
    infoBoxTop: [],
    infoBoxBottom: [],
  };

  render() {
    const {
      loginModal,
      createAccountModal,
      handleClick,
      handleCaClick,
    } = this.props;
    return (
      <div
        className="myAccountBottom"
        onClick={
          (loginModal && handleClick) || (createAccountModal && handleCaClick)
        }
      >
        <div className="infoBoxTop">
          <ul className="infoBoxes">
            {infoBoxTop.map((info, idx) => {
              return (
                <li key={idx} className="infoBox">
                  <img className="infoImg" src={info.img} alt={info.alt} />
                  <h2 className="infoTitle">{info.title}</h2>
                  <div className="infoText">{info.content}</div>
                  <InfoBoxTopLink className="infoLink" links={info.details} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="infoBoxBottom">
          <ul className="infoBoxes" id="infoBoxesBottom">
            {infoBoxBottom.map((info, idx) => {
              return (
                <li key={idx} className="infoBox">
                  <img className="infoImg" src={info.img} alt={info.alt} />
                  <h2 className="infoTitle">{info.title}</h2>
                  <div className="infoText">{info.content}</div>
                  <InfoBoxBottomLink
                    className="infoLink"
                    links={info.details}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default InfoBox;
