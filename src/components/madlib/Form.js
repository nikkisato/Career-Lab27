import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit, onChange }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <input type="text" onChange={onChange} name="1" placeholder="adjective"/>
    <input type="text" onChange={onChange} name="2" placeholder="noun" />
    <input type="text" onChange={onChange} name="3" placeholder="verb, past tense" />
    <input type="text" onChange={onChange} name="4" placeholder="adverb" />
    <input type="text" onChange={onChange} name="5" placeholder="adjective" />
    <input type="text" onChange={onChange} name="6" placeholder="noun" />
    <input type="text" onChange={onChange} name="7" placeholder="noun" />
    <input type="text" onChange={onChange} name="8" placeholder="adjective" />
    <input type="text" onChange={onChange} name="9" placeholder="verb" />
    <input type="text" onChange={onChange} name="10" placeholder="adverb" />
    <input type="text" onChange={onChange} name="11" placeholder="verb, past tense" />
    <input type="text" onChange={onChange} name="12" placeholder="adjective" />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Form;
