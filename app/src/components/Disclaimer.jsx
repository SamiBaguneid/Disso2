import React, { Component } from "react";

class Disclaimer extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="centreText titleDiv">
          <h1 className="title appleFont centreText">Disclaimer</h1>
        </div>
        <div className="widthPadding disclaimerBox">
          <p>
            This experiment was to look into the security related problems
            regarding the autofill option.
          </p>
        </div>
        <div>
          <button
            onClick={() => this.props.changePage(this.props.currentPage + 1)}
            className="questionnaireButton questionnaireNext appleFont disclaimerButton1"
          >
            Next
          </button>
          <button
            onClick={() => this.props.changePage(this.props.currentPage - 1)}
            className="questionnaireButton questionnaireBack appleFont disclaimerButton2"
          >
            Back
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Disclaimer;
