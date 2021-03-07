import React, { Component } from "react";

export default class BeginDemo extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="centreText titleDiv">
          <h1 className="title appleFont centreText">Begin The Demo</h1>
        </div>
        <div className="widthPadding explanationBox">
          <p>
            In this experiment you will be testing the login procedure for a
            website on an iPhone. There will be two phases.
          </p>
          <p>
            Phase 1: You can freely explore a demo version of the system and its
            user interface.
          </p>
          <p>
            Phase 2: You will be asked to use the system as if you were to use
            it on your own device to login to a real website.
          </p>
          <p>
            During the demo there will be helper boxes dotted around the page
            with helpful information regarding how to use specific parts of the
            webpage. Pay attention to these before you get to the real
            experiment.
          </p>
        </div>
        <div className="explanationNextDiv">
          <button
            onClick={() =>
              this.props.changePage(this.props.pageNumbers.DemoLogin)
            }
          >
            Next Page
          </button>
        </div>
      </React.Fragment>
    );
  }
}
