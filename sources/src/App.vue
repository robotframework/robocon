<template>
  <div class="row no-gutters">
    <navigation-horizontal :pages="pages.filter(({ hidden }) => !hidden)"/>
    <b-img :src="require('@/assets/img/ROBOTFW_Mark_White_LOW_cropped.png')" class="logo-fixed" alt="Robot Frameworkg logo"/>
    <div class="col-md-12" ref="content" style="width: 100%">
      <app-header/>
      <page-block
        v-for="(page, index) in pages.filter(({ hidden }) => !hidden)"
        :page="page"
        :index="index"
        :key="`${page.title}${index}`"
        :show-videos="showVideos"
        class="pl-md-5 px-lg-2 p-sm-2 p-xs-1 link-fix"
      />
      <app-footer class="mt-3 py-5"/>
    </div>
  </div>
</template>
<script>
import PageBlock from "@/Components/PageBlock.vue"
import moment from "moment-timezone"
import jwt from 'jsonwebtoken'
import { getKey } from '../static/key'
import CryptoJS from 'crypto-js'

export default {
  components: {
    PageBlock
  },
  data() {
    return {
      showVideos: false,
      videoIds: [
        'U2FsdGVkX1/Lq8PE7E0J2NNmGriv/57uj8tArWRK8Gc=',
        'U2FsdGVkX18WJP2YYnGgt7pAsopYVDktFfbLktW/538=',
        'U2FsdGVkX1/ZdbzmrwPSph9DvkZVXdD6vR9HNq4M4Hw=',
        'U2FsdGVkX19R01ALvXm3krU53RuDT3vsR/wcpJbl7BU=',
        'U2FsdGVkX19OVxwa2AYFWOqiai01QYYQDPUx3boUBSw=',
        'U2FsdGVkX19upFwAVqhz2Aff4uFP20KgPGypWitVHyg=',
        'U2FsdGVkX1/R3txRytz3ysyziBD0JndyHJSV0vERKDM=',
        'U2FsdGVkX1+ddWe24UNJaussm8lKWEu54O/7w4F5NRY=',
        'U2FsdGVkX1+f8n2gauRrE13sC2Z8rMCl98AozZ/SjQo=',
        'U2FsdGVkX1+6FQVpmnF9Ib9E1umIAKABE0nZwZPuaQk=',
        'U2FsdGVkX1+dlJ5AvhFfwNPgFj3ZaMHCI7KHRpM3lj4=',
        'U2FsdGVkX19HjgwLFNcrQ4sWrpqAJ4EPxJduDI2dAvk=',
        'U2FsdGVkX191jMUXkGUyrV6FbPaQp6g+nyqoLLXCmS0=',
        'U2FsdGVkX1+iEv7qUy4H0K4/I/tDykQmr07HPOKf3oY=',
        'U2FsdGVkX18DRkGW80gXOB2LcpJX6yv48IyVa8TjNVY=',
        'U2FsdGVkX19YdboACvmPFvPfro5m0cCc2OInwPAIwC8=',
        'U2FsdGVkX1/GhQDMJBVoLJ23YqcXrXAR/r7zSxvQRSE=',
        'U2FsdGVkX192zXkOLBsxMHnhLd7tKhYmK79VibeC22M=',
        'U2FsdGVkX1+0NgUPG32WiExxL0wmeGIArn27m/joLkw=',
        'U2FsdGVkX19EjXuMhRQa30FI2Clxpxc0yzBDdBnPYzE=',
        'U2FsdGVkX18kFJWUOS8eRJl+cRJjyT1J2XggjvSrCaU=',
        'U2FsdGVkX18avkwCdsTPzlUOsGrGl4tcjj8fHmtmTxs=',
        'U2FsdGVkX1+XCg2zJFaM5xXtW61Y5095fpRkqKRbhz0=',
        'U2FsdGVkX1/FU/IfdyyyJO2R/p28IitIYPDRg+nZwzg=',
        'U2FsdGVkX1/UFFUSl32X2uIiUrFG5MQDbMwC+P+Zr98=',
        'U2FsdGVkX1+HuVGIqQmi6CvUkMWg4tGb9UjEe4i4n/8=',
        'U2FsdGVkX1+5XFkwT7p8XKDjddKgzmxrI3/LnaCPUww=',
        'U2FsdGVkX1/pCnmfVogjYqSm6qnAfp2ovRLAvsbAWHY=',
        'U2FsdGVkX1/5o03rYipTonPhF5skH45MkowphJSNqEo=',
        'U2FsdGVkX19PLYJl1FULz2HQWIpphgp2QZzv0yAxsPY=',
        'U2FsdGVkX1+BjN1Nkfn2lhVaFOZ2/vyXN2eJiDPChbs=',
        'U2FsdGVkX1+v9TCpa9XyITljspOWcjqcVv/VAo7lU8g=',
        'U2FsdGVkX1/pa4AnJ5qMpR/sSQnHqLW/SDye7awHBnw='
        ]
    }
  },
  computed: {
    pages() {
      return [
        /* {
          title: "Hello",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: true,
              header: "Hello",
              text:
                `
                  <p class="mb-3">
                    Thank you for everyone who attended RoboCon this year!<br><br>
                    Conference talks and Q&As will be made publicly available in a staggered manner, please check schedule below. If you attended the conference, you will find a link that unlocks all talks right away from your ticket link page.<br><br>
                    We had a total of 675 participants, which was the most attendees in RoboCon history.<br><br>
                    See you next year!
                  </p>
                `
            }
          }
        }, */
        {
          title: "Save The Date",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Save The Date",
              text:
                `
                  <p class="mb-3">
                    RoboCon 2022 planning is underway!<br><br>
                    This year we will be returning to an in-person conference while also streaming live worldwide. Simutaniously held live in Helsinki and broadcast worldwide everyone will have a chance to participate.<br><br>
                    Come and join us!
                  </p>
                `
            }
          }
        },
        {
          title: "Call For Proposals",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Call For Proposals",
              text:
                `
                  <p class="mb-3">
                    RoboCon2022 Call For Proposals is Open!<br><br>
                    We are looking for talk presenters and workshop facilitators. We are accepting submissions for both in-person and remote (pre-recorded) talks.<br><br>
                    If you are interested you may submit a proposal @ <a href='https://cfp.robocon.io/robocon-2022/'>cfp.robocon.io/robocon-2022</a>.
                  </p>
                `
            }
          }
        },
        /* {
          title: "Recording-Tickets",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Recording Ticket",
              text: `
              <div>
                <p>
                All given talks of RoboCon 2021 including Q&A are available as recordings.<br>
                <br>
                If you do not want to wait until all talks are released, you can purchase a recording ticket and watch them directly.<br>
                <br>
                <a href='https://tickets.robotframework.org/2021/1152916/'>
                    RoboCon Recording Tickets
                  </a><br>
                </p>
              </div>`
            }
          }
        }, */
        /* {
          title: "",
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: true,
          data: {
            text: {
              header: "Sponsors",
              twitter: false
            },
            users: [
              {
                title: "Cinia",
                href: "https://ohjelmistokehitys.cinia.fi/",
                img: require("@/assets/img/sponsors/cinia.png")
              },
              {
                title: "Eficode",
                href: "https://www.eficode.com/",
                img: require("@/assets/img/sponsors/eficode.png")
              },
              {
                title: "Gofore",
                href: "https://gofore.com/en/",
                img: require("@/assets/img/sponsors/gofore.png")
              },
              {
                title: "Humanitec",
                href: "https://humanitec.com/",
                img: require("@/assets/img/sponsors/humanitec.png")
              },
              {
                title: "imbus AG",
                href: "https://www.imbus.de/en/",
                img: require("@/assets/img/sponsors/imbus.png")
              },
              {
                title: "Knowit",
                href: "https://www.knowit.eu/",
                img: require("@/assets/img/sponsors/knowit.png")
              },
              {
                title: "Northcode",
                href: "https://www.northcode.fi/",
                img: require("@/assets/img/sponsors/northcode.png")
              },
              {
                title: "Q-factory",
                href: "https://q-factory.fi/en/",
                img: require("@/assets/img/sponsors/q-factory.png")
              },
              {
                title: "Qentinel",
                href: "https://qentinel.com/",
                img: require("@/assets/img/sponsors/qentinel2.png")
              },
              {
                title: "Reaktor",
                href: "https://www.reaktor.com/",
                img: require("@/assets/img/sponsors/reaktor.png")
              },
              {
                title: "Robocorp",
                href: "https://robocorp.com/",
                img: require("@/assets/img/sponsors/robocorp.png")
              },
              {
                title: "Signant Health",
                href: "https://www.signanthealth.com/",
                img: require("@/assets/img/sponsors/signant.png")
              },
              {
                title: "Siili Solutions",
                href: "https://www.siili.com/",
                img: require("@/assets/img/sponsors/siili.png")
              },
              {
                title: "Testimate",
                href: "https://www.testimate.fi/en/",
                img: require("@/assets/img/sponsors/testimate.png")
              },
              {
                title: "Vala",
                href: "https://www.valagroup.com/",
                img: require("@/assets/img/sponsors/vala.png")
              }
            ]
          }
        }, */
        /* {
          title: "Sprints",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Sprints DAY 4 (19TH MARCH)",
              text: `
              <div>
                <p>Date: March 19th, 2021<br>
                Time: <span class="blue">${local_time('2021-03-19T09:00:00+0000')}</span> - <span class="blue">${local_time('2021-03-19T16:00:00+0000')}</span> (${local_tz()})
                <span class="type-small"><span>${utc_time('2021-03-19T09:00:00+0000')}</span> - <span>${utc_time('2021-03-19T16:00:00+0000')}</span> (UTC)</span><br>
                Location:
                  <a href='https://gather.town/app/38f5qjlXAKZ7xIBm/RoboCon'>
                    RoboCon Virtual Venue
                  </a><br>
                    <br>
                    After the main conference we have development sprints. Sprints are for you if you
                    want to contribute to some existing project in Robot Framework ecosystem, have a project or project idea you'd
                    like to work with others, or just want to meet with other Robot Framework users and developers. We'll also have
                    sauna afterwards!<br>
                    <br>
                    Developers will select tasks suitable for new contributors beforehand (typically
                    labeled with <code>good first issue</code> or <code>help wanted</code> in their issue trackers), but participants
                    can obviously select issues they’d like to work with themselves. Many of the tasks are likely to involve coding,
                    but there certainly are also non-coding tasks like testing, documentation and work with infrastructure like CI.
                </p>
                <p>If you are new to contributing to open source, we recommend you to take a look at the
                  <a target='blank' href='https://opensource.guide/how-to-contribute/'>How to Contribute to Open Source</a>
                    guide. Individual
                    projects typically also have their own contribution guidelines you can find via their project pages and may want
                    to study beforehand.<br>
                    <br>
                    <b>Sprints are free of charge and open for everyone</b>, including those not participating
                    the conference itself. Sprint facilities are provided by Robot Framework Foundation.
                    The url is <a target='blank'
                        href='https://gather.town/app/38f5qjlXAKZ7xIBm/RoboCon'>https://gather.town/app/38f5qjlXAKZ7xIBm/RoboCon</a>.<br>
                    <del>Food and drinks will be available.</del> Bring your own food and drinks...</p>
              </div>`
            }
          }
        }, */
        /* {
          title: "Workshops",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: false,
          user_box_centered: false,
          data: {
            text: {
              twitter: false,
              header: "Workshops",
              text: '',
              talks: [
                { header: 'Half-day workshops' },
                {
                  type: "workshop",
                  authors: ["Luca Giovenzana"],
                  title: "Introduction to HTTP and REST API testing",
                  time: {
                      start: "2021-03-15T13:00:00+0000",
                      end:   "2021-03-15T17:00:00+0000",
                  },
                  ticketId: "427332",
                  description: "This workshop is about HTTP api for direct test or as prerequisites for your end to end test automation suite.",
                  descriptionExpanded: "<p>You will learn:<ul><li>how to setup a basic API testing/rpa project using the RequestsLibrary</li><li>how to handle shared session and authentication</li><li>how to validate the response</li><li>what to address with api testing in your test suite</li><li>how to use RF for basic stress tests</li><li>how to use pabot and RequestsLibrary to execute many requests in parallel</li></ul></p><p>We will use the new 0.9 pre-release version and we will talk about the RequestsLibrary development roadmap.</p><p>Most of the workshop is hands on and highly interactive: we will use mob programming techniques.</p>",
                  bio: "Luca Giovenzana is an Open Source and Linux passionate guy. Before discovering RobotFramework he built his own Python framework to remotely control and test Linux based firewalls. He has been Head of QA for many years and, together with an amazing team, created a full stack test automation suite with more than 2 thousands test cases. Now he fosters the Quality culture as an Agile Coach. Together with Angelo Caovilla founded the RobotFramework Italian community and Meetup. He contributes to the community and he is the maintainer of RequestsLibrary.",
                  imgUrl: 'Luca_Giovenzana.jpeg'
                },


                {
                  type: "workshop",
                  authors: ["Joshua Gorospe"],
                  title: "Getting started with the robotframework-appiumlibrary",
                  time: {
                      start: "2021-03-15T22:00:00+0000",
                      end:   "2021-03-16T02:00:00+0000",
                  },
                  ticketId: "427333",
                  description: `<p>
                  This workshop will demonstrate setting up and using the robotframework-appiumlibrary to test iOS and Android apps. This will focus on a beginner audience level.<br>
                  <h3>Summary</h3>
                  The examples and demonstrations in this workshop session will walk a beginner through the following...
                  <ul class="mt-3"><li>Set up Appium and robotframework-appiumlibrary on a new machine.</li><li>Set up iOS simulators on a new machine.</li><li>Set up Android emulators on a new machine.</li><li>Demonstrate basic robotframework-appiumlibrary automation workflow examples.</li><li>Demonstrate robotframework-appiumlibrary examples that utilize PaBot.</li><li>Bonus Content: Demonstrate useful Appium Desktop features.</li><li>Bonus Content: Demonstrate combining Charles Proxy with robotframework-appiumlibrary examples.</li></ul></p><h3>Audience Takeaway:</h3>A Github repo containing all of the examples and the presentation slides. (coming soon... it will be kept here -> <a href="https://github.com/jg8481">https://github.com/jg8481</a>)</p>`,
                  bio: "<p><a href='https://leanpub.com/toolstrategiesforlonetesters'>Currently writing a book.</a></p><p>Currently working on various vulnerability and threat detection products at Secureworks, as a Principal QA Engineer. Was a Test Engineering Lead in <a href='https://koala.io/'>Koala</a> working on web, mobile app, and APIs used for ordering and point-of-sale systems. Was a Senior Test Engineer in Intersection Co. (a Sidewalk Labs and Alphabet owned company) for the Intersection (ICS) Connected Communities Team working on test design and test strategy leadership for several initiatives with Hudson Yards, Related Company, and other clients. I run, monitor, and build the test infrastructure for the ICS (Intersection Consulting & Solutions) Buildkite CI pipelines. I also create and maintain several types of daily tests for the Hudson Yards Technology Platform, a technology platform used to integrate multiple building management systems for security, facial recognition, surveillance, visitor management systems, and building sensor data. I also worked on the Hertz eCommerce Test Tools Team for approximately 5 years.</p><p>I love testing. I research and experiment with software test oracles, machine learning tools, model based test tools, GraphWalker, Kali Linux, Docker security tools, Haskell + Rust + Python + Go-lang + Elixir-lang test tools, Sikuli X IDE, various Robot Framework libraries, Appium, Zapier, Slack + Jenkins integrations with other CI tools (using my own approaches inspired by ChatOps pipeline patterns), headless Firefox Robot Framework scripts using an XVFB library (on Ubuntu), API testing with Robot Framework/Haskell/Rust, researching various test tools for creating cross-platform scalable tests using Docker containers, Kubernetes pods, GCP and AWS. Also created Test Results Metrics dashboards using Robot Framework's results and TestRail.</p>",
                  imgUrl: 'Joshua_Gorospe.png'
                },


                {
                  type: "workshop",
                  authors: ["Pekka Klärck"],
                  title: "Extending Robot Framework with libraries, listeners, and so on",
                  time: {
                      start: "2021-03-15T13:00:00+0000",
                      end:   "2021-03-15T19:00:00+0000",
                  },
                  ticketId: "427334",
                  description: "<p>Deep end workshop.</p>",
                  descriptionExpanded: "<p>Deep end workshop. In this workshop you will learn how to extend Robot Framework using various different interfaces. The first half of the workshop is dedicated to the library API, starting from basics and quickly continuing to more advanced topics like the dynamic library interface (used e.g. by SeleniumLibrary) and automatic argument type conversion. During the second half you will get familiar with other extending and integration possibilities such as the listener API, parsing API, modifying tests dynamically before execution, starting execution programmatically and analyzing results.</p><p>This workshop is for you if you already know basics of using Robot Framework, including basics of writing tests libraries, and want to take your skills to the next level. These skills make it easier to adapt the framework to your own needs in different contexts.</p><p>The workshop is 100% hands-on, no slides, learn-by-doing. In addition to learning from the person who has designed these powerful APIs, you have a change to ask hard questions related Robot Framework from its creator.</p>",
                  bio: "Pekka Klärck is a tester, developer and independent consultant from Finland. He is the original author and lead developer of Robot Framework.",
                  imgUrl: 'Pekka_Klarck.jpg'
                },
                {
                  type: "workshop",
                  authors: ["Tuomas Koukkari", "Antti Heimola"],
                  title: "QWeb - Open sourcing a Robot Framework Library for Web application testing",
                  time: {
                      start: "2021-03-15T10:00:00+0000",
                      end:   "2021-03-15T13:00:00+0000",
                  },
                  ticketId: "427335",
                  description: "One of the main goals of Qentinel this year is to support the community around Robot Framework and to support this effort we are open sourcing our web technologies and libraries. In this workshop we will share how to use them effectively and how to create the most maintainable web tests possible!",
                  descriptionExpanded: `
                    <p>Launch of a new library and techniques to ease up maintenance effort of your web application testing – 18 000 test cases and 14.29% maintenance effort. The workshop is 80% hands-on, just a short introduction of a new library for you to use and a bit of Principles of Design before the hands-on.</p>
                    <h3>Content of the workshop:</h3>
                    <ul><li>QWeb library introduction</li>
                    <li>Principles of Design – how to automate with low maintenance</li>
                    <li>Hands-on - Each section has its material, exercises, and exercise solutions:
                      <ol type="a">
                      <li>Controlling browser</li>
                      <li>Basic interactions</li>
                      <li>Assertions</li>
                      <li>Getting data</li>
                      <li>Advanced clicking</li>
                      <li>Timeouts</li>
                      <li>Anchors</li>
                      <li>Handling Alerts</li>
                      <li>Blocks</li>
                      <li>Table keywords</li>
                      <li>Debugging</li>
                      <li>Settings / Configuration</li>
                      <li>Extending QWeb</li>
                          </ol>
                      </li></ul>
                      <h3>Prerequisites</h3>
                      <ul><li>Setup instructions will be provided by March 10 – ‘pip install qweb’</li>
                      <li>Configure your laptops before the workshop</li></ul>
                      <p>This workshop is for all with some test automation experience, no coding skills needed. The workshop language is English.</p>
                      `,
                  bio: "Tuomas Koukkari is a Product Specialist working at Qentinel. Tuomas is the go to guy for knowledge on how robot framework works at Qentinel and has a long background in software testing from Nokia.",
                  secondBio: "Antti Heimola is an ‘automation of things’ guy with a “whatever can be done, can also be automated” mindset. Along with automation projects and his first continuous delivery system design back in 2003, he has also been working as an SW Developer, QA Manager, and Program Manager, before joining the Robot Framework community in 2011. The very first project with Robot Framework started with a library development on the top of the SeleniumLibrary. The roots of the library which is now called QWeb.",
                  imgUrl: 'tuomas_koukkari.jpg',
                  secondImgUrl: 'antti_heimola.png'
                },
                { type: "workshop", header: 'Full-day workshops', margin: true },
                {
                  type: "workshop",
                  authors: ["Michael Hallik"],
                  title: "A technical introduction to the RF RequestsLibrary - Advanced tips & tricks",
                  time: {
                      start: "2021-03-15T09:00:00+0000",
                      end:   "2021-03-15T18:00:00+0000",
                  },
                  ticketId: "427336",
                  description: `Get down & dirty with the RF RequestsLibrary!
                  This workshop shows how to operate this lib at the lowest, technical level.
                  We will take a deep dive into the lib's inner workings and learn, for instance, how to access the session & response objects directly, to benefit optimally from this library.`,
                  descriptionExpanded: `<p>In this workshop, we will cover everything from creating and maintaining an HTTP session, to validating every aspect of the response and everything in between.</p><h3>Contents:</h3>
                  <ul>
                  <li>Overview HTTP support within the RF ecosystem (all libraries compared).</li>
                  <li>RequestsLibrary: it’s place in a typical RF tool stack (architectural overview).</li>
                  <li>Installing RequestsLibrary.</li>
                  <li>Creating and maintaining an HTTP session with RequestsLibrary.</li>
                  <li>The session object: exposed methods, attributes and how to access them.</li>
                  <li>The session object: various ways to manipulate it (e.g. def headers, cookies).</li>
                  <li>Making HTTP requests with RequestsLibrary (based on our session object).</li>
                  <li>The response object: exposed methods, attributes and how to access them.</li>
                  <li>Validate the response:
                    <ul>
                      <li>status code and message</li>
                      <li>headers</li>
                      <li>cookies</li>
                      <li>the response body</li>
                    </ul>
                  </ul>
                  <h3>Required knowledge:</h3>
                  <ul>
                  <li>Robot Framework - Excellent</li>
                  <li>HTTP concepts (sessions, headers, cookies, etc.) - Good</li>
                  <li>Object oriented programming concepts - Basic</li>
                  </ul>
                  <p>Participants should have a good grasp of HTTP related concepts, such as sessions, methods (verbs/nouns), status codes/messages, headers and cookies. We will work with all of those, and will assume the concepts themselves to be understood.</p><p>Participants should have broad experience/skill wrt to working with Robot Framework. For instance, we will employ dictionaries, list, tuples and use the extended variable syntax and basic convenience libraries such as the Collections library. Participants *must* already know all of these, since learning them obviously is not the goal of the workshop. Too much time spent on these basic concepts will prevent other participants from reaching their learning goals.</p>
                  <p>Basic programming concepts (such as objects, methods, attributes, arguments, return values) should be known as well. Again, we will use these and presume them known by all participants.</p>
                  <h3>Schedule:</h3>
                  Note there will be a one hour break starting at UTC 13:00 with the workshop resuming at UTC 14:00.`,
                  bio: "<p>Michael has been a software tester since 2000, in various roles.</p><p>His first exposure to Robot Framework (and test automation) came as early as 2011. It was love at first sight. Since then he has utilized its unmatched power and versatility within such disparate domains as banking, real estate, insurance and the worlds of CMS, CDP and EDP systems. Just as diverse have been the interfaces that had to be automated against. But regardless whether it were web GUIs, SOAP services, database APIs, REST-APIs, proprietary JAVA APIs, MQ or ILE RPG based mainframe systems: RF and its rich ecosystem always came to the rescue.</p><p>Michael has written extensively about various aspects of working with Robot Framework, in the form of a series of blog posts. He has also created his own series of Robot Framework related workshops, around themes such as the Remote Library Interface, the testing of RESTful JSON APIs or the testing of SOAP services. <a href='https://www.linkedin.com/in/michaelhallik/'>Michael's profile</a></p>",
                  imgUrl: 'Michael-Hallik.jpg'
                },


                {
                  type: "workshop",
                  authors: ["Maria Prokhorova"],
                  title: "Image Library Workshop",
                  time: {
                      start: "2021-03-15T10:00:00+0000",
                      end:   "2021-03-15T18:00:00+0000",
                  },
                  ticketId: "427337",
                  description: "The workshop is aimed to acquaint RobotFramework users with the Image Library. The attendees will learn about the library structure and design, get the detailed explanation about its effective usage and appliance along with an ability to try it practically and with their personal cases.",
                  descriptionExpanded: "<p>Since the new major update of the library will be present soon the workshop is aimed to deep into new updates.</p><p>Along with some theory about the library in the beginning of the workshop we will focus on the specificity of keywords which help to automate almost any kind of tasks requiring only interaction with UI elements. Listeners will practice the keywords right during the workshop.</p><h3>Agenda</h3><ul><li>Introduction lecture</li><li>Keywords and concepts explanation with examples</li><li>Practice section<ul><li>Working in small groups. </li><li>Solving testing tasks with Image Library</li><li>Ideas sharing</li></ul></li><li>Discussion</li></ul><h3>The following concepts of the library will be thoroughly discussed:</h3><br><h3 class='mb-0'>`YAML format`</h3> - To store and organize images entities effectively with the yaml format as a config file for to call them easy in test script.<br><h3 class='mt-2 mb-0'>`Windows`</h3> - What is being understood under 'window' and how to deal with it.<br><h3 class='mt-2 mb-0'>`Templates`</h3> - Detailed explanation of the templates idea as the key concept of the library.<br><h3 class='mt-2 mb-0'>`Images`</h3> - For those who don't need complex templates' structure - automation simply with images is also possible.<br><h3 class='mt-2 mb-0'>`Animations`</h3> - Some keywords to check the animations.<br><h3 class='mt-2 mb-0'>`Buttons`</h3> - New version of Library contains different types of buttons, their settings and ways of implementation. <br><h3 class='mt-2 mb-0'>`Recognition`</h3> - Extracting text information from screen.",
                  bio: "Mobile QA Engineer at Hyundai Mobility Lab. Over 5 years in Test Automtaion. Lead developer of Image Library (RobotFramework)",
                  imgUrl: 'Maria-Prokhorova.jpg'
                },


                {
                  type: "workshop",
                  authors: ["Tatu Aalto", "Ed Manlove"],
                  title: "Advanced SeleniumLibrary and Robot Framework",
                  time: {
                      start: "2021-03-15T14:00:00+0000",
                      end:   "2021-03-15T21:00:00+0000",
                  },
                  ticketId: "427338",
                  description: "Techniques and tooling to ease up web testing and automation by expert developers and maintainer of the SeleniumLibrary. If you need to beef up your Selenium tests, this is the course for you.",
                  descriptionExpanded: "<h3 class='mb-3 mt-2'>Outline/overview of the workshop</h2><h3 class='mb-0 mt-2'>Browser Configuration</h3>We will be taking a look at desired capabilites, Selenium options and Firefox profile. Differences between Open Browser and Create WebDriver keywords will be highlighted. Finally we will build small examples showing how to configure the browser in diffrent situations.<h3 class='mb-0 mt-2'>Advanced Debuging</h3>The course will cover when encountering flaky test(s), where to look and how to stabilise them.<h3 class='mb-0 mt-2'>Parallel Execution</h3>We'll discuss running SeleniumLibrary in parallel with pabot and Selenium grid.<h3 class='mb-0 mt-2'>API</h3>SeleniumLibrary has an public API which allows users to extend on top of the SeleniumLibrary. Here we take a look what is available in the public API.<h3 class='mb-0 mt-2'>Expanding the library</h3>Looking at different pros and cons we will talk about how to extend SeleniumLibrary as well as building a new library and the Plugin API. We will show a small exmample. And we will discuss overriding existing keywords with functionality not covered by Selenium.<h3 class='mb-0 mt-2'>EventFiringWebDriver</h3>Using and abusing EventFiringWebDriver for monitoring events and how they affect the interactions with SUT will be covered.<h3 class='mb-0 mt-2'>Page Objects</h3>What are page objects and where it might be useful.<h3 class='mb-0 mt-2'>Python Page objects verses SeleniumLibrary</h3>Looking inside of a page object library and how to build one.<h3 class='mb-0 mt-2'>Checking for time of tests</h3>We will talk about verifying and reacting to execution times of tests/keywords/suites either via tags or the separate Timer library.<h3 class='mb-0 mt-2'>Using Javascript to interact with SUT</h3>Extending SeleniumLibrary with new keywords where functionality is implemented in Javascript.<h3 class='mt-5'>Learning Outcomes</h2>At the end of the workshop, user should have broad overview of advanced features of SeleniumLibrary, web automation and ways to extend and debug test tooling.<h3 class='mt-5'>Target Audience</h3>This workshop is for people with previous hands on experience with testing in Robot Framework & SeleniumLibrary. Students should already have experience testing web applications, know how to identify locators for webelements and validate those loctors, and feel comfortable working with SeleniumLibrary. Although the course will take a measured pace through the material, students should be prepared for advanced topics that will be thoroughly explained.<br><br>This workshop will be presented in English with two presentors, both who are bi-lingual in Finnish and English.<h3 class='mt-5'>Prerequisites</h3>* All participates will need to bring a laptop preconfigured to the workshop.<br>* Particapte must have access to add and modify software on their laptops.<br>* Detailed setup instructions will be shared couple of weeks before workshop day.<br>* Configure your laptops well before the workshop day<br><br>Any special needs should be requested through the conference organizers, at best two weeks prior to the workshop. We will do our best to accomidate any needs and will communicate back either our ability or inability to meet those needs.",
                  bio: "Tatu Aalto is the current lead developer of the <a href='https://github.com/robotframework/SeleniumLibrary'>SeleniumLibrary</a> and is participating in <a href='https://github.com/MarketSquare/robotframework-browser'>Browser library</a> as one of the core team members. Tatu has been working with Robot Framework since 2011. In the 2011 he was a regular user, by sending many questions and problems to the community. After some time Tatu started to answer questions  send by other users and he did provide his very first pull request to the Robot Framework core in 2012. Tatu has been active community member all these years and 2016 he started as an SeleniumLibrary lead developer.<br>Tatu has used the Robot Framework in several work places to to guide and aid companies in their test automation efforts. Currently he is working in F-Secure as a Senior Software Developer In Test, automating windows antivirus client for business users.",
                  secondBio: `Ed Manlove has been a part of the Robot Framework community since 2011. He inherited the leadership of the Selenium2Library project from Ryan Tomac sharing it with Jeremy Johnson and recently passing on that role to Tatu Aalto. He is the author of a couple libraries dealing with timing issues within AJAX enabled websites. Ed is currently a Senior Software Test Engineer testing with Robot Framework and taught several teams how to test with Robot Framework. A member of the Selenium user community Ed has presented at the Selenium Conference, ran an unconference focusing on user issues, and volunteered at the conferences (even being a maître d').`,
                  imgUrl: 'Tatu_Aalto.jpg',
                  secondImgUrl: 'Ed_Manlove.jpg'
                }
	            ]
            }
          }
        }, */
        /* {
          title: "Sprints",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Sprints",
              text: "<div><p>Date: January 17, 2020<br>Start time: 10:00<br>Location: Eficode, <a href='https://goo.gl/maps/h3FYLAHAW8TCvadX6' target='blank'>Pohjoinen Rautatiekatu 25</a><br><br>After the main conference we still have development sprints on Friday. Sprints are for you if you want to contribute to some existing project in Robot Framework ecosystem, have a project or project idea you'd like to work with others, or just want to meet with other Robot Framework users and developers.<br><br>Sprints are free of charge and open for everyone. No sign-up is needed so you can just pop by, but please bring your conference badge and show it at the door. Joining sprints is possible also if you cannot participate the conference, but please send an email to info@robocon.io beforehand in that case. Lunch and beverages will be provided and we'll also have sauna afterwards!<br><br>Some existing projects that are known to be present at the sprints are listed below. If you have a project to be added to the list, send an email to info@robocon.io or simply come to the sprints and present your project there.<br><br>- <a target='blank' href='https://github.com/robotframework/robotframework'>Robot Framework</a><br>- <a target='blank' href='https://github.com/robotframework/SeleniumLibrary/'>SeleniumLibrary</a><br>- <a target='blank' href='https://robots-from-jupyter.github.io/'>RobotLab</a><br>- <a target='blank' href='https://github.com/Snooz82/robotframework-datadriver'>DataDriver</a><br>- <a target='blank' href='https://github.com/Omenia/robotframework-whitelibrary'>WhiteLibary</a><br>- <a target='blank' href='https://robotframework.org/MavenPlugin/'>MavenPlugin</a> and other Java tooling<br>- <a target='blank' href='https://github.com/bulkan/robotframework-requests'>RequestsLibrary</a><br><br>Project maintainers are advised to add common <code>good first issue</code> and <code>help wanted</code> labels to issues they believe are good for new contributors and to issues they'd especially like someone to help with, respectively. Participants can use these labels to find suitable issues for them, but they are obviously free to work with anything they feel interesting. Many of the tasks are likely to involve coding, but there certainly are also non-coding tasks like testing, documentation and work with infrastructure like CI.</p> <p>If you are new to contributing to open source, we recommend you to take a look at the <a target='blank' href='https://opensource.guide/how-to-contribute/'>How to Contribute to Open Source</a> guide. Individual projects typically also have their own contribution guidelines that you can find via their project pages. We'll also have a dedicated session for new contributors at the sprints.<br><br><p><h3 class='mb-0 mt-4'>ROUGH AGENDA:</h3></p><p>10:00 - Welcome! Introduction to participating projects and tasks they have available.</p> <p>10:30 - Development! Participants can work with tasks they find interesting either alone, in pairs, or in small groups. Project leaders help as much as they can.</p><p>10:30 - Introduction to contributing to open source session for interested new contributors.</p><p>12:30 - Lunch (most likely pizza).</p><p>15:30 - Presenting what has been accomplished.</p> <p>16:00 -  Official program ends. Sauna opens. Coding can continue.</p></div>"
            }
          }
        },
        {
          title: "Arrival",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Arrival",
              text:
                "<div><p>The main conference venue is Bio Rex, <a href='https://goo.gl/maps/gnd4duvnunP2' target='blank'>Mannerheimintie 22-24</a>. Pre-conference workshops are organize at Siili, <a href='https://goo.gl/maps/CPUAifmpZ56sTUaH9' target='blank'>Ruoholahdenkatu 21</a>, and post-conference sprints at Eficode, <a href='https://goo.gl/maps/h3FYLAHAW8TCvadX6' target='blank'>Pohjoinen Rautatiekatu 25</a>.</p><h2 class='no-arrow'>TRANSPORTATION: AIRPORT</h2><p>The distance from Helsinki airport to Bio Rex is 21 km. Trains marked as “I” and “P” go from the airport to Helsinki Central Station. From the Helsinki Central Station it is only 5 minutes' walk to Bio Rex.</p><p>Buses operate between Helsinki airport and Helsinki Central Station. The bus stops for both arriving and departing buses are located in front of the terminals (T1 & T2). Finnair bus goes from airport to Eliel Square and bus nr. 615 goes from airport to Rautatientori. There is a short walk to Bio Rex from both Eliel Square (300 meters) and Rautatientori (350 meters).</p><p>Time estimation for the journey is 40 minutes by bus and about 30-35 minutes by train or taxi. Taxi cost is approximately 40-55 euros depending on the traffic and the taxi company.</p><p>At Helsinki airport there are informative signage for trains, buses and taxis to ensure that you won’t get lost.</p><h2 class='no-arrow'>TRANSPORTATION: RAILWAY STATION</h2><p>Railway station is only 5 minutes’ walk (350 meters) from Bio Rex. To reach Siili's and Eficode's offices you can either walk or go one stop to Kamppi with the metro departing from Railway station.</p><h2 class='no-arrow'>TRANSPORTATION: BUS STATION</h2><p>Intercity bus connections from Kamppi bus station (400 meters away) and bus connections for Helsinki's internal traffic from Rautatientori (350 meters) located close to Helsinki Central Station. Buses to Helsinki Airport leave from Eliel Square (300 meters) and Rautatientori (350 meters).</p></div>"
            }
          }
        },
        {
          title: "Accommodation",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Accommodation",
              text:
                "<div><h2 class='no-arrow'>Hotel deals</h2><p><a href='https://www.sokoshotels.fi/en/helsinki/sokos-hotel-presidentti' target='blank'>Original Sokos Hotel Presidentti</a><br>- Standard single room: 150€ / night<br>- Standard double room: 170€ / night<br>- Breakfast and Wi-Fi included<br>- Promo code will be sent after ticket purchase</p></div>"
            }
          }
        }, */
        /* {
          title: "CoC",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Conference Code of Conduct",
              text:
                "<p>All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following <a href='http://confcodeofconduct.com' target='blank'>code of conduct</a>. Organisers will enforce this code throughout the event. We expect cooperation from all participants to help ensure a safe environment for everybody.<br><br>Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.<br><br>For more detailed code of conduct, see: <a href='http://confcodeofconduct.com' target='blank'>confcodeofconduct.com</a></p>"
            }
          }
        }, */
        /* {
          title: "Previous-talks",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: false,
          user_box_centered: false,
          data: {
            text: {
              twitter: false,
              header: "Previous talks - 2020",
              previousTalks: [
                { authors: ["Jeff King"], title: "ROBOT FRAMEWORK AND THE ONE MAN ROBOT BAND", url: "https://www.youtube.com/embed/0yEnJt6Sf50" },
                { authors: ["Anaïs van Asselt"], title: "IMPLEMENTING A TEST AUTOMATION ARCHITECTURE IN A GOVERNMENT ORGANIZATION", url: "https://www.youtube.com/embed/Asy5xHl0uRA" },
                { authors: ["Antti Karjalainen"], title: "THE OPEN RPA ECOSYSTEM", url: "https://www.youtube.com/embed/cO6FxG-RAtQ" },
                { authors: ["Petteri Mannersalo"], title: "ROBOT FRAMEWORK AS AN ENABLER FOR INTELLIGENT PROCESS AUTOMATION", url: "https://www.youtube.com/embed/ViSKJiuT6xo" },
                { authors: ["Tuomas Lempiäinen"], title: "QA DRIVEN RPA AT VEIKKAUS", url: "https://www.youtube.com/embed/3Drlg1q4fkM" },
                { authors: ["Virpi Luostarinen", "Mikael Siirtola"], title: "RPA ON RAILS: AUTOMATING MANUAL PROCESSES AT VR", url: "https://www.youtube.com/embed/R7bNgxPjDJ4" },
                { authors: ["Kristina Sabotic"], title: "END-TO-END TESTING FOR END-USERS", url: "https://www.youtube.com/embed/qkQpzGA51go" },
                { authors: ["Luca Giovenzana", "Angelo Caovilla"], title: "BEWARE THE BRITTLE DRAGON", url: "https://www.youtube.com/embed/rgpqyPblo28" },
                { title: "Lightning Talks I", url: "https://www.youtube.com/embed/0sKyczF0SDE" },
                { title: "Lightning Talks II", url: "https://www.youtube.com/embed/Xb9npqzJkFY" },
                { title: "Lightning Talks III", url: "https://www.youtube.com/embed/5axgakabN_0" },
                { title: "Lightning Talks IV", url: "https://www.youtube.com/embed/AZOZIW1BJJs" },
                { title: "Lightning Talks V", url: "https://www.youtube.com/embed/G24aU0unvVE" },
                { title: "Lightning Talks VI", url: "https://www.youtube.com/embed/oo11OlAaWWA" },
                { title: "Lightning Talks VII", url: "https://www.youtube.com/embed/7Ks8XSM2Uoc" },
                { title: "Lightning Talks VIII", url: "https://www.youtube.com/embed/jS-HZqLwmIY" },
                { title: "Lightning Talks IX", url: "https://www.youtube.com/embed/HTZ-R3HgByg" },
                { authors: ["Ismo Aro"], title: "Day II", url: "https://www.youtube.com/embed/m1KA3PVukhg" },
                { authors: ["KEYNOTE: Pekka Klärck"], title: "WHAT'S NEW? WHAT'S NEXT? WHO ARE WE?", url: "https://www.youtube.com/embed/DRAu1du3UFU" },
                { authors: ["Akseli Lukkarila"], title: "ACCEPTANCE TESTING A REAL-TIME MUSIC EDUCATION APPLICATION WITH AUDIO", url: "https://www.youtube.com/embed/Fkh-EQ5O7zo" },
                { authors: ["Maria Prokhorova"], title: "NEW IMAGE LIBRARY FOR ADVANCED IMAGE PROCESSING", url: "https://www.youtube.com/embed/AWuh-r-T6Yo" },
                { authors: ["Tatu Aalto"], title: "SELENIUMLIBRARY 4.0: PLUGIN API AND EVENT FIRING WEBDRIVER SUPPORT", url: "https://www.youtube.com/embed/zyNZRTR821Q" },
                { authors: ["René Rohner"], title: "DATADRIVER OR: HOW I LEARNED TO STOP WORRYING AND LOVE OPEN SOURCE", url: "https://www.youtube.com/embed/RtEUr1i4x3s" },
                { authors: ["Tommi Oinonen"], title: "SELF MANAGING TESTING PIPELINES", url: "https://www.youtube.com/embed/W3JUzeV8lp4" },
                { authors: ["Juho Saarinen"], title: "ROBOT FRAMEWORK REMOTE LIBRARY IN PRACTICE (WITH DEMOS)", url: "https://www.youtube.com/embed/B-67yPvMh8Q" },
                { authors: ["Maciej Brzozowski"], title: "MICROSERVICES TESTING USING ARGO: CONTAINER-NATIVE WORKFLOWS FOR KUBERNETES", url: "https://www.youtube.com/embed/xBBTvv4mz0U" },
                { authors: ["Joonas Köppä", "Riku Halonen"], title: "ORCHESTRATING ROBOT FRAMEWORK TEST CONTAINERS AND REMOTE LIBRARIES IN KUBERNETES", url: "https://www.youtube.com/embed/SypNjILTRl0" },
                { title: "Day II - Lightning Talks I", url: "https://www.youtube.com/embed/Yjlsl3eHGMI" },
                { title: "Day II - Lightning Talks II", url: "https://www.youtube.com/embed/jDQWBrYD-w8" },
                { title: "Day II - Lightning Talks III", url: "https://www.youtube.com/embed/_T_PCx-tVFk" },
                { title: "Day II - Lightning Talks IV", url: "https://www.youtube.com/embed/-dBWW_77QG4" },
                { title: "Day II - Lightning Talks V", url: "https://www.youtube.com/embed/TZiJLT1fShk" },
                { title: "Day II - Lightning Talks VI", url: "https://www.youtube.com/embed/_XkgOcvKgtc" }]
            }
          }
        },
        {
          title: "",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: false,
          user_box_centered: false,
          data: {
            text: {
              twitter: false,
              header: "Previous talks - 2019",
              previousTalks: [
                { authors: ["Ismo Aro", "Pekka Klärck"], title: "Welcome back! What's new since RoboCon 2018?", url: "https://www.youtube.com/embed/wBhY5Z2RoqQ" },
                { authors: ["Antti Karjalainen"], title: "The start of the open source RPA movement", url: "https://www.youtube.com/embed/uv6dvcoxdvU" },
                { authors: ["Juho Saarinen"], title: "Evolution of Robot Framework user", url: "https://www.youtube.com/embed/ynUmfWvZxpw" },
                { authors: ["Tatu Aalto"], title: "Decade with SeleniumLibrary and browsers' UI automation", url: "https://www.youtube.com/embed/HVAnWH8t4rU" },
                { authors: ["Brady Hill"], title: "RobotFramework for Embedded Software Testing", url: "https://www.youtube.com/embed/0q4-AjqpO9M" },
                { authors: ["Nguyen Huu Bach"], title: "RENAT - a network testing plugin based on Robot Framework", url: "https://www.youtube.com/embed/FSjmJLq4S4A" },
                { authors: ["Mikael Siirtola"], title: "Robot Framework with Patient Monitors: Test Automation at GE Healthcare Finland", url: "https://www.youtube.com/embed/gxbz5QJWdq4" },
                { authors: ["Päivi Raulamo-Jurvanen"], title: "Practical Experiences on Evaluating Software Testing Tools", url: "https://www.youtube.com/embed/2qKa3GEqcvY" },
                { authors: ["Nicholas Bollweg", "Asko Soukka"], title: "Robots from Jupyter The Future of Authoring Tests and Tasks", url: "https://www.youtube.com/embed/rbYF_RmiAR8" },
                { authors: ["Joonas Lehtimäki"], title: "Dynamically scalable test environment on top of Kubernetes", url: "https://www.youtube.com/embed/ivLsjU77Q6c" },
                { authors: ["Oleksandr Kravchenko"], title: "Dynamic Generation of Model Based Testcases Using Listener Interface Version 3", url: "https://www.youtube.com/embed/qtEYZ5Om1Qk" },
                { title: "Lightning Talks I", url: "https://www.youtube.com/embed/ck_zvTq4zz8" },
                { title: "Lightning Talks II", url: "https://www.youtube.com/embed/a-27Ot_suEU" },
                { title: "Lightning Talks III", url: "https://www.youtube.com/embed/hA99dYnlb-s" },
                { title: "Lightning Talks IV", url: "https://www.youtube.com/embed/g98m3XpE8gw" },
                { title: "Lightning Talks V", url: "https://www.youtube.com/embed/YJ4FTjxVG3o" },
                { title: "Lightning Talks VI", url: "https://www.youtube.com/embed/9HHgrLb41go" },
                { title: "Lightning Talks VII", url: "https://www.youtube.com/embed/fb42449bdz0" }]
            }
          }
        },
        {
          title: "",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: false,
          user_box_centered: false,
          data: {
            text: {
              twitter: false,
              header: "Previous talks - 2018",
              previousTalks: [
                { authors: ["Ismo Aro"], title: "Robot Framework Foundation: Welcome to RoboCon", url: "https://www.youtube.com/embed/eAG18mS8UXA" },
                { authors: ["Pekka Klärck"], title: "How Did We Get Here? Where Do We Go Next?", url: "https://www.youtube.com/embed/6Kb1M3NECic" },
                { authors: ["Régis Déau"], title: "The Naked Truth About Successful Test Automation Journey", url: "https://www.youtube.com/embed/Z-9XIGZBf9U" },
                { authors: ["Aldina Codesso-Lipponen"], title: "Mega Robot Projects - What To Expect", url: "https://www.youtube.com/embed/KsRP9TsZwEQ" },
                { authors: ["Asko Soukka"], title: "Robot Framework in Plone CMS Project", url: "https://www.youtube.com/embed/iJEWobuwPeI" },
                { authors: ["Ed Manlove"], title: "The Importance of Open Source Communities", url: "https://www.youtube.com/embed/2GDrtvz_1Ds" },
                { authors: ["Anssi Syrjäsalo"], title: "Towards Contract - Based API Testing with a New Rest Json Test Library", url: "https://www.youtube.com/embed/TMU4WCIq3NA" },
                { authors: ["Tatu Aalto"], title: "Extending SeleniumLibrary 3.0", url: "https://www.youtube.com/embed/ZPqQ-RozkYQ" },
                { authors: ["Martin Taylor"], title: "Design Patterns for Efficient Multi-Platform", url: "https://www.youtube.com/embed/QDaXTkiviT0" },
                { authors: ["Mikko Korpela"], title: "Parallel test execution with Pabot", url: "https://www.youtube.com/embed/i0RV6SJSIn8" },
                { title: "Lightning Talks", url: "https://www.youtube.com/embed/xb1Udosom6o" },
              ]
            }
          }
        } */
      ]
    }
  },
  mounted() {
    const params = new URLSearchParams(window.location.search)
    const participant = params.get('participant')
    const token = params.get('token')
    if (!participant || !token) return
    jwt.verify(token, getKey(), (err, decoded) => {
      console.log(decoded)
      if (err) return // wrong key
      const { name, exp } = decoded
      if (exp * 1000 < new Date().getTime()) return // expired
      if (name !== participant) return // wrong name
      this.videoIds = this.videoIds.map((id) => {
        const bytes = CryptoJS.AES.decrypt(id, decoded['hash-key'])
        return bytes.toString(CryptoJS.enc.Utf8)
      })
      this.showVideos = true
    })
  }
}

function utc_time(dataTime) {
      const locale = window.navigator.userLanguage || window.navigator.language;
      moment.locale(locale);
      return moment.tz(dataTime, "Africa/Freetown").format("LT");
}
function local_time(dataTime) {
      const locale = window.navigator.userLanguage || window.navigator.language;
      moment.locale(locale);
      return moment.tz(dataTime, moment.tz.guess()).format("LT");
    }
function local_tz() {
  return moment.tz.guess();
}

</script>
