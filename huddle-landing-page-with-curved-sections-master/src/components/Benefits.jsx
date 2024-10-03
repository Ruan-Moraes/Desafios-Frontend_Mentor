import { Component } from 'react';

import backgroundImage from '../assets/bg-section-bottom-mobile-1.svg';

const background = {
  backgroundImage: 'url(' + backgroundImage + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

export class Benefits extends Component {
  render() {
    return (
      <div
        style={
          (background,
          {
            backgroundColor: 'red',
          })
        }
      >
        <div>
          <div>
            <img src="" alt="#" />
          </div>
          <div>
            <h3>Grow Together</h3>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h3>Flowing Conversations</h3>
            <p>
              You wouldn&apos;t paginate a conversation in real life, so why do
              it online? Our threads have just-in-time loading for a more
              natural flow.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h3>Your Users</h3>
            <p>
              It takes no time at all to integrate Huddle with your app&apos;s
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Benefits;
