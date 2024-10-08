import { Component } from 'react';

export default class CallToActionTop extends Component {
  render() {
    return (
      <section className="flex flex-col items-center mt-24 gap-7">
        <div>
          <h1 className="text-2xl font-bold text-center text-cyan">
            Build The Community Your Fans Will Love
          </h1>
        </div>
        <div>
          <p className="p-2 text-sm text-center">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
        </div>
        <div>
          <a
            href="#"
            className="px-10 py-4 font-bold text-center rounded-full shadow-md shadow-slate-400 text-paleBlue bg-pink"
          >
            Get Started For Free
          </a>
        </div>
      </section>
    );
  }
}
