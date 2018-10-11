# react-botui

[![NPM version][npm-image]][npm-url]

> React bindings for [BotUI](https://github.com/botui/botui)

![](https://user-images.githubusercontent.com/3382565/46710923-b0dbb580-cc7c-11e8-9bd1-dcf6940f7a8f.gif)

## Install

```
$ npm install react-botui botui
```

## Usage

```js
import React, { Component } from 'react';
import BotUI from '@chentsulin/react-botui';

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
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
```

You should import `botui.min.css`, `botui-theme-default.css`, `vue.min.js` from cdn, file, node_modules(For example: botui/build/botui.min.css) or wherever can find the code. See [BotUI install docs](https://docs.botui.org/install.html) for more details.

Checkout full examples [here](./examples).

## Relevant Projects

- [botui](https://github.com/botui/botui)

## License

MIT © [C.T. Lin](https://github.com/chentsulin/react-botui)

[npm-image]: https://img.shields.io/npm/v/@chentsulin/react-botui.svg
[npm-url]: https://npmjs.org/package/@chentsulin/react-botui
