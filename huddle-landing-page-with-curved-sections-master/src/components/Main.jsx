import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Main extends Component {
  render() {
    const { children } = this.props;

    return <main className="relative z-10 pb-52">{children}</main>;
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
