import { Component } from 'react';

export default class CallToActionTop extends Component {
  render() {
    return (
      <section className="flex flex-col items-center gap-10">
        <div>
          <h2 className="text-2xl font-bold text-center xl:text-4xl">
            Ready To Build Your Community?
          </h2>
        </div>
        <div>
          <a
            href="#"
            className="px-10 py-3 font-bold text-center transition-colors duration-300 rounded-full bg-pink hover:bg-pink-light text-paleBlue xl:px-20 xl:py-4"
          >
            Get Started For Free
          </a>
        </div>
      </section>
    );
  }
}
