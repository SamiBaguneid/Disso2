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
            1) This experiment is to look into the Usablility and Security of
            the following system.
          </p>
          <p>2) The only type of interaction possible is clicking.</p>
          <p>
            3) You will begin with the demo, this allows you to explore the
            system before the main task.
          </p>
          <p>
            4) Don't refresh the page otherwise you will have to redo the
            experiment in its entirety
          </p>
          <p>
            5) Once you have submitted the questionaire at the end you will be
            given a academic prolific code. Copy this and enter it in to
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
