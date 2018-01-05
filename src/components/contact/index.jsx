import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Contact = ({ title }) => (
  <div className={styles.contact}>
    <h1>{title || 'I like messages.'}</h1>
    <p className={styles.email}>
      Say hello and send an email:<br />
      <a href="mailto:papesce@gmail.com?subject=Hello%20Pablo!" className={styles.link}>papesce@gmail.com</a>
    </p>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/papesce/">
          <Icon name="github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/papesce">
          <Icon name="linkedin" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://twitter.com/papesce/">
          <Icon name="twitter" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.instagram.com/papesce">
          <Icon name="instagram" />
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Contact;
