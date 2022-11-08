export default {
  intro: {
    title: 'Hello',
    body: `
    <p>RoboCon 2023 will be a hybrid conference in <span class="color-theme">two parts</span>.
    First conference part is <span class="color-theme">fully in-person in Helsinki</span>,
    where all the talks and other content will be live at Bio Rex on <span class="color-theme">January 19th &amp; 20th 2023!</span></p>
    <p>The <span class="color-theme">online conference</span> will take place from <span class="color-theme">February 28th to March 2nd</span>
    with three amazing days and fully online content. We will stream the recorded talks from Helsinki but will also have at least 50% fresh content.</p>
    <p class="bg-grey-dark p-small rounded">There are a few open online speaker slots! If you'd like to give a talk, please <a href="https://cfp.robocon.io/robocon-2023-online/cfp">submit your proposal soon!</a></p>
    <p><span class="color-theme">Helsinki ticket also includes the online ticket.</span>
    This arrangement enables us to fully engage with people first onsite and then online.
    This way we can have the best of both worlds and truly bring people together.</p>
    <p>For the online conference we will have the amazing video-game like <a href="https://youtu.be/6mtIO49k074">Gather.Town</a>
    platform and Joe Colantonio as our host!</p>
    `
  },
  cfp: {
    title: 'CFP',
    body: `
      <p>"<b>C</b>all <b>F</b>or <b>P</b>roposal" is open now. Please submit your talk proposal in a timely manner.</p>

      <h3><a href="https://cfp.robocon.io/robocon-2023" target="_blank">CFP RoboCon Helsinki</a></h3>
      <p>CFP for talks in Helsinki is open until <span class="color-theme">September 25th</span> - <a href="https://cfp.robocon.io/robocon-2023" target="_blank">here</a></p>
      <p>For onsite speakers, we will compensate travel costs up-to 500€ on top of the free conference ticket with a backstage pass.</p>
      <p>Within the CFP for onsite talks, you can agree on the duplication of your proposal to the online part of RoboCon 23 at the end of February.</p>

      <h3><a href="https://cfp.robocon.io/robocon-2023-online" target="_blank">CFP RoboCon Online</a></h3>
      <p>CFP for online talks is open until <span class="color-theme">October 16th</span> - <a href="https://cfp.robocon.io/robocon-2023-online" target="_blank">here</a></p>
      <p>Also online speakers will get the free online conference tickets and if needed we will compensate for proper audio equipment for the speakers.</p>
    `
  },
  tickets: [
    {
      title: '2023 RoboCon<div class="type-small">Helsinki</div>',
      price: '<strike>1200</strike> 800 €<span class="type-xsmall"> +VAT</span>',
      link: 'https://tickets.robotframework.org/robocon-2023/3410049/',
      side: '2023-JAN',
      description: '<p><span class="color-theme">Includes ticket to RoboCon Online 2023!</span></p>'
    },
    {
      title: '2023 Workshops<div class="type-small">Helsinki</div>',
      price: '550 €<span class="type-xsmall"> +VAT</span>',
      link: 'https://tickets.robotframework.org/robocon-2023/3670331/',
      side: '2023-JAN',
      description: '<p><span class="color-theme"></span></p>'
    },
    {
      title: '2023 RoboCon<div class="type-small">Online</div>',
      price: '<strike>350</strike> 200 €<span class="type-xsmall"> +VAT</span>',
      link: 'https://tickets.robotframework.org/robocon-2023/3410050/',
      side: '2023-MAR',
      description: `<p>Discounted early tickets for 2023 online conference are available now!</p>
      <p>This ticket also includes <span class="color-theme">instant access to 2022 talks!</span></p>`
    }
  ],
  sponsors: {
    link: 'sponsor',
    tiers: {
      small: '',
      medium: '',
      large: ''
    },
    large: [],
    medium: [
      {
        img: 'eficode.png',
        href: 'https://www.eficode.com/'
      },
      {
        img: 'gofore.png',
        href: 'https://gofore.com/en/'
      },
      {
        img: 'imbus.png',
        href: 'https://www.imbus.de/en/'
      },
      {
        img: 'knowit.png',
        href: 'https://www.knowit.eu/'
      },
      {
        img: 'northcode.png',
        href: 'https://www.northcode.fi/'
      },
      {
        img: 'qfactory.png',
        href: 'https://q-factory.fi/en/'
      },
      {
        img: 'vala.png',
        href: 'https://www.valagroup.com/'
      }
    ],
    small: []
  },
  rbcn22: {
    title: '2022',
    body: `
      <p>RoboCon 2022 was held in May. For those who couldn't participate this year, there's now a chance to purchase a ticket for the recordings of the full conference.</p>
      <p>See <a href="/2022">2022 page</a> for more details!</p>
    `
  }
}
