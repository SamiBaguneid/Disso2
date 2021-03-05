import React, { Component } from "react";
import message1 from "../images/messageScreen1.png";
import message2 from "../images/messageScreen2.png";
import emptyMessage from "../images/emptyMessages.png";
import safari from "../images/safari.jpg";

export default class Messages extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.messageViewed();
  }

  showMessage = () => {
    if (this.props.highestPage === this.props.pageNumbers.DemoAutofill) {
      return <img className="screenWidth pushUp" src={message1} />;
    }
    if (this.props.highestPage == this.props.pageNumbers.Autofill) {
      return <img className="screenWidth pushUp" src={message2} />;
    }
    return (
      <img
        className="screenWidth emptyMessageHeight pushUp"
        src={emptyMessage}
      />
    );
  };

  safariButton = () => {
    if (this.props.safari) {
      this.props.updateMessageReadStatusImmediately();
      return (
        <div className="positionSafari">
          <button
            className="safariButton"
            onClick={() => this.props.changePage(this.props.highestPage)}
          >
            <img className="safariImage" src={safari} />
          </button>
        </div>
      );
    }
  };

  messageViewed = () => {
    if (this.props.highestPage === this.props.pageNumbers.Autofill) {
      this.props.addState("Message Viewed", "yes");
    }
  };

  render() {
    return (
      <div className="screenWidth">
        {this.showMessage()}
        {this.safariButton()}
      </div>
    );
  }
}
