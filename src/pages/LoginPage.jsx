import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';

class LoginPage extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        Login
      </div>
    );
  }
}

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

function mapStateToProps(state, props) {
  return {};
}

const enhance = compose(
  connect(
    mapStateToProps,
    {},
  )
);

export default enhance(LoginPage);
