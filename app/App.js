import React, { Component } from 'react';
import io from 'socket.io-client';
import Messages from './Messages';

const socket = io.connect();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      messages: ['hello', 'cool']
    }
    this.changeText = this.changeText.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  changeText(e) {
    this.setState({ text: e.target.value });
  }
  submitMessage(e) {
    e.preventDefault();
    socket.emit('message', this.state.text);
    this.setState({ text: '' });
  }
  render() {
    socket.on('message', function(msg) {
      console.log('message is:', msg);
    })
    return (
      <div>
        <form onSubmit={ this.submitMessage }>
          <input type='text' id='thisform' placeholder='...type here' value={this.state.text} onChange={ this.changeText }/>
          <Messages msg={ this.state.messages } />
        </form>
      </div>
    )
  }
}

export default App;
