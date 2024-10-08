import { Component } from 'react';

export default class Newsletter extends Component {
  render() {
    return (
      <section className="flex flex-col mt-20 gap-7">
        <div>
          <h2 className="text-2xl font-bold uppercase text-paleBlue">
            Newsletter
          </h2>
        </div>
        <div>
          <p className="font-medium text-paleBlue">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
        </div>
        <div>
          <form className="flex flex-col items-end gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md"
            />
            <button
              type="submit"
              className="py-3 font-bold rounded-md px-14 bg-pink text-paleBlue"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  }
}
