import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit, onChange, name }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <div className={styles.container}>
      <input type="text" onChange={onChange} name="0" placeholder="adjective" />
      <input type="text" onChange={onChange} name="1" placeholder="noun" />
      <input
        type="text"
        onChange={onChange}
        name="2"
        placeholder="verb, past tense"
      />
      <input type="text" onChange={onChange} name="3" placeholder="adverb" />
      <input type="text" onChange={onChange} name="4" placeholder="adjective" />
      <input type="text" onChange={onChange} name="5" placeholder="noun" />
      <input type="text" onChange={onChange} name="6" placeholder="noun" />
      <input type="text" onChange={onChange} name="7" placeholder="adjective" />
      <input type="text" onChange={onChange} name="8" placeholder="verb" />
      <input type="text" onChange={onChange} name="9" placeholder="adverb" />
      <input
        type="text"
        onChange={onChange}
        name="10"
        placeholder="verb, past tense"
      />
      <input type="text" onChange={onChange} name="11" placeholder="adjective" />
      <br></br>
      <button>Create Madlib</button>
    </div>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  // name: PropTypes.string.isRequired
};

export default Form;
