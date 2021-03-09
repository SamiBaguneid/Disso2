import React, { Component } from "react";
import homeBackground from "../images/homeBackground.png";
import safariIcon from "../images/safariIcon.png";
import messageIcon from "../images/messageIcon.png";

export default class Home extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.highestPage);
    return (
      <React.Fragment>
        <div className="messageIconDiv">
          <button
            onClick={() =>
              this.props.changePage(this.props.pageNumbers.Messages)
            }
            className="hiddenButton"
          >
            <img className="messageIcon" src={messageIcon} />
          </button>
          <p className="centreText">Messages</p>
        </div>
        <div className="safariIconDiv">
          <button
            onClick={() => this.props.changePage(this.props.highestPage)}
            className="hiddenButton"
          >
            <img className="safariIcon" src={safariIcon} />
          </button>
          <p className="centreText">Experiment</p>
        </div>
        <div className="screenWidth fixHeightHome">
          <img className="homeBackground" src={homeBackground} />
        </div>
      </React.Fragment>
    );
  }
}
