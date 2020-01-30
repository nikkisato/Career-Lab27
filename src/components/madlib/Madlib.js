import React, { Component } from 'react';
import Form from './Forms/Form';
import Result from './Results/Result';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from '../madlib/Body/Body.css';


export default class Madlib extends Component{
  state = {
    showResult: false,
    words: [],
    inputs: {}
    // 0: '',
    // 1: '',
    // 2: '',
    // 3: '',
    // 4: '',
    // 5: '',
    // 6: '',
    // 7: '',
    // 8: '',
    // 9: '',
    // 10: '',
    // 11: '',
    
  }
 


  createWordsArray = () => {
    this.setState(prevState => (({

      words: [
        prevState.inputs['0'],
        prevState.inputs['1'],
        prevState.inputs['2'],
        prevState.inputs['3'],
        prevState.inputs['4'],
        prevState.inputs['5'],
        prevState.inputs['6'],
        prevState.inputs['7'],
        prevState.inputs['8'],
        prevState.inputs['9'],
        prevState.inputs['10'],
        prevState.inputs['11'],
      ]
    })));
  
  }

  toggleResult = () => this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.createWordsArray();
    this.toggleResult();
  }

  // handleChange = ({ target }) => {
  //   this.setState({ [target.name]: target.value }, 
  //     () => {console.log(target.name, this.state[target.name]);
  //     });
  // };

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      ...prevState, inputs: {
        ...prevState.inputs, [target.name]: target.value 
      }
    })
      
    );
  }


  render() {

    const { showResult } = this.state;
    return (
      <>
        <Header />
        <div className={styles.section} >
          {!showResult && <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />}
          {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />}
        </div>
        <Footer />
      </>
    );
  }
}
