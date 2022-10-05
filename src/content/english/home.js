export default {
  intro: {
    title: 'Hello',
    body: `
    <h3>We are happy to announce that RoboCon 2023 is coming.</h3>
    <p>This time we are going to have a hybrid conference in <span class="color-theme">two parts</span>.
    First conference part is <span class="color-theme">fully in-person in Helsinki</span>,
    where all the talks and other content will be live at Bio Rex on <span class="color-theme">January 19th &amp; 20th 2023!</span></p>
    <p>The <span class="color-theme">online conference</span> will take place from <span class="color-theme">February 28th to March 2nd</span>
    with three amazing days and fully online content. We will stream the recorded talks from Helsinki but will also have at least 50% fresh content.</p>
    <p><span class="color-theme">The Helsinki ticket does include the online ticket as well.</span>
    This arrangement enables us to fully engage with people first onsite and then online.
    This way we can have the best of both worlds and truly bring people together.</p>
    <p>For the online conference we will have the amazing video-game like <a href="https://youtu.be/6mtIO49k074">Gather.Town</a>
    platform and Joe Colantonio as our host!</p>


    <h2>CFP</h2>
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
      title: '2023 Online<div class="type-small">Blind Robot</div>',
      price: '<strike>350</strike> 150 €<span class="type-xsmall"> +VAT</span>',
      link: 'https://tickets.robotframework.org/robocon-2023/3410050/',
      side: '2023-MAR',
      description: `<p>Discounted blind tickets for 2023 online conference are available now!
      The discount is valid until August 21st. This ticket also includes
      <span class="color-theme">instant access to 2022 talks!</span></p>`
    },
    {
      title: '2023 Helsinki<div class="type-small">Blind Robot</div>',
      price: '<strike>1200</strike> 700 €<span class="type-xsmall"> +VAT</span>',
      link: 'https://tickets.robotframework.org/robocon-2023/3410049/',
      side: '2023-JAN',
      description: `<p>Discounted blind tickets for 2023 Helsinki conference are available now!
      The discount is valid until talks and conference program is published. This ticket also includes
      <span class="color-theme">instant access to 2022 talks.</span></p>
      <p><span class="color-theme">This ticket does include the ticket to RoboCon Online 2023!</span></p>`
    }
  ],
  sponsors: {
    title: 'Sponsors',
    boxTitle: 'RBCN23 Sponsors',
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
        img: 'northcode.png',
        href: 'https://www.northcode.fi/'
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
