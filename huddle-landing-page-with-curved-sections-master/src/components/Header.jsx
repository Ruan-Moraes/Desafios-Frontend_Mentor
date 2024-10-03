import { Component } from 'react';

import logo from '../assets/logo.svg';

export class Header extends Component {
  render() {
    return (
      <header className="flex items-center justify-between py-6">
        <div className="w-28">
          <img src={logo} alt="logo" />
        </div>
        <div className="px-5 py-1 text-sm border rounded-full border-pink text-pink">
          <a href="#">Try it free</a>
        </div>
      </header>
    );
  }
}

export default Header;
