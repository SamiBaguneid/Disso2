import React, { Component } from "react";
import Explanation from "./Explanation";
import BeginDemo from "./BeginDemo";
import Login from "./Login";
import Disclaimer from "./Disclaimer";
import AutofillPage from "./AutofillPage";
import BeginMain from "./BeginMain";
import Messages from "./Messages";
import Home from "./Home";
import iphone8 from "../images/iphone8.png";
import axios from "axios";
import MultiChoice from "./MultiChoice";
import qs from "qs";
import Complete from "./Complete";
import ProlificCode from "./ProlificCode";
import AttentionCheck from "./AttentionCheck";
import Consent from "./Consent";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.updateOption = this.updateOption.bind(this);
    this.state = {
      cheatingCheck: false,
      tStart: undefined,
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
        Consent: 1,
        Explanation: 2,
        BeginDemo: 3,
        DemoLogin: 4,
        DemoAutofill: 5,
        BeginMain: 6,
        Login: 7,
        Autofill: 8,
        WhichWebsite: 9,
        q2: 10,
        q3: 11,
        q4: 12,
        q5: 13,
        q6: 14,
        q7: 15,
        q8: 16,
        AttentionCheck: 17,
        q10: 18,
        q11: 19,
        q12: 20,
        q13: 21,
        q14: 22,
        q15: 23,
        Complete: 24,
        ProlificCode: 25
      },
      questions: {
        "Cheating": false,
        "Failed Demo Codes": 0,
        "Failed Codes": 0,
        "Phone Num Input Demo": false,
        "Phone Num Input": false,
        option: undefined,
        "Total Time": undefined,
        "Time Taken": undefined,
        "Autofill Used": "no",
        "Message Viewed": "no",
        "Usability Score": undefined, 
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
        13: undefined,
        14: undefined
      },
      numQuestions: 15
    };
    this.setOption();
  }

  componentDidMount() {
    //this.setOption();
  }

  demoIncorrectCode = code => {
    this.addState(
      "Failed Demo Codes",
      this.state.questions["Failed Demo Codes"] + 1
    );
    if (code === "67975") {
      this.addState("Phone Num Input Demo", true);
    }
  };

  incorrectCode = code => {
    this.addState("Failed Codes", this.state.questions["Failed Codes"] + 1);
    if (code === "67975") {
      this.addState("Phone Num Input", true);
    }
  };

  setOption = () => {
    if (this.state.option === undefined) {
      if (localStorage.getItem("option") === null) {
        console.log("First attempt, local storage empty");
        this.getOption().then(data => {
          console.log(data);
          console.log(typeof data.option);
          this.updateOption(data.option);
          localStorage.setItem("option", data.option);
        });
      } else {
        console.log(this.state);
        console.log("Using Local Storage");
        const option = localStorage.getItem("option");
        this.updateOption(parseInt(option));
      }
    }
  };

  getOption = () => {
    const promise = axios.get(
      "https://dissertation-experiment-sb.cs.ucl.ac.uk:5000/code"
    );
    const dataPromise = promise.then(response => response.data);
    return dataPromise;
  };

  updateOption = num => {
    console.log("Updating option");
    this.setState({ option: num });
    //setTimeout(function(){console.log(this.state.option)},1000);
    this.addState("option", num);
  };

  completeTask = () => {
    //change string to local ip address
    axios
      .post(
        "https://dissertation-experiment-sb.cs.ucl.ac.uk:5000/",
        qs.stringify(this.state.questions)
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  addState = (q, a) => {
    console.log(q);
    console.log(a);
    console.log(this.state.questions);
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

  pageUpdate = () => {
    console.log("Updating Page");
    const currentPage = this.state.highestPage;
    if (localStorage.getItem("page") === null) {
      localStorage.setItem("page", currentPage);
    } else {
      if (currentPage > localStorage.getItem("page")) {
        localStorage.setItem("page", currentPage);
        /*
        if (
          currentPage === this.state.pageNumbers.Autofill ||
          currentPage === this.state.pageNumbers.WhichWebsite
        ) {
          this.postPage();
        }
        */
      }
    }
  };

  cheatingCheck = () => {
    console.log("Checking")
    console.log(this.state.cheatingCheck);
    console.log(localStorage.getItem("page"));
    console.log(localStorage.getItem("page")>this.state.pageNumbers.Autofill);
    if(localStorage.getItem("page")>this.state.pageNumbers.Autofill){
      this.setState({cheatingCheck: true});
      this.addState("Cheating", true);
      console.log("Added Cheating");
    }
    console.log("Finished cheat check");
  };

  postPage = () => {
    console.log("Posting Page");
    const tempStore = {
      page: this.state.highestPage,
      option: this.state.option
    };
    console.log(tempStore);
    axios
      .post(
        "https://dissertation-experiment-sb.cs.ucl.ac.uk:5000/page",
        qs.stringify(tempStore)
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  calculateScore = () => {
    var qs = [3,4,5,6,7,8,10,11,12,13];
    var i;
    var evens = 0;
    var odds = 0;
    var total = 0;
    var answers = this.state.questions;
    console.log(answers);
    for(i=1; i<qs.length+1; i++){
      console.log(answers[qs[i-1]]);
      if(i%2===0){
        evens += this.convertAgreement(answers[qs[i-1]]);
      }else{
        odds += this.convertAgreement(answers[qs[i-1]]);
      }
    }
    console.log(evens);
    console.log(odds);
    console.log(total);
    total = 25-evens + odds-5
    console.log(total);
    total *= 2.5
    console.log(total);
    this.addState("Usability Score", total);
  }

  convertAgreement = (value) => {
    console.log(value);
    switch(value){
      case "Strongly Agree":
        return 5;
      case "Agree":
        return 4;
      case "Neither Agree Nor Disagree":
        return 3;
      case "Disagree":
        return 2;
      case "Strongly Disagree":
        return 1;
    }
  }

  render() {
    this.pageUpdate();
    return (
      <React.Fragment>
        <div className="phoneDiv">
          <div className="phoneScreen">{this.renderSwitch()}</div>
          <div className="homeButtonContainer">
            {this.homeHelpBox()}
            <button
              onClick={() =>
                this.state.highestPage >= this.state.pageNumbers.DemoLogin
                  ? this.changePage(-1, this.state.page)
                  : null
              }
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
      case this.state.pageNumbers.Consent:
        return (
          <Consent
            pageNumbers={this.state.pageNumbers}
            changePage={this.changePage}
          />
        );
        break;
      case this.state.pageNumbers.Explanation:
        if(this.state.option === undefined) {
          this.updateOption(parseInt(localStorage.getItem("option")));
        }
        if (this.state.tStart === undefined) {
          this.setState({ tStart: performance.now() });
        }
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
        if(!this.state.cheatingCheck){
          this.cheatingCheck();
        }
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
            incorrectCode={this.demoIncorrectCode}
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
            incorrectCode={this.incorrectCode}
          />
        );
        break;
      case this.state.pageNumbers.WhichWebsite:
        console.log(this.state.questions);
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
            question="Which website sent the autofill code in the experiment (not during the demo before the experiment)?"
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.WhichWebsite}
            addState={this.addState}
            questionNum={1}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q2:
        return (
          <MultiChoice
            options={[
              "Strongly Agree",
              "Agree",
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I found the process of entering the login code into the website easy to use and understand."
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
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I think that I would like to use this way of entering the login code frequently."
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
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I found the process of entering the login code unnecessarily complex."
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
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I thought the process of entering the login code was easy to use."
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
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I think that I would need the support of a technical person to be able to enter the login code."
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
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I found the various functions used to help enter the login code were well integrated."
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
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I thought there was too much inconsistency in entering the login code."
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q8}
            addState={this.addState}
            questionNum={8}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.AttentionCheck:
        return (
          <AttentionCheck
            options={[
              "Strongly Agree",
              "Agree",
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="Based on the text below, what option should you choose?"
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.AttentionCheck}
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
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I would imagine that most people would learn how to enter the login code very quickly."
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
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I found the process of entering the login code very cumbersome to use."
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
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I felt very confident entering the login code."
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
            options={[
              "Strongly Agree",
              "Agree",
              "Neither Agree Nor Disagree",
              "Disagree",
              "Strongly Disagree"
            ]}
            question="I needed to learn a lot of things before I could enter the login code."
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q13}
            addState={this.addState}
            questionNum={13}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q14:
        return (
          <MultiChoice
            options={["18-24", "25-35", "36-49", "50+"]}
            question="How old are you?"
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q14}
            addState={this.addState}
            questionNum={14}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.q15:
        return (
          <MultiChoice
            options={["iPhone", "Android", "other"]}
            question="What smartphone do you have?"
            changePage={this.changePage}
            currentPage={this.state.pageNumbers.q15}
            addState={this.addState}
            questionNum={15}
            numQuestions={this.state.numQuestions}
            questions={this.state.questions}
          />
        );
        break;
      case this.state.pageNumbers.Complete:
        if(this.state.questions["Usability Score"]===undefined){
          this.calculateScore();
        }
        return (
          <Complete
            pageNumbers={this.state.pageNumbers}
            changePage={this.changePage}
            completeTask={this.completeTask}
          />
        );
        break;
      case this.state.pageNumbers.ProlificCode:
        if (this.state.questions["Total Time"] === undefined) {
          this.addState(
            "Total Time",
            (performance.now() - this.state.tStart) / 1000
          );
        }
        console.log(this.state.questions);
        return <ProlificCode />;
      default:
        break;
    }
  };
}
