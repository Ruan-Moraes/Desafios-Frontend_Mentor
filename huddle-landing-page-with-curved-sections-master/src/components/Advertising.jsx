import { Component } from 'react';

import backgroundImage from '../assets/bg-section-top-mobile-1.svg';
import screenMockup from '../assets/screen-mockups.svg';

import AdvertisingData from './AdvertisingData';

import iconCommunities from '../assets/icon-communities.svg';
import iconMessages from '../assets/icon-messages.svg';

const background = {
  backgroundImage: 'url(' + backgroundImage + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

export default class Advertising extends Component {
  render() {
    return (
      <section
        style={background}
        className="flex flex-col items-center justify-center gap-20"
      >
        <div>
          <img src={screenMockup} alt="#" />
        </div>
        <AdvertisingData icon={iconCommunities} />
        <AdvertisingData icon={iconMessages} />
      </section>
    );
  }
}
