import { Component } from 'react';

export class AdvertisingData extends Component {
  render() {
    return (
      <div className="flex flex-col gap-2">
        <div>
          <img src={this.props.icon} alt="#" className="w-8" />
        </div>
        <div className="flex flex-col gap-5 text-gray-600">
          <h2 className="text-6xl font-bold text-darkCyan">1.4k+</h2>
          <p>Communities Formed</p>
        </div>
      </div>
    );
  }
}

export default AdvertisingData;
