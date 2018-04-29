//Core
import React from 'react';

//CSS
import classes from './header.css';

const header = () => {
  return (
    <div className={classes.header}>
      <div>
        <p style={{fontSize: '1.3em'}}>Hello, Agent!</p>
        <p><i className="fas fa-cog"></i></p>
      </div>
    </div>
  );
};

export default header;