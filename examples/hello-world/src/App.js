import React, { Component } from 'react';
import BotUI from '@chentsulin/react-botui';

import 'botui/build/botui.min.css';
import 'botui/build/botui-theme-default.css';
import './App.css';

class App extends Component {
  state = {
    messages: [
      {
        human: true,
        content: 'hello',
      },
      {
        content: 'world',
      },
    ],
  };

  handleAction = res => {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          human: true,
          content: res.value,
        },
        {
          content: `Received ${res.value}!`,
        },
      ],
    });
  };

  handleReset = () => {
    this.setState({
      messages: [],
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BotUI
            messages={this.state.messages}
            action={{
              type: 'text',
              action: {
                placeholder: 'Enter your text here',
              },
            }}
            onAction={this.handleAction}
          />
          <button className="App-button" onClick={this.handleReset}>
            Reset
          </button>
        </header>
      </div>
    );
  }
}

export default App;
