import React, { Component } from "react";

export default class Explanation extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="centreText titleDiv">
          <h1 className="title appleFont centreText">Explanation Of Task</h1>
        </div>
        <div className="widthPadding explanationBox">
          <p>
            1) In this experiment you will be looking into the usability of the
            system, and you will be questionned on this at the end. It will also
            look at the security of the system.
          </p>
          <p>
            2) You will not be able to use your keyboard during this experiment.
            You will be able to use your mouse, touchpad or touchscreen.
          </p>
          <p>4) Do not refresh the page.</p>
          <p>
            5) Once you have submitted the questionaire at the end you will be
            given an academic prolific code. Copy this and enter it in to
            Prolific Academic to confirm you have completed the task.
          </p>
        </div>
        <div className="explanationNextDiv">
          <button
            onClick={() =>
              this.props.changePage(this.props.pageNumbers.BeginDemo)
            }
          >
            Next Page
          </button>
        </div>
      </React.Fragment>
    );
  }
}
