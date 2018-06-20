import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

class DashboardPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        Dashboard
      </div>
    );
  }
}

DashboardPage.propTypes = {};

DashboardPage.defaultProps = {};

function mapStateToProps(state, props) {
  return {};
}

const enhance = compose(
  connect(
    mapStateToProps,
    {},
  )
);

export default enhance(DashboardPage);
