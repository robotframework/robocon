export default {
  intro: {
    title: 'Hello',
    body: `
    <h3>We are happy to announce that RoboCon 2023 is coming.</h3>
    <p>This time we are going to have a hybrid conference in <span class="color-theme">two parts</span>. First conference is <span class="color-theme">fully in-person in Helsinki</span>, where all the talks and other content will be live at Bio Rex in <span class="color-theme">week 3 in January!</span></p>
    <p>The <span class="color-theme">online conference</span> will take place in <span class="color-theme">week 9</span> with fully online content. We will record the talks in Helsinki but will also have at least 50% fresh content.</p>
    <p>The Helsinki ticket will include the online ticket as well. This arrangement enables us to fully engage with people first onsite and then online. This way we can have the best of both worlds and truly bring people together.</p>
    <p>For the online conference we will most likely have the amazing video-game like Gather.Town platform and Joe Colantonio as our host!</p>
    <h3>CFP</h3>
    <p>We are opening the CFP soon. Please submit your talk proposal in a timely manner.</p>
    <p>For onsite speakers, we will compensate travel costs up-to 500€ on top of the free conference ticket with a backstage pass.</p>
    <p>Also online speakers will get the free online conference tickets and if needed we will compensate for proper audio equipment for the speakers.</p>
    `
  },
  tickets: [
    {
      title: '2022 DE<div class="type-small">Early Ticket</div>',
      price: '<strike>350</strike> 300 €<span class="vat"> +VAT</span>',
      link: 'https://tickets.robotframework.org/robocon-2022-DE/',
      side: '05-10-2022',
      description: `<p>For the first time ever, a physical RoboCon is getting held outside Helsinki!
      <span class="color-theme">October 2022</span> there'll be a Robot Framework sub-conference at
      <a class="color-theme" target="_blank" href="https://www.qs-tag.de/en/">Software-QS-Tage</a> in <span class="color-theme">Frankfurt</span>.</p>`,
      page: { to: 'Germany', text: 'More details of RoboCon 2022 Germany' },
      theme: 'theme-germany'
    },
    {
      title: '2023 Online<div class="type-small">Early Blind</div>',
      price: '<strike>300</strike> 100 €<span class="vat"> +VAT</span>',
      link: 'https://tickets.robotframework.org/robocon-2023/',
      side: '2023 MAR',
      description: `<p>Discounted blind tickets for 2023 online conference are available now!
      The discount is valid until talks and conference program is published. This ticket also includes
      <span class="color-theme">instant access to 2022 talks!</span></p>
      <p>Please note that the upcoming <span class="color-theme">in-person conference ticket will include this online ticket.</span></p>`
    },
    {
      title: '2022 Recordings',
      price: '20 €<span class="vat"> +VAT</span>',
      link: 'https://tickets.robotframework.org/rc2022/',
      side: '2022 MAY',
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
