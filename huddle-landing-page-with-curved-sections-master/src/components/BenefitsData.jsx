import { Component } from 'react';
import PropTypes from 'prop-types';

export default class BenefitsData extends Component {
  render() {
    const { imageSrc, title, paragraph, backgroundColor, invert } = this.props;

    return (
      <div
        className={`flex flex-col items-center gap-16 px-5 py-20 xl:flex-row xl:gap-20 xl:px-20 ${
          invert ? 'xl:flex-row-reverse' : ''
        }`}
        style={
          backgroundColor ? { backgroundColor: 'hsl(207, 100%, 98%)' } : {}
        }
      >
        <div className="flex justify-center">
          <img src={imageSrc} alt="#" className="w-80 xl:w-[42rem]" />
        </div>
        <div className="flex flex-col items-center gap-6 text-center text-darkCyan xl:items-start xl:text-left">
          <h2 className="text-2xl font-bold xl:text-4xl">{title}</h2>
          <p className="xl:w-2/4">{paragraph}</p>
        </div>
      </div>
    );
  }
}

BenefitsData.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  backgroundColor: PropTypes.bool.isRequired,
  invert: PropTypes.bool.isRequired,
};
