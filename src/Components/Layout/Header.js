import React from 'react';
import Badge from './Badge/Badge';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <p>Shopping-Cart</p>
      </div>
      <div>
        <Badge onClick={props.onClick} />
      </div>
    </header>
  );
};

export default Header;
