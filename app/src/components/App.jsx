import React, { Component } from "react";
import Explanation from "./Explanation";
import BeginDemo from "./BeginDemo";
import Login from "./Login";
import Disclaimer from "./Disclaimer";
import AutofillPage from "./AutofillPage";
import HiddenTask from "./HiddenTask";
import BeginMain from "./BeginMain";
import Messages from "./Messages";
import Home from "./Home";
import iphone8 from "../images/iphone8.png";
import axios from "axios";
import MultiChoice from "./MultiChoice";
import qs from "qs";
import Complete from "./Complete";
import ProlificCode from "./ProlificCode";

export default class App extends Component {
  constructor(props) {
    super(props);
    //const rand = Math.floor(1 + Math.random() * 4);
    var rand;
    this.setOption();
    console.log(rand);
    this.state = {
      t0: undefined,
      page: 1,
      option: undefined,
      highestPage: 1,
      safari: false,
      demoMessageRead: false,
      realMessageRead: false,
      pageNumbers: {
        Home: -1,
        Messages: 0,
        Explanation: 1,
        BeginDemo: 2,
        DemoLogin: 3,
        DemoAutofill: 4,
        HiddenTask: 5,
        BeginMain: 6,
        Login: 7,
        Autofill: 8,
        WhichWebsite: 9,
        Disclaimer: 10,
        q2: 11,
        q3: 12,
        q4: 13,
        q5: 14,
        q6: 15,
        q7: 16,
        q8: 17,
        q9: 18,
        q10: 19,
        q11: 20,
        q12: 21,
        q13: 22,
        Complete: 23,
        ProlificCode: 24
      },
      questions: {
        option: undefined,
        "Time Taken": undefined,
        "Autofill Used": "no",
        "Message Viewed": "no",
        1: undefined,
        2: undefined,
        3: undefined,
        4: undefined,
        5: undefined,
        6: undefined,
        7: undefined,
        8: undefined,
        9: undefined,
        10: undefined,
        11: undefined,
        12: undefined,
        13: undefined
      },
      numQuestions: 13
    };
  }

  setOption = () => {
    if (localStorage.getItem("option") === null) {
      console.log("First attempt, local storage empty");
      this.getOption().then(data => {
        console.log(data);
        console.log(data.option);
        this.updateOption(data.option);
        localStorage.setItem("option", data.option);
      });
    } else {
      console.log("Using Local Storage");
      this.updateOption(localStorage.getItem("option"));
    }
    console.log("Checking option in questions");
    console.log(this.state.questions.option);
  };

  getOption = () => {
    const promise = axios.get(
      "http://dissertation-experiment-sb.cs.ucl.ac.uk:5000/code"
    );
    const dataPromise = promise.then(response => response.data);
    console.log(dataPromise);
    return dataPromise;
  };

  updateOption = num => {
    this.setState({ option: num });
    this.addState("option", num);
  };

  completeTask = () => {
    //change string to local ip address
    axios
      .post("http://localhost:5000/", qs.stringify(this.state.questions))
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  addState = (q, a) => {
    const newQuestions = { ...this.state.questions, [q]: a };
    this.setState({ questions: newQuestions });
  };

  changePage = (num, extraInfo) => {
    this.setState({ page: num });
    this.setState({ extraInfo: extraInfo });
    if (num > this.state.highestPage) {
      this.setState({ highestPage: num });
    }
    if (extraInfo === "safari") {
      this.setState({ safari: true });
    } else {
      this.setState({ safari: false });
    }
  };

  updateDemoMessageRead = () => {
    console.log("hi again");
    this.setState({ demoMessageRead: true });
  };

  updateRealMessageRead = () => {
    this.setState({ realMessageRead: true });
  };

  updateMessageReadStatus = () => {
    if (
      !this.state.demoMessageRead &&
      this.state.highestPage === this.state.pageNumbers.DemoAutofill
    ) {
      setTimeout(() => this.updateDemoMessageRead(), 6500);
    }
    if (
      this.state.highestPage === this.state.pageNumbers.Autofill &&
      !this.state.realMessageRead
    ) {
      setTimeout(() => this.updateRealMessageRead(), 6500);
    }
  };

  updateMessageReadStatusImmediately = () => {
    if (!this.state.demoMessageRead && this.state.highestPage === 4) {
      this.updateDemoMessageRead();
    }
    if (this.state.highestPage === 10 && !this.state.realMessageRead) {
      this.updateRealMessageRead();
    }
  };

  homeHelpBox = () => {
    if (
      this.state.highestPage > this.state.pageNumbers.BeginDemo &&
      this.state.highestPage < this.state.pageNumbers.BeginMain &&
      this.state.page !== this.state.pageNumbers.Home
    ) {
      return (
        <React.Fragment>
          <div class="pointerHome"></div>
          <div className="homeHelpBox">
            <p className="helpBoxText">
              Click the home button to go to the phones home page
            </p>
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="phoneDiv">
          <div className="phoneScreen">{this.renderSwitch()}</div>
          <div className="homeButtonContainer">
            {this.homeHelpBox()}
            <button
              onClick={() => this.changePage(-1, this.state.page)}
              className="homeButton"
            ></button>
          </div>
          <img className="phoneImage" src={iphone8} />
        </div>
      </React.Fragment>
    );
  }

  renderSwitch = () => {
    switch (this.state.page) {
      case this.state.pageNumbers.Home:
        return (
          <Home
            pageNumbers={this.state.pageNumbers}
            changePage={this.changePage}
            highestPage={this.state.highestPage}
          />
        );
        break;
      case this.state.pageNumbers.Messages:
        return (
          <Messages
            pageNumbers={this.state.pageNumbers}
            demo={true}
            safari={this.state.safari}
            changePage={this.changePage}
            highestPage={this.state.highestPage}
            updateMessageReadStatusImmediately={
              this.updateMessageReadStatusImmediately
            }
            addState={this.addState}
          />
        );
        break;
      case this.state.pageNumbers.Explanation:
        return (
          <Explanation
            pageNumbers={this.state.pageNumbers}
            changePage={this.changePage}
          />
        );
        break;
      case this.state.pageNumbers.BeginDemo:
        return (
          <BeginDemo
            pageNumbers={this.state.pageNumbers}
            changePage={this.changePage}
          />
        );
        break;
      case this.state.pageNumbers.DemoLogin:
        return (
          <Login
            pageNumbers={this.state.pageNumbers}
            changePage={this.changePage}
            demo={true}
          />
        );
        break;
      case this.state.pageNumbers.DemoAutofill:
        return (
          <AutofillPage
            pageNumbers={this.state.pageNumbers}
            option={this.state.option}
            changePage={this.changePage}
            demo={true}
            updateMessageReadStatus={this.updateMessageReadStatus}
            realMessageRead={this.state.realMessageRead}
            demoMessageRead={this.state.demoMessageRead}
            highestPage={this.state.highestPage}
            option={this.state.option}
          />
        );
        break;
      case this.state.pageNumbers.HiddenTask:
        return (
          <HiddenTask
            pageNumbers={this.state.pageNumbers}
            changePage={this.changePage}
          />
        );
        break;
      case this.state.pageNumbers.BeginMain:
        return (
          <BeginMain
            pageNumbers={this.state.pageNumbers}
            changePage={this.changePage}
          />
        );
        break;
      case this.state.pageNumbers.Login:
        return (
          <Login
            pageNumbers={this.state.pageNumbers}
            changePage={this.changePage}
            demo={false}
          />
        );
        break;
      case this.state.pageNumbers.Autofill:
        if (this.state.t0 === undefined) {
          this.setState({ t0: performance.now() });
        }
        return (
          <AutofillPage
            pageNumbers={this.state.pageNumbers}
            option={this.state.option}
            changePage={this.changePage}
            demo={false}
            updateMessageReadStatus={this.updateMessageReadStatus}
            realMessageRead={this.state.realMessageRead}
            demoMessageRead={this.state.demoMessageRead}
            highestPage={this.state.highestPage}
            addState={this.addState}
            option={this.state.option}
          />
        );
        break;
      case this.state.pageNumbers.WhichWebsite:
        if (this.state.questions["Time Taken"] === undefined) {
          this.addState(
            "Time Taken",
            (performance.now() - this.state.t0) / 1000
          );
        }
        console.log(this.state.questions);
        return (
          <MultiChoice
            options={["Paypal", "Amazon", "Revolut", "Google", "Not sure"]}
            question="Which website sent the autofill code in the real experiment?"
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.WhichWebsite}
            addState={this.addState}
            questionNum={1}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.Disclaimer:
        return (
          <Disclaimer
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.Disclaimer}
            pageNumbers={this.state.pageNumbers}
          />
        );
        break;
      case this.state.pageNumbers.q2:
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree",
              "I didn't have/use the autofill button"
            ]}
            question="I found the autofill function easy to use and understand?"
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q2}
            addState={this.addState}
            questionNum={2}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q3:
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I think that I would like to use this system frequently"
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q3}
            addState={this.addState}
            questionNum={3}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q4:
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I found the system unnecessarily complex."
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q4}
            addState={this.addState}
            questionNum={4}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q5:
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I thought the system was easy to use."
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q5}
            addState={this.addState}
            questionNum={5}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q6:
        console.log(this.state.questions);
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I think that I would need the support of a technical person to be able to use this system."
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q6}
            addState={this.addState}
            questionNum={6}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q7:
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I found the various functions in this system were well integrated."
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q7}
            addState={this.addState}
            questionNum={7}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q8:
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I thought there was too much inconsistency in this system."
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q8}
            addState={this.addState}
            questionNum={8}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q9:
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I would imagine that most people would learn to use this system very quickly."
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q9}
            addState={this.addState}
            questionNum={9}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q10:
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I found the system very cumbersome to use."
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q10}
            addState={this.addState}
            questionNum={10}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q11:
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I felt very confident using the system."
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q11}
            addState={this.addState}
            questionNum={11}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q12:
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neutral",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I needed to learn a lot of things before I could get going with this system."
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q12}
            addState={this.addState}
            questionNum={12}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q13:
        return (
          <MultiChoice
            options={["18-24", "25-35", "36-49", "50+"]}
            question="How old are you?"
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q13}
            addState={this.addState}
            questionNum={13}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.Complete:
        return (
          <Complete
            pageNumbers={this.state.pageNumbers}
            changePage={this.changePage}
            completeTask={this.completeTask}
          />
        );
        break;
      case this.state.pageNumbers.ProlificCode:
        return <ProlificCode />;
      default:
        break;
    }
  };
}
