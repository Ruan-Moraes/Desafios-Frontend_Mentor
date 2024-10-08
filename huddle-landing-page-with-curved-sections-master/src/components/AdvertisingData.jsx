import { Component } from 'react';
import PropTypes from 'prop-types';

export default class AdvertisingData extends Component {
  render() {
    const { icon } = this.props;

    return (
      <div className="flex flex-col gap-2">
        <div>
          <img src={icon} alt="#" className="w-8" />
        </div>
        <div className="flex flex-col gap-5 text-gray-600">
          <h2 className="text-6xl font-bold text-darkCyan">1.4k+</h2>
          <p>Communities Formed</p>
        </div>
      </div>
    );
  }
}

AdvertisingData.propTypes = {
  icon: PropTypes.string.isRequired,
};
