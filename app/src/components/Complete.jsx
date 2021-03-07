import React, { Component } from "react";

class Complete extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  complete = () => {
    this.props.completeTask();
    this.props.changePage(this.props.pageNumbers.ProlificCode);
  };

  render() {
    return (
      <React.Fragment>
        <div className="centreText titleDiv">
          <h1 className="title appleFont centreText">Complete Task</h1>
        </div>
        <div className="widthPadding explanationBox">
          <p>
            Clicking the complete button below will submit all your responses.
          </p>
          <p>Please do not reattempt the experiment after completion.</p>
          <p>
            Once you click complete you will be directed to the final page where
            you will recieve your Prolific Code.
          </p>
        </div>
        <div className="explanationNextDiv">
          <button onClick={this.complete}>Complete</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Complete;
