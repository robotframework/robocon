export default () => ({
  langName: 'English',
  newsBanner: '📣 <a href="/#cfp">Call for Proposals</a> has been extended!',
  navbar: {
    items: [
      {
        name: 'Hello',
        id: 'intro'
      },
      {
        name: 'Cfp',
        id: 'cfp'
      },
      {
        name: 'Covid',
        id: 'covid'
      }
    ]
  },
  intro: {
    title: 'Hello',
    body:
      `<p>RoboCon 2022 planning is underway!</p>
      <p>This year we'll be returning to an in-person conference while also
      streaming live worldwide. That way everyone has a chance to participate.</p>
      <p>The main conference is held <span class="color-theme">19-20 May 2022</span>, while workshops are on 17th and sprints 18th.</p>
      <h3 class="mt-large">Tickets</h3>
      <p><a href="https://tickets.robotframework.org/rc2022/">Early bird tickets</a> are now available! First 100 participants per ticket type
      will get a discount before tickets return to normal price.</p>`,
    tickets: [
      {
        title: 'IN-PERSON',
        price: '<del class="disabled type-small">900€</del> 600€'
      },
      {
        title: 'ONLINE',
        price: '<del class="disabled type-small">200€</del> 100€'
      }
    ],
    tabs: [
      {
        name: 'In-Person',
        description: `
        <p>Robocon's in-person part is held in <span class="color-theme">Helsinki, Finland,</span>
        the home country of Robot Framework.</p>
        <p>The venue will be once again <span class="color-theme">Bio Rex</span>, which can safely accomodate 250 people.
        It is located just a few minutes' walk from the main railway station of Helsinki.</p>
        <p>A valid certificate of COVID vaccination is required and will be requested at entrance. For more information,
        please see the section about COVID below.</p>
        <p>In addition to catering and bar there'll be fun activities between the talks,
        which are revealed at a later date.</p>
        <p>And yes, there will be an after party!</p>`
      },
      {
        name: 'Online',
        description: `
        <p>Online participants will not be an afterthought!</p>
        <p>Instead of just a "webcast", remote participants get to enjoy a well-prepared, interactive
        virtual experience. There will be exciting interaction possibilities between the live and
        online audiences, a dedicated host and camera crew for online participants and much more.</p>
        <p>Stay tuned for more information!</p>`
      }
    ]
  },
  cfp: {
    title: 'CFP',
    body: `
    <p>RoboCon 2022 Call for Proposals is open!</p>
    <p>We are looking for talk presenters and workshop facilitators. Submissions can be for both
    in-person and remote (pre-recorded) talks.</p>
    <p>If you are interested, <a href="https://cfp.robocon.io/robocon-2022" target="_blank">
    please submit a proposal!</a></p>
    `
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
    list: [
      {
        img: 'robocorp.png',
        href: 'https://robocorp.com/',
        platinum: true
      },
      {
        img: 'copado.png',
        href: 'https://www.copado.com/'
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
    ]
  }
})
