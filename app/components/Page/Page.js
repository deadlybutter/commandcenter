import React from 'react';
import Fluid from '../Fluid';
import Header from '../Header';

const Page = (props) => {
  const isHome = props.app.router.location.pathname === '/';

  return (
    <div className="page">
      {isHome ? null : <Header />}
      <Fluid>
        { props.children }
      </Fluid>
    </div>
  );
};

Page.defaultProps = {
  children: null,
};

export default Page;
