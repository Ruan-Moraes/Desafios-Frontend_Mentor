import { Component } from 'react';

import bgSectionTopMobileOne from '../assets/bg-section-top-mobile-1.svg';
import bgSectionBottomMobileOne from '../assets/bg-section-bottom-mobile-1.svg';
import bgSectionTopMobileTwo from '../assets/bg-section-top-mobile-2.svg';
import bgSectionBottomMobileTwo from '../assets/bg-section-bottom-mobile-2.svg';

import bgSectionTopDesktopOne from '../assets/bg-section-top-desktop-1.svg';
import bgSectionBottomDesktopOne from '../assets/bg-section-bottom-desktop-1.svg';
import bgSectionTopDesktopTwo from '../assets/bg-section-top-desktop-2.svg';
import bgSectionBottomDesktopTwo from '../assets/bg-section-bottom-desktop-2.svg';

import imageOne from '../assets/illustration-grow-together.svg';
import imageTwo from '../assets/illustration-flowing-conversation.svg';
import imageThree from '../assets/illustration-your-users.svg';

import BenefitsData from './BenefitsData';

function getWindowDimensions() {
  const { innerWidth: width } = window;

  return width;
}

export default class Benefits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: getWindowDimensions() < 768,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      isMobile: getWindowDimensions() < 768,
    });
  }

  render() {
    const { isMobile } = this.state;

    return (
      <section className="flex flex-col items-center gap-32 m-0 xl:w-full">
        <div className="xl:w-full">
          <img
            src={isMobile ? bgSectionTopMobileOne : bgSectionTopDesktopOne}
            alt="#"
            className="w-full bg-contain"
          />
          <BenefitsData
            imageSrc={imageOne}
            title="Grow Together"
            paragraph="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
            backgroundColor="true"
            invert="true"
          />
          <img
            src={
              isMobile ? bgSectionBottomMobileOne : bgSectionBottomDesktopOne
            }
            alt="#"
            className="w-full bg-contain"
          />
        </div>

        <BenefitsData
          imageSrc={imageTwo}
          title="Flowing Conversations"
          paragraph="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
          className="xl:w-full"
        />

        <div className="xl:w-full">
          <img
            src={isMobile ? bgSectionTopMobileTwo : bgSectionTopDesktopTwo}
            alt="#"
            className="w-full bg-contain"
          />
          <BenefitsData
            imageSrc={imageThree}
            title="Your Users"
            paragraph="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
            backgroundColor="true"
            invert="true"
          />
          <img
            src={
              isMobile ? bgSectionBottomMobileTwo : bgSectionBottomDesktopTwo
            }
            alt="#"
            className="w-full bg-contain"
          />
        </div>
      </section>
    );
  }
}
