import { Component } from 'react';

import backgroundImage from '../assets/bg-section-bottom-mobile-1.svg';

const background = {
  backgroundImage: 'url(' + backgroundImage + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

import imageOne from '../assets/illustration-grow-together.svg';
import imageTwo from '../assets/illustration-flowing-conversation.svg';
import imageThree from '../assets/illustration-your-users.svg';

import BenefitsData from './BenefitsData';

export default class Benefits extends Component {
  render() {
    return (
      <section style={background} className="flex flex-col items-center gap-32">
        <BenefitsData
          imageSrc={imageOne}
          title="Grow Together"
          paragraph="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
        />
        <BenefitsData
          imageSrc={imageTwo}
          title="Flowing Conversations"
          paragraph="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
        />
        <BenefitsData
          imageSrc={imageThree}
          title="Your Users"
          paragraph="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
        />
      </section>
    );
  }
}
