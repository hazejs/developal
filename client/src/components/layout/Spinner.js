import React, { Fragment } from 'react';
import spinner from '../../img/ripple.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ width: 200, margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
);
