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
import { getKey, getEncryptedVideoIds } from '../static/key'
import CryptoJS from 'crypto-js'

export default {
  components: {
    PageBlock
  },
  data() {
    return {
      showVideos: false,
      videoIds: [],

    }
  },
  computed: {
    pages() {
      return [
        {
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
                    Thank you for everyone who attended Robocon this year! <br><br>We had a total of 675 participants, which was the most attendees in RoboCon history.<br><br>See you next year!
                  </p>
                `
            }
          }
        },
        {
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
        },
        {
          title: "Day-1",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: false,
          user_box_centered: false,
          data: {
            text: {
              twitter: false,
              header: "Program Day 1 (16th March)",
              talks: [
                { authors: ["Joe Colantonio"],
                  title: "Pre-show talk",
                  time: {
                    start: "2021-03-16T10:45:00+0000",
                    end: "2021-03-16T11:00:00+0000"
                  }
                },
                { authors: ["Pekka Klärck", "Ismo Aro", "Ed Manlove"],
                  title: "Keynote: Where's Robot Framework in 2021",
                  description: "In this keynote we are going to take a look at what's happened since RoboCon 2020. Ismo will first give an update related to Robot Framework Foundation, the consortium sponsoring Robot Framework development and also organizing this event. After that Pekka explains some of the cool new features in Robot Framework 4.0 and finally Ed talks about our awesome community and how the ecosystem created by it has been growing.",
                  bio: "Pekka Klärck is a tester, developer and independent consultant from Finland. He is the original author and lead developer of Robot Framework.",
                  secondBio: 'Ismo has been a user of Robot Framework from 2006. During his career at Nokia, he also worked as a Product Owner of Robot Framework. When the Robot Framework Foundation was established in 2015, he has been Chairman of the Board since.',
                  thirdBio: "Ed Manlove has been a part of the Robot Framework community since 2011. He inherited the leadership of the Selenium2Library project from Ryan Tomac sharing it with Jeremy Johnson and recently passing on that role to Tatu Aalto. He is the author of a couple libraries dealing with timing issues within AJAX enabled websites. Ed is currently a Senior Software Test Engineer testing with Robot Framework and taught several teams how to test with Robot Framework. A member of the Selenium user community Ed has presented at the Selenium Conference, ran an unconference focusing on user issues, and volunteered at the conferences (even being a maître d').",
                  imgUrl: 'Pekka_Klarck.jpg',
                  secondImgUrl: 'Ismo_Aro.jpg',
                  thirdImgUrl: 'Ed_Manlove.jpg',
                  keynote: true,
                  time: {
                    start: "2021-03-16T11:00:00+0000",
                    end: "2021-03-16T12:00:00+0000"
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[0] : '',
                  previewImg: 'rf2021.jpeg'
                },

                { authors: ["Hanna Saari", "(Platinum Sponsor Talk)"],
                  title: "Mission Robocon 2021 and beyond",
                  description: "The many ways to use Robot Framework by Knowit.",
                  descriptionExpanded: "<p>Knowit has years of history in using Robot Framework. In this talk you’ll hear about our use cases and diverse ways to use Robot Framework for different business functions. Since work must be fun we took our intern to join as well, let’s see if you can recognize him!</p>",
                  bio: "Hanna is member of the board of Robot Framework Foundation and so she and Knowit invest actively to Robot Framework Community. She is also head of RoboCon orga team. RPA and community is one of her passions.",
                  imgUrl: 'hanna_saari.jpg',
                  time: {
                      start: "2021-03-16T12:00:00+0000",
                      end:   "2021-03-16T12:10:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[31] : '',
                  previewImg: 'knowit.png'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-16T11:00:00+0000",
                    end: "2021-03-16T11:30:00+0000"
                  }
                },

                { authors: ["Mateusz Nojek", "Bartłomiej Hirsz"],
                  title: "How to avoid jail for nasty code?",
                  description: "In Roboland, an ugly code is a crime. It makes people sad, creates bugs, is slower to read and harder to understand. Nobody wants to go to jail, especially unintentionally. Fortunately, there are heroes who can protect innocent citizens from this threat - their names are Robocop and Robotidy.",
                  descriptionExpanded: "This talk is concentrated around concept of writing a clean, beautiful and easy to read code in Robot Framework. During the presentation we will present 2 new tools that can help developers and testers to easily write, maintain and refactor the code. Both tools are configurable which makes them perfect for use in projects where coding guidelines are present but also for the ones where they are going to be established. Robocop and Robotidy are the heroes nobody asked for but everyone needed.",
                  bio: "There is no day where I don't think about how we can do better. The space for improvements is bigger than we think. I believe that the quality of work inside the company is as important as the quality of end-product. I try to enhance the productivity inside the teams as a way to achieve customer's satisfaction.<br><br>I have spent 5 years on automation including 3 on Robot Framework and now I feel I can give something back to the community. I really want to share with you my tips on how to write beautifully in Robot Framework. I also started contributing in open-source projects and RoboCop (which I am a co-author of) is the one I will be concentrating during the talk. See you!",
                  secondBio: "I'm Robot Framework and Python enthusiast who loves to contribute to open source projects. As QA I believe in clean and well tested code :)",
                  imgUrl: 'Mateusz_Nojek.jpg',
                  secondImgUrl: 'Bartlomiej_Hirsz.jpeg',
                  time: {
                    start: "2021-03-16T12:30:00+0000",
                    end: "2021-03-16T13:00:00+0000"
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[1] : '',
                  previewImg: 'robocop.jpeg'
                },


                { authors: ["Many Kasiriha"],
                  title: "Print is (not) dead – Visual Document Testing using Robot Framework",
                  description: "Document Testing in the digital age - is that really a thing? Yes, it is. Because paperless does not mean documentless. Let me show you how we test our documents and printer files visually and by their content - using Robot Framework and our own Visual Document Testing Library.",
                  descriptionExpanded: "<p>Companies rely on correct documents. For us as a global freight forwarder, correct documents are essential. A silly mistake in a document could be awkward – but it might also have legal consequences. Documents in freight forwarding can transfer the ownership of goods from party A to party B. They confirm if cargo has properly been x-rayed for security purposes. They might be barcode labels to identify a package.</p><p>When a major upgrade of our Output & Document Management System was planned, we had to ensure that our documents look the same as before the upgrade. Given the high number of document types, formats, variants, and rules per documents, we quickly realized that we cannot do that manually.</p><p>So, the question was: Buy or build? Due to the high cost and feature overkill of commercial solutions and our good experience with Robot Framework we decided to build a library for Visual Document Tests. Visual Tests mean: The test document is rendered and compared pixelwise to a reference document. However, we realized that this is not enough.</p><p>We wanted to have reports with screenshots highlighting the different areas. We wanted to ignore areas from the comparison based on coordinates or text patterns. We wanted to read barcodes. We wanted to define acceptable ranges for moved text blocks. We wanted to compare text content from a PDF or via OCR. We wanted to check additional data like digital signatures. We wanted to interpret and compare printer files like postscript and pcl. We wanted to have a simple GUI to evaluate the test results. The result was a Robot Framework Library purely based on open source components offering features which can only be found in expensive commercial solutions.</p>",
                  bio: "<p>My name is Many and I work as a Test Manager at Schenker AG (in Germany/Essen) in the Technology Solution Center. Even though I like all aspects of testing - somehow I ended up focusing on the implentation of Test Automation Solutions in different projects. I love my field of work, as the technology around me is changing constantly. And there's always something new to learn. I did my first Kubernetes Deployment recently, and I felt like a little boy starting his C64 for the first time.</p><p>Before I was a father, I liked to play a lot of computer games and played the guitar. But currently my Steam Library is just growing and the guitar is catching dust. On vacations I like to go hiking and just enjoy nature (and a cold beer). Beside that, I (still) like Star Wars and always correct people who say that it is Science Fiction (as it is clearly Science Fantasy).</p>",
                  imgUrl: 'Many_Kasiriha.jpg',
                  time: {
                      start: "2021-03-16T13:00:00+0000",
                      end:   "2021-03-16T13:30:00+0000"
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[2] : '',
                  previewImg: 'print.jpeg'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-16T13:30:00+0000",
                    end: "2021-03-16T14:30:00+0000"
                  }
                },


                { authors: ["Mikko Korpela", "Tatu Aalto", "Kerkko Pelttari", "René Rohner"],
                  title: "RobotFramework Browser Library - Introduction",
                  description: "Bringing RF browser automation to year 2021. We'll cover why Browser was created, why it's being adopted and why you should adopt it. And what makes it cool.",
                  descriptionExpanded: "<p>Robot Framework deserves a browser automation solution that's designed for the 2020s.</p><p>Browser library powered by Playwright provides.<ul><li>Speed, reliability and visibility.</li><li>Conscise assertions.</li><li>Precise and fast browser window and tab control.</li><li>Chainable selector strategies.</li><li>Good shadow DOM support.</li><li>Easy mobile device descriptors.</li><li>Sending HTTP requests.</li></ul></p>",
                  bio: "Mikko Korpela is a consultant and occasional Robot Framework core developer from Reaktor. He was the initiator of Robot Framework Browser and its spiritual father. Mikko also created awesome robot projects like RoboZombie and Pabot.",
                  secondBio: "Tatu Aalto is core team member of Robot Framework Browser library, current lead developer of the SeleniumLibrary and he has been working with Robot Framework since 2011. Tatu has been active community member all these years and 2016 he started as an SeleniumLibrary lead developer.<br><br>Tatu has used Robot Framework in several work places to guide and aid companies in their test automation efforts. Currently he is working at F-Secure as a Software Developer In Test, automating windows antivirus client for business users.",
                  thirdBio: "Kerkko worked as a Reaktor consultant in building the Robot Framework Browser library in summer of 2020. Now he participates through open-source work and creates Robot Framework based RPA-tooling at Robocorp.",
                  fourthBio: "René Rohner is a Senior Consultant for Testing Systems in Germany and vice chairman of the board of Robot Framework Foundation.<br><br>He is member of the Core Team of Robot Framework Browser and author of Robot Framework DataDriver. He is trainer and coach for Keyword-Driven and Behavior-Driven Testing in multiple small and huge projects in Germany.",
                  imgUrl: 'Mikko_Korpela.png',
                  secondImgUrl: "Tatu_Aalto.jpg",
                  thirdImgUrl: "Kerkko_Pelttari.jpeg",
                  fourthImgUrl: "Rene_Rohner.png",
                  time: {
                    start: "2021-03-16T14:30:00+0000",
                    end: "2021-03-16T15:00:00+0000"
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[3] : 'a',
                  previewImg: 'browser.jpeg'
                },


                { authors: ["Diogo Rede"],
                  title: "E-commerce web automation at scale",
                  description: "Imagine developing 5, 10, 15+ e-commerce websites, all with responsive web design and constant evolution. Do you hire 15+ testers or do you call Robot Framework to the rescue? Leveraging Robot Framework advanced features enables easily testing similar websites using a generic set of tests.",
                  descriptionExpanded: "<p>In an e-commerce oriented business where reusability and quick delivery is key, test automation is crucial to reduce release time. E-commerce websites usually follow similar patterns regarding usability and navigation flows, so it is fair to assume that testing different websites will be very similar. Given this assumption, having a common test suite is feasible and so is automating it.In order to make this possible, you can resort to several Robot Framework features, create custom libraries, listeners and pre-run modifiers to take advantage of its full potential and unlock the support needed for your automation requirements.</p><p>In this talk I will reveal some aspects of a selenium generic tests projects and give some hints about the implementation of:<ul><li>Reusable libraries (python keywords and robot test suites)</li><li>Keyword and variable overrides</li><li>Resolution selection (desktop/tablet/mobile)</li><li>Custom Selenium keywords for higher resilience</li><li>Test execution profile mechanism</li><li>Screenshot comparison</li></ul></p>",
                  bio: "With over 5 years of experience in test automation, 4 of which using Robot Framework, I have worked in multiple projects automating tests for web applications, mobile applications, REST APIs and other backend services. Having started off my career as a pure manual tester with very little programming experience, my lazy side figured it was easier to learn how to code and automate my daily tasks, which eventually brought me to the position I assume today as a test automation team lead at Farfetch.",
                  imgUrl: 'Diogo_Rede.jpeg',
                  time: {
                      start: "2021-03-16T15:00:00+0000",
                      end:   "2021-03-16T15:30:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[4] : '',
                  previewImg: 'ecommerce.jpeg'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-16T15:30:00+0000",
                    end: "2021-03-16T16:00:00+0000"
                  }
                },


                { authors: ["Maciej Wiczk"],
                  title: "RfHub2 - new take on RobotFramework asset documentation",
                  description: "The team is using RobotFramework with ease, but over the time, they found out they are reinventing solutions previously made. How to prevent that and focus on what You actually need to develop? To organize themselves, there is a need for interactive documentation. And RfHub2 is the tool they need.",
                  descriptionExpanded: "This talk is going to present <a href='https://github.com/pbylicki/rfhub2'>RfHub2</a>, a new take on solving a problem of collecting documentation and sharing it. Session will start with story that made us create RfHub2, followed by, short, technologies overview. Talk will end with an application demo, showing how to start it and use it.",
                  bio: "Software developer during work, cyclist after hours. Currently working as Senior Software Developer in Big Data department in Nordea Bank in Gdańsk, Poland. Python, RobotFramework and SQL enthusiast.",
                  imgUrl: 'Maciej_Wiczk.jpeg',
                  time: {
                      start: "2021-03-16T16:00:00+0000",
                      end:   "2021-03-16T16:15:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[5] : '',
                  previewImg: 'rfhub2.jpeg'
                },


                { authors: ["Luca Giovenzana"],
                  title: "What's new in RequestsLibrary 0.9",
                  description: "After discussing a lot at RoboCon 2020, collecting feedback from RobotFramework community and with the help of the Italian RobotFramework Meetup, a new RequestsLibrary version is born. In 5 minutes you'll get updated to all changes.",
                  descriptionExpanded: "<ul><li>What guided the development.<li>What is the new keyword structure with session an session-less.</li><li>How the implicit assert mechanism on status works.</li><li>Best practices with nested keywords.</li></ul>",
                  bio: "Luca Giovenzana is an Open Source and Linux passionate guy. Before discovering RobotFramework he built his own Python framework to remotely control and test Linux based firewalls. He has been Head of QA for many years and, together with an amazing team, created a full stack test automation suite with more than 2 thousands test cases. Now he fosters the Quality culture as an Agile Coach. Together with Angelo Caovilla founded the RobotFramework Italian community and Meetup. He contributes to the community and he is the maintainer of RequestsLibrary.",
                  imgUrl: 'Luca_Giovenzana.jpeg',
                  time: {
                      start: "2021-03-16T16:15:00+0000",
                      end:   "2021-03-16T16:30:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[6] : '',
                  previewImg: 'requests.jpeg'
                },


                { authors: ["Patrik Zakovič", "Marián Macek"],
                  title: "The journey of building test automation platform in the bank",
                  description: "From custom web tool for data preparation,  through test automation pipelines to in-house mobile devices farm. Every part of our platform is perfect proof that open-source tools including Robot Framework can be really powerful and useable also in an organization such as the biggest bank in Slovakia.",
                  descriptionExpanded: "At the beginning there was an idea to get rid of routine, repetitive work. From automation of the first test cases on local computers to fully integrated test automation platform used by dozens of users. It includes scheduled pipelines, data preparation web tool, in-house mobile devices farm and other components. For successful implementation of the test platform in the bank with various types of applications it was crucial to find a tool that can automate everything. We have found it in Robot Framework.",
                  bio: "Experienced Test & RPA Developer with economy background. Passionate web developer. As a co-creator of test automation platform in the bank I have been in touch with technologies like Robot Framework, Jenkins and so on. The mentioned tech stack and collaboration on DevOps project has also been a perfect start point for my successful implementation of RPA solution in the same business.<br><br>I believe that routine, repetitive tasks should be automated, best with an open-source stack.",
                  secondBio: 'I am an open minded person with many years of experience in testing of banking systems for two largest banks in Slovakia and Czech Republic. I have strong knowledge in banking business as well as great IT skills. My present career passion is to co-create the test automation platform for Slovenska sporitelna, which is fully based on open source tools. And personally, I\'m very proud, that its part is also the mobile device farm, designed and built from scratch on our own.',
                  imgUrl: 'Patrik_Zakovic.jpeg',
                  secondImgUrl: 'Marian_Macek.jpg',
                  time: {
                      start: "2021-03-16T16:30:00+0000",
                      end:   "2021-03-16T17:00:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[7] : '',
                  previewImg: 'bank.jpeg'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-16T17:00:00+0000",
                    end: "2021-03-16T17:30:00+0000"
                  }
                },


                { authors: ["Simon Meggle"],
                  title: "RobotMK: Testing meets Monitoring",
                  description: "You are running applications? You are monitoring IT infrastructure? You are perhaps overlooking something!",
                  descriptionExpanded: "<p><b>RobotMK</b> is a tool to enrich the Open Source IT infrastructure monitoring solution **CheckMK** with RobotFramework application tests.</p><p>With RobotMK, it is very easy to monitor the overall state as well as the runtimes of suites, tests and keywords with the same monitoring tool as you use for IT infrastructure monitoring (CheckMK). Get notified whenever runtimes go over their allowed threshold and get graphs about the insidious development of step runtimes in the past.</p><p>I'll give a technical overview of CheckMK and RobotMK and show how we migrate the End2End monitoring landscape of a big government application landscape to Robot Framework and RobotMK.</p>",
                  bio: "Simon Meggle works as an independent IT consultant close to Munich and is the founder of ELABIT. His focal points are IT infrastructure monitoring, Datacenter automation, End2End testing. He is the author and maintainer of RobotMK, a <b>Robot Framework integration</b> for <b>Checkmk</b>, written in Python.",
                  imgUrl: 'Simon_Meggle.jpeg',
                  time: {
                      start: "2021-03-16T17:30:00+0000",
                      end:   "2021-03-16T18:00:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[8] : '',
                  previewImg: 'robotmk.jpeg'
                },


                { authors: ["Tuomas Pitkänen"],
                  title: "Robot makes music",
                  description: "Does your robot compose music? RPA can be used to automate and increase productivity of any home studio artist. Roboducer helps by quickly creating drafts of composes and inserting them to sequencer for editing process, or it can search Spotify for relevant playlists for pitching purposes.",
                  descriptionExpanded: "<p>When thinking about music, robots are not the first thing to think about! Still, producing music requires real work and a production pipeline. It's not all just playing and composing. In this talk Tuomas Pitkänen goes through his own music production pipeline and how robots help him in turning up productivity in a creative process.</p><p>A robot, named Roboducer, is used to automate production process. In the beginning it creates demo tracks. Producer can order multiple demos at a time, stating wanted genre, instruments to use and so on. Roboducer produces demos with midi library and delivers demos for review. After review, producer can select accepted demos for further processing. Roboducer will then insert selected demos to a sequencer software where editing, adding human touch and post processing will happen.</p><p>Finished tracks can then be automatically uploaded to a vendor portal, or Roboducer can search Spotify playlists suitable for pitching. Spotify lists can be searched based on similarity of other tracks in lists. This is a task that has been largely manual work earlier or limited only to already known lists.</p>",
                  bio: "<p>Tuomas Pitkänen has a long history in music business and past 7 years he has worked as a Sounds of Red Bull -artist through Posthouse Tuomi, composing over 100 tracks for Red Bull Media House. Tuomas is co-founder of Posthouse Tuomi which is two person independent music producer studio.</p><p>Tuomas has helped several Finnish trade union processes during corona pandemic spring to keep unemployment benefit application handling in time. Tuomas is influenced by metal music but enjoys also python libraries. Tuomas got passion for robotic process automation when he worked in game industry at Veikkaus Oy.</p><p>Now Tuomas is working as a software robot developer at Rewake Oy and developing state of the art robotic process automation for multiple industries including but not limited to accounting, human resources, trade unions, real estate management.</p><p>Tuomas is looking forward to take RPA to next level with machine learning and AI.</p>",
                  imgUrl: 'Tuomas_Pitkanen.jpeg',
                  time: {
                      start: "2021-03-16T18:00:00+0000",
                      end:   "2021-03-16T18:30:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[9] : '',
                  previewImg: 'robotmusic.jpeg'
                }
              ]
            }
          }
        },
        {
          title: "Day-2",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: false,
          user_box_centered: false,
          data: {
            text: {
              twitter: false,
              header: "Program Day 2 (17th March)",
              talks: [
                { authors: ["Pekka Klärck"],
                  title: "Creating Robot Framework libraries: Why and how?",
                  description: "Robot Framework has rich syntax making it possible to create complex tests or tasks using ready-made libraries. Sometimes complexity grows too much, and it's better to create a custom library and move the logic there. In this presentation we take a look at a somewhat complicated keyword implemented using Robot Framework syntax and discuss why moving such logic into a library is often a good idea. More importantly, I show how to do that in practice and reimplement the keyword in Python explaining all the steps along the way. The presentation is a mini-tutorial that you can either just watch or, if you are interested, follow hands-on so that you create the same library yourself. The presentation isn't too technical, so it is suitable also for non-programmes, but creating the library yourself requires at least some Python knowledge. If you are interested in hands-on work, you can find materials related to the demo as well as instructions how to set it up from <a href='https://github.com/pekkaklarck/robot-libraries-why-and-how/'>https://github.com/pekkaklarck/robot-libraries-why-and-how/</a>.",
                  bio: "Pekka Klärck is a tester, developer and independent consultant from Finland. He is the original author and lead developer of Robot Framework.",
                  imgUrl: 'Pekka_Klarck.jpg',
                  time: {
                      start: "2021-03-17T11:00:00+0000",
                      end:   "2021-03-17T11:30:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[10] : '',
                  previewImg: 'createlib.jpeg'
                },


                { authors: ["Deepak Chourasia"],
                  title: "Robot Framework and Journey from Cathedral to Bazar",
                  description: "We at SAS R&D did a unique and exciting experiment to accelerate our automation velocity. We adopted Bazar Automation Model where each member of the team contributes to test automation irrespective of his role. Robot Framework proved to be an excellent implementation partner for this success story.",
                  descriptionExpanded: "<p>Conventional team structures have cathedral style automation team which is separate from development/testing teams. With limited resources, automation team always feels like a bottleneck and cannot scale their automation velocity. Many places few testing team members also contribute to automation, but still it is not sufficient and scalable with a surge of features. We also had a cathedral style automation model for many years where a dedicated team with few members own the automation tasks. But over the years we realized the drawbacks of this model.</p><p>To address this problem we did a unique experiment. We implemented Bazar Automation Model, where each and every member of the team contributes to automation irrespective of his/her role or designation.</p><p>We also wanted to get away from custom tools created by Cathedral team so that we can reduce the learning curve. We needed a simple but powerful tool which members from all the background can use with least difficulty and learning curve, along with a diverse support for various automation streams. Robot Framework proved to be an excellent implementation partner for Bazar Automation Model.</p><p>Because of simple yet powerful features of robot framework our entire team could become productive with test automation within a sprint and we continued that journey so far for more than an year. As an output we have around 1000+ end-to-end large testcases automated by our entire team so far, which continue to execute daily and uphold our confidence about quality of our application.</p>",
                  bio: "<p>I am Deepak Chourasia, Principal Software Development Engineer In Test at SAS R&D, Pune, India. I have 13+ years of experience with automation development using various tools and technologies. I have worked with 10+ programming languages for various tasks and still continue to learn more. I have worked on design and development of many tools internally for various needs along with couple of automation frameworks developed from scratch.</p><p>Technology is my passion and Quality is my way to express it. I love to interact with like-minded people who are passionate towards technology.</p>",
                  imgUrl: 'Deepak_Chourasia.jpg',
                  time: {
                      start: "2021-03-17T11:30:00+0000",
                      end:   "2021-03-17T12:00:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[11] : '',
                  previewImg: 'bazar.jpeg'
                },

                { authors: ["Antti Karjalainen", "(Platinum Sponsor Talk)"],
                  title: "Robocorp",
                  description: "This talk will introduce you to RoboCorp.",
                  descriptionExpanded: "<p>Why was Robocorp build, how does Robocorp contribute to open-source and the Robocorp ecosystem can be used as developer.</p>",
                  bio: "Founder and CEO of Robocorp, a San Francisco and Helsinki based company that is set out to change the RPA market with open-source technologies. Member of the board at Robot Framework foundation since 2019.",
                  imgUrl: 'Antti_Karjalainen.jpg',
                  time: {
                      start: "2021-03-17T12:00:00+0000",
                      end:   "2021-03-17T12:10:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[30] : '',
                  previewImg: 'robocorp.png'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-17T12:10:00+0000",
                    end: "2021-03-17T12:30:00+0000"
                  }
                },


                { authors: ["Antti Karjalainen"],
                  title: "Open-source stack for RPA",
                  description: "RPA is the fastest-growing area of Robot Framework adoption. To further enable this growth, we present an open-source stack for RPA based on Robot Framework that simplifies the work of a software robot developer.",
                  descriptionExpanded: "<p>At Robocon 2020, the landscape in Robot Framework RPA was described as “a loosely coupled collection of projects, tools, methods, and ways of working.” A year later, we’ve seen fast growth in new projects around Robot Framework, especially its use in RPA. Importantly, we have developed a new standardized way of working for software robot developers that simplifies building RPA solutions with Robot Framework.</p><p>The design of the Open-Source Stack for RPA was driven by two goals:<ol><li>Simplify and streamline the RPA development process and provide a standard template for robots.</li><li>Enable anyone to share and distribute robots seamlessly.</li></ol></p><p>First, we set out to create a developer experience that would be easy and seamless. We wanted to let our developers write automation code without worrying about environment configuration and dependency management so that their experience would feel joyful rather than tedious. When a developer hits the “run” button in VS Code, everything should already be in place.</p><p>Second, we had a vision where you could easily create, ship, and Python-based automation code to target environments in real-time. The automation stack allows anyone to seamlessly share their robots and experiment with robots that have been built by others simply by writing a line on their terminal.</p><p>In this talk, we present the Open-Source Automation stack built on Robot Framework. It creates a unified way of developing robots that can be shared and re-used. With this work, we enable developers to focus on automating instead of configuring.</p>",
                  bio: "Founder and CEO of Robocorp, a San Francisco and Helsinki based company that is set out to change the RPA market with open-source technologies. Member of the board at Robot Framework foundation since 2019.",
                  imgUrl: 'Antti_Karjalainen.jpg',
                  time: {
                      start: "2021-03-17T12:30:00+0000",
                      end:   "2021-03-17T13:00:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[12] : '',
                  previewImg: 'rpastack.jpeg'
                },


                { authors: ["Tuukka Virtanen (Nervanti)"],
                  title: "How to find the best Robot Framework libraries?",
                  description: "Part of Robot Framework's success is the healthy ecosystem of useful Robot Framework libraries. But how do you find these libraries? Most of them are scattered around different websites and there is no central place listing them all. Except now there is, <a href='https://www.roboscripts.org'>Roboscripts.org</a>.",
                  descriptionExpanded: "Finding the most relevant Robot Framework keywords can be a hassle. What keywords should I use in this particular project? Someone has probably solved this same problem before, so why reinvent the wheel? The problem is just finding the right library with the correct keywords. But most of them are scattered around different websites and there is no central place listing them all. So, how do you find those libraries?</p><p>I have started a website Roboscripts.org (https://www.roboscripts.org) to list all the best Robot Framework libraries under the same roof. All the needed library information, like version numbers and all the keywords and their arguments are listed neatly in one place. With an easy search functionality, it's easy to find the keywords and libraries you are looking for.</p><p>In this talk, I would like to start by presenting this problem of locating the correct libraries and continue to talk about Roboscripts.org and how it can help developers to find their libraries faster and easier. I would end the talk with a plea, to send me Robot Framework libraries that could be added to the database.</p>",
                  bio: "<p>Experienced software automation consultant with multiple years of experience in Agile test automation projects. Teaching Robot Framework, DevOps and test automation lessons at Test Automation Academy. A member and a blogger of SogetiLabs innovator network. Building a website Roboscripts.org to gather all the best Robot Framework libraries, scripts and articles in the same place.</p><p>Also, making my own mobile indie game NorseHack for Android (check my Twitter for more information). Also, making my electronic music on Youtube (check channel Nervanti).</p>",
                  imgUrl: 'Tuukka_Virtanen.jpg',
                  time: {
                      start: "2021-03-17T13:00:00+0000",
                      end:   "2021-03-17T13:15:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[13] : '',
                  previewImg: 'bestlibs.jpeg'
                },


                { authors: ["Fabio Zadrozny"],
                  title: "RobotFramework Language Server",
                  description: "Brief introduction to the language server protocol and debug adapter protocol, how they work and how the RobotFramework Language Server and Robocorp Code extensions can be used for RobotFramework development.",
                  descriptionExpanded: "<p>The topics to be covered are:<ul><li>what's the language server protocol</li><li>what's the debug adapter protocol</li><li>an overview of the functionalities of the Robot Framework Language Server</li><li>an overview of the functionalities for creating a Robot Framework project using Robocorp Code</li></ul></p>",
                  bio: "I'm currently the main developer for the RobotFramework Language Server, Robocorp Code, PyDev (Python plugin for Eclipse, also available as an extension for VSCode) and the PyDev Debugger (which is the debugger backend used in PyDev, PyCharm, Visual Studio and VSCode).",
                  imgUrl: 'Fabio_Zadrozny.png',
                  time: {
                      start: "2021-03-17T13:15:00+0000",
                      end:   "2021-03-17T13:30:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[14] : '',
                  previewImg: 'lsp.jpeg'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-17T13:30:00+0000",
                    end: "2021-03-17T14:30:00+0000"
                  }
                },


                { authors: ["Markus Stahl"],
                  title: "How to start with Open Source RPA",
                  description: "'Make' or 'Buy': Typical RPA requires an investment plan, so: BUY, because RPA is new. But is it? In this talk, I'd like to emphasize what is actually 'new' in RPA and share my experience in starting RPA in a company with 'only' what was available - and this MAKE approach fits everywhere.",
                  descriptionExpanded: "",
                  bio: "Markus has 10 years working experience as system administrator, java developer and lean management consultant. Since 2016 he's Automation Engineer for the quality assurance department at Deutsche Post Adress. His favorite tools are Robot Framework, Gitlab and Mattermost. Besides automation his favorite activities are gardening and entertaining his kids.",
                  imgUrl: 'Markus_Stahl.png',
                  time: {
                      start: "2021-03-17T14:30:00+0000",
                      end:   "2021-03-17T15:00:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[15] : '',
                  previewImg: 'howrpa.jpeg'
                },


                { authors: ["Cindy Huffman"],
                  title: "Automating Customer Journeys As UI Acceptance Scenarios",
                  description: "Testers ensure that features are tested in development environments. Outside of these environments, SAS still needs to verify that products run smoothly. User journeys (user scenarios that outline how customers interact with products) can be used as acceptance criteria to make these verifications.",
                  descriptionExpanded: "<p>This talk will cover how a small team of testers automated 15 acceptance scenarios using the Robot Framework. The team was new to automation, and one of their first responsibilities was to find an automation tool. The choice was Robot Framework because it was easy to learn and easy to set up quickly, a large part due to well-written documentation and the community of users.</p><p>The talk will also cover the strategy behind leadership’s decision to adopt user journeys as acceptance criteria and use BDD to communicate the user journeys.</p>",
                  bio: "Cindy Huffman is a Test Automation Engineer at SAS Institute in Cary, North Carolina. She has been with SAS since 1996 and spent most of her career as a User Experience Specialist. She transitioned to test automation using Robot Framework in 2020 and has been hooked ever since. She’s a military brat who attended two elementary schools, two middle schools, and three high schools. She lives in Raleigh, North Carolina with her family, including her two dogs and her cat.",
                  imgUrl: 'Cindy_Huffman.jpeg',
                  time: {
                      start: "2021-03-17T15:00:00+0000",
                      end:   "2021-03-17T15:30:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[16] : '',
                  previewImg: 'customerjourney.jpeg'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-17T15:30:00+0000",
                    end: "2021-03-17T16:00:00+0000"
                  }
                },


                { authors: ["Esko Hannula"],
                  title: "Hyperautomation or hype-automation: the automation landscape of the future",
                  description: "Software automation helped accelerate value delivery and reduce costly work. Now, it is, paradoxically, becoming an expensive bottle-neck itself.",
                  descriptionExpanded: "This presentation discusses the trends in hyper-automation and the drivers behind them, trying to pave the road to the future of software automation.",
                  bio: `Esko Hannula, CEO of Qentinel, is an experienced business leader with a long experience in software and service in general management, R&D and business development positions. Although Esko has never worked in full-time testing roles, software quality, testing, and automation have always been a part of his professional life. For the past many years he has served as the CEO of Qentinel, growing the company to one of the top few QA consultancies in Finland and recently re-shaping it into a SaaS business for test automation. Understanding and communicating the interdepency of software quality and business performance is Esko’s professional passion.<br><br>
                  Esko is known for visionary and sometimes controversial ideas and many perceive him as an irritating besserwisser. In 2017, Esko published a book 'Three Skills of Advantage', that explains his views on how quality creates value. In his spare time, Esko likes wandering around in the woods and developing his crazy ideas.`,
                  imgUrl: 'Esko_Hannula.jpeg',
                  time: {
                      start: "2021-03-17T16:00:00+0000",
                      end:   "2021-03-17T16:30:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[17] : '',
                  previewImg: 'hyper.jpeg'
                },


                { authors: ["Dave Martin"],
                  title: "Zero To Hero In 2 Weeks",
                  description: "I was presented with a huge problem that needed automation. I had heard of Robot Framework, but had no experience with it. I went from no experience with Robot Framework to building a robust, reusable, and scalable automation framework with instant ROI using Robot Framework in 2 weeks. Here's how.",
                  descriptionExpanded: "Getting started with a new tool is sometimes a daunting task. This is the daunting task that faced me as I was presented with a rather big problem that needed an automation solution. In this talk, I will share the process that I used to go from Robot Framework newbie to building automation for a large regression test faster than I could run the test once manually, to what today is a robust, reusable, scalable test automation solution with 25 contributors designing over 50,000 tests and growing.",
                  bio: "I am a seasoned QA professional with over 23 years of experience. My professional experience has been focused on the architecture and implementation of QA automation frameworks (using a wide variety of tools) as well as managing QA and Dev teams. I am passionate about all things QA, automation, process improvement, and customer/client satisfaction. At the end of the day, if I have Wow'ed the client, customer, and/or my team/manager; I have done something right.",
                  imgUrl: 'Dave_Martin.jpeg',
                  time: {
                      start: "2021-03-17T16:30:00+0000",
                      end:   "2021-03-17T17:00:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[18] : '',
                  previewImg: 'zerohero.jpeg'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-17T17:00:00+0000",
                    end: "2021-03-17T17:30:00+0000"
                  }
                },


                { authors: ["Elisabeth Hendrickson"],
                  title: "Keynote: Robot Framework Through the Lens of History",
                  description: "Two decades ago, software development looked very different than it does today. Supposed “best practices” involved document-heavy processes that divided work into phases with testing at the end and performed by a separate QA function that did supposedly “independent” verification and validation. The most commonly used test automation tools of the day were from commercial vendors who mostly sold to executives on the promise of making test automation “easy” through record and playback. This was desirable because the QA group was often so removed from the development effort that they had no access to the source code, and often did not have coding skills. So vendors sold supposedly magic solutions that generally turned out to be hugely expensive with very little return. The frustration, pain, and failures stemming from heavyweight phased software development processes gave rise to Agile. At the same time the frustration and pain stemming from specialized test automation tools that often didn’t play nicely with source control gave rise to a new generation of open source test automation tools. The short lived Agile Alliance program, “AAFTT” became for a very brief time in history a gathering place for people working on this new generation of tools, of which Robot Framework is one. In this talk, we’ll look at the history of test automation tools and why Robot Framework was -- and is -- so successful.",
                  bio: "Elisabeth Hendrickson is an experienced software developer, tester, leader, and executive. She has a track record of creating high functioning organizations and growing strong leadership teams. She co-founded the AAFTT program (with Jennitta Andrea), served on the Agile Alliance board of directors, and received the Agile Alliance's Gordon Pask award in 2010. She is the author of Explore It! from Pragmatic Books. You can find her on Twitter as <a href='https://twitter.com/testobsessed'>@testobsessed</a>",
                  imgUrl: 'elisabeth.jpg',
                  keynote: true,
                  time: {
                      start: "2021-03-17T17:30:00+0000",
                      end:   "2021-03-17T18:30:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[19] : '',
                  previewImg: 'elisabeth.jpeg'
                }
              ]
            }
          }
        },
        {
          title: "Day-3",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: false,
          user_box_centered: false,
          data: {
            text: {
              twitter: false,
              header: "Program Day 3 (18th March)",
              talks: [
                { authors: ["Gojko Adžić"],
                  title: "Keynote: You're testing WHAT?",
                  description: "Gojko presents five universal rules for test automation, that will help you bring continuous integration and testing to the darkest corners of your system. Learn how to wrestle large test suites into something easy to understand, maintain and evolve, at the same time increasing the value from your automated tests. See how to bring aspects that people don't even consider automating, such as layout checks and even video into an automated continuously integrated process.",
                  bio: "Gojko Adžić is a partner at Neuri Consulting LLP. He one of the 2019 AWS Serverless Heroes, the winner of the 2016 European Software Testing Outstanding Achievement Award, and the 2011 Most Influential Agile Testing Professional Award. Gojko’s book Specification by Example won the Jolt Award for the best book of 2012, and his <a href='https://gojko.net/posts.html'>blog</a> won the UK Agile Award for the best online publication in 2010.",
                  imgUrl: 'gojko.jpg',
                  keynote: true,
                  time: {
                      start: "2021-03-18T11:00:00+0000",
                      end:   "2021-03-18T12:00:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[20] : '',
                  previewImg: 'what.jpeg'
                },

                { authors: ["Henri-Terho", "(Platinum Sponsor Talk)"],
                  title: "Qweb launch and history of Qentinel and RFW",
                  description: "Qentinel has had a long past with robot framework and has been involved in its development from the beginning.",
                  descriptionExpanded: "<p>We are now launching our QWeb automation library as open source and giving back to the community!</p>",
                  bio: "Henri Is the R&D Evangelist at Qentinel, working with open source and research communities to make Qentinel Pace known and improve the platform towards being the best place to run RFW on the cloud.  Henri has a background in software engineering and startups and is working on a PhD about software development in startup environmens.",
                  imgUrl: 'Henri-Terho.jpg',
                  time: {
                      start: "2021-03-18T12:00:00+0000",
                      end:   "2021-03-18T12:10:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[32] : '',
                  previewImg: 'qentinel.png'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-18T12:10:00+0000",
                    end: "2021-03-18T12:30:00+0000"
                  }
                },


                { authors: ["Juho Saarinen"],
                  title: "Robot Framework after Jython",
                  description: "Python 2 has been \"dead\" almost year now, and there's no really single \"one way to fit all\" path to continue usage of newer libraries and Robot Framework. At the talk I show some routes out from this issue to continue running of tests and RPA as part of Java application development lifecycle.",
                  descriptionExpanded: "<p>Robot Framework test/RPA execution within Java application lifecycle has been easy, as libraries could have been handled with same mechanism as other dependencies for the project. When end of Python 2 was announced, it was quite clear that some changes are needed. There was a small hope to get some \"Jython replacement\", but that doesn't seem to be happening.</p><p>There are Java-Python possibilities like <a href='https://github.com/graalvm/graalpython'>GraalPython</a>, <a href='http://jpype.sourceforge.net/index.html'>JPype</a> and <a href='https://www.py4j.org/'>Py4J</a>, which approach the matter a bit different way than Jython did. Then there's Docker, which has entered to many development processes allowing to also utilize it easier way.</p><p>At the talk I walk through the options and possibilities, and demo how <a href='https://github.com/robotframework/MavenPlugin'>MavenPlugin</a> and <a href='https://github.com/robotframework/jrobotremoteserver'>jrobotremoteserver</a>help to smoothen the transition to time without Jython.</p>",
                  bio: "Juho has been doing testing since 2005. He is interested of testing and it's efficiency, and eager to make all kind of testings as soon as possible. Juho maintains various java-based RF libraries. His \"normal working day\" to contain also application development and various operations related things in addition to testing.",
                  imgUrl: 'Juho_Saarinen.jpg',
                  time: {
                      start: "2021-03-18T12:30:00+0000",
                      end:   "2021-03-18T13:00:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[21] : '',
                  previewImg: 'jython.jpeg'
                },


                { authors: ["Bartłomiej Hirsz"],
                  title: "New parsing API for Robot Framework - how to create your own tool",
                  description: "What is the connection between fast development of recent RF versions and new parsing API? It makes extending Robot Framework code a lot easier! In this talk I will show what is Robot Framework parsing API, how to use it and how to create your own tool using Robocop and Robotidy as the example.",
                  descriptionExpanded: "New Robot Framework parsing API is great for writing your own tools and scripts for improving your workflow. You can easily read Robot code as Python objects and use them. It's not widely known and this talk will try to clarify how Robot Framework code is parsed and how it is possible to use public API for various small tasks or creating bigger tools like Robocop or Robotidy. ",
                  bio: "I'm Robot Framework and Python enthusiast who loves to contribute to open source projects. As QA I believe in clean and well tested code :) ",
                  imgUrl: 'Bartlomiej_Hirsz.jpeg',
                  time: {
                      start: "2021-03-18T13:00:00+0000",
                      end:   "2021-03-18T13:30:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[22] : '',
                  previewImg: 'parsing.jpeg'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-18T13:30:00+0000",
                    end: "2021-03-18T14:30:00+0000"
                  }
                },


                { authors: ["Tatu Aalto"],
                  title: "PythonLibCore the secret behind SeleniumLibrary",
                  description: "PythonLibCore is the secret behind SeleniumLibrary which eases the implementation of the Robot Framework dynamic library API. PythonLibCore made possible of SeleniumLibrary Plugin API and many other things in the library. This live coding session reveals how PythonLibraryCore can be used.",
                  descriptionExpanded: "The PythonLibCore is behind many libraries, like SeleniumLibrary and Browser library. The purpose of the PythonLibCore is the help the libraries to use the Robot Framework dynamic library API. This live coding demonstrates how PythonLibCore can be used, what kind of benefits it offers by using small custom library build on the stage. It also shows what benefits bigger libraries have gained by using PythonLibCore.",
                  bio: "<p>Tatu Aalto is the current lead developer of the <a href='https://github.com/robotframework/SeleniumLibrary'>SeleniumLibrary</a> and is participating in <a href='https://github.com/MarketSquare/robotframework-browser'>Browser library</a> as one of the core team members. Tatu has been working with Robot Framework since 2011. In the 2011 he was a regular user, by sending many questions and problems to the community. After some time Tatu started to answer questions  send by other users and he did provide his very first pull request to the Robot Framework core in 2012. Tatu has been active community member all these years and 2016 he started as an SeleniumLibrary lead developer.</p><p>Tatu has used the Robot Framework in several work places to to guide and aid companies in their test automation efforts. Currently he is working in F-Secure as a Senior Software Developer In Test, automating windows antivirus client for business users.</p>",
                  imgUrl: 'Tatu_Aalto.jpg',
                  time: {
                      start: "2021-03-18T14:30:00+0000",
                      end:   "2021-03-18T15:00:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[23] : '',
                  previewImg: 'libcore.jpeg'
                },


                { authors: ["Mikko Korpela", "Tatu Aalto", "Kerkko Pelttari", "René Rohner"],
                  title: "RobotFramework Browser library",
                  description: "A deep dive into the new Browser Library.",
                  descriptionExpanded: `<ul>
                  <li>Assertion engine, how to use it for your own library</li>
                  <li>Typing with Enums and TypedDicts and RF 4.0</li>
                  <li>Javascript keywords & plugining</li>
                  <li>Integrating NodeJS <-> Python</li>
                  <li>How to use Browser from Python (without RF)</li></ul>`,
                  bio: "Mikko Korpela is a consultant and occasional Robot Framework core developer from Reaktor. He was the initiator of Robot Framework Browser and its spiritual father. Mikko also created awesome robot projects like RoboZombie and Pabot.",
                  secondBio: "Tatu Aalto is core team member of Robot Framework Browser library, current lead developer of the SeleniumLibrary and he has been working with Robot Framework since 2011. Tatu has been active community member all these years and 2016 he started as an SeleniumLibrary lead developer.<br><br>Tatu has used Robot Framework in several work places to guide and aid companies in their test automation efforts. Currently he is working at F-Secure as a Software Developer In Test, automating windows antivirus client for business users.",
                  thirdBio: "Kerkko worked as a Reaktor consultant in building the Robot Framework Browser library in summer of 2020. Now he participates through open-source work and creates Robot Framework based RPA-tooling at Robocorp.",
                  fourthBio: "René Rohner is a Senior Consultant for Testing Systems in Germany and vice chairman of the board of Robot Framework Foundation.<br><br>He is member of the Core Team of Robot Framework Browser and author of Robot Framework DataDriver. He is trainer and coach for Keyword-Driven and Behavior-Driven Testing in multiple small and huge projects in Germany.",
                  imgUrl: 'Mikko_Korpela.png',
                  secondImgUrl: "Tatu_Aalto.jpg",
                  thirdImgUrl: "Kerkko_Pelttari.jpeg",
                  fourthImgUrl: "Rene_Rohner.png",
                  time: {
                      start: "2021-03-18T15:00:00+0000",
                      end:   "2021-03-18T15:30:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[24] : '',
                  previewImg: 'browser.jpeg'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-18T15:30:00+0000",
                    end: "2021-03-18T16:00:00+0000"
                  }
                },


                { authors: ["Nils Balkow-Tychsen", "Michał Wcisło"],
                  title: "How Kubernetes brings QA and DevOps closer together - A practical approach to DevTestOps",
                  description: "Kubernetes became a key technology for many modern software development teams. We want to show you how it brings QA and DevOps closer together with the help of RF KubeLibrary. It allows you to harden your e2e tests by ensuring the availability and configuration of your system-under-test beforehand.",
                  descriptionExpanded: "<p>Kubernetes, the final frontier.</p><p>These are the voyages of Testers and DevOps Engineers alike.</p><p>It’s a mission to explore strange new technologies.</p><p>To seek out new ways of testing and new roles like DevTestOps.</p><p>To boldly fulfill quality expectations and release schedules, no one has done before.</p><p><b>On a more serious note:</b>By its declarative nature Kubernetes allows bringing testing to the next level. It enables building a holistic approach for Quality Assurance that spans across application, configuration and infrastructure. It can work in both ways, by introducing tests for devops teams and exposing testing teams to platform specifics.</p><p>In this talk we would like to introduce you to the KubeLibrary - RobotFramework library for testing kubernetes. We will explore how it can be used for DevTestOps scenarios by leveraging kubernetes strengths.</p>",
                  bio: "Lead QA Engineer at <a href='https://humanitec.com'>Humanitec</a>. 20 year of experience in software testing through-out different industries like finance, games, IoT and developer platforms. Specializing in test automation for web apps based on microservice architectures.",
                  secondBio: "DevOps engineer at BNY Mellon. During 9 years in IT got a chance to grab experience in different domains of software craft including research, development, QA and operations. Big fan of TDD, DevOps and automation.",
                  imgUrl: 'Nils_Balkow_Tychsen.jpeg',
                  secondImgUrl: 'Michal_Wcislo.jpeg',
                  time: {
                      start: "2021-03-18T16:00:00+0000",
                      end:   "2021-03-18T16:30:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[25] : '',
                  previewImg: 'kube.jpeg'
                },


                { authors: ["Samuel Montgomery-Blinn"],
                  title: "Abusing robotframework-datadriver for fun and profit",
                  description: "After progressing from duplicating test steps to using test templates, you went a step further and starting using CSV files and datadriver. But did you know that datadriver includes a reader_class initialization parameter that you can (ab)use to generate tests from directory listings and REST APIs?",
                  descriptionExpanded: "",
                  bio: "I went from farmer to software engineer thanks to the professors at Purdue University, and though I have had a few dalliances over the wall in development land, the preponderance of my 20+ year career has been in test automation. From C, Perl, TCL and, yes, PHP, to Java, to Python, back somehow to TCL thanks to Jacl, back to Python though actually Jython, I finally caught the One True Religion of Robot Framework and work to spread its gospel. Which leaves me somehow, still, writing a lot of Python and obsessing even more over whitespace.",
                  imgUrl: 'Samuel_Montgomery_Blinn.jpeg',
                  time: {
                      start: "2021-03-18T16:30:00+0000",
                      end:   "2021-03-18T16:45:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[26] : '',
                  previewImg: 'datadriver.jpeg'
                },


                { authors: ["Raphael Roems"],
                  title: "Backend Testing using Robot Framework and SoapUI",
                  description: "Backend testing, which involved data processing, was initiated from a website frontend.",
                  descriptionExpanded: "A test automation implementation was undertaken to reuse existing SoapUI web service tests, also integrating with Robot Framework for test orchestration and parallel testing, to reduce test execution time.",
                  bio: "Raphael Roems is a software testing professional with 15 years experience in IT, of which 10 years have been specifically in software testing. He is currently the Test Automation Lead at TFG (The Foschini Group), and has a keen interest in implementing testing tools and processes. Outside of work he enjoys exercising and the outdoors.",
                  imgUrl: 'Raphael_Roems.jpeg',
                  time: {
                      start: "2021-03-18T16:45:00+0000",
                      end:   "2021-03-18T17:00:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[27] : '',
                  previewImg: 'soap.jpeg'
                },

                { authors: ["Robocon Venue"],
                  title: "Community time",
                  time: {
                    start: "2021-03-18T17:00:00+0000",
                    end: "2021-03-18T17:30:00+0000"
                  }
                },


                { authors: ["Markus Stahl"],
                  title: "robotframework-camunda library: Orchestrating robotic tasks with Camunda",
                  description: "Robot Framework is our favourite tool for automating tasks. Naturally, it requires an orchestrator for triggering executions. Camunda orchestrates process flows and makes processes also visible. With \"robotframework-camunda\" library you can integrate 2 of the greatest open source projects existing.",
                  descriptionExpanded: "",
                  bio: "Markus has 10 years working experience as system administrator, java developer and lean management consultant. Since 2016 he's Automation Engineer for the quality assurance department at Deutsche Post Adress. His favorite tools are Robot Framework, Camunda and Gitlab. Besides automation his favorite activities are gardening and entertaining his kids.",
                  imgUrl: 'Markus_Stahl.png',
                  time: {
                      start: "2021-03-18T17:30:00+0000",
                      end:   "2021-03-18T17:45:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[28] : '',
                  previewImg: 'camunda.jpeg'
                },


                { authors: ["Tommi Oinonen"],
                  title: "What is taking so long?! - An attempt to answer this question",
                  description: "One type of data collected by TestArchiver is the keyword executions trees and statistics on their execution times and occurrences. This is a quick example on how this data can help you to find where to focus on when trying to optimise your test suites.",
                  descriptionExpanded: "When one becomes more familiar with Robot framework, it becomes easier and easier to add layers to you robot code and add complexity there. We know that that complexity in RF should be moved to python as much as possible but that is not always easy. I'll try to show how TestArchiver could really help you there",
                  bio: "Automation expert and toolsmith from Software Automation Labs (SALabs) at Siili.",
                  imgUrl: 'Tommi_Oinonen.png',
                  time: {
                      start: "2021-03-18T17:45:00+0000",
                      end:   "2021-03-18T18:00:00+0000",
                  },
                  videoId: this.videoIds && this.videoIds.length ? this.videoIds[29] : '',
                  previewImg: 'takinglong.jpeg'
                },

                { authors: ["Joe", "Ismo", "Pekka", "Hanna"],
                  title: "That was RoboCon 2021",
                  description: "How was it and what to expect next.",
                  descriptionExpanded: "",
                  time: {
                      start: "2021-03-18T18:00:00+0000",
                      end:   "2021-03-18T18:30:00+0000",
                  }
                },

                { authors: ["imbus"],
                  title: "AFTERPARTY AT ROBOCON",
                  description: `This years afterparty is sponsored by <a href="https://www.imbus.de/en/" target="blank">imbus</a> who create the RoboCon online venue world.`,
                  descriptionExpanded: `
                  <p>
                    The <a href="https://www.imbus.de/en/" target="blank">imbus</a> afterparty will be in Gather on the planets surface.
                    Just take a shuttle down to the party.<br> Bring you own drinks 😉
                  </p>
                  <p>
                    At 23:00 (UTC) we will publicly run the robot script that will fetch the winners of this years RoboCon Contest.
                    You can win a free ticket voucher for next RoboCon 2022.
                  </p>
                  <p>
                    Looking forward to see you there!<br>
                    Your imbus team
                  </p>
                  <div class="col-lg-6 col-md-8 col-sm-10 col-xs-12 mt-2 pr-lg-1 pl-lg-3 pl-md-0 pl-sm-3 p-xs-1">
                    <a href="https://www.imbus.de/en/" target="blank" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjYAAADsCAYAAABnjOxVAAAACXBIWXMAAC4jAAAuIwF4pT92AAAHLmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDUgNzkuMTY0NTkwLCAyMDIwLzEyLzA5LTExOjU3OjQ0ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDEtMjFUMTY6Mjc6NTgrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTAxLTIxVDE2OjMxOjE0KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTAxLTIxVDE2OjMxOjE0KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgyZDgyNWIyLTkyYTAtNDc3Ni1iZjBjLWYwNzc2MmNlNDFjMCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmMzYjVhYjI4LTY1NzEtOTc0Mi04YjVjLTJkYjJkZDEyMWI5YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJlMmM2MzEwLWFkODktNGZhZC1iMjQ1LThiNDhlNjBiNmIxYyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YmUyYzYzMTAtYWQ4OS00ZmFkLWIyNDUtOGI0OGU2MGI2YjFjIiBzdEV2dDp3aGVuPSIyMDIxLTAxLTIxVDE2OjI3OjU4KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjIuMSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyYWE5ZWYwNy1lYjNhLTRjNmItODQ4Yy1jNDJiN2QxMjEyNDUiIHN0RXZ0OndoZW49IjIwMjEtMDEtMjFUMTY6Mjk6MzUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MmQ4MjViMi05MmEwLTQ3NzYtYmYwYy1mMDc3NjJjZTQxYzAiIHN0RXZ0OndoZW49IjIwMjEtMDEtMjFUMTY6MzE6MTQrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFu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" class="img-fluid pb-2 user-image" style="max-height: 100%;"></a>
                  </div>`,
                  time: {
                      start: "2021-03-18T19:00:00+0000",
                      end:   "2021-03-18T24:00:00+0000",
                  },
                  imgUrl: 'imbus.png',
                },

              ]
            }
          }
        },
        {
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
        },
        {
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
                /* "<p>Ever wanted to find out how easy it is to create end to end tests for web applications? Qentinel is now sharing how to create tests on the local environment and showing what kind of advantages can be gained from running those tests in the Qentinel Pace cloud environment.</p><p>In this workshop you will learn how to use Qentinel's libraries, how to deploy those tests to the cloud and how to setup continuous test runs on the qentinel pace platform. You will also learn how to use the libraries as standalone in your application and how it compares to Playwright, Selenium and other leading libraries.</p>", */
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
        },
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
        {
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
        },
        {
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
        }
      ]
    }
  },
  mounted() {
    const params = new URLSearchParams(window.location.search)
    const participant = params.get('participant')
    const token = params.get('token')
    if (!participant || !token) return
    jwt.verify(token, getKey(), (err, decoded) => {
      if (err) return // wrong key
      const { name, exp } = decoded
      if (exp * 1000 < new Date().getTime()) return // expired
      if (name !== participant) return // wrong name
      this.videoIds = getEncryptedVideoIds().map((id) => {
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
