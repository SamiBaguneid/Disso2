import React, { Component } from "react";

class MultiChoice extends Component {
  state = {
    error: "displayNone"
  };

  constructor(props) {
    super(props);
  }

  onValueChange = event => {
    this.setState({
      selectedOption: event.target.value
    });
  };

  formSubmit = event => {
    event.preventDefault();
    if (this.state.selectedOption === undefined) {
      this.setState({ error: "red" });
    } else {
      this.props.addState(this.props.questionNum, this.state.selectedOption);
      this.setState({ selectedOption: undefined }); //otherwise next question may have selectedOption of previous question
      this.setState({ error: "displayNone" }); //so next page doesnt have error message if first page did
      this.props.changePage(this.props.currentPage + 1);
    }
  };

  goBack = () => {
    this.setState({ selectedOption: undefined }); //if you select option then go back the previous question would have current questions selectedOption
    this.props.changePage(this.props.currentPage - 1);
  };

  render() {
    return (
      <React.Fragment>
        <div className="homeBackground white-bg">
          <div className="questionNumber">
            <h1 className="questionNumberText appleFont">
              Question {this.props.questionNum} of {this.props.numQuestions}
            </h1>
          </div>

          <p className="marginLR">{this.props.question}</p>
          <form className="marginLR" onSubmit={this.formSubmit}>
            {this.props.options.map(option => (
              <div className="radioContainer">
                <input
                  className="check"
                  type="radio"
                  value={option}
                  checked={this.state.selectedOption === option}
                  onChange={this.onValueChange}
                />
                <span className="checkMark">{option}</span>
              </div>
            ))}
            <p className={this.state.error}>You need to select an option</p>
            <input
              className="questionnaireButton questionnaireNext appleFont"
              type="submit"
              value={"Next"}
            />
          </form>
          <button
            onClick={this.goBack}
            className={
              this.props.questionNum === 1
                ? "displayNone"
                : "questionnaireButton questionnaireBack appleFont"
            }
          >
            Back
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default MultiChoice;
