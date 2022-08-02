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
    <p>CFP for talks in Helsinki is open until <span class="color-theme">September 18th</span> - <a href="https://cfp.robocon.io/robocon-2023" target="_blank">here</a></p>
    <p>For onsite speakers, we will compensate travel costs up-to 500€ on top of the free conference ticket with a backstage pass.</p>
    <p>Within the CFP for onsite talks, you can agreen on the duplication of your proposal to the online part of RoboCon end of February.</p>
   
    <h3><a href="https://cfp.robocon.io/robocon-2023-online" target="_blank">CFP RoboCon Online</a></h3>
    <p>CFP for online talks is open until <span class="color-theme">Oktober 16th</span> - <a href="https://cfp.robocon.io/robocon-2023-online" target="_blank">here</a></p>
    <p>Also online speakers will get the free online conference tickets and if needed we will compensate for proper audio equipment for the speakers.</p>
    `
  },
  tickets: [
    {
      title: '2022 DE<div class="type-small">Early Ticket</div>',
      price: '<strike>350</strike> 300 €<span class="type-xsmall"> +VAT</span>',
      link: 'https://tickets.robotframework.org/robocon-2022-DE/',
      side: '05-10-22',
      description: `<p>For the first time ever, a physical RoboCon is getting held outside Helsinki!
      <span class="color-theme">October 2022</span> there'll be a Robot Framework sub-conference at
      <a class="color-theme" target="_blank" href="https://www.qs-tag.de/en/">Software-QS-Tage</a> in <span class="color-theme">Frankfurt</span>.</p>`,
      page: { to: 'Germany', text: 'More details of RoboCon 2022 Germany' },
      theme: 'theme-germany'
    },
    {
      title: '2023 Online<div class="type-small">Early Blind</div>',
      price: '<strike>350</strike> 100 €<span class="type-xsmall"> +VAT</span>',
      link: 'https://tickets.robotframework.org/robocon-2023/',
      side: '2023-MAR',
      description: `<p>Discounted blind tickets for 2023 online conference are available now!
      The discount is valid until August 21st. This ticket also includes
      <span class="color-theme">instant access to 2022 talks!</span></p>`
    },
    {
      title: '2023 Helsinki<div class="type-small">Blind Robot</div>',
      price: '<strike>1200</strike> 700 €<span class="type-xsmall"> +VAT</span>',
      link: 'https://tickets.robotframework.org/robocon-2023/',
      side: '2023-JAN',
      description: `<p>Discounted blind tickets for 2023 Helsini conference are available now!
      The discount is valid until talks and conference program is published. This ticket also includes
      <span class="color-theme">instant access to 2022 talks.</span></p>
      <p><span class="color-theme">This ticket does include the ticket to RoboCon Online 2023!</span></p>`
    },
    {
      title: '2022 Recordings',
      price: '20 €<span class="type-xsmall"> +VAT</span>',
      link: 'https://tickets.robotframework.org/rc2022/',
      side: '2022-MAY',
      description: `<p>With this ticket, you'll get immediate access to <span class="color-theme">all recorded talks plus Q&A of RoboCon 2022</span>.
      All profits from ticket sales go to the Robot Framework Foundation and are used to further develop the Robot Framework.</p>`,
      page: { to: '2022', text: 'Archived RoboCon 2022 page with talk descriptions' },
      theme: 'theme-2022'
    }
  ],
  rbcn22: {
    title: '2022',
    body: `
      <p>RoboCon 2022 was held in May. For those who couldn't participate this year, there's now a chance to purchase a ticket for the recordings of the full conference.</p>
      <p>See <a href="/2022">2022 page</a> for more details!</p>
    `
  }
}
