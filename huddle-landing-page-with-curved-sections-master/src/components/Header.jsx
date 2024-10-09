import { Component } from 'react';

import logo from '../assets/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="flex items-center justify-between py-6 xl:justify-between xl:py-8 xl:mx-20">
        <section className="w-28 xl:w-40">
          <img src={logo} alt="logo" className="cursor-pointer" />
        </section>
        <section className="px-5 py-1 text-sm transition-colors duration-300 border rounded-full xl:py-2 xl:px-8 border-pink text-pink hover:border-pink-light">
          <a href="#">Try it free</a>
        </section>
      </header>
    );
  }
}
