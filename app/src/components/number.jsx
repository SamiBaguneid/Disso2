import React, { Component } from "react";

export default class Number extends Component {
  state = { num: 0 };

  constructor(props) {
    super(props);
    this.state.num = this.props.num;
  }

  render() {
    return (
      <button
        onClick={() => this.props.addNum(this.props.num)}
        className="numButton"
      >
        {" "}
        {this.state.num}{" "}
      </button>
    );
  }
}
