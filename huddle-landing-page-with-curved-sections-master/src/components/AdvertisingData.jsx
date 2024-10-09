import { Component } from 'react';
import PropTypes from 'prop-types';

export default class AdvertisingData extends Component {
  render() {
    const { icon, text } = this.props;

    return (
      <div className="flex flex-col gap-2">
        <div>
          <img src={icon} alt="#" className="w-8" />
        </div>
        <div className="flex flex-col gap-5 text-gray-600 xl:gap-4">
          <h2 className="text-6xl font-bold text-darkCyan xl:text-7xl">
            {text}
          </h2>
          <p className="text-center">Communities Formed</p>
        </div>
      </div>
    );
  }
}

AdvertisingData.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
