import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

Layout.propTypes = {};

Layout.defaultProps = {};

function mapStateToProps(state, props) {
  return {};
}

const enhance = compose(
  connect(
    mapStateToProps,
    {},
  )
);

export default enhance(Layout);
