import { Component } from 'react';

import logo from '../assets/logo.svg';

import iconPhone from '../assets/icon-phone.svg';
import iconEmail from '../assets/icon-email.svg';

import facebook from '../assets/facebook_794339.png';
import instagram from '../assets/application_15072085.png';
import twitter from '../assets/cross_17735568.png';

export default class Informations extends Component {
  render() {
    return (
      <section className="flex flex-col gap-12 pb-12 text-paleBlue mt-28 xl:mt-20 xl:w-[32rem]">
        <div className="flex flex-col gap-6">
          <div>
            <img
              src={logo}
              alt="#"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <div className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            facilis dolores dolorum vero in obcaecati culpa veniam praesentium
            facere. Animi quos illo neque velit quo sunt ea! Non, saepe
            expedita.
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-5">
            <div>
              <img src={iconPhone} alt="#" className="w-6" />
            </div>
            <div>
              <p>Phone: +1-543-123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <img src={iconEmail} alt="#" className="w-6" />
            </div>
            <div>
              <p>example@company.com</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <img
            src={facebook}
            alt="#"
            style={{ filter: 'brightness(0) invert(1)' }}
            className="w-6 transition-opacity duration-300 cursor-pointer hover:opacity-50 xl:w-8"
          />
          <img
            src={instagram}
            alt=""
            style={{ filter: 'brightness(0) invert(1)' }}
            className="w-6 transition-opacity duration-300 cursor-pointer hover:opacity-50 xl:w-8"
          />
          <img
            src={twitter}
            alt=""
            style={{ filter: 'brightness(0) invert(1)' }}
            className="w-6 transition-opacity duration-300 cursor-pointer hover:opacity-50 xl:w-8"
          />
        </div>
      </section>
    );
  }
}
