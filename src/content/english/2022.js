export default {
  intro: {
    title: 'Hello',
    body: `
    <p>A big thank you to all participants who attended RoboCon this year! Full day recordings are available through your ticket link for all live and online participants.</p>
    <p>For those who couldn't participate this year, there's now a chance to purchase a ticket for the recordings of the full conference. Purchases will help fund Robot Framework development.</p>
    <p>All talks will also be publicly released later, free for everyone.</p>
    `
  },
  talks: {
    title: 'Talks'
  },
  covid: {
    title: 'COVID',
    body: `
    <p>To minimize the risk of infection, there will be precautions regarding the in-person part of the event.
    We are constantly following the regulatory guidelines and always act by the current restrictions and recommendations.</p>
    <p>A valid certificate of COVID vaccination is required and will be requested at entrance.</p>
    <h3>
      List of accepted certificates
    </h3>
    <ul class="mt-small">
      <li>Digital COVID Certificate of the EU</li>
      <li>World Health Organization Certificate of Vaccination</li>
      <li>CDC-Vaccination Record Card</li>
    </ul>
    <p>In general, Finland has had a pretty low number of infections relative to population. For up-to-date information
    about restrictions in Finland, please refer to <a href="https://valtioneuvosto.fi/en/information-on-coronavirus/current-restrictions" target="_blank">valtioneuvosto.fi</a></p>`
  },
  sponsors: {
    title: 'Sponsors',
    boxTitle: 'RoboCon 2022 is sponsored by these companies',
    button: 'More info',
    moreInfo: `
      <p>Hosting RoboCon is made possible by the companies that sponsor the event. Thank you!</p>
      <p>This year, there are three levels of sponsorships that come with various benefits such as exposure
      in the event. If your company is interested in sponsoring RoboCon, please contact <a href="mailto:info{at}{'@'}{at}robocon.io">info{at}{'@'}{at}robocon.io</a>.</p>
      <p>If there is leftover money, it will be used for the development of Robot Framework. For more information
      about supporting the development, please visit <a href="https://robotframework.org/foundation" target="_blank">Robot Framework Foundation</a>.</p>
    `,
    tiers: {
      small: '',
      medium: 'GOLD & SILVER',
      large: 'PLATINUM'
    },
    large: [
      {
        img: 'robocorp.png',
        href: 'https://robocorp.com/'
      }
    ],
    medium: [
      {
        img: 'cinia.png',
        href: 'https://www.cinia.fi/en/'
      },
      {
        img: 'copado.png',
        href: 'https://www.copado.com/'
      },
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
        href: 'https://www.knowit.fi/'
      },
      {
        img: 'northcode.png',
        href: 'https://northcode.fi/'
      },
      {
        img: 'qfactory.png',
        href: 'https://q-factory.fi/'
      },
      {
        img: 'siili.png',
        href: 'https://www.siili.com/'
      },
      {
        img: 'testimate.png',
        href: 'https://www.testimate.fi/'
      },
      {
        img: 'vala.png',
        href: 'https://www.valagroup.com/fi/'
      }
    ],
    small: []
  },
  workshops: {
    title: 'Workshops',
    description: '<p>Workshops will be held in Helsinki. Due to their intensive nature they can only be attended in-person.</p>'
  },
  sprints: {
    title: 'Sprints',
    description: `
      <p>Before the conference we have development sprints on Wednesday 18th
      at 10am - 5pm.</p>

      <p>Sprints are for you if you want to contribute to
      some existing project in the Robot Framework ecosystem, have a project
      or project idea you'd like to work on with others, or just want to
      meet with other Robot Framework users and developers.</p>

      <p>To discuss development ideas beforehand, please join <a href="https://rf-invite.herokuapp.com/">Robot Framework's Slack</a> and come say hi at the channel #sprints!</p>

      <p>Sprints are organized by <a href="https://www.eficode.com/">Eficode</a> at their office located in the
      Helsinki city centre. Lunch and beverages are available and sauna will be warm afterwards!</p>

      <p>If you are willing to join the sprints, please <a href="https://tickets.robotframework.org/rc2022-Sprints/">enroll here</a> so we can reserve the right amount of food. Make sure to mention your dietary restrictions, should you have any!</p>
    `
  }
}
