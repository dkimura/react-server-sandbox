import React, { Component } from 'react';
import { render } from 'react-dom';
import Counter from './components/Counter';

export default class App extends Component {
  render() {
    return (
      <Counter />
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
