<template>
  <banner-embed />
  <div class="container mb-xlarge">
    <page-section
      title-id="welcome"
      :full-width="true"
      :body="`
      <h2 class='mb-xsmall'>Hello, dear ${name ? `${name}` : 'participants'}!</h2>
      <p>Welcome to RoboCon 2022!</p>
      <p>Congratulation, you made it! This is your space online!</p>
      <p>Please enjoy the talks, Q&A sessions, company of your fellow conference people and check out the awesome partners!</p>
      <h2 class='mt-xlarge mb-xsmall'>Instructions</h2>
      <p>You can set your avatar and displayed name from the settings that can be found from the navigation menu. We recommend you use your real name. You may also mention your company name in brackets after your name.<p>
      <p>You may also change the notification and autostream options from the settings.</p>
      <p><b>On the navigation menu you'll find:</b></p>
      <div class='pl-small mb-medium border-left-theme'>
        <h3>Schedule</h3>
        Check the content from schedule to be on time!
      </div>
      <div class='pl-small mb-medium border-left-theme'>
        <h3>Parter Room</h3>
        Our partners for the conference. RoboCon wouldn't be possible without them! You may find more information about them from their own pages, which you can access through the partner room. There is also a possibility for one-on-one (video) calls with the partners!
      </div>
      <div class='pl-small mb-medium border-left-theme'>
        <h3>Random video calls</h3>
        Meet the fellow online attendees for a random chat! The video call connects you with another person from the conference. The platform will ask your permission to use your camera and microphone, please grant the usage in order to join the call.
      </div>
      <div class='pl-small mb-medium border-left-theme'>
        <h3>Stage</h3>
        This is where you'll find all the ongoing talks and Q&A sessions. There is also a chat option to ask questions, comment and react to the content.
      </div>
      <div class='pl-small mb-medium border-left-theme'>
        <h3>Direct messages</h3>
        For contacting another user or users directly with a private message.
      </div>
      <h2 class='type-xlarge type-center mt-xlarge wave glow-cheap'>
        <span style='font-size: 3rem; --i: 0;'>®</span>
        <span style='--i: 1'>E</span><span style='--i: 2'>n</span><span style='--i: 3'>j</span><span style='--i: 4'>o</span><span style='--i: 5'>y</span>
        <span style='--i: 6'>t</span><span style='--i: 7'>h</span><span style='--i: 8'>e</span>
        <span style='--i: 9'>c</span><span style='--i: 10'>o</span><span style='--i: 11'>n</span><span style='--i: 12'>f</span><span style='--i: 13'>e</span><span style='--i: 14'>r</span><span style='--i: 15'>e</span><span style='--i: 16'>n</span><span style='--i: 17'>c</span><span style='--i: 18'>e</span><span style='--i: 19'>!</span>
        <span style='font-size: 3rem; --i: 20'>®</span>
      </h2>
      `">
    </page-section>
  </div>
</template>

<script>
import {
  PageSection,
  BannerEmbed
} from 'Components'

export default {
  name: 'Landing',
  components: {
    PageSection,
    BannerEmbed
  },
  created() {
    const query = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop)
    })
    if (query.name) this.name = query.name.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z ])/g, '')
  }
}
</script>

<style>
  .wave span {
    display: inline-block;
    animation: wave 2s ease-in-out infinite;
    animation-delay: calc(0.05s * var(--i));
  }

  @keyframes wave{
    0%{
      transform: translateY(0);
    }
    15%{
      transform: translateY(-0.5rem);
    }
    40%{
      transform: translateY(0.25rem);
    }
    80%{
      transform: translateY(0);
    }
  }
</style>
