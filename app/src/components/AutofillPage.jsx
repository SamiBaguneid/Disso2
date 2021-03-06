import React, { Component } from "react";
import numKeyboard from "../images/numKeyboard.jpg";
import Number from "./number";
import Autofill from "./autofill";
import messageDropdown from "../images/message.PNG";
import otherMessageDropdown from "../images/message1.png";
import warning from "../images/warning.png";

export default class AutofillPage extends Component {
  state = {
    output: "",
    messageActive: true,
    keyboardActive: false,
    errorMessage: false
  };

  constructor(props) {
    super(props);
    this.props.updateMessageReadStatus();
  }

  addNum = num => {
    if (num === parseInt(num)) {
      if (this.state.output.length < 6) {
        this.setState({ output: this.state.output + num });
      }
    } else {
      this.backspace();
    }
  };

  backspace = () => {
    if (this.state.output.length !== 0) {
      this.setState({ output: this.state.output.slice(0, -1) });
    }
  };

  addAutofill = response => {
    this.setState({ output: response });
    if (this.props.highestPage === this.props.pageNumbers.Autofill) {
      this.props.addState("Autofill Used", "yes");
    }
  };

  vertificationCode = () => {
    if (this.state.output.length === 0) {
      return (
        <p className="absolute appleFont lightGrey fixPadding">
          Vertification code
        </p>
      );
    } else {
      return (
        <p className="absolute appleFont fixPadding">{this.state.output}</p>
      );
    }
  };

  checkAutofill = () => {
    console.log("checkAutofill");
    /*
    if (this.state.highestPage === this.props.pageNumbers.DemoAutofill) {
      if (this.state.output === "449585") {
        this.props.changePage(this.props.pageNumbers.BeginMain);
      } else {
        console.log("Setting State");
        this.setState({ errorMessage: true });
      }
    }
    if (this.state.highestPage === this.props.pageNumbers.Autofill) {
      if (this.state.output === "099819") {
        this.props.changePage(this.props.pageNumbers.WhichWebsite);
      } else {
        this.setState({ errorMessage: true });
      }
    }
    console.log(this.state.errorMessage);
    */

    if (
      this.state.output === "449585" &&
      this.props.highestPage === this.props.pageNumbers.DemoAutofill
    ) {
      return this.props.changePage(this.props.pageNumbers.BeginMain);
    } //change lower autofill code
    if (
      this.state.output === "099819" &&
      this.props.highestPage === this.props.pageNumbers.Autofill
    ) {
      return this.props.changePage(this.props.pageNumbers.WhichWebsite);
    } else {
      this.setState({ errorMessage: true });
      this.props.incorrectCode(this.state.output);
    }
  };

  openKeyboard = () => {
    if (!this.state.keyboardActive) {
      this.setState({ keyboardActive: true });
    }
  };

  closeKeyboard = () => {
    if (this.state.keyboardActive) {
      this.setState({ keyboardActive: false });
    }
  };

  closeMessage = () => {
    this.setState({ messageActive: false });
  };

  displayMessage = () => {
    var classes = "displayNone";
    if (this.props.demoMessageRead) {
      if (
        this.props.highestPage === this.props.pageNumbers.Autofill &&
        !this.props.realMessageRead
      ) {
        classes = "messageButton";
      }
    } else {
      classes = "messageButton";
    }
    return (
      <div className="messageSize">
        <button
          className={classes}
          onClick={() =>
            this.props.changePage(this.props.pageNumbers.Messages, "safari")
          }
        >
          <img
            className="messageDropdown"
            src={
              this.props.highestPage === this.props.pageNumbers.Autofill
                ? messageDropdown
                : otherMessageDropdown
            }
          />
        </button>
      </div>
    );
  };

  autofillHelpBox = () => {
    if (
      this.state.keyboardActive &&
      this.props.option !== 3 &&
      this.props.demo
    ) {
      return (
        <React.Fragment>
          <div className="pointerAutofill"></div>
          <div className="autofillHelpBox helpBoxText">
            <p>
              Click the code below to automatically fill in the vertification
              code
            </p>
          </div>
        </React.Fragment>
      );
    }
  };

  messageHelpBox = () => {
    if (this.props.demo) {
      return (
        <React.Fragment>
          <div className="pointerMessage"></div>
          <div className="messageHelpBox">
            <p className="helpBoxText">
              Incoming SMS' will be previewed for a few seconds
            </p>
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.autofillHelpBox()}
        {this.messageHelpBox()}
        {this.displayMessage()}
        <div className="autofillContext">
          <h1 className="secondaryColour appleFont">Type in your code</h1>
        </div>
        <div className="pushItDown keyboardOutput addBorder">
          <button
            onClick={this.openKeyboard}
            className="vertificationCodeButton"
          >
            <div className="floatLeft">{this.vertificationCode()}</div>
            <img
              className={this.state.errorMessage ? "floatRight" : "displayNone"}
              src={warning}
            />
          </button>
        </div>
        <div className="continueButtonDiv">
          <button
            className="submitAutofill"
            onClick={() => this.checkAutofill()}
          >
            <p className="autofillContinueText appleFont">Continue</p>
          </button>
        </div>
        <div
          className={
            this.state.keyboardActive
              ? "autofillSection"
              : "autofillSection displayNone"
          }
        >
          <div className="closeKeyboard">
            <button onClick={this.closeKeyboard} className="doneButton">
              <p className="blue appleFont">Done</p>
            </button>
          </div>
          <Autofill
            option={this.props.option}
            addAutofill={this.addAutofill}
            highestPage={this.props.highestPage}
            pageNumbers={this.props.pageNumbers}
          />
          <div className="overlappingTable">
            <table>
              <tr>
                <th>
                  <Number num={1} addNum={this.addNum} />
                </th>
                <th>
                  <Number num={2} addNum={this.addNum} />
                </th>
                <th>
                  <Number num={3} addNum={this.addNum} />
                </th>
              </tr>
              <tr>
                <th>
                  <Number num={4} addNum={this.addNum} />
                </th>
                <th>
                  <Number num={5} addNum={this.addNum} />
                </th>
                <th>
                  <Number num={6} addNum={this.addNum} />
                </th>
              </tr>
              <tr>
                <th>
                  <Number num={7} addNum={this.addNum} />
                </th>
                <th>
                  <Number num={8} addNum={this.addNum} />
                </th>
                <th>
                  <Number num={9} addNum={this.addNum} />
                </th>
              </tr>
              <tr>
                <th>
                  <button className="numButton">x</button>
                </th>
                <th>
                  <Number num={0} addNum={this.addNum} />
                </th>
                <th>
                  <Number num={"b"} addNum={this.addNum} />
                </th>
              </tr>
            </table>
          </div>
          <div className="autofillImage2">
            <img className="screenWidth" src={numKeyboard} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
