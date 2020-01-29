import React from "react";
import PropTypes from "prop-types";
import styles from "./Form.css";

const Form = ({ onSubmit, onChange }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <input type="text" onChange={onChange}  placeholder="adjective" />
    <input type="text" onChange={onChange}  placeholder="noun" />
    <input type="text" onChange={onChange}  placeholder="verb, past tense" />
    <input type="text" onChange={onChange}  placeholder="adverb" />
    <input type="text" onChange={onChange}  placeholder="adjective" />
    <input type="text" onChange={onChange}  placeholder="noun" />
    <input type="text" onChange={onChange}  placeholder="noun" />
    <input type="text" onChange={onChange}  placeholder="adjective" />
    <input type="text" onChange={onChange}  placeholder="verb" />
    <input type="text" onChange={onChange}  placeholder="adverb" />
    <input type="text" onChange={onChange}  placeholder="verb, past tense" />
    <input type="text" onChange={onChange}  placeholder="adjective" />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
