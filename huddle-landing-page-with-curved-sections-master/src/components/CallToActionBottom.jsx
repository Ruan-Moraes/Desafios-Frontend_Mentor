import { Component } from 'react';

export default class CallToActionTop extends Component {
  render() {
    return (
      <section className="flex flex-col items-center gap-10">
        <div>
          <h2 className="text-2xl font-bold text-center">
            Ready To Build Your Community?
          </h2>
        </div>
        <div className="px-12 py-3 font-bold text-center rounded-full bg-pink text-paleBlue">
          <a href="#">Get Started For Free</a>
        </div>
      </section>
    );
  }
}
