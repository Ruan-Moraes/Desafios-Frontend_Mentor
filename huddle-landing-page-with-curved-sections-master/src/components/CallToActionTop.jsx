import { Component } from 'react';

export default class CallToActionTop extends Component {
  render() {
    return (
      <section className="flex flex-col items-center mt-24 gap-7">
        <div>
          <h1 className="text-2xl text-4xl font-bold text-center text-cyan">
            Build The Community Your Fans Will Love
          </h1>
        </div>
        <div>
          <p className="p-3 mx-auto text-sm text-center xl:w-2/4">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
        </div>
        <div className="mt-10 xl:mt-0">
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
