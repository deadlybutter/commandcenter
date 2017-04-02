import React from 'react';

//TODO: Better FlexStyle system
const Component = ({ children, flexStyle }) => {
  return (
    <div className="component" style={flexStyle}>
      <div className="component__interior">
        { children }
      </div>
    </div>
  );
};

Component.defaultProps = {
  children: null,
  flexStyle: null,
};

export default Component;
