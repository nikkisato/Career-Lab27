import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import Header from '../madlib/Header/Header';

export default class Madlib extends Component{
  state = {
    showResult: false,
    words: [],
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
  }
 

  toggleResult = () => this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    // const { state } = this.state;
    this.setState(state => ({ words: [state['1', '2', '3']] }));
    this.toggleResult();

    console.log('after submit', this.state);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {console.log(target.name, this.state[target.name]);
    });
  };

  render() {

    const { showResult, words } = this.state;
    return (
      <>
        <Header />
        {!showResult && <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />}
        {showResult && <Result words={[]} closeResult={this.toggleResult} />}
      </>
    );
  }
}
