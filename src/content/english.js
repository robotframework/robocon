export default () => ({
  langName: 'English',
  newsBanner: '📣 Schedule coming soon!',
  navbar: {
    items: [
      {
        name: 'Hello',
        id: 'intro'
      },
      // {
      //   name: 'Talks',
      //   id: 'talks'
      // },
      // {
      //   name: 'Cfp',
      //   id: 'cfp'
      // },
      {
        name: 'Covid',
        id: 'covid'
      },
      {
        name: 'Previous Talks',
        id: 'previousTalks'
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
  talks: {
    title: 'Talks',
    body: 'Some text here'
  },
  // cfp: {
  //   title: 'CFP',
  //   body: `
  //   <p>RoboCon 2022 Call for Proposals is open!</p>
  //   <p>We are looking for talk presenters and workshop facilitators. Submissions can be for both
  //   in-person and remote (pre-recorded) talks.</p>
  //   <p>If you are interested, <a href="https://cfp.robocon.io/robocon-2022" target="_blank">
  //   please submit a proposal!</a></p>
  //   `
  // },
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
    ]
  },
  previousTalks: {
    title: 'Previous Talks',
    body: '<p>All RoboCon talks over the years have been recorded. Feel free to watch them here!</p>',
    talks: [
      {
        year: 2021,
        playlistLink: 'https://www.youtube.com/playlist?list=PLSK6YK5OGX1ALlSRlwr9dWJu3mFHMlVq8',
        list: [
          { authors: ['Pekka Klärck', 'Ismo Aro'], title: 'KEYNOTE: WHERE\'S ROBOT FRAMEWORK IN 2021', url: 'https://www.youtube.com/embed/3NF8Or6LWq8' },
          { authors: ['Mateusz Nojek', 'Bartłomiej Hirsz'], title: 'HOW TO AVOID JAIL FOR NASTY CODE?', url: 'https://www.youtube.com/embed/vZoyi2ObM8E' },
          { authors: ['Many Kasiriha'], title: 'PRINT IS NOT DEAD - VISUAL DOCUMENT TESTING WITH ROBOT FRAMEWORK', url: 'https://www.youtube.com/embed/qmpwlQoJ-nE' },
          { authors: ['Mikko Korpela', 'Tatu Aalto', 'Kerkko Pelttari', 'René Rohner'], title: 'BROWSER LIBRARY - INTRODUCTION', url: 'https://www.youtube.com/embed/3BNVS6uiFeo' },
          { authors: ['Diogo Rede'], title: 'E-COMMERCE WEB AUTOMATION AT SCALE', url: 'https://www.youtube.com/embed/b-FO7GXY2Oo' },
          { authors: ['Maciej Wiczk'], title: 'RFHUB2 - NEW TAKE ON ROBOTFRAMEWORK ASSET DOCUMENTATION', url: 'https://www.youtube.com/embed/WTupl3gtM-g' },
          { authors: ['Luca Giovenzana'], title: 'WHAT\'S NEW IN REQUESTSLIBRARY 0.9', url: 'https://www.youtube.com/embed/6fc2Cn_Sch0' },
          { authors: ['Patrik Zakovič', 'Marián Macek'], title: 'THE JOURNEY OF BUILDING TEST AUTOMATION PLATFORM IN THE BANK', url: 'https://www.youtube.com/embed/Wnu9KVpylnM' },
          { authors: ['Simon Meggle'], title: 'ROBOTMK: TESTING MEETS MONITORING', url: 'https://www.youtube.com/embed/Asjh7E1xoFI' },
          { authors: ['Tuomas Pitkänen'], title: 'ROBOT MAKES MUSIC', url: 'https://www.youtube.com/embed/o31z0NmruSo' },
          { authors: ['Pekka Klärck'], title: 'CREATING ROBOT FRAMEWORK LIBRARIES: WHY AND HOW?', url: 'https://www.youtube.com/embed/DxqCP_EJJXc' },
          { authors: ['Deepak Chourasia'], title: 'ROBOT FRAMEWORK AND JOURNEY FROM CATHEDRAL TO BAZAR', url: 'https://www.youtube.com/embed/r3GF6hjqRjQ' },
          { authors: ['Antti Karjalainen'], title: 'OPEN-SOURCE STACK FOR RPA', url: 'https://www.youtube.com/embed/MIaOIbiuYXs' },
          { authors: ['Tuukka Virtanen'], title: 'HOW TO FIND THE BEST ROBOT FRAMEWORK LIBRARIES?', url: 'https://www.youtube.com/embed/8jX8fivBNg0' },
          { authors: ['Fabio Zadrozny'], title: 'ROBOTFRAMEWORK LANGUAGE SERVER', url: 'https://www.youtube.com/embed/aZN5_rvGohg' },
          { authors: ['Markus Stahl'], title: 'HOW TO START WITH OPEN SOURCE RPA', url: 'https://www.youtube.com/embed/yggxvDl0Ozc' },
          { authors: ['Cindy Huffman'], title: 'AUTOMATING CUSTOMER JOURNEYS AS UI ACCEPTANCE SCENARIOS', url: 'https://www.youtube.com/embed/D3lMuzRnvlU' },
          { authors: ['Esko Hannula'], title: 'HYPERAUTOMATION OR HYPE-AUTOMATION: AUTOMATION LANDSCAPE OF THE FUTURE', url: 'https://www.youtube.com/embed/iEPiDX8YnB8' },
          { authors: ['Dave Martin'], title: 'ZERO TO HERO IN 2 WEEKS', url: 'https://www.youtube.com/embed/y2OIqOPYklM' },
          { authors: ['Elisabeth Hendrickson'], title: 'KEYNOTE: ROBOT FRAMEWORK THROUGH THE LENS OF HISTORY', url: 'https://www.youtube.com/embed/U5FzPgpMiqk' },
          { authors: ['Gojko Adžić'], title: 'KEYNOTE: YOU\'RE TESTING WHAT?', url: 'https://www.youtube.com/embed/Ju90-ewW_gM' },
          { authors: ['Juho Saarinen'], title: 'ROBOT FRAMEWORK AFTER JYTHON', url: 'https://www.youtube.com/embed/6F4659Ibf7o' },
          { authors: ['Bartłomiej Hirsz'], title: 'NEW PARSING API FOR ROBOT FRAMEWORK - HOW TO CREATE OWN TOOLS', url: 'https://www.youtube.com/embed/FO7rWa2-s70' },
          { authors: ['Tatu Aalto'], title: 'PYTHONLIBCORE THE SECRET BEHIND SELENIUMLIBRARY', url: 'https://www.youtube.com/embed/_19SBMEObX8' },
          { authors: ['Mikko Korpela', 'Tatu Aalto', 'Kerkko Pelttari', 'René Rohner'], title: 'ROBOTFRAMEWORK BROWSER LIBRARY - A DEEP DIVE', url: 'https://www.youtube.com/embed/OiRm9Zv3edE' },
          { authors: ['Nils Balkow-Tychsen', 'Michał Wcisło'], title: 'HOW KUBERNETES BRINGS QA AND DEVOPS CLOSER TOGETHER', url: 'https://www.youtube.com/embed/0vtj9Hg-LWU' },
          { authors: ['Samuel Montgomery-Blinn'], title: '(AB)USING ROBOTFRAMEWORK-DATADRIVER FOR FUN AND PROFIT', url: 'https://www.youtube.com/embed/uPv0DMMksuM' },
          { authors: ['Raphael Roems'], title: 'BACKEND TESTING USING ROBOT FRAMEWORK AND SOAPUI', url: 'https://www.youtube.com/embed/mSR-HPCBeEQ' },
          { authors: ['Markus Stahl'], title: 'ROBOTFRAMEWORK-CAMUNDA LIBRARY: ORCHESTRATING ROBOTIC TASKS', url: 'https://www.youtube.com/embed/ZPH4AMD5XZQ' },
          { authors: ['Tommi Oinonen'], title: 'WHAT IS TAKING SO LONG?! - AN ATTEMPT TO ANSWER THIS QUESTION', url: 'https://www.youtube.com/embed/nfoJXYNr3UA' }
        ]
      }, {
        year: 2020,
        playlistLink: 'https://www.youtube.com/playlist?list=PLSK6YK5OGX1AZMAffD8EiTDq0lfzshRNg',
        list: [
          { authors: ['Jeff King'], title: 'ROBOT FRAMEWORK AND THE ONE MAN ROBOT BAND', url: 'https://www.youtube.com/embed/0yEnJt6Sf50' },
          { authors: ['Anaïs van Asselt'], title: 'IMPLEMENTING A TEST AUTOMATION ARCHITECTURE IN A GOVERNMENT ORGANIZATION', url: 'https://www.youtube.com/embed/Asy5xHl0uRA' },
          { authors: ['Antti Karjalainen'], title: 'THE OPEN RPA ECOSYSTEM', url: 'https://www.youtube.com/embed/cO6FxG-RAtQ' },
          { authors: ['Petteri Mannersalo'], title: 'ROBOT FRAMEWORK AS AN ENABLER FOR INTELLIGENT PROCESS AUTOMATION', url: 'https://www.youtube.com/embed/ViSKJiuT6xo' },
          { authors: ['Tuomas Lempiäinen'], title: 'QA DRIVEN RPA AT VEIKKAUS', url: 'https://www.youtube.com/embed/3Drlg1q4fkM' },
          { authors: ['Virpi Luostarinen', 'Mikael Siirtola'], title: 'RPA ON RAILS: AUTOMATING MANUAL PROCESSES AT VR', url: 'https://www.youtube.com/embed/R7bNgxPjDJ4' },
          { authors: ['Kristina Sabotic'], title: 'END-TO-END TESTING FOR END-USERS', url: 'https://www.youtube.com/embed/qkQpzGA51go' },
          { authors: ['Luca Giovenzana', 'Angelo Caovilla'], title: 'BEWARE THE BRITTLE DRAGON', url: 'https://www.youtube.com/embed/rgpqyPblo28' },
          { title: 'Lightning Talks I', url: 'https://www.youtube.com/embed/0sKyczF0SDE' },
          { title: 'Lightning Talks II', url: 'https://www.youtube.com/embed/Xb9npqzJkFY' },
          { title: 'Lightning Talks III', url: 'https://www.youtube.com/embed/5axgakabN_0' },
          { title: 'Lightning Talks IV', url: 'https://www.youtube.com/embed/AZOZIW1BJJs' },
          { title: 'Lightning Talks V', url: 'https://www.youtube.com/embed/G24aU0unvVE' },
          { title: 'Lightning Talks VI', url: 'https://www.youtube.com/embed/oo11OlAaWWA' },
          { title: 'Lightning Talks VII', url: 'https://www.youtube.com/embed/7Ks8XSM2Uoc' },
          { title: 'Lightning Talks VIII', url: 'https://www.youtube.com/embed/jS-HZqLwmIY' },
          { title: 'Lightning Talks IX', url: 'https://www.youtube.com/embed/HTZ-R3HgByg' },
          { authors: ['Ismo Aro'], title: 'Day II', url: 'https://www.youtube.com/embed/m1KA3PVukhg' },
          { authors: ['KEYNOTE: Pekka Klärck'], title: 'WHAT\'S NEW? WHAT\'S NEXT? WHO ARE WE?', url: 'https://www.youtube.com/embed/DRAu1du3UFU' },
          { authors: ['Akseli Lukkarila'], title: 'ACCEPTANCE TESTING A REAL-TIME MUSIC EDUCATION APPLICATION WITH AUDIO', url: 'https://www.youtube.com/embed/Fkh-EQ5O7zo' },
          { authors: ['Maria Prokhorova'], title: 'NEW IMAGE LIBRARY FOR ADVANCED IMAGE PROCESSING', url: 'https://www.youtube.com/embed/AWuh-r-T6Yo' },
          { authors: ['Tatu Aalto'], title: 'SELENIUMLIBRARY 4.0: PLUGIN API AND EVENT FIRING WEBDRIVER SUPPORT', url: 'https://www.youtube.com/embed/zyNZRTR821Q' },
          { authors: ['René Rohner'], title: 'DATADRIVER OR: HOW I LEARNED TO STOP WORRYING AND LOVE OPEN SOURCE', url: 'https://www.youtube.com/embed/RtEUr1i4x3s' },
          { authors: ['Tommi Oinonen'], title: 'SELF MANAGING TESTING PIPELINES', url: 'https://www.youtube.com/embed/W3JUzeV8lp4' },
          { authors: ['Juho Saarinen'], title: 'ROBOT FRAMEWORK REMOTE LIBRARY IN PRACTICE (WITH DEMOS)', url: 'https://www.youtube.com/embed/B-67yPvMh8Q' },
          { authors: ['Maciej Brzozowski'], title: 'MICROSERVICES TESTING USING ARGO: CONTAINER-NATIVE WORKFLOWS FOR KUBERNETES', url: 'https://www.youtube.com/embed/xBBTvv4mz0U' },
          { authors: ['Joonas Köppä', 'Riku Halonen'], title: 'ORCHESTRATING ROBOT FRAMEWORK TEST CONTAINERS AND REMOTE LIBRARIES IN KUBERNETES', url: 'https://www.youtube.com/embed/SypNjILTRl0' },
          { title: 'Day II - Lightning Talks I', url: 'https://www.youtube.com/embed/Yjlsl3eHGMI' },
          { title: 'Day II - Lightning Talks II', url: 'https://www.youtube.com/embed/jDQWBrYD-w8' },
          { title: 'Day II - Lightning Talks III', url: 'https://www.youtube.com/embed/_T_PCx-tVFk' },
          { title: 'Day II - Lightning Talks IV', url: 'https://www.youtube.com/embed/-dBWW_77QG4' },
          { title: 'Day II - Lightning Talks V', url: 'https://www.youtube.com/embed/TZiJLT1fShk' },
          { title: 'Day II - Lightning Talks VI', url: 'https://www.youtube.com/embed/_XkgOcvKgtc' }
        ]
      }, {
        year: 2019,
        playlistLink: 'https://www.youtube.com/playlist?list=PLSK6YK5OGX1D-QpVap5C7NlfurQ1dsGbt',
        list: [
          { authors: ['Ismo Aro', 'Pekka Klärck'], title: 'Welcome back! What\'s new since RoboCon 2018?', url: 'https://www.youtube.com/embed/wBhY5Z2RoqQ' },
          { authors: ['Antti Karjalainen'], title: 'The start of the open source RPA movement', url: 'https://www.youtube.com/embed/uv6dvcoxdvU' },
          { authors: ['Juho Saarinen'], title: 'Evolution of Robot Framework user', url: 'https://www.youtube.com/embed/ynUmfWvZxpw' },
          { authors: ['Tatu Aalto'], title: 'Decade with SeleniumLibrary and browsers\' UI automation', url: 'https://www.youtube.com/embed/HVAnWH8t4rU' },
          { authors: ['Brady Hill'], title: 'RobotFramework for Embedded Software Testing', url: 'https://www.youtube.com/embed/0q4-AjqpO9M' },
          { authors: ['Nguyen Huu Bach'], title: 'RENAT - a network testing plugin based on Robot Framework', url: 'https://www.youtube.com/embed/FSjmJLq4S4A' },
          { authors: ['Mikael Siirtola'], title: 'Robot Framework with Patient Monitors: Test Automation at GE Healthcare Finland', url: 'https://www.youtube.com/embed/gxbz5QJWdq4' },
          { authors: ['Päivi Raulamo-Jurvanen'], title: 'Practical Experiences on Evaluating Software Testing Tools', url: 'https://www.youtube.com/embed/2qKa3GEqcvY' },
          { authors: ['Nicholas Bollweg', 'Asko Soukka'], title: 'Robots from Jupyter The Future of Authoring Tests and Tasks', url: 'https://www.youtube.com/embed/rbYF_RmiAR8' },
          { authors: ['Joonas Lehtimäki'], title: 'Dynamically scalable test environment on top of Kubernetes', url: 'https://www.youtube.com/embed/ivLsjU77Q6c' },
          { authors: ['Oleksandr Kravchenko'], title: 'Dynamic Generation of Model Based Testcases Using Listener Interface Version 3', url: 'https://www.youtube.com/embed/qtEYZ5Om1Qk' },
          { title: 'Lightning Talks I', url: 'https://www.youtube.com/embed/ck_zvTq4zz8' },
          { title: 'Lightning Talks II', url: 'https://www.youtube.com/embed/a-27Ot_suEU' },
          { title: 'Lightning Talks III', url: 'https://www.youtube.com/embed/hA99dYnlb-s' },
          { title: 'Lightning Talks IV', url: 'https://www.youtube.com/embed/g98m3XpE8gw' },
          { title: 'Lightning Talks V', url: 'https://www.youtube.com/embed/YJ4FTjxVG3o' },
          { title: 'Lightning Talks VI', url: 'https://www.youtube.com/embed/9HHgrLb41go' },
          { title: 'Lightning Talks VII', url: 'https://www.youtube.com/embed/fb42449bdz0' }
        ]
      }, {
        year: 2018,
        playlistLink: 'https://www.youtube.com/playlist?list=PLSK6YK5OGX1AUdykW4DYwNeSN_6qDE_-z',
        list: [
          { authors: ['Ismo Aro'], title: 'Robot Framework Foundation: Welcome to RoboCon', url: 'https://www.youtube.com/embed/eAG18mS8UXA' },
          { authors: ['Pekka Klärck'], title: 'How Did We Get Here? Where Do We Go Next?', url: 'https://www.youtube.com/embed/6Kb1M3NECic' },
          { authors: ['Régis Déau'], title: 'The Naked Truth About Successful Test Automation Journey', url: 'https://www.youtube.com/embed/Z-9XIGZBf9U' },
          { authors: ['Aldina Codesso-Lipponen'], title: 'Mega Robot Projects - What To Expect', url: 'https://www.youtube.com/embed/KsRP9TsZwEQ' },
          { authors: ['Asko Soukka'], title: 'Robot Framework in Plone CMS Project', url: 'https://www.youtube.com/embed/iJEWobuwPeI' },
          { authors: ['Ed Manlove'], title: 'The Importance of Open Source Communities', url: 'https://www.youtube.com/embed/2GDrtvz_1Ds' },
          { authors: ['Anssi Syrjäsalo'], title: 'Towards Contract - Based API Testing with a New Rest Json Test Library', url: 'https://www.youtube.com/embed/TMU4WCIq3NA' },
          { authors: ['Tatu Aalto'], title: 'Extending SeleniumLibrary 3.0', url: 'https://www.youtube.com/embed/ZPqQ-RozkYQ' },
          { authors: ['Martin Taylor'], title: 'Design Patterns for Efficient Multi-Platform', url: 'https://www.youtube.com/embed/QDaXTkiviT0' },
          { authors: ['Mikko Korpela'], title: 'Parallel test execution with Pabot', url: 'https://www.youtube.com/embed/i0RV6SJSIn8' },
          { title: 'Lightning Talks', url: 'https://www.youtube.com/embed/xb1Udosom6o' }
        ]
      }
    ]
  }
})
