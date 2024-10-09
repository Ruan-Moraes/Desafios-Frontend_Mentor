import { Component } from 'react';
import PropTypes from 'prop-types';

import bgFooterTopMobile from '../assets/bg-footer-top-mobile.svg';

export default class Footer extends Component {
  render() {
    const { children } = this.props;

    return (
      <footer className="bg-darkCyan">
        <div className="bg-white">
          <img src={bgFooterTopMobile} alt="" className="w-full" />
        </div>
        <div className="xl:flex xl:flex-row-reverse xl:justify-center xl:gap-48">
          {children}
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};
