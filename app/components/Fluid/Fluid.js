import React from 'react';

const Fluid = ({ children }) => {
  return (
    <div className="fluid-container">
      { children }
    </div>
  );
};

Fluid.defaultProps = {
  children: null,
};

export default Fluid;
