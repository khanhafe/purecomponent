import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = { messages: [] };

    // binds
    // this._getLastMessage = this._getLastMessage.bind(this);
    this._onMessageChange = this._onMessageChange.bind(this);
  }

  // _getLastMessage() {
  //   const lastMessage = this.state.messages[this.state.messages.length - 1];
  //   return lastMessage === undefined ? "" : lastMessage;
  // }

  _onMessageChange(event) {
    const messages = [...this.state.messages];
    messages.push(event.target.value);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this._onMessageChange}
          style={{ margin: "10px" }}
        />
        <ul>
          {this.state.messages.map((i, m) => (
            <li style={{ margin: "10px" }}> {i} </li>
          ))}
        </ul>
      </div>
    );
  }
}
