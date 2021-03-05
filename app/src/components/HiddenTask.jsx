import React, { Component } from "react";
import blurredPhoto from "../images/blurredPhoto.png";

export default class HiddenTask extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="beginExperimentDiv">
          <button
            className="beginExperimentButton"
            onClick={() =>
              this.props.changePage(this.props.pageNumbers.BeginMain)
            }
          >
            Next Page
          </button>
        </div>
        <div className="screenWidth fixHeightHome">
          <img className="homeBackground" src={blurredPhoto} />
        </div>
      </React.Fragment>
    );
  }
}
