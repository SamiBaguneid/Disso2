import React, { Component } from "react";

class Autofill extends Component {
  state = {};

  constructor(props) {
    super(props);
  }

  renderSwitch = () => {
    var response = "449585";
    var name = "Google";
    if (this.props.highestPage === this.props.pageNumbers.Autofill) {
      response = "099819";
      name = "Paypal";
    }
    console.log(this.props.option);
    switch (this.props.option) {
      case 1:
        return (
          <React.Fragment>
            {" "}
            <button
              className="appleFont autofillButton"
              onClick={() => this.props.addAutofill(response)}
            >
              <p className="noSpacing reducedFontSize">From Messages</p>
              <p className="noSpacing">{response}</p>
            </button>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <div class="floatLeft leftBox">
              {" "}
              <button
                className="appleFont autofillButton"
                onClick={() => this.props.addAutofill(response)}
              >
                <p className="noSpacing reducedFontSize">From Messages</p>
                <p className="noSpacing">{response}</p>
              </button>
            </div>
            <div className="appleFont autofillButton floatRight rightBox">
              <p className="noSpacing reducedFontSize">Keywords:</p>
              <p className="noSpacing">{name}</p>
            </div>
          </React.Fragment>
        );
      case 3:
        return;
      case 4:
        return (
          <React.Fragment>
            {" "}
            <button
              className="appleFont autofillButton"
              onClick={() => this.props.addAutofill(response)}
            >
              <p className="noSpacing reducedFontSize">From {name}:</p>
              <p className="noSpacing slightMarginTop">{response}</p>
            </button>
          </React.Fragment>
        );
    }
  };

  render() {
    return <div className="autofillNew">{this.renderSwitch()}</div>;
  }
}

export default Autofill;

/*grey aboveKeypad text-center autofill*/
