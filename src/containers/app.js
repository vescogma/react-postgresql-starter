import React, { PropTypes } from 'react';

const App = ({ children }) => (
  <div className="max-width-3 mx-auto">
    <div className="px2 mb2 mt3 h2 bold center bg-black white">
      this is a navbar (you just have to believe)
    </div>
    <div className="px2 mb2">
      { children }
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
