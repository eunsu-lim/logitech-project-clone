import React, { Component } from "react";
import infoBoxTop from "./dataOfInfoBoxTop";
import infoBoxBottom from "./dataOfInfoBoxBottom";
import InfoBoxTopLink from "./Link/infoBoxTopLink";
import InfoBoxBottomLink from "./Link/infoBoxBottomLink";
import "./infoBox.scss";

class InfoBox extends Component {
  constructor() {
    super();
    this.state = {
      infoBoxTop: [],
      infoBoxBottom: [],
    };
  }

  render() {
    return (
      <div className="myAccountBottom">
        <div className="infoBoxTop">
          <ul className="infoBoxes">
            {infoBoxTop.map((info, idx) => {
              console.log(info);
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
