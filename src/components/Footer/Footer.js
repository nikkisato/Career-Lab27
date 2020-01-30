import React, { Component } from 'react';
import styles from './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.Footer}>
        <section>
          <h3>© By Nikki Sato 2020</h3>
        </section>
      </footer>
    );
  }
}
