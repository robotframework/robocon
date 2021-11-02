export default () => ({
  langName: 'English',
  newsBanner: '📣 Interested in giving a talk at RoboCon? <a href="/#cfp">Call for Proposals is open!</a>',
  navbar: {
    items: [
      {
        name: 'Intro',
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
    title: 'Save the Date',
    body:
      `<p>RoboCon 2022 planning is underway!</p>
      <p>This year we'll be returning to an in-person conference while also
      streaming live worldwide. That way everyone has a chance to participate.</p>
      <p>Come and join us!</p>`,
    tabs: [
      {
        name: 'Live',
        description: `
        <p>Robocon's in-person part is held in <span class="color-theme">Helsinki, Finland,</span>
        the home country of Robot Framework.</p>
        <p>The venue will be once again <span class="color-theme">Bio Rex</span>, which can safely accomodate 250 people.
        It is located just a few minutes' walk from the main railway station of Helsinki.</p>
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
    <p>In general, Finland has had a pretty low number of infections relative to population.</p>`
  }
})
