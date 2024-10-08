import { Component } from 'react';
import PropTypes from 'prop-types';

export default class BenefitsData extends Component {
  render() {
    const { imageSrc, title, paragraph } = this.props;

    return (
      <div className="flex flex-col items-center gap-16">
        <div className="flex justify-center">
          <img src={imageSrc} alt="#" className="w-80" />
        </div>
        <div className="flex flex-col items-center gap-6 text-center text-darkCyan">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    );
  }
}

BenefitsData.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
