(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{28:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),o=a(21),i=a.n(o),c=(a(27),a(28),a(7)),r=a(10),u=a(2),l=a(3),A=a(5),g=a(4),d=a(0),p=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("div",{className:"centreText titleDiv",children:Object(d.jsx)("h1",{className:"title appleFont centreText",children:"Explanation Of Task"})}),Object(d.jsxs)("div",{className:"widthPadding explanationBox",children:[Object(d.jsx)("p",{children:"1) This experiment is to look into the Usablility and Security of the following system."}),Object(d.jsx)("p",{children:"2) The only type of interaction possible is clicking."}),Object(d.jsx)("p",{children:"3) You will begin with the demo, this allows you to explore the system before the main task."}),Object(d.jsx)("p",{children:"4) Don't refresh the page otherwise you will have to redo the experiment in its entirety"}),Object(d.jsx)("p",{children:"5) Once you have submitted the questionaire at the end you will be given a academic prolific code. Copy this and enter it in to Prolific Academic to confirm you have completed the task."})]}),Object(d.jsx)("div",{className:"explanationNextDiv",children:Object(d.jsx)("button",{onClick:function(){return e.props.changePage(e.props.pageNumbers.BeginDemo)},children:"Next Page"})})]})}}]),a}(s.Component),h=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("div",{className:"centreText titleDiv",children:Object(d.jsx)("h1",{className:"title appleFont centreText",children:"Begin The Demo"})}),Object(d.jsxs)("div",{className:"widthPadding explanationBox",children:[Object(d.jsx)("p",{children:"Before the real experiment begins you will be allowed to use a demo version of the system so that you can understand how to operate the login system on this emulated iPhone."}),Object(d.jsx)("p",{children:"During the demo there will be helper boxes dotted around the page with helpful information regarding how to use specific parts of the webpage. Pay attention to these before you get to the real experiment."}),Object(d.jsx)("p",{children:"This phone is limited in the fact that until you get to the questionnaire at the end you will not be able to use your keyboard. Copy and paste also will not work."})]}),Object(d.jsx)("div",{className:"explanationNextDiv",children:Object(d.jsx)("button",{onClick:function(){return e.props.changePage(e.props.pageNumbers.DemoLogin)},children:"Next Page"})})]})}}]),a}(s.Component),m=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={},s.loginHelpBox=function(){if(s.props.demo)return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("div",{className:"pointerLogin"}),Object(d.jsx)("div",{className:"loginHelpBox",children:Object(d.jsx)("p",{className:"helpBoxText",children:"The login fields have already been filled, you just need to press log in"})})]})},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(n.a.Fragment,{children:[this.loginHelpBox(),Object(d.jsx)("div",{className:"centreText titleDiv",children:Object(d.jsx)("h1",{className:"title appleFont centreText",children:"Login Page"})}),Object(d.jsxs)("div",{className:"pushDownLogin",children:[Object(d.jsx)("div",{className:"loginField pushDownLogin",children:Object(d.jsx)("p",{className:"loginText",children:"testuser@test.com"})}),Object(d.jsx)("div",{className:"loginField upperMargin",children:Object(d.jsx)("p",{className:"loginText",children:"**********"})}),Object(d.jsx)("div",{className:"loginButtonDiv",children:Object(d.jsx)("button",{className:"loginButton",onClick:function(){return e.props.changePage(e.props.demo?e.props.pageNumbers.DemoAutofill:e.props.pageNumbers.Autofill)},children:Object(d.jsx)("p",{className:"loginButtonText appleFont",children:"Log In"})})})]})]})}}]),a}(s.Component),j=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("div",{className:"centreText titleDiv",children:Object(d.jsx)("h1",{className:"title appleFont centreText",children:"Disclaimer"})}),Object(d.jsx)("div",{className:"widthPadding disclaimerBox",children:Object(d.jsx)("p",{children:"This experiment was to look into the security related problems regarding the autofill option."})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return e.props.changePage(e.props.currentPage+1)},className:"questionnaireButton questionnaireNext appleFont disclaimerButton1",children:"Next"}),Object(d.jsx)("button",{onClick:function(){return e.props.changePage(e.props.currentPage-1)},className:"questionnaireButton questionnaireBack appleFont disclaimerButton2",children:"Back"})]})]})}}]),a}(s.Component),b=a.p+"static/media/numKeyboard.258d1979.jpg",x=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={num:0},s.state.num=s.props.num,s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("button",{onClick:function(){return e.props.addNum(e.props.num)},className:"numButton",children:[" ",this.state.num," "]})}}]),a}(s.Component),N=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={},s.renderSwitch=function(){var e="449585",t="Google";switch(s.props.highestPage===s.props.pageNumbers.Autofill&&(e="099819",t="Paypal"),console.log(s.props.option),s.props.option){case 1:return Object(d.jsxs)(n.a.Fragment,{children:[" ",Object(d.jsxs)("button",{className:"appleFont autofillButton",onClick:function(){return s.props.addAutofill(e)},children:[Object(d.jsx)("p",{className:"noSpacing reducedFontSize",children:"From Messages"}),Object(d.jsx)("p",{className:"noSpacing",children:e})]})]});case 2:return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsxs)("div",{class:"floatLeft leftBox",children:[" ",Object(d.jsxs)("button",{className:"appleFont autofillButton",onClick:function(){return s.props.addAutofill(e)},children:[Object(d.jsx)("p",{className:"noSpacing reducedFontSize",children:"From Messages"}),Object(d.jsx)("p",{className:"noSpacing",children:e})]})]}),Object(d.jsxs)("div",{className:"appleFont autofillButton floatRight rightBox",children:[Object(d.jsx)("p",{className:"noSpacing reducedFontSize",children:"Keywords:"}),Object(d.jsx)("p",{className:"noSpacing",children:t})]})]});case 3:return;case 4:return Object(d.jsxs)(n.a.Fragment,{children:[" ",Object(d.jsxs)("button",{className:"appleFont autofillButton",onClick:function(){return s.props.addAutofill(e)},children:[Object(d.jsxs)("p",{className:"noSpacing reducedFontSize",children:["From ",t,":"]}),Object(d.jsx)("p",{className:"noSpacing slightMarginTop",children:e})]})]})}},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"autofillNew",children:this.renderSwitch()})}}]),a}(s.Component),O=a.p+"static/media/message.81cfa7fe.PNG",f=a.p+"static/media/message1.7212a6ca.png",v=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={output:"",messageActive:!0,keyboardActive:!1},s.addNum=function(e){e===parseInt(e)?s.state.output.length<6&&s.setState({output:s.state.output+e}):s.backspace()},s.backspace=function(){0!==s.state.output.length&&s.setState({output:s.state.output.slice(0,-1)})},s.addAutofill=function(e){s.setState({output:e}),s.props.highestPage===s.props.pageNumbers.Autofill&&s.props.addState("Autofill Used","yes")},s.vertificationCode=function(){return 0===s.state.output.length?Object(d.jsx)("p",{className:"absolute appleFont lightGrey fixPadding",children:"Vertification code"}):Object(d.jsx)("p",{className:"absolute appleFont fixPadding",children:s.state.output})},s.checkAutofill=function(){"449585"===s.state.output&&s.props.highestPage===s.props.pageNumbers.DemoAutofill&&s.props.changePage(s.props.pageNumbers.HiddenTask),"099819"===s.state.output&&s.props.highestPage===s.props.pageNumbers.Autofill&&s.props.changePage(s.props.pageNumbers.WhichWebsite)},s.openKeyboard=function(){s.state.keyboardActive||s.setState({keyboardActive:!0})},s.closeKeyboard=function(){s.state.keyboardActive&&s.setState({keyboardActive:!1})},s.closeMessage=function(){s.setState({messageActive:!1})},s.displayMessage=function(){var e="displayNone";return s.props.demoMessageRead&&(s.props.highestPage!==s.props.pageNumbers.Autofill||s.props.realMessageRead)||(e="messageButton"),Object(d.jsx)("div",{className:"messageSize",children:Object(d.jsx)("button",{className:e,onClick:function(){return s.props.changePage(s.props.pageNumbers.Messages,"safari")},children:Object(d.jsx)("img",{className:"messageDropdown",src:s.props.highestPage===s.props.pageNumbers.Autofill?O:f})})})},s.autofillHelpBox=function(){if(s.state.keyboardActive&&3!==s.props.option&&s.props.demo)return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("div",{className:"pointerAutofill"}),Object(d.jsx)("div",{className:"autofillHelpBox helpBoxText",children:Object(d.jsx)("p",{children:"Click the code below to automatically fill in the vertification code"})})]})},s.props.updateMessageReadStatus(),s}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(n.a.Fragment,{children:[this.autofillHelpBox(),this.displayMessage(),Object(d.jsx)("div",{className:"autofillContext",children:Object(d.jsx)("h1",{className:"secondaryColour appleFont",children:"Type in your code"})}),Object(d.jsx)("div",{className:"pushItDown keyboardOutput addBorder",children:Object(d.jsx)("button",{onClick:this.openKeyboard,className:"vertificationCodeButton",children:this.vertificationCode()})}),Object(d.jsx)("div",{className:"continueButtonDiv",children:Object(d.jsx)("button",{className:"submitAutofill",onClick:this.checkAutofill,children:Object(d.jsx)("p",{className:"autofillContinueText appleFont",children:"Continue"})})}),Object(d.jsxs)("div",{className:this.state.keyboardActive?"autofillSection":"autofillSection displayNone",children:[Object(d.jsx)("div",{className:"closeKeyboard",children:Object(d.jsx)("button",{onClick:this.closeKeyboard,className:"doneButton",children:Object(d.jsx)("p",{className:"blue appleFont",children:"Done"})})}),Object(d.jsx)(N,{option:this.props.option,addAutofill:this.addAutofill,highestPage:this.props.highestPage,pageNumbers:this.props.pageNumbers}),Object(d.jsx)("div",{className:"overlappingTable",children:Object(d.jsxs)("table",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)(x,{num:1,addNum:this.addNum})}),Object(d.jsx)("th",{children:Object(d.jsx)(x,{num:2,addNum:this.addNum})}),Object(d.jsx)("th",{children:Object(d.jsx)(x,{num:3,addNum:this.addNum})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)(x,{num:4,addNum:this.addNum})}),Object(d.jsx)("th",{children:Object(d.jsx)(x,{num:5,addNum:this.addNum})}),Object(d.jsx)("th",{children:Object(d.jsx)(x,{num:6,addNum:this.addNum})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)(x,{num:7,addNum:this.addNum})}),Object(d.jsx)("th",{children:Object(d.jsx)(x,{num:8,addNum:this.addNum})}),Object(d.jsx)("th",{children:Object(d.jsx)(x,{num:9,addNum:this.addNum})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)("button",{className:"numButton",children:"x"})}),Object(d.jsx)("th",{children:Object(d.jsx)(x,{num:0,addNum:this.addNum})}),Object(d.jsx)("th",{children:Object(d.jsx)(x,{num:"b",addNum:this.addNum})})]})]})}),Object(d.jsx)("div",{className:"autofillImage2",children:Object(d.jsx)("img",{className:"screenWidth",src:b})})]})]})}}]),a}(s.Component),P=a.p+"static/media/blurredPhoto.afa0c1e0.png",B=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("div",{className:"beginExperimentDiv",children:Object(d.jsx)("button",{className:"beginExperimentButton",onClick:function(){return e.props.changePage(e.props.pageNumbers.BeginMain)},children:"Next Page"})}),Object(d.jsx)("div",{className:"screenWidth fixHeightHome",children:Object(d.jsx)("img",{className:"homeBackground",src:P})})]})}}]),a}(s.Component),S=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("div",{className:"centreText titleDiv",children:Object(d.jsx)("h1",{className:"title appleFont centreText",children:"Begin Real Experiment"})}),Object(d.jsxs)("div",{className:"widthPadding explanationBox",children:[Object(d.jsxs)("p",{children:["You have successfully completed the demo, the main task was hidden as we do not want to affect your results in the real experiment."," "]}),Object(d.jsx)("p",{children:"If you want to try the demo again refresh the page now."}),Object(d.jsxs)("p",{children:["Once you start the real experiment"," ",Object(d.jsx)("span",{className:"bold",children:"DO NOT REFRESH THE PAGE"}),"."]})]}),Object(d.jsx)("div",{className:"explanationNextDiv",children:Object(d.jsx)("button",{onClick:function(){return e.props.changePage(e.props.pageNumbers.Login)},children:"Next Page"})})]})}}]),a}(s.Component),y=a.p+"static/media/messageScreen1.59cba014.png",k=a.p+"static/media/messageScreen2.ce66ac39.png",w=a.p+"static/media/emptyMessages.060837d7.png",q=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={},s.showMessage=function(){return s.props.highestPage===s.props.pageNumbers.DemoAutofill?Object(d.jsx)("img",{className:"screenWidth pushUp",src:y}):s.props.highestPage==s.props.pageNumbers.Autofill?Object(d.jsx)("img",{className:"screenWidth pushUp",src:k}):Object(d.jsx)("img",{className:"screenWidth emptyMessageHeight pushUp",src:w})},s.safariButton=function(){if(s.props.safari)return s.props.updateMessageReadStatusImmediately(),Object(d.jsx)("div",{className:"positionSafari",children:Object(d.jsx)("button",{className:"safariButton",onClick:function(){return s.props.changePage(s.props.highestPage)},children:Object(d.jsx)("img",{className:"safariImage",src:"data:image/jpeg;base64,/9j/4QEIRXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAITAAMAAAABAAEAAIdpAAQAAAABAAAAZgAAAAAAAABIAAAAAQAAAEgAAAABAAmQAAAHAAAABDAyMjGQAwACAAAAFAAAANiRAQAHAAAABAECAwCShgAHAAAAEgAAAOygAAAHAAAABDAxMDCgAQADAAAAAQABAACgAgAEAAAAAQAAAzygAwAEAAAAAQAABwCkBgADAAAAAQAAAAAAAAAAMjAyMTowMTowNSAxMjo1MDowMwBBU0NJSQAAAFNjcmVlbnNob3QAAP/iAjRJQ0NfUFJPRklMRQABAQAAAiRhcHBsBAAAAG1udHJSR0IgWFlaIAfhAAcABwANABYAIGFjc3BBUFBMAAAAAEFQUEwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbMoalYIlfxBNOJkT1dHqFYIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAZWNwcnQAAAFkAAAAI3d0cHQAAAGIAAAAFHJYWVoAAAGcAAAAFGdYWVoAAAGwAAAAFGJYWVoAAAHEAAAAFHJUUkMAAAHYAAAAIGNoYWQAAAH4AAAALGJUUkMAAAHYAAAAIGdUUkMAAAHYAAAAIGRlc2MAAAAAAAAAC0Rpc3BsYXkgUDMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdGV4dAAAAABDb3B5cmlnaHQgQXBwbGUgSW5jLiwgMjAxNwAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAg98AAD2/////u1hZWiAAAAAAAABKvwAAsTcAAAq5WFlaIAAAAAAAACg4AAARCwAAyLlwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW3NmMzIAAAAAAAEMQgAABd7///MmAAAHkwAA/ZD///ui///9owAAA9wAAMBu/9sAhAABAQEBAQECAQECAwICAgMEAwMDAwQFBAQEBAQFBgUFBQUFBQYGBgYGBgYGBwcHBwcHCAgICAgJCQkJCQkJCQkJAQEBAQICAgQCAgQJBgUGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQn/3QAEAAr/wAARCAAxAJkDASIAAhEBAxEB/8QBogAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoLEAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+foBAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKCxEAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+6aj6UUUALSCl4FJ0oAKZT6YfagBtKDTaBQBMDSE80DtWMniDQZdafw3FewNqMcXnNaiRTMsWQA5jzuC5IGcYoA1TSUUUAFFYXiDxR4Z8J2kV/wCKdRtdMgnmjto5LqVIUeaZgkUSlyAXdsKijljwBW7QAUvtSUUAFPWmU5aAJq/yQf8Agoh/zfh/2dHo/wD70Sv9b6v8kH/goh/zfh/2dHo//vRKAP/Q/umpaKYaAPn/APaZ/as/Z1/Y2+Fdz8av2nvF2n+DfDNq4hN3fOR5kzKzLBBEgaWeZlVisUKO5CkhcA4/iX/4KHf8HjOrXv274df8E2PCP2KP5ov+Ev8AFESvKe2+y0tSUX1R7p3yOGt1Nf2Z/tn/ALDn7MX/AAUC+DknwL/ar8MxeJNB89by2/eSQXFndojIlxbTwskkUqq7DIO1lJVlZSVP8Jv/AAUN/wCDP39oD4VfbviD/wAE9/Ea/EXQ03SDw5rLw2etxIP4Ybj93Z3mB6/Zm6KqOaAP6fP+Db39rT9oT9tD/gmnZfGP9pvxJL4r8TjxJq9i2oXEcUcjwRPG8asIUjT5PMKrhRhQB0Arxz/g48+OHxH+FXw/+CPgu/8AFWv/AA8+C/jXxrHpnxN8VeGvMS+sdKxGY4BPDHJJClxmUsyDJ8oLskBMbdv/AMGx37PPxy/Zl/4JeWXw5/aE8Kan4M8QP4n1m7/s3V7Z7S7WB3jjR2hkCuquY2KEgblwy5Ugn62/4Kl/tyL+w94e8G+I/i58KZfiB8EvEl5Ppvj3V4Yzejw9bMsf2a5udMFtMt1ayuWWQlkCbQAHd0UgH5wfsp/8E9v2a9F+MngH9pT/AIIn/tFiXS9J1OJvHfh2bxNL4k0zWtGmINyk1uZJpLW/OP3byKuxm3bVK4P6Z/tkf8FEfiv8BPjXpv7Nf7MnwF8V/G7xteaWdZuV06SDSNGsbTzDEouNXvR9nFwxGRAAW2lScblB/lt+O83/AAS7/aP/AG3P2e9W/wCDfvS3tfjPa+N7C/8AEOo+DNL1LSdF0/wvki/k1OGWK1t0T5lBSKMb4vNik5eNG++/+CkP7Z/iDwn/AMFVdb/Zx/bi+OXjn9nH4EWfheyv/Bt94It5baTxHqMixm8WXU7exvZw0UhkiEEahSI15R3AkAP1f/Zz/wCCr2tftWfs4fEvx58Fvg3r918W/hPrKeH9f+GV7eWdlqMd+Z0jYR30zC1MQi8yUO23d5LqF+6W/FT/AINWbS58T+BPE37WvxI+EF4niXxamvXmrfGS91SG7fV2bUoHl0pLPe11EFMXms5Ta7Qk5JK16r/wbRrbD9qf9taSwuvFd/aSeKPDslrdeOZXm8RT20kWpNBLqLSokgmkiKtskRXRSEcBlNej/wDBuR4g+I3hL/g30XxV8HtNXWfF2mL4wu9D09wSt1qMM1y9pAQuDiWZUQ45weKAPXfHX/Be34oeAPBN7+034g/ZQ+IVl8AtMvRa3XjW+ms7K+jg+0ra/a/7Am23gg3nhmdR0zt7fWP7ev8AwWH+Ev7DNz8D7p/CmrePdL+OjXQ0aXQQZbk+VBazWqwWnls9zLem7ijhjBT5iNxA5H8dfx+/at8IftT/APBLnxvr3xn/AGkPjN4z/aNuNNuZPEnw3sln0jw7o32e8H2gajYQ6dHaJYQQgbjJc5lcpGirJ8ifsb8c4YZvH3/BH5JlDqLS3YAjIyugaMVP4EAj0oA+uv8AgoB+1d8Pvib+wl4H+KX/AAUy/Zi1jSre5+LOi6Vo/hLUNcWO7huXjkax1eSew2DZtaaN7Rs/xBieK/pPr+cT/g5w/wCTNPhN/wBll8JfyvK/o7oAKKKKACgUUUASgiv8kT/goh/zfh/2dHo//vRK/wBbkGv8kT/gof8A833/APZ0Wj/+9DoA/9H+6amdKM02gANJRRQAUUUUAZGj+H9B8PQvbeH7K3sY5XMjrbxLErO3ViEABJ7mtCa2t7jZ9ojV/LYOu4A7WHQj0IqaloAcKQ0DjpSUAQJbW8Ur3EUarJLjewABbaMDJ74HSp6KQelAC0UUlABRkU0nFA649KAHUtNGKWgBa/yR/wDgof8A833/APZ0Wj/+9Dr/AFuK/wAkf/gof/zff/2dFo//AL0OgD//0v7oKUUlKKAAUlKKSgAooooAb6U6m+lOoAKKKKAEPamn7tOPamn7tAD6b2NOpvY0AMPWl/5Z0h60v/LOgBT3pwpp704UALX+SP8A8FD/APm+/wD7Oi0f/wB6HX+txX+SP/wUP/5vv/7Oi0f/AN6HQB//2Q=="})})})},s.messageViewed=function(){s.props.highestPage===s.props.pageNumbers.Autofill&&s.props.addState("Message Viewed","yes")},s.messageViewed(),s}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"screenWidth",children:[this.showMessage(),this.safariButton()]})}}]),a}(s.Component),Q=a.p+"static/media/homeBackground.0e6b7f0f.png",C=a.p+"static/media/safariIcon.be2beab1.png",D=a.p+"static/media/messageIcon.3b59bc8a.png",M=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.highestPage),Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("div",{className:"messageIconDiv",children:Object(d.jsx)("button",{onClick:function(){return e.props.changePage(e.props.pageNumbers.Messages)},className:"hiddenButton",children:Object(d.jsx)("img",{className:"messageIcon",src:D})})}),Object(d.jsx)("div",{className:"safariIconDiv",children:Object(d.jsx)("button",{onClick:function(){return e.props.changePage(e.props.highestPage)},className:"hiddenButton",children:Object(d.jsx)("img",{className:"safariIcon",src:C})})}),Object(d.jsx)("div",{className:"screenWidth fixHeightHome",children:Object(d.jsx)("img",{className:"homeBackground",src:Q})})]})}}]),a}(s.Component),F=a.p+"static/media/iphone8.17a9a3f2.png",E=a(11),R=a.n(E),H=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={error:"displayNone"},s.onValueChange=function(e){s.setState({selectedOption:e.target.value})},s.formSubmit=function(e){e.preventDefault(),void 0===s.state.selectedOption?s.setState({error:"red"}):(s.props.addState(s.props.questionNum,s.state.selectedOption),s.setState({selectedOption:void 0}),s.setState({error:"displayNone"}),s.props.changePage(s.props.currentPage+1))},s.goBack=function(){s.setState({selectedOption:void 0}),s.props.changePage(s.props.currentPage-1)},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsxs)("div",{className:"homeBackground white-bg",children:[Object(d.jsx)("div",{className:"questionNumber",children:Object(d.jsxs)("h1",{className:"questionNumberText appleFont",children:["Question ",this.props.questionNum," of ",this.props.numQuestions]})}),Object(d.jsx)("p",{className:"marginLR",children:this.props.question}),Object(d.jsxs)("form",{className:"marginLR",onSubmit:this.formSubmit,children:[this.props.options.map((function(t){return Object(d.jsxs)("div",{className:"radioContainer",children:[Object(d.jsx)("input",{className:"check",type:"checkbox",value:t,checked:e.state.selectedOption===t,onChange:e.onValueChange}),Object(d.jsx)("span",{className:"checkMark",children:t})]})})),Object(d.jsx)("p",{className:this.state.error,children:"You need to select an option"}),Object(d.jsx)("input",{className:"questionnaireButton questionnaireNext appleFont",type:"submit",value:this.props.questionNum===this.props.numQuestions?"Submit":"Next"})]}),Object(d.jsx)("button",{onClick:this.goBack,className:1===this.props.questionNum?"displayNone":"questionnaireButton questionnaireBack appleFont",children:"Back"})]})})}}]),a}(s.Component),U=a(22),I=a.n(U),T=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={},s.complete=function(){s.props.completeTask(),s.props.changePage(s.props.pageNumbers.ProlificCode)},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("div",{className:"centreText titleDiv",children:Object(d.jsx)("h1",{className:"title appleFont centreText",children:"Complete Task"})}),Object(d.jsxs)("div",{className:"widthPadding explanationBox",children:[Object(d.jsx)("p",{children:"Clicking the complete button below will submit all your responses."}),Object(d.jsx)("p",{children:"Please do not reattempt the experiment after completion."})]}),Object(d.jsx)("div",{className:"explanationNextDiv",children:Object(d.jsx)("button",{onClick:this.complete,children:"Complete"})})]})}}]),a}(s.Component),K=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsxs)("div",{class:"centreCode",children:[Object(d.jsx)("h1",{children:"Prolific Code"}),Object(d.jsx)("h1",{children:"8344C8D9"})]})})}}]),a}(s.Component),W=function(e){Object(A.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).setOption=function(){if(null===localStorage.getItem("option"))console.log("First attempt, local storage empty"),s.getOption().then((function(e){console.log(e),console.log(typeof e.option),s.updateOption(e.option),localStorage.setItem("option",e.option)}));else{console.log("Using Local Storage");var e=localStorage.getItem("option");console.log(e),console.log(typeof parseInt(e)),s.updateOption(parseInt(e)),console.log("Not the one before this")}console.log("Checking option in questions")},s.getOption=function(){var e=R.a.get("http://dissertation-experiment-sb.cs.ucl.ac.uk:5000/code").then((function(e){return e.data}));return console.log(e),e},s.updateOption=function(e){console.log(e),s.setState({option:e}),console.log("State set"),console.log(s.state.option)},s.completeTask=function(){R.a.post("http://localhost:5000/",I.a.stringify(s.state.questions)).then((function(e){console.log(e),console.log(e.data)}))},s.addState=function(e,t){console.log(e),console.log(t),console.log(s.state.questions);var a=Object(r.a)(Object(r.a)({},s.state.questions),{},Object(c.a)({},e,t));s.setState({questions:a})},s.changePage=function(e,t){s.setState({page:e}),s.setState({extraInfo:t}),e>s.state.highestPage&&s.setState({highestPage:e}),"safari"===t?s.setState({safari:!0}):s.setState({safari:!1})},s.updateDemoMessageRead=function(){console.log("hi again"),s.setState({demoMessageRead:!0})},s.updateRealMessageRead=function(){s.setState({realMessageRead:!0})},s.updateMessageReadStatus=function(){s.state.demoMessageRead||s.state.highestPage!==s.state.pageNumbers.DemoAutofill||setTimeout((function(){return s.updateDemoMessageRead()}),6500),s.state.highestPage!==s.state.pageNumbers.Autofill||s.state.realMessageRead||setTimeout((function(){return s.updateRealMessageRead()}),6500)},s.updateMessageReadStatusImmediately=function(){s.state.demoMessageRead||4!==s.state.highestPage||s.updateDemoMessageRead(),10!==s.state.highestPage||s.state.realMessageRead||s.updateRealMessageRead()},s.homeHelpBox=function(){if(s.state.highestPage>s.state.pageNumbers.BeginDemo&&s.state.highestPage<s.state.pageNumbers.BeginMain&&s.state.page!==s.state.pageNumbers.Home)return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("div",{class:"pointerHome"}),Object(d.jsx)("div",{className:"homeHelpBox",children:Object(d.jsx)("p",{className:"helpBoxText",children:"Click the home button to go to the phones home page"})})]})},s.renderSwitch=function(){switch(s.state.page){case s.state.pageNumbers.Home:return Object(d.jsx)(M,{pageNumbers:s.state.pageNumbers,changePage:s.changePage,highestPage:s.state.highestPage});case s.state.pageNumbers.Messages:return Object(d.jsx)(q,{pageNumbers:s.state.pageNumbers,demo:!0,safari:s.state.safari,changePage:s.changePage,highestPage:s.state.highestPage,updateMessageReadStatusImmediately:s.updateMessageReadStatusImmediately,addState:s.addState});case s.state.pageNumbers.Explanation:return Object(d.jsx)(p,{pageNumbers:s.state.pageNumbers,changePage:s.changePage});case s.state.pageNumbers.BeginDemo:return Object(d.jsx)(h,{pageNumbers:s.state.pageNumbers,changePage:s.changePage});case s.state.pageNumbers.DemoLogin:return Object(d.jsx)(m,{pageNumbers:s.state.pageNumbers,changePage:s.changePage,demo:!0});case s.state.pageNumbers.DemoAutofill:return Object(d.jsx)(v,Object(c.a)({pageNumbers:s.state.pageNumbers,option:s.state.option,changePage:s.changePage,demo:!0,updateMessageReadStatus:s.updateMessageReadStatus,realMessageRead:s.state.realMessageRead,demoMessageRead:s.state.demoMessageRead,highestPage:s.state.highestPage},"option",s.state.option));case s.state.pageNumbers.HiddenTask:return Object(d.jsx)(B,{pageNumbers:s.state.pageNumbers,changePage:s.changePage});case s.state.pageNumbers.BeginMain:return Object(d.jsx)(S,{pageNumbers:s.state.pageNumbers,changePage:s.changePage});case s.state.pageNumbers.Login:return Object(d.jsx)(m,{pageNumbers:s.state.pageNumbers,changePage:s.changePage,demo:!1});case s.state.pageNumbers.Autofill:return void 0===s.state.t0&&s.setState({t0:performance.now()}),Object(d.jsx)(v,Object(c.a)({pageNumbers:s.state.pageNumbers,option:s.state.option,changePage:s.changePage,demo:!1,updateMessageReadStatus:s.updateMessageReadStatus,realMessageRead:s.state.realMessageRead,demoMessageRead:s.state.demoMessageRead,highestPage:s.state.highestPage,addState:s.addState},"option",s.state.option));case s.state.pageNumbers.WhichWebsite:return void 0===s.state.questions["Time Taken"]&&s.addState("Time Taken",(performance.now()-s.state.t0)/1e3),console.log(s.state.questions),Object(d.jsx)(H,{options:["Paypal","Amazon","Revolut","Google","Not sure"],question:"Which website sent the autofill code in the real experiment?",changePage:s.changePage,currentPage:s.state.pageNumbers.WhichWebsite,addState:s.addState,questionNum:1,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.Disclaimer:return Object(d.jsx)(j,{changePage:s.changePage,currentPage:s.state.pageNumbers.Disclaimer,pageNumbers:s.state.pageNumbers});case s.state.pageNumbers.q2:return Object(d.jsx)(H,{options:["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree","I didn't have/use the autofill button"],question:"I found the autofill function easy to use and understand?",changePage:s.changePage,currentPage:s.state.pageNumbers.q2,addState:s.addState,questionNum:2,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.q3:return Object(d.jsx)(H,{options:["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"],question:"I think that I would like to use this system frequently",changePage:s.changePage,currentPage:s.state.pageNumbers.q3,addState:s.addState,questionNum:3,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.q4:return Object(d.jsx)(H,{options:["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"],question:"I found the system unnecessarily complex.",changePage:s.changePage,currentPage:s.state.pageNumbers.q4,addState:s.addState,questionNum:4,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.q5:return Object(d.jsx)(H,{options:["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"],question:"I thought the system was easy to use.",changePage:s.changePage,currentPage:s.state.pageNumbers.q5,addState:s.addState,questionNum:5,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.q6:return console.log(s.state.questions),Object(d.jsx)(H,{options:["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"],question:"I think that I would need the support of a technical person to be able to use this system.",changePage:s.changePage,currentPage:s.state.pageNumbers.q6,addState:s.addState,questionNum:6,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.q7:return Object(d.jsx)(H,{options:["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"],question:"I found the various functions in this system were well integrated.",changePage:s.changePage,currentPage:s.state.pageNumbers.q7,addState:s.addState,questionNum:7,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.q8:return Object(d.jsx)(H,{options:["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"],question:"I thought there was too much inconsistency in this system.",changePage:s.changePage,currentPage:s.state.pageNumbers.q8,addState:s.addState,questionNum:8,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.q9:return Object(d.jsx)(H,{options:["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"],question:"I would imagine that most people would learn to use this system very quickly.",changePage:s.changePage,currentPage:s.state.pageNumbers.q9,addState:s.addState,questionNum:9,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.q10:return Object(d.jsx)(H,{options:["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"],question:"I found the system very cumbersome to use.",changePage:s.changePage,currentPage:s.state.pageNumbers.q10,addState:s.addState,questionNum:10,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.q11:return Object(d.jsx)(H,{options:["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"],question:"I felt very confident using the system.",changePage:s.changePage,currentPage:s.state.pageNumbers.q11,addState:s.addState,questionNum:11,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.q12:return Object(d.jsx)(H,{options:["Strongly Agree","Agree","Neutral","Disagree","Strongly Disagree"],question:"I needed to learn a lot of things before I could get going with this system.",changePage:s.changePage,currentPage:s.state.pageNumbers.q12,addState:s.addState,questionNum:12,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.q13:return Object(d.jsx)(H,{options:["18-24","25-35","36-49","50+"],question:"How old are you?",changePage:s.changePage,currentPage:s.state.pageNumbers.q13,addState:s.addState,questionNum:13,numQuestions:s.state.numQuestions,questions:s.state.questions});case s.state.pageNumbers.Complete:return Object(d.jsx)(T,{pageNumbers:s.state.pageNumbers,changePage:s.changePage,completeTask:s.completeTask});case s.state.pageNumbers.ProlificCode:return Object(d.jsx)(K,{})}},s.setOption(),console.log(undefined),s.state={t0:void 0,page:1,option:void 0,highestPage:1,safari:!1,demoMessageRead:!1,realMessageRead:!1,pageNumbers:{Home:-1,Messages:0,Explanation:1,BeginDemo:2,DemoLogin:3,DemoAutofill:4,HiddenTask:5,BeginMain:6,Login:7,Autofill:8,WhichWebsite:9,Disclaimer:10,q2:11,q3:12,q4:13,q5:14,q6:15,q7:16,q8:17,q9:18,q10:19,q11:20,q12:21,q13:22,Complete:23,ProlificCode:24},questions:{option:void 0,"Time Taken":void 0,"Autofill Used":"no","Message Viewed":"no",1:void 0,2:void 0,3:void 0,4:void 0,5:void 0,6:void 0,7:void 0,8:void 0,9:void 0,10:void 0,11:void 0,12:void 0,13:void 0},numQuestions:13},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsxs)("div",{className:"phoneDiv",children:[Object(d.jsx)("div",{className:"phoneScreen",children:this.renderSwitch()}),Object(d.jsxs)("div",{className:"homeButtonContainer",children:[this.homeHelpBox(),Object(d.jsx)("button",{onClick:function(){return e.changePage(-1,e.state.page)},className:"homeButton"})]}),Object(d.jsx)("img",{className:"phoneImage",src:F})]})})}}]),a}(s.Component);i.a.render(Object(d.jsx)(W,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.0a0197f1.chunk.js.map