import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as apiActions from 'actions/api';

function mapStateToProps(state) {
  return { data: state.data };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(apiActions, dispatch);
}

const Foo = ({ data, apiGet }) => {
  return (
    <div>
      <div>
        Hello World! I am routed and fully functional.
        Click below to grab some data.
      </div>
      <button
        onClick={() => apiGet()}>
        Get Data!
      </button>
    </div>
  );
};

Foo.displayName = 'Foo';
Foo.propTypes = {
  data: PropTypes.object,
  apiGet: PropTypes.func,
};
Foo.defaultProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Foo);
