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
      <p>You may change your avatar when you first login and the name displayed. We recommend you use your real name. You may also mention your company name in brackets after your name.</p>
      <p>You may also change the notification and autostream options. If you need to later change the settings, just click the wheel on the bottom left corner.</p>
      <p>We encourage all people to discuss and comment on the ongoing talks on the stage chat. You may also discuss via video / audio / chat on the channels during breaks and after the program hours. For chat, you may also check our Slack and #robocon -channel!</p>
      <p>On the left side of the site you may find:</p>
      <div class='pl-small mb-medium border-left-theme'>
        <h3>Schedule</h3>
        Check the content from schedule to be on time!
      </div>
      <div class='pl-small mb-medium border-left-theme'>
        <h3>Partner Room</h3>
        Our partners for the conference! We could not have made it without them! Check out more information from the partner room.<br>You may find more information on the partner from their own pages, which you may access through the partner room. There is also a possibility for one-on-one (video) calls with the partners!
      </div>
      <div class='pl-small mb-medium border-left-theme'>
        <h3>Playground</h3>
        Check our Robot Framework 5! Play around with live code examples!
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
        <h3>Channels</h3>
        Here you can discuss specific topics, meet new people and spend time with the fellow conference attendees!
      </div>
      <div class='pl-small mb-medium border-left-theme'>
        <h3>Direct messages</h3>
        For contacting another user or users directly with a private message.
      </div>
      Any inappropriate behavior can be informed to the organizing team via email to info@robocon.io or direct message to an Organizing team member.
      <h2 class='type-xlarge type-center mt-xlarge wave glow-cheap'>
        <span style='font-size: 3rem; --i: 0;'>®</span>
        <span style='--i: 1'>E</span><span style='--i: 2'>n</span><span style='--i: 3'>j</span><span style='--i: 4'>o</span><span style='--i: 5'>y</span>
        <span style='--i: 6'>t</span><span style='--i: 7'>h</span><span style='--i: 8'>e</span>
        <span style='--i: 9'>c</span><span style='--i: 10'>o</span><span style='--i: 11'>n</span><span style='--i: 12'>f</span><span style='--i: 13'>e</span><span style='--i: 14'>r</span><span style='--i: 15'>e</span><span style='--i: 16'>n</span><span style='--i: 17'>c</span><span style='--i: 18'>e</span><span style='--i: 19'>!</span>
        <span style='font-size: 3rem; --i: 20'>®</span>
      </h2>
      `">
      <sponsors :mini="true" class="mt-xlarge" />
    </page-section>
  </div>
</template>

<script>
import {
  PageSection,
  BannerEmbed,
  Sponsors
} from 'Components'

export default {
  name: 'Landing',
  components: {
    PageSection,
    BannerEmbed,
    Sponsors
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
