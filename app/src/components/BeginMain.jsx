import React, { Component } from "react";

class BeginMain extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="centreText titleDiv">
          <h1 className="title appleFont centreText">Begin Real Experiment</h1>
        </div>
        <div className="widthPadding explanationBox">
          <p>
            You have successfully completed the demo, the main task was hidden
            as we do not want to affect your results in the real experiment.{" "}
          </p>
          <p>If you want to try the demo again refresh the page now.</p>
          <p>
            Once you start the real experiment{" "}
            <span className="bold">DO NOT REFRESH THE PAGE</span>.
          </p>
        </div>
        <div className="explanationNextDiv">
          <button
            onClick={() => this.props.changePage(this.props.pageNumbers.Login)}
          >
            Next Page
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default BeginMain;
