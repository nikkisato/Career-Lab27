import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <section>
          <h1>MadLib Styles</h1>
        </section>
      </header>
    );
  }
}
