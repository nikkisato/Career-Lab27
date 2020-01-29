import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import Header from '../madlib/Header/Header';

export default class Madlib extends Component{
  state = {
    showResult: false,
    words: []
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
    console.log('after submit', this.state);
  }

  handleChange = ({ target }) => {
    this.setState({ words: target.value }, () => {console.log('after this.setState', this.state.words);
    });
  };

  render() {
    const { showResult } = this.state;
    return (
      <>
        <Header />
        {!showResult && <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />}
        {showResult && <Result words={[]} closeResult={this.toggleResult} />}
      </>
    );
  }
}
