import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div className="max-width-3 mx-auto">
    <div className="px2 mb2 mt3 h2 bold center bg-black white">
      this is a navbar (you just have to believe)
    </div>
    <div className="px2 mb2 flex items-center">
      <div className="p1 flex-auto center">
        <Link to="/bar">
          open bar
        </Link>
      </div>
      <div className="p1 flex-auto center">
        <Link to="/foo">
          open foo
        </Link>
      </div>
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
