import { Component } from 'react';

import screenMockup from '../assets/screen-mockups.svg';

import AdvertisingData from './AdvertisingData';

import iconCommunities from '../assets/icon-communities.svg';
import iconMessages from '../assets/icon-messages.svg';

export default class Advertising extends Component {
  render() {
    return (
      <section className="flex flex-col items-center justify-center gap-20">
        <div className="mt-4 mb-8">
          <img src={screenMockup} alt="#" />
        </div>
        <div className="flex flex-col gap-24 xl:w-full xl:px-16 xl:justify-between xl:gap-0 xl:flex-row">
          <AdvertisingData icon={iconCommunities} text="1.4k+" />
          <AdvertisingData icon={iconMessages} text="2.7m+" />
        </div>
      </section>
    );
  }
}
