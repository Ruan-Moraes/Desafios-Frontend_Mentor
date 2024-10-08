import { Component } from 'react';

import logo from '../assets/logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="flex items-center justify-between py-6">
        <section className="w-28">
          <img src={logo} alt="logo" />
        </section>
        <section className="px-5 py-1 text-sm border rounded-full border-pink text-pink">
          <a href="#">Try it free</a>
        </section>
      </header>
    );
  }
}
