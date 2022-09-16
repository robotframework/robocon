export default {
  intro: {
    title: 'Hello',
    body: `<p>This fall, RoboCon will be a guest at the <span class="color-theme">Software QS-Tag in Frankfurt</span>.</p>
      <p>For the first time, we will have the opportunity to host a one-day RoboCon at the heart of Europe.
      RoboCon will share a conference building with the Software QS-Tag and the exchange with the visitors of
      the QS-Tag will hopefully lead to interesting discussions.</p>
      <p>If you need a hotel room for the nights around RoboCon at the conference hotel,
      please contact <span class="color-theme" style="white-space:nowrap">qs-tag(at)imbus.de</span>.
      We still have a few rooms available.</p>
      <p>As a visitor with a RoboCon ticket, only the RoboCon track is available.
      If you would like to attend RoboCon and the QS-Tag on both days (5 & 6 October),
      including an overnight stay in the conference hotel, please book a ticket for the Software QS-Tag at
      <a href="https://qs-tag.de">qs-tag.de</a></p>
      <p>We look forward to seeing you!</p>`
  },
  talks: {
    title: 'Talks',
    talks: [
      {
        code: 'T1',
        title: '[EN] Welcome RoboCon',
        abstract: `Welcome talk and expert discussion with audience.

In this talk René Rohner will give us an insight view of Robot Framework Foundation and tell us about upcoming features of Robot Framework.

Afterwards we have time for other topics that will be defined by the audience and discussed on stage, where all Speakers are present.
We are also highly interested in new feature requests/ideas and will discuss them on stage.`,
        speakers: [
          {
            code: 'T7BUER',
            name: 'Many Kasiriha',
            avatar: 'https://pretalx.com/media/avatars/portrait_small_m9VY1nS.jpg',
            expanded: false
          },
          {
            code: 'BBBB',
            avatar: 'https://www.qs-tag.de/fileadmin/_processed_/a/0/csm_Nele_Uhlemann_fb892cdfd3.png',
            name: 'Nele Lea Uhlemann',
            expanded: false
          },
          {
            code: 'HTDUSJ',
            avatar: 'https://pretalx.com/media/avatars/Rene_kgG6bhD.png',
            name: 'René Rohner',
            expanded: false
          },
          {
            code: 'CCCC',
            avatar: 'img/mkorpela.jpg',
            name: 'Mikko Korpela',
            expanded: false
          },
          {
            code: 'FUKYZV',
            avatar: 'https://pretalx.com/media/avatars/profielfoto_5Rk8Soh.jpg',
            name: 'Elout van Leeuwen',
            expanded: false
          },
          {
            code: 'AWCN8B',
            avatar: 'https://pretalx.com/media/avatars/Screenshot_2022-03-15_at_16.42.36_VoSJgBl.png',
            name: 'Timo Stordell',
            expanded: false
          }
        ],
        track: null,
        start: '2022-10-05T09:00:00+02:00',
        end: '2022-10-05T10:15:00+02:00',
        room: 1193,
        expanded: false,
        yt_link: null,
        description: ''
      },
      {
        title: {
          en: 'Coffee Break / Community Time'
        },
        start: '2022-10-05T10:15:00+02:00',
        end: '2022-10-05T10:45:00+02:00',
        room: 1193,
        expanded: false,
        yt_link: null,
        speakers: []
      },
      {
        code: 'T2',
        title: '[EN] Using Robot Framework to ensure quality in New Space industry',
        abstract: 'How Robot Framework has been used at ICEYE to ensure quality in New Space industry.',
        speakers: [
          {
            code: 'CCCC',
            avatar: 'img/mkorpela.jpg',
            name: 'Mikko Korpela',
            expanded: false
          }
        ],
        track: null,
        start: '2022-10-05T10:45:00+02:00',
        end: '2022-10-05T11:30:00+02:00',
        room: 1193,
        expanded: false,
        yt_link: null,
        description: `🇬🇧 ICEYE is building a product and running a service at the same time.
Part of the system is also flying 400 to 500 km over us.

Welcome to see a sneak peak in to how testing of this kind of systems is really done and
how Robot Framework fits into the picture.

This talk will cover also some aspects of other tools than Robot Framework.
`
      },
      {
        code: 'T3',
        title: '[EN] How to solve unsolvable non-linear testing pipelines fully open source',
        abstract: 'Unconventional requirement to CI systems need some thinking out of the box. How workflow management Camunda can help to solve complex demands.',
        speakers: [
          {
            code: 'BBBB',
            avatar: 'https://www.qs-tag.de/fileadmin/_processed_/a/0/csm_Nele_Uhlemann_fb892cdfd3.png',
            name: 'Nele Lea Uhlemann',
            expanded: false
          },
          {
            code: 'HTDUSJ',
            avatar: 'https://pretalx.com/media/avatars/Rene_kgG6bhD.png',
            name: 'René Rohner',
            expanded: false
          }
        ],
        track: null,
        start: '2022-10-05T11:40:00+02:00',
        end: '2022-10-05T12:25:00+02:00',
        room: 1193,
        expanded: false,
        yt_link: null,
        description: `🇬🇧 When testing complex and global systems, more and more demands are placed on a CI pipeline.

Conventional solutions like Jenkins or Gitlab reach their limits where it became exciting for us.

The challenge was tests that ran over several days, as the reactions of the system under test could sometimes only be checked the next day or days later. During the execution, different process steps had to be executed repeatedly. Nevertheless, a continuous process flow should be visible and tester should be able to see the state of the pipeline at any time without deeper knowledge of CI systems.

In this talk, Nele Uhlemann and René Rohner will present how complex workflows can be realised unconventionally with open source solutions and how asynchronous tests can be realised with Robot Framework and its APIs in combination with Camunda.`
      },
      {
        code: 'T4',
        title: '[DE] Papierlos, aber nicht ohne Dokumente! Simple Automated Visual Document Testing.',
        abstract: 'Denn papierlos heißt nicht dokumentenlos. Lassen Sie mich Ihnen zeigen, wie wir unsere Dokumente und Druckdateien visuell und inhaltlich prüfe - mit Robot Framework und unserer eigenen Visual Document Testing Library.',
        speakers: [
          {
            code: 'T7BUER',
            name: 'Many Kasiriha',
            avatar: 'https://pretalx.com/media/avatars/portrait_small_m9VY1nS.jpg',
            expanded: false
          }
        ],
        track: null,
        start: '2022-10-05T12:35:00+02:00',
        end: '2022-10-05T13:20:00+02:00',
        room: 1193,
        expanded: false,
        yt_link: null,
        description: `Unternehmen sind auf korrekte Dokumente angewiesen. Für uns als globaler Spediteur sind korrekte Dokumente unerlässlich. Ein dummer Fehler in einem Dokument kann peinlich sein - aber auch rechtliche Konsequenzen haben. Dokumente in der Spedition können das Eigentum an Waren von Partei A auf Partei B übertragen. Sie bestätigen, dass die Fracht zu Sicherheitszwecken ordnungsgemäß geröntgt wurde. Sie können Barcode-Etiketten sein, um ein Paket zu identifizieren.

Als ein größeres Upgrade unseres Output- und Dokumentenmanagementsystems geplant war, mussten wir sicherstellen, dass unsere Dokumente genauso aussehen wie vor dem Upgrade. Angesichts der großen Anzahl von Dokumententypen, -formaten, -varianten und -regeln pro Dokument wurde uns schnell klar, dass wir das nicht manuell machen können.

Die Frage war also: Kaufen oder selbst erstellen? Aufgrund der hohen Kosten und des Funktions-Overkills kommerzieller Lösungen und unserer guten Erfahrungen mit Robot Framework entschieden wir uns, eine Bibliothek für visuelle Dokumententests zu erstellen. Visuelle Tests bedeuten: Das Testdokument wird gerendert und pixelweise mit einem Referenzdokument verglichen. Wir haben jedoch festgestellt, dass dies nicht ausreicht.

Wir wollten Berichte mit Screenshots haben, die die verschiedenen Bereiche hervorheben. Wir wollten Bereiche aus dem Vergleich ausschließen, die auf Koordinaten oder Textmustern basieren. Wir wollten Strichcodes lesen können. Wir wollten akzeptable Bereiche für verschobene Textblöcke definieren. Wir wollten Textinhalte aus einer PDF-Datei oder über OCR vergleichen. Wir wollten zusätzliche Daten wie digitale Signaturen prüfen. Wir wollten Druckerdateien wie Postscript und Pcl interpretieren und vergleichen. Wir wollten eine einfache GUI zur Auswertung der Prüfergebnisse haben. Das Ergebnis war eine Robot Framework Library, die rein auf Open-Source-Komponenten basiert und Funktionen bietet, die nur in teuren kommerziellen Lösungen zu finden sind.`
      },
      {
        title: {
          en: 'Lunch Break / Community Time'
        },
        start: '2022-10-05T13:20:00+02:00',
        end: '2022-10-05T14:40:00+02:00',
        room: 1193,
        expanded: false,
        yt_link: null,
        speakers: []
      },
      {
        code: 'T5',
        title: '[EN] Robot Framework and Browser Library. Open Source Keyword-Driven Testing at its best.',
        abstract: 'In this tutorial René will take you to a journey from the very start with Robot Framework to web automation with Browser library.',
        speakers: [
          {
            code: 'HTDUSJ',
            avatar: 'https://pretalx.com/media/avatars/Rene_kgG6bhD.png',
            name: 'René Rohner',
            expanded: false
          }
        ],
        track: null,
        start: '2022-10-05T14:40:00+02:00',
        end: '2022-10-05T16:00:00+02:00',
        room: 1193,
        expanded: false,
        yt_link: null,
        description: `This Talk should be valuable for beginners of Robot Framework as well as experienced users.

Every example in this tutorial can be easily followed or also tried after RoboCon. The only requirement is a Notebook with web browser and a github.com account.

### About Robot Framework:

Robot Framework is a generic open source automation framework. It can be used for test automation and robotic process automation (RPA).

Robot Framework is supported by Robot Framework Foundation. Many industry-leading companies use the tool in their software development.
Robot Framework is open and extensible. Robot Framework can be integrated with virtually any other tool to create powerful and flexible automation solutions. Robot Framework is free to use without licensing costs.

Robot Framework has an easy syntax, utilizing human-readable keywords. Its capabilities can be extended by libraries implemented with Python, Java or many other programming languages. Robot Framework has a rich ecosystem around it, consisting of libraries and tools that are developed as separate projects.

### About Browser library:

Robot Framework deserves a browser automation solution that's designed for the 2020s.

Browser library powered by Playwright provides.

🚀 Speed, ✅ reliability and 🔬 visibility.

- Conscise assertions.

- Precise and fast browser window and tab control.

- Chainable selector strategies.

- Good shadow DOM support.

- Easy mobile device descriptors.

- Sending HTTP requests.

- many more`
      },
      {
        title: {
          en: 'Coffee Break / Community Time'
        },
        start: '2022-10-05T16:00:00+02:00',
        end: '2022-10-05T16:30:00+02:00',
        room: 1193,
        expanded: false,
        yt_link: null,
        speakers: []
      },
      {
        code: 'T6',
        title: '[EN] My Ultimate Robot Framework Toolbox... These arrows should be in every quiver!',
        abstract: 'Elout gives a demonstration of the most important and helpful tools needed in almost every Robot Framework project.',
        speakers: [
          {
            code: 'FUKYZV',
            avatar: 'https://pretalx.com/media/avatars/profielfoto_5Rk8Soh.jpg',
            name: 'Elout van Leeuwen',
            expanded: false
          }
        ],
        track: null,
        start: '2022-10-05T16:30:00+02:00',
        end: '2022-10-05T17:15:00+02:00',
        room: 1193,
        expanded: false,
        yt_link: null,
        description: `If you have ever thought how to start and what you need, you will find a good starting point here.

More details coming soon...`
      },
      {
        code: 'T7',
        title: '[EN] What makes Robot Framework to stand out?',
        abstract: `I have used Robot Framework a lot in the past, but recently the framework chosen to my project has been different.

On the way, I've started to realise what makes Robot Framework excellent, more than before.`,
        speakers: [
          {
            code: 'AWCN8B',
            avatar: 'https://pretalx.com/media/avatars/Screenshot_2022-03-15_at_16.42.36_VoSJgBl.png',
            name: 'Timo Stordell',
            expanded: false
          }
        ],
        track: null,
        start: '2022-10-05T17:25:00+02:00',
        end: '2022-10-05T18:10:00+02:00',
        room: 1193,
        expanded: false,
        yt_link: null,
        description: `In this presentation, I will highlight the things that makes it stand out from the competition.
The purpose is not to do any boastful ranting (even though I'm tempted) but to go through some facts behind the success.`
      },
      {
        title: {
          en: 'Evening Event / Community Time'
        },
        start: '2022-10-05T19:00:00+02:00',
        end: '2022-10-06T00:00:00+02:00',
        room: 1193,
        expanded: false,
        yt_link: null,
        speakers: []
      }
    ],
    speakers: [
      {
        id: 15344,
        code: 'HTDUSJ',
        public_name: 'René Rohner',
        biography: `René Rohner is a Senior Consultant for Testing Systems, Product Owner of the Value Stream Test Automation at imbus in Germany and Chairman of the board of Robot Framework Foundation.

He is member of the Core Team of Robot Framework Browser and developer of Robot Framework DataDriver. He is trainer and coach for Keyword-Driven Testing in multiple small and huge projects in Germany.`,
        answers: []
      },
      {
        id: 13265,
        code: 'AAAA',
        public_name: 'Prof. Dr. Ayelt Komus',
        biography: `Prof. Dr. Ayelt Komus ist Professor an der Hochschule Koblenz, Vordenker für Management unter Unsicherheit, 80+ Fachpublikationen, 200+ Keynotes/Vorträge, Vielzahl an Studien wie „Status Quo (Scaled) Agile“ seit 2012 mit Scrum.org, IPMA, GPM, VOICE, bitkom, SwissICT u.a.

Weitere Informationen unter
www.komus.de
und
www.process-and-project.net`,
        answers: []
      },
      {
        id: 17004,
        code: 'BBBB',
        public_name: 'Nele Lea Uhlemann',
        biography: 'Nele Uhlemann is a Developer Advocate at Camunda. Her passion is helping the open source community use and understand Camunda’s technologies and build a bridge between business and technical users to leverage the full potential of Process Automation. Nele works as a consultant at Camunda, leading workshops with developers and business users. Therefore, she understands the need to find a common language to enable agility in both domains.',
        answers: []
      },
      {
        id: 14436,
        code: 'FUKYZV',
        public_name: 'Elout van Leeuwen',
        biography: 'Elout is a test automation consultant with Capgemini Netherlands. He is the companies representative with the Robot Framework Foundation and has over 7 years of experience with Robot Framework.',
        answers: []
      },
      {
        id: 15357,
        code: 'T7BUER',
        public_name: 'Many Kasiriha',
        biography: "I'm a Test Manager at DB Schenker and a regular Robot Framework User since 2020.\r\n\r\nI like to help other people getting started with Robot Framework (and Test Automation in general) and I know that it can be overwhelming sometimes.\r\nIn my daily work, I support projects in the setup of their test automation solution - for Web Applications, Desktop Applications, APIs or even Document Tests.\r\n\r\nI'm a believer in *test automation* - but convinced that *testing itself cannot be automated*.",
        answers: []
      },
      {
        id: 15357,
        code: 'CCCC',
        public_name: 'Mikko Korpela',
        biography: `Mikko is a developer and consultant that works with client organisations in various industries and Vice-Chairman of the board of Robot Framework Foundation.

He is also active in Robot Framework community and has participated in development of tools such as Robot Framework, Robot Framework Browser and Pabot.`,
        answers: []
      },
      {
        id: 15420,
        code: 'AWCN8B',
        public_name: 'Timo Stordell',
        biography: `Timo is Lead Consultant, DevOps at Eficode.

Building the future of software development. Passionate about making pipelines fluent.`,
        answers: []
      }
    ]
  },
  sponsors: {
    title: 'Sponsors',
    boxTitle: 'RoboCon 2022 Germany talks are sponsored by these companies',
    tiers: {
      small: '',
      medium: '',
      large: ''
    },
    large: [],
    medium: [],
    small: [
      {
        img: 'camunda.png',
        href: 'https://camunda.com/'
      },
      {
        img: 'capgemini.png',
        href: 'https://www.capgemini.com/nl-nl/'
      },
      {
        img: 'dbschenker.png',
        href: 'https://www.dbschenker.com/'
      },
      {
        img: 'eficode.png',
        href: 'https://www.eficode.com/'
      },
      {
        img: 'imbus.png',
        href: 'https://www.imbus.de/'
      },
      {
        img: 'reaktor.png',
        href: 'https://reaktor.com/'
      }
    ]
  }
}
