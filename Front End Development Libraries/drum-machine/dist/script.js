function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: "Press a key" });_defineProperty(this, "onClick",


    e => {
      this.setState({
        text: e.target.value });

      document.getElementById(e.target.value).play();
    });}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "Drum Machine"), /*#__PURE__*/
      React.createElement("button", { class: "drum-pad", id: "Q-pad", onClick: this.onClick, value: "Q" }, "Q", /*#__PURE__*/React.createElement("audio", { id: "Q", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" })), /*#__PURE__*/

      React.createElement("button", { class: "drum-pad", id: "W-pad", onClick: this.onClick, value: "W" }, "W", /*#__PURE__*/React.createElement("audio", { id: "W", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" })), /*#__PURE__*/

      React.createElement("button", { class: "drum-pad", id: "E-pad", onClick: this.onClick, value: "E" }, "E", /*#__PURE__*/React.createElement("audio", { id: "E", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" })), /*#__PURE__*/

      React.createElement("button", { class: "drum-pad", id: "A-pad", onClick: this.onClick, value: "A" }, "A", /*#__PURE__*/React.createElement("audio", { id: "A", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" })), /*#__PURE__*/

      React.createElement("button", { class: "drum-pad", id: "S-pad", onClick: this.onClick, value: "S" }, "S", /*#__PURE__*/React.createElement("audio", { id: "S", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" })), /*#__PURE__*/

      React.createElement("button", { class: "drum-pad", id: "D-pad", onClick: this.onClick, value: "D" }, "D", /*#__PURE__*/React.createElement("audio", { id: "D", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" })), /*#__PURE__*/

      React.createElement("button", { class: "drum-pad", id: "Z-pad", onClick: this.onClick, value: "Z" }, "Z", /*#__PURE__*/React.createElement("audio", { id: "Z", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" })), /*#__PURE__*/

      React.createElement("button", { class: "drum-pad", id: "X-pad", onClick: this.onClick, value: "X" }, "X", /*#__PURE__*/React.createElement("audio", { id: "X", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" })), /*#__PURE__*/

      React.createElement("button", { class: "drum-pad", id: "C-pad", onClick: this.onClick, value: "C" }, "C", /*#__PURE__*/React.createElement("audio", { id: "C", class: "clip", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" })), /*#__PURE__*/

      React.createElement("p", { id: "display" }, this.state.text)));


  }}


document.addEventListener("keypress", function (event) {
  if (event.key === "Q") {
    event.preventDefault();
    document.getElementById("Q-pad").click();
  }
  if (event.key === "W") {
    event.preventDefault();
    document.getElementById("W-pad").click();
  }
  if (event.key === "E") {
    event.preventDefault();
    document.getElementById("E-pad").click();
  }
  if (event.key === "A") {
    event.preventDefault();
    document.getElementById("A-pad").click();
  }
  if (event.key === "S") {
    event.preventDefault();
    document.getElementById("S-pad").click();
  }
  if (event.key === "D") {
    event.preventDefault();
    document.getElementById("D-pad").click();
  }
  if (event.key === "Z") {
    event.preventDefault();
    document.getElementById("Z-pad").click();
  }
  if (event.key === "X") {
    event.preventDefault();
    document.getElementById("X-pad").click();
  }
  if (event.key === "C") {
    event.preventDefault();
    document.getElementById("C-pad").click();
  }
});

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));