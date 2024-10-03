import { Component } from 'react';

export class Main extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    return <main>{this.props.children}</main>;
  }
}

export default Main;
