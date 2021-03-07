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
          <h1 className="title appleFont centreText">Demo Completed</h1>
        </div>
        <div className="widthPadding explanationBox">
          <p>You have now completed the demo.</p>
          <p>
            You will again be using this same saystem as shown during the demo
            to login to the website.
          </p>
          <p>
            Please login to the website as if you were logging in to a real
            website.
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
