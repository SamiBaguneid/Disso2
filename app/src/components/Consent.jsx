import React, { Component } from "react";
import download from "../documents/information.pdf";

class Consent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="centreText">
          <h1>Consent</h1>
        </div>
        <div class="centreText pushDownConsentInfo">
          <h1 class="reducedFontPleaseRead noMargin">
            Please read the sheet attatched below
          </h1>
          <a href={download} download="Information Sheet">
            Information Sheet
          </a>
        </div>
        <div class="centreText pushDownConsent">
          <p className="bolder">By clicking "Next" I confirm the following</p>
        </div>
        <div class="reducedFontConsent pushDownConsent">
          <ul class="noMargins">
            <li>
              <p class="noMargin">
                I confirm that I have read and understood the Information Sheet
                for the above study. I have had an opportunity to consider the
                information and what will be expected of me.{" "}
              </p>
            </li>
            <li>
              <p class="noMargin">
                I understand that my participation is voluntary and that I am
                free to withdraw at any time without giving a reason.{" "}
              </p>
            </li>
            <li>
              <p class="noMargin">
                I confirm that I understand that the data I provide will be
                anonymous.{" "}
              </p>
            </li>
            <li>
              <p class="noMargin">I am 18 years or older</p>
            </li>
            <li>
              <p class="noMargin">I consent to participate in this study</p>
            </li>
          </ul>
        </div>
        <div className="explanationNextDiv pushDownConsentNext">
          <button
            onClick={() =>
              this.props.changePage(this.props.pageNumbers.Explanation)
            }
          >
            Next
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Consent;
