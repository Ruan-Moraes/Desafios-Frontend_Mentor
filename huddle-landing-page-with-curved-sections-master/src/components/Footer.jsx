import { Component } from 'react';
import PropTypes from 'prop-types';

import bgFooterTopMobile from '../assets/bg-footer-top-mobile.svg';

export default class Footer extends Component {
  render() {
    const { children } = this.props;

    return (
      <footer className="bg-darkCyan">
        <div className="bg-paleBlue">
          <img src={bgFooterTopMobile} alt="" className="w-full" />
        </div>
        {children}
      </footer>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
