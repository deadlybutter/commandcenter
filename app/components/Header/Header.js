import React from 'react';
import Component from '../Component';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <Component flexStyle={{justifyContent: 'center'}}>
      <header>
        <Link to="/">
          <h1>joe kent</h1>
        </Link>
      </header>
    </Component>
  )
};

export default Header;
