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
            Before the real experiment begins you will be allowed to use a demo
            version of the system so that you can understand how to operate the
            login system on this emulated iPhone.
          </p>
          <p>
            During the demo there will be helper boxes dotted around the page
            with helpful information regarding how to use specific parts of the
            webpage. Pay attention to these before you get to the real
            experiment.
          </p>
          <p>
            This phone is limited in the fact that until you get to the
            questionnaire at the end you will not be able to use your keyboard.
            Copy and paste also will not work.
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
