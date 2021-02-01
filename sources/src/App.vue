<template>
  <div class="row no-gutters">
    <navigation-horizontal :pages="pages"/>
    <b-img :src="require('@/assets/img/ROBOTFW_Mark_White_LOW_cropped.png')" class="logo-fixed" alt="Robot Frameworkg logo"/>
    <div class="col-md-12" ref="content" style="width: 100%">
      <app-header/>
      <page-block
        v-for="(page, index) in pages"
        v-bind:page="page"
        v-bind:index="index"
        v-bind:key="index"
        class="pl-md-5 px-lg-2 p-sm-2 p-xs-1 link-fix"
      />
      <app-footer class="mt-3 py-5"/>
    </div>
  </div>
</template>
<script>
import PageBlock from "@/Components/PageBlock.vue"
import moment, { locale } from "moment-timezone"

const clamp = (value, max, min) => Math.min(Math.max(value, min), max)

setTimeout(() => {
  const ticketElm = document.getElementById("ticket")
  window.addEventListener("mousemove", (e) => {
    const { x, y, width, height } = ticketElm.getBoundingClientRect()
    const centerPoint = { x: x + width / 2, y: y + height / 2 }
    const screenSizeScaling = (1 + 1500 / window.innerWidth) / 2
    const degreeX = clamp((e.clientY - centerPoint.y) * -0.016 * screenSizeScaling, 15, -15)
    const degreeY = (e.clientX - centerPoint.x) * 0.016 * screenSizeScaling
    ticketElm.style.transform = `perspective(1000px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`
  })
}, 500)

export default {
  components: {
    PageBlock
  },
  data() {
    return {
      pages: [
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
                  <p>
                    Come, join us for the 4th Annual Robot Framework conference. Through the talks and workshops you will learn from your fellow Robot Framework experts. There will be opportunities to network with users and developers. As this year will be online we are bringing you the hallway conversations right to you. So join us for this exciting gathering!
                  </p>
                  <p>
                    By buying a ticket you are supporting the ongoing development of Robot Framework.
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
                href: "https://www.cinia.fi/",
                img: require("@/assets/img/sponsors/cinia.png")
              },
              {
                title: "Eficode",
                href: "https://www.eficode.com/",
                img: require("@/assets/img/sponsors/eficode.png")
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
                title: "Vala",
                href: "https://www.valagroup.com/",
                img: require("@/assets/img/sponsors/vala.png")
              }
            ]
          }
        },
        {
          title: "Conference",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: false,
          user_box_centered: false,
          data: {
            text: {
              twitter: false,
              header: "Conference Program",
              text: "<p>More will be announced soon!</p>",
              talks: [
                { author: "Pekka Klärck",
                  title: "Where's Robot Framework in 2021",
                  description: "A look at what's new and what's coming next related to Robot Framework itself and the wider ecosystem around it. Co-presented by Ismo Aro.",
                  descriptionExpanded: "In this keynote we are going to take a look at what's happened since RoboCon 2020. Ismo will first give an update related to Robot Framework Foundation, the consortium sponsoring Robot Framework development and also organizing this event. After that Pekka will talk about cool new features in Robot Framework 4.0 as well as what has been happening in the wider Robot Framework ecosystem. After looking at the past and present, we'll talk about the plans for the future.",
                  bio: "Pekka Klärck is a tester, developer and independent consultant from Finland. He is the original author and lead developer of Robot Framework.",
                  imgUrl: 'rf-icon-500-White.png'
                },



                { author: "Mateusz Nojek",
                  title: "How to avoid jail for nasty code?",
                  description: "In Roboland, an ugly code is a crime. It makes people sad, creates bugs, is slower to read and harder to understand. Nobody wants to go to jail, especially unintentionally. Fortunately, there are heroes who can protect innocent citizens from this threat - their names are Robocop and Robotidy.",
                  descriptionExpanded: "This talk is concentrated around concept of writing a clean, beautiful and easy to read code in Robot Framework. During the presentation we will present 2 new tools that can help developers and testers to easily write, maintain and refactor the code. Both tools are configurable which makes them perfect for use in projects where coding guidelines are present but also for the ones where they are going to be established. Robocop and Robotidy are the heroes nobody asked for but everyone needed.",
                  bio: "Coming soon ..",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Many Kasiriha",
                  title: "Print is (not) dead – Visual Document Testing using Robot Framework",
                  description: "Document Testing in the digital age - is that really a thing? Yes, it is. Because paperless does not mean documentless. Let me show you how we test our documents and printer files visually and by their content - using Robot Framework and our own Visual Document Testing Library.",
                  descriptionExpanded: "<p>Companies rely on correct documents. For us as a global freight forwarder, correct documents are essential. A silly mistake in a document could be awkward – but it might also have legal consequences. Documents in freight forwarding can transfer the ownership of goods from party A to party B. They confirm if cargo has properly been x-rayed for security purposes. They might be barcode labels to identify a package.</p><p>When a major upgrade of our Output & Document Management System was planned, we had to ensure that our documents look the same as before the upgrade. Given the high number of document types, formats, variants, and rules per documents, we quickly realized that we cannot do that manually.</p><p>So, the question was: Buy or build? Due to the high cost and feature overkill of commercial solutions and our good experience with Robot Framework we decided to build a library for Visual Document Tests. Visual Tests mean: The test document is rendered and compared pixelwise to a reference document. However, we realized that this is not enough.</p><p>We wanted to have reports with screenshots highlighting the different areas. We wanted to ignore areas from the comparison based on coordinates or text patterns. We wanted to read barcodes. We wanted to define acceptable ranges for moved text blocks. We wanted to compare text content from a PDF or via OCR. We wanted to check additional data like digital signatures. We wanted to interpret and compare printer files like postscript and pcl. We wanted to have a simple GUI to evaluate the test results. The result was a Robot Framework Library purely based on open source components offering features which can only be found in expensive commercial solutions.</p>",
                  bio: "<p>My name is Many and I work as a Test Manager at Schenker AG (in Germany/Essen) in the Technology Solution Center. Even though I like all aspects of testing - somehow I ended up focusing on the implentation of Test Automation Solutions in different projects. I love my field of work, as the technology around me is changing constantly. And there's always something new to learn. I did my first Kubernetes Deployment recently, and I felt like a little boy starting his C64 for the first time.</p><p>Before I was a father, I liked to play a lot of computer games and played the guitar. But currently my Steam Library is just growing and the guitar is catching dust. On vacations I like to go hiking and just enjoy nature (and a cold beer). Beside that, I (still) like Star Wars and always correct people who say that it is Science Fiction (as it is clearly Science Fantasy).</p>",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Kerkko Pelttari",
                  title: "RobotFramework Browser library",
                  description: "Bringing RF browser automation to year 2021. We'll cover why Browser was created, why it's being adopted and why you should adopt it. And what makes it cool.",
                  descriptionExpanded: "Robot Framework deserves a browser automation solution that's designed for the 2020s.

Browser library powered by Playwright provides.

🚀 Speed, ✅ reliability and 🔬 visibility.

    Conscise assertions.
    Precise and fast browser window and tab control.
    Chainable selector strategies.
    Good shadow DOM support.
    Easy mobile device descriptors.
    Sending HTTP requests.

See keyword documentation and our project on Github.

🚀SPEED

Robot Framework Browser is fast! With its direct API to the browsers, designed for high performance testing, fast feedback is now only limited by the speed of the test object.

With its innovative Context concept, a clean browser session is started within a less than 10 milliseconds!

Learn more about Browser/Contexts/Pages.
Browser library is designed to run headless first and brings a ready-to-test docker image to scale your test environments with your needs.

✅RELIABILITY

Wait Until ... and Sleep keywords belong to the past.

The browser library automatically waits for the elements of the page and interacts with them when they are ready for interaction.

Flickering tests that are sometimes PASS and sometimes FAIL are drastically reduced and confidence in test automation increases!

Find real errors instead of fixing your tests...
🔬VISIBILITY

Robot Framework Browser utilizes a JavaScript based technology called Playwright. Playwright connects directly to the browsers API and has full control of the browser and its content. The Users has full access to all JavaScript object of the page and with the Execute JavaScript keyword you can directly manipulate them.

Browser has also access to the Network Traffic between page and server and gives the user the possibility to interact with the server via HTTP calls from the same browser session.

You have never been closer to your test object!

See https://robotframework-browser.org/ for rendered version.
",
                  bio: "Open sourcerer.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Diogo Rede",
                  title: "E-commerce web automation at scale",
                  description: "Imagine developing 5, 10, 15+ e-commerce websites, all with responsive web design and constant evolution. Do you hire 15+ testers or do you call Robot Framework to the rescue? Leveraging Robot Framework advanced features enables easily testing similar websites using a generic set of tests.",
                  descriptionExpanded: "<pI>n an e-commerce oriented business where reusability and quick delivery is key, test automation is crucial to reduce release time. E-commerce websites usually follow similar patterns regarding usability and navigation flows, so it is fair to assume that testing different websites will be very similar. Given this assumption, having a common test suite is feasible and so is automating it.In order to make this possible, you can resorted to several Robot Framework features, create custom libraries, listeners and pre-run modifiers to take advantage of its full potential and unlock the support needed for your automation requirements.</p><p>In this talk I will reveal some aspects of a selenium generic tests projects and give some hints about the implementation of:
<ul><li>Reusable libraries (python keywords and robot test suites)</li>
<li>Keyword and variable overrides</li>
<li>Resolution selection (desktop/tablet/mobile)</li>
<li>Custom Selenium keywords for higher resilience</li>
<li>Test execution profile mechanism</li>
<li>Screenshot comparison</li></ul></p>",
                  bio: "With over 5 years of experience in test automation, 4 of which using Robot Framework, I have worked in multiple projects automating tests for web applications, mobile applications, REST APIs and other backend services. Having started off my career as a pure manual tester with very little programming experience, my lazy side figured it was easier to learn how to code and automate my daily tasks, which eventually brought me to the position I assume today as a test automation team lead at Farfetch.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Maciej Wiczk",
                  title: "RfHub2 - new take on RobotFramework asset documentation",
                  description: "The team is using RobotFramework with ease, but over the time, they found out they are reinventing solutions previously made. How to prevent that and focus on what You actually need to develop? To organize themselves, there is a need for interactive documentation. And RfHub2 is the tool they need.",
                  descriptionExpanded: "This talk is going to present <a href="https://github.com/pbylicki/rfhub2">RfHub2</a>, a new take on solving a problem of collecting documentation and sharing it. Session will start with story that made us create RfHub2, followed by, short, technologies overview. Talk will end with an application demo, showing how to start it and use it.",
                  bio: "Software developer during work, cyclist after hours. Currently working as Senior Software Developer in Big Data department in Nordea Bank in Gdańsk, Poland. Python, RobotFramework and SQL enthusiast.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Luca Giovenzana",
                  title: "What's new in RequestsLibrary 0.9",
                  description: "After discussing a lot at RoboCon 2020, collecting feedback from RobotFramework community and with the help of the Italian RobotFramework Meetup, a new RequestsLibrary version is born.
In 5 minutes you'll get updated to all changes.",
                  descriptionExpanded: "<ul><li>What guided the development.
<li>What is the new keyword structure with session an session-less.</li>
<li>How the implicit assert mechanism on status works.</li>
<li>Best practices with nested keywords.</li></ul>",
                  bio: "I'm an Open Source and Linux passionate guy. I worked for 9 years in a security company www.endian.com that build up from scratch an Open Source Linux distribution. At Endian I discovered RobotFramework but never used since we already have created our own testing framework in python, based on unittest and around fabric library to remotely control via ssh our firewalls. 2 years ago I moved to a shining streaming company www.chili.com where I made up a 7 people QA team and initiated the company to test automation with RobotFramework. The whole team enjoyed RF, me and Angelo attended the 2019 RoboCon edition. Back in Italy we started contributing and founded RobotFramework Italy/Milan Meetup. I'm now an active contributor to RequestsLibrary and I'm very excited about it!",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Patrik Zakovič",
                  title: "The journey of building test automation platform in the bank",
                  description: "From custom web tool for data preparation,  through test automation pipelines to in-house mobile devices farm. Every part of our platform is perfect proof that open-source tools including Robot Framework can be really powerful and useable also in an organization such as the biggest bank in Slovakia.",
                  descriptionExpanded: "At the beginning there was an idea to get rid of routine, repetitive work. From automation of the first test cases on local computers to fully integrated test automation platform used by dozens of users. It includes scheduled pipelines, data preparation web tool, in-house mobile devices farm and other components. For successful implementation of the test platform in the bank with various types of applications it was crucial to find a tool that can automate everything. We have found it in Robot Framework.",
                  bio: "Experienced Test & RPA Developer with economy background. Passionate web developer. As a co-creator of test automation platform in the bank I have been in touch with technologies like Robot Framework, Jenkins and so on. The mentioned tech stack and collaboration on DevOps project has also been a perfect start point for my successful implementation of RPA solution in the same business. I believe that routine, repetitive tasks should be automated, best with an open-source stack.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Simon Meggle",
                  title: "RobotMK: Testing meets Monitoring",
                  description: "You are running applications? You are monitoring IT infrastructure? You are perhaps overlooking something!",
                  descriptionExpanded: "<p><b>RobotMK</b> is a tool to enrich the Open Source IT infrastructure monitoring solution **CheckMK** with RobotFramework application tests.</p><p>With RobotMK, it is very easy to monitor the overall state as well as the runtimes of suites, tests and keywords with the same monitoring tool as you use for IT infrastructure monitoring (CheckMK). Get notified whenever runtimes go over their allowed threshold and get graphs about the insidious development of step runtimes in the past.</p><p>I'll give a technical overview of CheckMK and RobotMK and show how we migrate the End2End monitoring landscape of a big government application landscape to Robot Framework and RobotMK.</p>",
                  bio: "Simon Meggle works as an independent IT consultant close to Munich and is the founder of ELABIT. His focal points are IT infrastructure monitoring, Datacenter automation, End2End testing. He is the author and maintainer of RobotMK, a <b>Robot Framework integration</b> for <b>Checkmk</b>, written in Python.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Tuomas Pitkänen",
                  title: "Robot makes music",
                  description: "Does your robot compose music? RPA can be used to automate and increase productivity of any home studio artist. Roboducer helps by quickly creating drafts of composes and inserting them to sequencer for editing process, or it can search Spotify for relevant playlists for pitching purposes.",
                  descriptionExpanded: "<p>When thinking about music, robots are not the first thing to think about! Still, producing music requires real work and a production pipeline. It's not all just playing and composing. In this talk Tuomas Pitkänen goes through his own music production pipeline and how robots help him in turning up productivity in a creative process.</p><p>A robot, named Roboducer, is used to automate production process. In the beginning it creates demo tracks. Producer can order multiple demos at a time, stating wanted genre, instruments to use and so on. Roboducer produces demos with midi library and delivers demos for review. After review, producer can select accepted demos for further processing. Roboducer will then insert selected demos to a sequencer software where editing, adding human touch and post processing will happen.</p><p>Finished tracks can then be automatically uploaded to a vendor portal, or Roboducer can search Spotify playlists suitable for pitching. Spotify lists can be searched based on similarity of other tracks in lists. This is a task that has been largely manual work earlier or limited only to already known lists.</p>",
                  bio: "<p>Tuomas Pitkänen has a long history in music business and past 7 years he has worked as a Sounds of Red Bull -artist through Posthouse Tuomi, composing over 100 tracks for Red Bull Media House. Tuomas is co-founder of Posthouse Tuomi which is two person independent music producer studio.</p><p>Tuomas has helped several Finnish trade union processes during corona pandemic spring to keep unemployment benefit application handling in time. Tuomas is influenced by metal music but enjoys also python libraries. Tuomas got passion for robotic process automation when he worked in game industry at Veikkaus Oy.</p><p>Now Tuomas is working as a software robot developer at Rewake Oy and developing state of the art robotic process automation for multiple industries including but not limited to accounting, human resources, trade unions, real estate management.</p><p>Tuomas is looking forward to take RPA to next level with machine learning and AI.</p>",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Pekka Klärck",
                  title: "Creating Robot Framework libraries: Why and how?",
                  description: "Robot Framework has rich syntax making it possible to create complex tests or tasks using ready-made libraries. Sometimes complexity grows too much and it's better to create custom libraries and move logic there.",
                  descriptionExpanded: "Robot Framework has rich syntax making it possible to create complex tests or tasks using ready-made libraries. Sometimes complexity grows too much, though, and it's better to create custom libraries and move complex logic into them. In this presentation we'll first see some complicated keywords implemented using Robot Framework syntax and discuss problems in them. After that we'll learn how easy it is to get started writing custom libraries and see how the earlier examples can be simplified by moving the logic to Python based libraries.",
                  bio: "Pekka Klärck is a tester, developer and independent consultant from Finland. He is the original author and lead developer of Robot Framework.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Deepak Chourasia",
                  title: "Robot Framework and Journey from Cathedral to Bazar",
                  description: "We at SAS R&D did a unique and exciting experiment to accelerate our automation velocity. We adopted Bazar Automation Model where each member of the team contributes to test automation irrespective of his role. Robot Framework proved to be an excellent implementation partner for this success story.",
                  descriptionExpanded: "Conventional team structures have cathedral style automation team which is separate from development/testing teams. With limited resources, automation team always feels like a bottleneck and cannot scale their automation velocity. Many places few testing team members also contribute to automation, but still it is not sufficient and scalable with a surge of features.

### Experience with Cathedral
We also had a cathedral style automation model for many years where a dedicated team with few members own the automation tasks. But over the years we realized the drawbacks of this model. Given the limited resources in cathedral team we always had to be dependent on their availability for any automation task, be it developing new automation or a maintenance activity or as simple as troubleshooting a failed execution. So this approach did not prove to be scalable and had large time gaps between development and automation of application features. This used to result in a need of manual testing of sizable chunk, which consumed additional man-hours along with delayed turn-around time. 
Another drawback of this model is the cathedral team members tend to build their own custom automation tools for specific needs because only they are supposed to use those tools. Often these tools are not well designed and need frequent updates, they also have higher learning curve in case of transition.

### Moving to Bazar
To address this problem we did a unique experiment . We implemented Bazar Automation Model, where each and every member of the team contributes to automation irrespective of his/her role or designation. This solved our scalability problem because now we had equal number of hands of all the tasks. We also wanted to get away from custom tools created by Cathedral team so that we can reduce the learning curve.
We needed a simple but powerful tool which members from all the background can use with least difficulty and learning curve, along with a diverse support for various automation streams. Robot Framework proved to be an excellent implementation partner for Bazar Automation Model. We implemented this model for entire department with a strength of 50+ members. In this talk we plan to share our success story of Bazar Automation Model using Robot Framework.

Why Robot Framework
==================
When we started to plan the implementation of team model, biggest hurdle was time management. Different teams have different schedules and priorities. We needed a tool which has small learning curve and less turn-around time, yet it should be powerful enough to cater all diverse requirements for automation. We never wanted to use different tools for different automation areas, we always wanted to use a single tool to keep it simple. Robot Framework proved to have all the qualities we were looking for. Following is a summary of our experience with robot framework:

Easy Syntaxes
------------------
Our team had a mix of people from different technical backgrounds. We had developers who never worked on python or robot framework before but we also had testers who had never worked on any kind of programming before. So robot framework's simple format of writing testcases and keyword was really helpful here. People did not at all feel that they need to learn anything new. People with no programming experience also did not feel any technical complexity. Writing testcases like English sentences was very convenient for everyone. Not just developers and testers, we also had management contribute to test automation in this model, all because of these easy syntaxes.


Ready to use libraries for diverse areas
-----------------------------------------------
Our application has various areas which need diverse automation support, like API automation, UI automation, mobile automation, data processing etc. We were amazed to see support for all types of automation variations under one umbrella, with so many built-in and external libraries available out of the box. Readily available support for various execution and reporting needs was also highly commendable.

Power of programming languages
----------------------------------------
With so simple syntaxes, robot framework has powerful support for writing any custom implementation for specific needs via creating a python library or a remote library in other languages. This was a really great feature for us, because we had multiple such areas where we had to customize and configure our interaction with various third party systems like cloud, messaging queues, sas application etc. Using the same feature we also built a powerful REST automation library for robot framework which we plan to make an opensource soon. Though not entire team contributed to library development, only few people worked on it based on their expertise, but entire team used the generic keywords from these libraries which made their job really easy and they were happy to see how so complex things were available to them as simple parameterized keywords.

Strong Community Support
-----------------------------------
Our entire team was amazed to see such a widespread community actively supporting robot framework. Everyone from the team could easily find answer to their however complex/specific queries just by searching it on google. Team members also got excited by so many available means to connect to robot framework users through slack/google groups.

Execution Specifics
===============
Its been around an year since we implemented team automation model. Though not related to robot framework, but we would like to share our execution specifics with everyone which helped us becomes successful with this model.

### Agile Process
We followed agile process where each team member contributed to test automation each sprint little by little. This really helped us to create a habit of automation rather than considering it as an extra effort. We followed all the agile processes like planning, story creations, scrums, demos, retrospection etc for automation development each sprint.

### Continuous Feedback
We ensured frequent (at least once a day) execution of all the automation which is contributed by each team member on daily basis to ensure the integrated version works fine and get an early feedback in case of any conflicts.

### Share and Reuse
We created a documentation server internally to store documentation of all the keywords contributed by various team members to ensure that nobody duplicates the effort. So we always ensured that we reuse what is shared wherever possible and share what everyone contributes.

Output
======
Because of simple yet powerful features of robot framework our entire team could become productive with test automation within a sprint and we continued that journey so far for more than an year. As an output we have around 1000+ end-to-end large testcases automated by our entire team so far, which continue to execute daily and uphold our confidence about quality of our application. 
Though we cannot quantitatively measure it, but a major output of Bazar model was also to instill a deep sense of ownership about quality of our application in each of the team member's mind, we don't consider this output less than the automation produced.",
                  bio: "I am Deepak Chourasia, Principal Software Development Engineer In Test at SAS R&D, Pune, India. 
I have 13+ years of experience with automation development using various tools and technologies. I have worked with 10+ programming languages for various tasks and still continue to learn more. I have worked on design and development of many tools internally for various needs along with couple of automation frameworks developed from scratch.
Technology is my passion and Quality is my way to express it. I love to interact with like-minded people who are passionate towards technology.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Antti Karjalainen",
                  title: "Open-source stack for RPA",
                  description: "RPA is the fastest-growing area of Robot Framework adoption. To further enable this growth, we present an open-source stack for RPA based on Robot Framework that simplifies the work of a software robot developer.",
                  descriptionExpanded: "At Robocon 2020, the landscape in Robot Framework RPA was described as “a loosely coupled collection of projects, tools, methods, and ways of working.”

A year later, we’ve seen fast growth in new projects around Robot Framework, especially its use in RPA. Importantly, we have developed a new standardized way of working for software robot developers that simplifies building RPA solutions with Robot Framework.

The design of the Open-Source Stack for RPA was driven by two goals:
1. Simplify and streamline the RPA development process and provide a standard template for robots.
2. Enable anyone to share and distribute robots seamlessly.

First, we set out to create a developer experience that would be easy and seamless. We wanted to let our developers write automation code without worrying about environment configuration and dependency management so that their experience would feel joyful rather than tedious. When a developer hits the “run” button in VS Code, everything should already be in place.

Second, we had a vision where you could easily create, ship, and Python-based automation code to target environments in real-time. The automation stack allows anyone to seamlessly share their robots and experiment with robots that have been built by others simply by writing a line on their terminal.

In this talk, we present the Open-Source Automation stack built on Robot Framework. It creates a unified way of developing robots that can be shared and re-used. With this work, we enable developers to focus on automating instead of configuring.
",
                  bio: "Founder and CEO of Robocorp, a San Francisco and Helsinki based company that is set out to change the RPA market with open-source technologies. Member of the board at Robot Framework foundation since 2019.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Tuukka Virtanen (Nervanti)",
                  title: "How to find the best Robot Framework libraries?",
                  description: "Part of Robot Framework's success is the healthy ecosystem of useful Robot Framework libraries. But how do you find these libraries? Most of them are scattered around different websites and there is no central place listing them all. Except now there is, Roboscripts.org(https://www.roboscripts.org).",
                  descriptionExpanded: "Finding the most relevant Robot Framework keywords can be a hassle. What keywords should I use in this particular project? Someone has probably solved this same problem before, so why reinvent the wheel? The problem is just finding the right library with the correct keywords. But most of them are scattered around different websites and there is no central place listing them all. So, how do you find those libraries?

I have started a website Roboscripts.org (https://www.roboscripts.org) to list all the best Robot Framework libraries under the same roof. All the needed library information, like version numbers and all the keywords and their arguments are listed neatly in one place. With an easy search functionality, it's easy to find the keywords and libraries you are looking for.

In this talk, I would like to start by presenting this problem of locating the correct libraries and continue to talk about Roboscripts.org and how it can help developers to find their libraries faster and easier. I would end the talk with a plea, to send me Robot Framework libraries that could be added to the database.",
                  bio: "Experienced software automation consultant with multiple years of experience in Agile test automation projects. Teaching Robot Framework, DevOps and test automation lessons at Test Automation Academy. A member and a blogger of SogetiLabs innovator network. 
 
Building a website Roboscripts.org to gather all the best Robot Framework libraries, scripts and articles in the same place.

Also, making my own mobile indie game NorseHack for Android (check my Twitter for more information).
Also, making my electronic music on Youtube (check channel Nervanti).",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Fabio Zadrozny",
                  title: "RobotFramework Language Server",
                  description: "Brief introduction to the language server protocol and debug adapter protocol, how they work and how the RobotFramework Language Server and Robocorp Code extensions can be used for RobotFramework development."
                  descriptionExpanded: "The topics to be covered are:
- what's the language server protocol
- what's the debug adapter protocol
- an overview of the functionalities of the Robot Framework Language Server
- an overview of the functionalities for creating a Robot Framework project using Robocorp Code
",
                  bio: "I'm currently the main developer for the RobotFramework Language Server, Robocorp Code, PyDev (Python plugin for Eclipse, also available as an extension for VSCode) and the PyDev Debugger (which is the debugger backend used in PyDev, PyCharm, Visual Studio and VSCode).",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Markus Stahl",
                  title: "How to start with Open Source RPA",
                  description: ""Make" or "Buy": Typical RPA requires an investment plan, so: BUY, because RPA is new. But is it? In this talk, I'd like to emphasize what is actually "new" in RPA and share my experience in starting RPA in a company with "only" what was available - and this MAKE approach fits everywhere.",
                  descriptionExpanded: "# Content

## RPA introduction

## Compenents required for RPA
1. Low level technology (programming language, interfaces)
1. Orchestration
1. Execution
1. Peripheries: logging, reporting, monitoring
1. Staff

## Show Case: RPA at Deutsche Post Adress

1. How we realized we already had all RPA components available

## Learnings

1. Cost comparison: MAKE vs. BUY
1. Success factors

## Practice

1. How to apply learnings in your company

## Conclusion

What to make and what to buy",
                  bio: "Markus has 10 years working experience as system administrator, java developer and lean management consultant. Since 2016 he's Automation Engineer for the quality assurance department at Deutsche Post Adress. His favorite tools are Robot Framework, Gitlab and Mattermost. Besides automation his favorite activities are gardening and entertaining his kids.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Cindy Huffman",
                  title: "AUTOMATING CUSTOMER JOURNEYS AS UI ACCEPTANCE SCENARIOS",
                  description: "Testers ensure that features are tested in development environments. Outside of these environments, SAS still needs to verify that products run smoothly. User journeys (user scenarios that outline how customers interact with products) can be used as acceptance criteria to make these verifications.",
                  descriptionExpanded: "In May 2020, executive leadership at SAS Institute asked Research & Development product teams to provide five user journeys that they considered the most critical to their customer experience. These user journeys would describe how the customer interacted with the product through the user interface, the application programming interface (API), or the software development kit (SDK). The user journeys would become acceptance scenarios that would become automated in a new automated testing layer developed outside the product development teams.

These automated tests would run on any deployment environment, at any point of the development process. While the failure of any test would not stop a promotion gate within a CI/CD pipeline, it would provide the status of the product’s critical customer journey at any point in time for a given environment.

This talk will cover how a small team of testers automated 15 acceptance scenarios using the Robot Framework. The team was new to automation, and one of their first responsibilities was to find an automation tool. The choice was Robot Framework because it was easy to learn and easy to set up quickly, a large part due to well-written documentation and the community of users.

The talk will also cover the strategy behind leadership’s decision to adopt user journeys as acceptance criteria and use BDD to communicate the user journeys. In six months, the team was able to 
*          complete the scenarios
*          establish processes for writing BDD and scenario sign-off 
*          create guidelines for file structure and naming conventions for test names, variables, and tags
*          build jobs that created data and folders in test environments
*          create Jenkins jobs to run tests in a container 
*          create reports that contain a variety of metrics  

The automation team includes seven members from the Customer Lifecycle Testing team. The Customer Lifecycle Testing team is responsible for testing the complete lifecycle (deployment to customer usage) throughout the development cycle.

SAS Institute is a private software company based in Cary, North Carolina, that develops analytics software. Our software analyzes, builds, manages, and reports on data. Our customers use our software in various architectural environments, including high-availability, multi-tenancy, and cloud-based Azure, AWS, and our products must be tested thoroughly within these environments.",
                  bio: "Cindy Huffman is a Test Automation Engineer at SAS Institute in Cary, North Carolina. She has been with SAS since 1996 and spent most of her career as a User Experience Specialist. She transitioned to test automation using Robot Framework in 2020 and has been hooked ever since. She’s a military brat who attended two elementary schools, two middle schools, and three high schools. She lives in Raleigh, North Carolina with her family, including her two dogs and her cat.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "esko.hannula@qentinel.com",
                  title: "Hyperautomation or hype-automation: the automation landscape of the future",
                  description: "Software automation helped accelerate value delivery and reduce costly work. Now, it is, paradoxically, becoming an expensive bottle-neck itself.

This presentation discusses the trends in hyper-automation and the drivers behind them, trying to pave the road to the future of software automation.",
                  descriptionExpanded: "
The humankind is increasingly dependent on their information systems and continuously innovating to create more value with software at an ever-accelerating pace. Applications of software automation, such as test automation and robotic process automation, are not just nerdy phenomena anymore. Software automation, or lack of it, affects cost of software, release pace, and software quality to the extent that can be seen also in the business performance. 

What will the future of software automation landscape look like and how can the community can best serve the industry? Is hyperautomation something real or just hype?

Phenomena, such as DevOps, API economy, open ecosystems, and Artificial Intelligence, have enabled accelerated innovation and value delivery. Now they are coming together in a way that is, again, likely to radically shape the software industry.  

Can current software automation technologies and methods keep up with the pace? Majority of the software that enables digital business processes are still being tested manually or with rudimentary test automation. Meanwhile, robotic process automation is used to patch the wounds of digital business processes. Several forces are driving software automation to the next level.

DevOps is still taking its baby steps. Frankly speaking, majority of DevOps teams are plain Dev, with minimal or non-existent Ops. There is some kind of ”enforced DevOps” bubbling under in the Corporate IT because the software teams that supply them are going DevOps and the ”project to product” thinking is gradually winning space. When large, heterogeneous corporate IT environments, that run big businesses and complex end-to-end business processes, adopt DevOps - or should I say OpsDev - things will look very different.

Machine-learning is becoming commonplace in all kinds of applications. This means new and different challenges for testing and test automation. The whole discipline of testing is based on the concept of test oracle, i.e. being able to determine the expected result of a test in advance. The more AI there is in an application the less deterministic and repeatable its behavior is. Therefore, the process of testing is likely to evolve into a more stochastic direction.

Applications of artificial intelligence in software automation, on the other hand, has opened completely new opportunities, where automation is not restricted to automated execution but software robots become capable of augmenting or replacing the human being in script design and analysis, for example. The route from manual to automated will extend towards autonomus.

The more complex and fast-evolving software systems become the less there is time for human analysis and judgement. All kinds of automated process measurement and analysis, from design to production, will be necessary. Process mining will assist humans by providing insights, detecting anomalies, and predicting trends and events. Those events, in turn, may trigger robots to execute automated, such as re-testing a business process implememented by system A when changes were detected in the behavior of system B that A depends on through various APIs.

The way we automate today is simply too slow. We need automation solutions that release human beings from most of the tasks they do today e.g. in test case design, debugging, and analysis. We also need technologies and business platforms where humans can collaborate and innovate at a much higher pace they do today. This means 1) cloud-based platforms that enable collaboration at ecosystem level; 2) cloud-based open and semi-open data warehouses that collect and supply data for machine-intelligence; 3)open source technologies and possibly other mechanisms for sharing and accelerating innovation; 4) commercial models that enable people and businesses to benefit from such collaborative effort.

I believe this is how the future of hyper-automation looks like. The next mission of the software automation community to move the world from hype-automation to hyper-automation.
",
                  bio: "Esko Hannula, CEO of Qentinel, is an experienced business leader with a long experience in software and service in general management, R&D and business development positions. Although Esko has never worked in full-time testing roles, software quality, testing, and automation have always been a part of his professional life. For the past many years he has served as the CEO of Qentinel, growing the company to one of the top few QA consultancies in Finland and recently re-shaping it into a SaaS business for test automation. Understanding and communicating the interdepency of software quality and business performance is Esko’s professional passion.

Esko is known for visionary and sometimes controversial ideas and many perceive him as an irritating besserwisser. In 2017, Esko published a book ”Three Skills of Advantage”, that explains his views on how quality creates value. In his spare time, Esko likes wandering around in the woods and developing his crazy ideas.

",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Dave Martin",
                  title: "Zero To Hero In 2 Weeks",
                  description: "I was presented with a huge problem that needed automation. I had heard of Robot Framework, but had no experience with it. I went from no experience with Robot Framework to building a robust, reusable, and scalable automation framework with instant ROI using Robot Framework in 2 weeks. Here's how.",
                  descriptionExpanded: "Getting started with a new tool is sometimes a daunting task. This is the daunting task that faced me as I was presented with a rather big problem that needed an automation solution. In this talk, I will share the process that I used to go from Robot Framework newbie to building automation for a large regression test faster than I could run the test once manually, to what today is a robust, reusable, scalable test automation solution with 25 contributors designing over 50,000 tests and growing. This talk will focus on the following:

*   Learning Robot Framework
*   Structuring Robot Framework Resources for Maximum Reuse
*   Creating an Abstraction Layer
*   Utilizing Design Patterns
*   Gaining Organizational Acceptance",
                  bio: "I am a seasoned QA professional with over 23 years of experience. My professional experience has been focused on the architecture and implementation of QA automation frameworks (using a wide variety of tools) as well as managing QA and Dev teams. I am passionate about all things QA, automation, process improvement, and customer/client satisfaction. At the end of the day, if I have Wow'ed the client, customer, and/or my team/manager; I have done something right.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Juho Saarinen",
                  title: "Robot Framework after Jython",
                  description: "Python 2 has been "dead" almost year now, and there's no really single "one way to fit all" path to continue usage of newer libraries and Robot Framework. At the talk I show some routes out from this issue to continue running of tests and RPA as part of Java application development lifecycle.",
                  descriptionExpanded: "Robot Framework test/RPA execution within Java application lifecycle has been easy, as libraries could have been handled with same mechanism as other dependencies for the project.

When end of Python 2 was announced, it was quite clear that some changes are needed. There was a small hope to get some "Jython replacement", but that doesn't seem to be happening (or if it does before the talk, it's taken in).

There are Java-Python possibilities like [GraalPython](https://github.com/graalvm/graalpython), [JPype](http://jpype.sourceforge.net/index.html) and [Py4J](https://www.py4j.org/), which approach the matter a bit different way than Jython did. Then there's Docker, which has entered to many development processes allowing to also utilize it easier way.

At the talk I walk through the options and possibilities, and demo how [MavenPlugin](https://github.com/robotframework/MavenPlugin) and [jrobotremoteserver](https://github.com/robotframework/jrobotremoteserver) help to smoothen the transition to time without Jython.",
                  bio: "Juho has been doing testing since 2005. He is interested of testing and it's efficiency, and eager to make all kind of testings as soon as possible.

Juho maintains various java-based RF libraries.

His "normal working day" to contain also application development and various operations related things in addition to testing.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Bartłomiej Hirsz",
                  title: "New parsing API for Robot Framework - how to create your own tool",
                  description: "What is the connection between fast development of recent RF versions and new parsing API? It makes extending Robot Framework code a lot easier! In this talk I will show what is Robot Framework parsing API, how to use it and how to create your own tool using Robocop and Robotidy as the example.",
                  descriptionExpanded: "New Robot Framework parsing API is great for writing your own tools and scripts for improving your workflow. You can easily read Robot code as Python objects and use them. It's not widely known and this talk will try to clarify how Robot Framework code is parsed and how it is possible to use public API for various small tasks or creating bigger tools like Robocop or Robotidy. ",
                  bio: "I'm Robot Framework and Python enthusiast who loves to contribute to open source projects. As QA I believe in clean and well tested code :) ",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Tatu Aalto",
                  title: "PythonLibCore the secret behind SeleniumLibrary",
                  description: "PythonLibCore is the secret behind SeleniumLibrary which eases the implementation of the Robot Framework dynamic library API. PythonLibCore made possible of SeleniumLibrary Plugin API and many other things in the library. This live coding session reveals how PythonLibraryCore can be used.",
                  descriptionExpanded: "The PythonLibCore is behind many libraries, like SeleniumLibrary and Browser library. The purpose of the PythonLibCore is the help the libraries to use the Robot Framework dynamic library API. This live coding demonstrates how PythonLibCore can be used, what kind of benefits it offers by using small custom library build on the stage. It also shows what benefits bigger libraries have gained by using PythonLibCore.",
                  bio: "Tatu Aalto is the current lead developer of the [SeleniumLibrary](https://github.com/robotframework/SeleniumLibrary) and is participating in [Browser library](https://github.com/MarketSquare/robotframework-browser) as one of the core team members. Tatu has been working with Robot Framework since 2011. In the 2011 he was a regular user, by sending many questions and problems to the community. After some time Tatu started to answer questions  send by other users and he did provide his very first pull request to the Robot Framework core in 2012. Tatu has been active community member all these years and 2016 he started as an SeleniumLibrary lead developer. 

Tatu has used the Robot Framework in several work places to to guide and aid companies in their test automation efforts. Currently he is working in F-Secure as a Senior Software Developer In Test, automating windows antivirus client for business users.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Kerkko Pelttari",
                  title: "RobotFramework Browser library",
                  description: "Bringing RF browser automation to year 2021. We'll cover why Browser was created, why it's being adopted and why you should adopt it. And what makes it cool.",
                  descriptionExpanded: "Robot Framework deserves a browser automation solution that's designed for the 2020s.

Browser library powered by Playwright provides.

🚀 Speed, ✅ reliability and 🔬 visibility.

    Conscise assertions.
    Precise and fast browser window and tab control.
    Chainable selector strategies.
    Good shadow DOM support.
    Easy mobile device descriptors.
    Sending HTTP requests.

See keyword documentation and our project on Github.

🚀SPEED

Robot Framework Browser is fast! With its direct API to the browsers, designed for high performance testing, fast feedback is now only limited by the speed of the test object.

With its innovative Context concept, a clean browser session is started within a less than 10 milliseconds!

Learn more about Browser/Contexts/Pages.
Browser library is designed to run headless first and brings a ready-to-test docker image to scale your test environments with your needs.

✅RELIABILITY

Wait Until ... and Sleep keywords belong to the past.

The browser library automatically waits for the elements of the page and interacts with them when they are ready for interaction.

Flickering tests that are sometimes PASS and sometimes FAIL are drastically reduced and confidence in test automation increases!

Find real errors instead of fixing your tests...
🔬VISIBILITY

Robot Framework Browser utilizes a JavaScript based technology called Playwright. Playwright connects directly to the browsers API and has full control of the browser and its content. The Users has full access to all JavaScript object of the page and with the Execute JavaScript keyword you can directly manipulate them.

Browser has also access to the Network Traffic between page and server and gives the user the possibility to interact with the server via HTTP calls from the same browser session.

You have never been closer to your test object!

See https://robotframework-browser.org/ for rendered version.
",
                  bio: "Open sourcerer.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Nils Balkow-Tychsen",
                  title: "How Kubernetes brings QA and DevOps closer together - A practical approach to DevTestOps",
                  description: "Kubernetes became a key technology for many modern software development teams. We want to show you how it brings QA and DevOps closer together with the help of RF KubeLibrary. It allows you to harden your e2e tests by ensuring the availability and configuration of your system-under-test beforehand.",
                  descriptionExpanded: "```
Kubernetes, the final frontier.
These are the voyages of Testers and DevOps Engineers alike.
It’s a mission to explore strange new technologies.
To seek out new ways of testing and new roles like DevTestOps.
To boldly fulfill quality expectations and release schedules, no one has done before.
```

**On a more serious note:** 
By its declarative nature Kubernetes allows bringing testing to the next level. It enables building a holistic approach for Quality Assurance that spans across application, configuration and infrastructure. It can work in both ways, by introducing tests for devops teams and exposing testing teams to platform specifics.

**In this talk we would like to introduce you to the KubeLibrary - RobotFramework library for testing kubernetes. We will explore how it can be used for DevTestOps scenarios by leveraging kubernetes strengths.**",
                  bio: "Lead QA Engineer at [Humanitec](https://humanitec.com). 20 year of experience in software testing through-out different industries like finance, games, IoT and developer platforms. Specializing in test automation for web apps based on microservice architectures.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Samuel Montgomery-Blinn",
                  title: "Abusing robotframework-datadriver for fun and profit",
                  description: "After progressing from duplicating test steps to using test templates, you went a step further and starting using CSV files and datadriver. But did you know that datadriver includes a reader_class initialization parameter that you can (ab)use to generate tests from directory listings and REST APIs?",
                  descriptionExpanded: "This is a 5-minute lightning talk to get people thinking about how they can use datadriver to outsource the source of truth about some of their test suites to either a directory of files or even a REST API such as from TestRails or JIRA.

After progressing from duplicating test steps to using test templates, you went a step further and started using CSV files and robotframework-datadriver. But did you know that datadriver includes a reader_class intitalization parameter that you can (ab)use to generate tests from directory listings and REST APIs?

I didn't either, until I found myself writing a lot of trivial CSV files that looked like this:

    *** Test Cases ***,${file_name}
    my test name,my_test_name.json
    another test name,another_test_name.json
    yet another test name,yet_another_test_name.json

And then finding that this CSV file would get out of sync with the actual test JSON files. What if "my test name" was removed because it was no longer valid? What if "the best test yet" was added, but not included in the CSV file?

There were a few approaches we could take:

* Generate the CSV file during some earlier part of the CI/build process
* Generate the CSV file with a --variable-file script...
* Generate the CSV file with datadriver's config_keyword initialization property

But this still wasn't fully satisfying, because really, this CSV file did not need to exist. So, I dug into datadriver a bit further and starting using the reader_class initialization property.

    *** Resources ***
    Library    DataDriver    file=/path/to/my/files/**.json
    ...                       reader_class=DataDriver.GlobDataReader 
    ...                       file_search_strategy=None 

And all you really have to do is implement a `get_data_from_source` method and you are off and running. For our "trivial" example:

    var_name = self.kwargs["var_name"] if "var_name" in self.kwargs else "${file_name}"
    self._analyse_header(["*** Test Cases ***", var_name])
    for f in glob.glob(self.file):
        self._read_data_from_table([os.path.basename(os.path.splitext(f)[0]),os.path.abspath(f)])
    return self.data_table

Et voilà! Now:

    My Test Template
        [Arguments]       ${file_name}
        My Test Keyword   ${file_name}

Your directory of JSON tests are heading to your test keyword for final disposition.

But wait! you say. What about tags? Documentation? Well, you're already in Python code. You *could* embed these in the JSON files (or YAML files, or a SQL database, or...) but why not just use `requests` to grab that metadata via REST from TestRails or JIRA?

    GET index.php?/api/v2/get_suites/1
    GET index.php?/api/v2/get_suite/2
    GET index.php?/api/v2/get_cases/1&suite_id=2&milestone_id=3&priority_id=4...

This also has the advantage of getting rid of painstaking dual tag maintenance and making your PHB happy by making TestRails the source of truth about which tests to run where and when.

You *could* even grab data file(s) themselves:

    GET index.php?/api/v2/get_attachments_for_case/:case_id
    GET index.php?/api/v2/get_attachment/:attachment_id

Making TestRails the source of truth about the test case data file(s) themselves. Personally, I'd rather have these in Git and on my local filesystem, but hey: Whether it's a good idea or not, Robot Framework will let you do it.

Thank you for your time.",
                  bio: "I went from farmer to software engineer thanks to the professors at Purdue University, and though I have had a few dalliances over the wall in development land, the preponderance of my 20+ year career has been in test automation. From C, Perl, TCL and, yes, PHP, to Java, to Python, back somehow to TCL thanks to Jacl, back to Python though actually Jython, I finally caught the One True Religion of Robot Framework and work to spread its gospel. Which leaves me somehow, still, writing a lot of Python and obsessing even more over whitespace.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Raphael Roems",
                  title: "Backend Testing using Robot Framework and SoapUI",
                  description: "Backend testing, which involved data processing, was initiated from a website frontend. Goal was to reuse existing SoapUI opensource webservice tests to replace the frontend requests, integrating with Robot Framework for test orchestration and parallel testing aspects, to reduce test execution time."
                  descriptionExpanded: "<h1><strong>Existing problems to address</strong></h1>

<p>How would introducing test automation would improve the existing testing problems?   </p>

<h1><strong>Considerations for test automation framework</strong></h1>

<p>Process of testing tool selection for the test automation framework  </p>

<h1><strong>Brief overview of manual testing process</strong></h1>

<p>Diagram of the manual testing process  </p>

<h1><strong>Challenges with implementation</strong></h1>

<p>List of problems encountered and how these were overcome  </p>

<h1><strong>Brief overview of automation process</strong></h1>

<p>Various testing tools and how these interact  </p>
",
                  bio: "",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Markus Stahl",
                  title: "robotframework-camunda library: Orchestrating robotic tasks with Camunda",
                  description: "Robot Framework is our favourite tool for automating tasks. Naturally, it requires an orchestrator for triggering executions. Camunda orchestrates process flows and makes processes also visible. With "robotframework-camunda" library you can integrate 2 of the greatest open source projects existing.",
                  descriptionExpanded: "# Content

## Motivation
Why someone would want to integrate Robot Framework and Camunda

## Abstraction layers of a process:
Each layer has a main focus
1. Camunda : controlling process flow, deciding what is executed when
1. Robot Framework: describing the automated task
1. Python: implementation of the steps within the tasks

## Example Process
1. demo, running process

## Nudges
1. Why you still want to automate with Robot Framework despite Camunda's more powerful Java integration
1. What features to expect next.",
                  bio: "Markus has 10 years working experience as system administrator, java developer and lean management consultant. Since 2016 he's Automation Engineer for the quality assurance department at Deutsche Post Adress. His favorite tools are Robot Framework, Camunda and Gitlab. Besides automation his favorite activities are gardening and entertaining his kids.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Tommi Oinonen",
                  title: "What is taking so long?! - An attempt to answer this question",
                  description: "One type of data collected by TestArchiver is the keyword executions trees and statistics on their execution times and occurrences. This is a quick example on how this data can help you to find where to focus on when trying to optimise your test suites.",
                  descriptionExpanded: "When one becomes more familiar with Robot framework, it becomes easier and easier to add layers to you robot code and add complexity there. We know that that complexity in RF should be moved to python as much as possible but that is not always easy. I'll try to show how TestArchiver could really help you there",
                  bio: "Automation expert and toolsmith from Software Automation Labs (SALabs) at Siili.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                { author: "Gojko Adzic",
                  title: "You're testing WHAT?",
                  descriptionExpanded: "Gojko presents five universal rules for test automation, that will help you bring continuous integration and testing to the darkest corners of your system. Learn how to wrestle large test suites into something easy to understand, maintain and evolve, at the same time increasing the value from your automated tests. See how to bring aspects that people don't even consider automating, such as layout checks and even video into an automated continuously integrated process.",
                  bio: "Gojko Adzic is a partner at Neuri Consulting LLP. He one of the 2019 AWS Serverless Heroes, the winner of the 2016 European Software Testing Outstanding Achievement Award, and the 2011 Most Influential Agile Testing Professional Award. Gojko’s book Specification by Example won the Jolt Award for the best book of 2012, and his <a href='https://gojko.net/posts.html'>blog</a> won the UK Agile Award for the best online publication in 2010.",
                  imgUrl: 'gojko.jpg'
                },
                { author: "Elisabeth Hendrickson",
                  title: "Robot Framework Through the Lens of History",
                  descriptionExpanded: "Two decades ago, software development looked very different than it does today. Supposed “best practices” involved document-heavy processes that divided work into phases with testing at the end and performed by a separate QA function that did supposedly “independent” verification and validation. The most commonly used test automation tools of the day were from commercial vendors who mostly sold to executives on the promise of making test automation “easy” through record and playback. This was desirable because the QA group was often so removed from the development effort that they had no access to the source code, and often did not have coding skills. So vendors sold supposedly magic solutions that generally turned out to be hugely expensive with very little return. The frustration, pain, and failures stemming from heavyweight phased software development processes gave rise to Agile. At the same time the frustration and pain stemming from specialized test automation tools that often didn’t play nicely with source control gave rise to a new generation of open source test automation tools. The short lived Agile Alliance program, “AAFTT” became for a very brief time in history a gathering place for people working on this new generation of tools, of which Robot Framework is one. In this talk, we’ll look at the history of test automation tools and why Robot Framework was -- and is -- so successful.",
                  bio: "Elisabeth Hendrickson is an experienced software developer, tester, leader, and executive. She has a track record of creating high functioning organizations and growing strong leadership teams. She co-founded the AAFTT program (with Jennitta Andrea), served on the Agile Alliance board of directors, and received the Agile Alliance's Gordon Pask award in 2010. She is the author of Explore It! from Pragmatic Books. You can find her on Twitter as <a href='https://twitter.com/testobsessed'>@testobsessed</a>",
                  imgUrl: 'elisabeth.jpg'
                }
              ]
            }
          }
        },
        {
          title: "Tickets",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Tickets",
              text:
                `<div>
                  <p>Blind tickets are available for a discounted price of <span class="blue">99€ + 24% VAT</span>. The regular ticket price will be <span class="blue">149€ + 24% VAT</span> when the conference program is announced.
                  For those who can't afford the ticket, budget vouchers are available. Please contact <a href="mailto: rene@robotframework.org">René</a> for more info.</p>
                  <div class="ticket-visual_visual" id="ticket">
                  <canvas id="ticket-canvas"></canvas>
                  <div class="ticket-visual-wrapper">
                    <div class="ticket-visual_profile">
                      <a href="http://tickets.robotframework.org/" class="row ticket-buy-container p-4">
                        <div class="ticket-link col-12 row m-0 p-0">
                          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADxCAYAAAAay1EJAAAAAXNSR0IArs4c6QAAActpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgSW1hZ2VSZWFkeTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KKS7NPQAAE+dJREFUeAHtnf9128YShaN33v+PqSBwBaErMFVB5ApCVWCpAkkVWK6ATAWmKxBdgZgKjA7CVJB3rww4FEVJILA/Zgd3zhkDBIHdmW/mYiFZok5+Ksz++eefCUKewafwd3Aa93lcJgLHEKhxMp32Fb6Br09OTrY8UIqdlBBoI9wzxPoBPi0hZsVYNIEVov8CMS9LyMK0iBvxXgAkxTspAahidEVgi2w+wW8tr85mRQwBU7xXcIkXEGRZCdSY/RJCXmWN4pnJzYm4WX0/I97ZMzHrsAjkIkARn1tblU2JGAKeAhIFXMFlImCRwAZBvYeQayvBmRFxI+A7gJlYgaM4ROAZAlscP4WQKejsZkLEEnD2PlAAxxMwI+TsIpaAj+8eXWGGgAkhZxWxBGymGRVIfwLZhZxNxBJw/67RleYIZBVyFhFLwOaaUAENJ5BNyMlFLAEP7xaNYJZAFiEnFbEEbLb5FFg4AsmFnEzEEnC4LtFI5gkkFXISEUvA5ptOAYYnkEzI0UUsAYfvDo1YDIEkQo4qYgm4mGZToPEIRBdyNBFLwPG6QiMXRyCqkKOIWAIurskUcHwC0YQcXMQScPxu0AzFEogi5KAiloCLbS4Fno5AcCEHE7EEnK4LNFPxBIIKOYiIJeDim0oJpCcQTMiDRSwBp6++ZnRDIIiQB4nYoIAJZQn/Aq8tfQ4S4pFlJIBerTD9FM4/ODCHT+AWLIiQeyVCAcP/gluxawRipTC9mOqiNATYJ/CPVhoXcVBHvMGkM07YTIyNCZuny14zeSGAzp2b6N7vQaQTMuaTgL10sfL4aXRCloDV9R4JjEbIErDH9lVOLQH3QpaA21Jr65mAWyFLwJ7bVrntE3AnZAl4v8R6PQYCboQsAY+hXZXjcwSKF7IE/FxpdXxMBAwKudsPMyFw/jTLPdyKzcfUOMrVFgGIwNIPhNx3ooOgF1bUS4CdgtZJIhCRAPvQkCY+vpgqAp0ZCnb+YrB6UwQSEjAm5NmzqSPQb0ZEPH82SL0hApkIGBLy3UEEhgKcHwxQB0XAAAHTOkFw3+C5bW6gTgpBBF4kAJFY+Br58WqMoCx8LTx/kZzeFAFDBIwI+eF3kP/TcPk9M59zfArHMnMMml4EOhNo+vW88wVxTnzQbSviWZw5Oo0qAXfCpJOsETAg5BmZnOCxoML2G19kMAk4A3RNGZYAH60x4iLsqJ1H+5krcdrP9vk3Ngn4XxbaK5hA5hV5mkvEEnDBTavQnxLIKOQHET+NKO4RCTguX42eiUAmIU+4Er9LmLMEnBC2pkpPIIeQ2+9Op8h22SSYYi7NIQLZCDR9vkoVQEoR36RKSvOIgAECl6liSCXiFe5OdaqkNI8I5CbQ9PsmRRypRPw1RTKaQwSMEeDfBItuqUSc5I4UnZYmEIHjCNTHnd7v7FQi7hedrhKBsgnUKcKXiFNQ1hwiEJGARBwRroYWgRQEJOIUlDWHCEQkIBFHhKuhRSAFAYk4BWXNIQIRCUjEEeFqaBFIQUAiTkFZc4hARAIScUS4GloEUhCQiFNQ1hwiEJGARBwRroYWgRQEJOIUlDWHCEQkIBFHhKuhRSAFgf+mmMTbHPiI0glymjbO/f81+9j8MP7m1t/wLZz7G/yOKfdlIhCUgETcAWcj2jOcys8jm8Er+Gs22z8B49Q4tobz96v5QQkSNUDIhhGQiF/g13wo+G84hQIOYRUGmTe+wPgr7H+BmJfYyjoSALcJTp3unb4Fx83esVG8lIj3ytw0yAUOf4CzWWLaGQY/w5z86++f4LdanQ/jbuoyx7u/w6eHzsI5Wxxfwf8Ax/Whczwe0ze2dqqKJrjGy2/wK/gEnso4F+f8xhjgKedOlWPvecDjgmzgvNlNXxiI3ObwO1xDr7Dv3iRilBjF5p92zSHe/QZjE1LM94jnbP/Nsb2mCOF3yJviJZtjbIaTR8Fx1CJGg0zgbBA2SgW3YhUC+YzY6Mc2r5UcBsWBvOcY4B4+g/c1siPDed8BSrhutCJGYacoEMV7YbhQZ4iNqwljHYUhV95YPyPZBXwSKOmFZ4ajFDEKOkNzUMAliKNirIh5jq1rQ468aX2DcxvaeGNwaaMTcSMGCjjUXT5FYzDWhVchI6929aXQYtWFX19fpChW6jlGJeJGBHxMK9UWTQ6lxv8kbuRzhoOxVt/9+T7sH/DwejQibpqlZAG3/eZCyKhHitW3ZdZuuRpP2xdetqMQcVM4DwJu+45CnrUvStsi9pSr7z4ezu3K3IsYDTNBxWJ+rZWrIfhfJ1WuyfvMy1rAeTPNWY9f+sRu+Rr3IgZ8Nk1luQg9Y2tvTj0vT3sZxDvDjPfwOTynVTknjzG3axGjcS4Azd3j004jTJHj9c5rc7uIj6vvRwR2B6/MBeggILciZvOgPlcOavRaClfItXrtpBzvI64Z5uXqy5upFdtaCSRUHG5FDEC8+1PIYzB+yWDGeAOFW119/zQDKlAgLkWMBpqCzzwQoxKG4S9wzCwE2sRhbfXdRbPZfeFh36WIUZgxPEbv91/2nA2vvi0rfnDAqn3hZetOxGikCsU581KgI/LIthqDOb/BZnn1bTHygxfcmTsRo0LZV6SMXfJ76rkh3mvMSQHzSxjLtkVwt5YD7BubRxGPcRVu6z+HqCbti5jbndW3lJvmOR6lKWR35krEaCwKOEkTG+4EMohqBa2+LQd+dtmqfeFt60rEKM5v3grUI59oDCBe/gIBH51LWX2JjwK+7MGxmEu8fdpl9FXomcryLs//f1w370+x/RXOeCbNsVQbzhncIF7mdAdPnU/fXLa4kI/Qq74DlHKdGxE3TZa6wW5Q6EMfM7tmAyAmrgAX8KQrF+adoXnXmDeIYbwKA5UkYAqXAt4GAWB8EE+P07OErNkcb9Ek1y81Ct/jOTwXnrKhZpgvpC0w2CTkgJHGIuP3YE5PyTtSOt2G9STiX7qlPPgsNscpmmTTdaTm3FOcn6qx+CgfxLAKzzHQLMhgcQdZYfg3YM3tqMyTiKeJKnfZiPKo6Zpr3h91Uf+Tq/6XPrky6ZcCT2Z//QBvjKNbfXexeBJxtZtYpP01xLjsOzauXeNaemwLckPDKsxxqtjBDhh/jWvfgutqwBjFXyoRH1fCP447/eDZnw4etXnwzGZYD1+W8InoFF4bjTFZWJ5EnALa4Dt+qlWj+Y7yUCbvhg4Q4fo1xuTqexth7CKHlIi7l43fad52P/3FM9cvvhvmzSrMMGZGIXutvgfK4eb/iQ/kFvrQJvSAGq8zgTXOPMdNtO58xYhO1Erst9ihnhpyEtLq24G+VuIOkCKcUkcY89GQWLVKf3Jg/Fx9S8/jUV1ivPC0Eq9jANoZ8+vO/tDdP4cO8Mr1oRo/ZM6vhPzo7RuIl9+8CpXHo8G9vfAk4i+Ri7MKOH7IsQ6FtT50sMex2HHuh0TRUrzX+2/o9fMEPIk4ZsPVIVcFjFWjJOvnyzL4nSD/F93kXA+OptsAN5hPq283Vo/OciPiRhjLR9mFe3ETbqgfI8UYk4MvGxY/Jhq4EyvONiytvi2Jnls3Im7yv8R225PFc5cN+lHL5waF0NZ4L/TTA3MPKjrEucSYa3gMu8H4Wn0HknUlYjQEm/j9QCa7l4ceb3ds7p/DN/sHB7w+B4N6wPXPXUqmZBHKmLO+9g1E05WIyQRNvMaG4hhqbNpTjBeyeR/F1Ix9ioNs6qF2jvFWQwc5dP1OnCFY3GKOU4wZIudD4Y7umDsRs4JokCU2b+E1vI+tcdGbFI2GOSgMCnkF72O8/j3GWfa5uOs1DYs3OH/d9Zq982q8PsU4l3DGLAtEwKWIyaZpOgr5Bt61aWqce45rT+Fdr8Elw4xzwfnISq87jsb4buFvcO2q4zWDTsM8jJM3nHN43XEwxska8PF53fEanXYEgRP8tssdzp8dcU2fU09zFhA5ThD0GZy/lVPBZ3AaG2zT+FfEuOLB3IZ4Z4iBn1o5bXyCLY2x1vAv8BXi3WKbzRDnGSYn02njkyaYNbY1/Cs8e5yIIYs1daS+YtrNKH7ssmn2JUjSzRviXSNIumlrbnor00GOIDi3j9MjqJ1SFIEHAhKxGkEECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAqP4+8RtmQ/8sfH2LW19EeAfN183f+fZV2YHshmFiCHeCrlfwedwmX8CM6R4hbrX2N5AzEts3Zr7x2kUco7q3cO5lY2LQIV0F+iBezj3XZprEaNwC1SNPnFZPSXVlcAUJ1LI3LoztyJGwa5Rrbm7iimhvgR4I7/zKGSXIkahZigYvwaWicAuAQqZT2auzKWIUSF3hXLVdXmTmTZPaXmjCDi7OxGjQHPwqQIy0lD+CHxAn3BVdmHuRIyqfHBRGSURkwAFfBZzgpRjuxJxc3edpgSouYol8K7YyPcCdyVi5CYB7xVYL58lMHv2ncLekIgLK5jCDUagCjZS5oG8iZhf68hEYFQEvIl4VMVTsiJAAt5EvFZZRaAjgW3H88yf5k3EtXniCtAKgbWVQIbG4UrE+JWzGkDoMhF4jQB/59iFuRJxU5E/XFRGScQmsIo9QarxPYr4FvDcfL2TqhFGNs+yeWpzkbY7EaM4FPCNi+ooiRgE2B+XMQbONaY7ERMkhMzVeJULquY1TeC8udGbDvKY4FyKuAFwju3mGBg61z0BCtjdzd2tiJu77Snacum+NZXgawS2OOE9emL52oklvu9WxCwGhQznivweXsNl4yOwRMpv0QfuVuC2lK5F3CbJAsLf4DXFvITXcJlfAmukdgt/g7qfw2vsu7VRfO50Wz0Uk3djt3fkNk9tx0VgFCvxuEqqbMdGQCIeW8WVrzsCErG7kiqhsRGQiMdWceXrjoBE7K6kSmhsBCTisVVc+bojIBG7K6kSGhsBiXhsFVe+7ghIxO5KqoTGRkAiHlvFla87AhKxu5IqobERkIjHVnHl646AROyupEpobARSibgaG1jlKwIgMEtBIZWIf02RjOYQAWMEfkkRTyoRn6VIRnOIgDECSfo+lYgr/AHwuTHACkcEohFAv19g8Em0CXYGTiViTvkRiSVJaic/7YpAcgLo8wqTXqWamCLeJJqMAr6TkBPR1jRZCDT9/RmTJ1uwKOK/E2Y7xVwSckLgmiodgUbAd5iRfZ7MKOJtstm+TyQhJwau6eITyCVgZLZJ+Ti9S1JC3qWh/aIJZBQwudUn/BdB/MNtBttgzlN8lGzqp4EMqWpKjwQyC5h/HOFnrsS01fdN8n+1IidHrglDEcgsYKbxoNtWxF9CJdZjHAm5BzRdkpeAAQETwFf+0z5OT7D/Fw9ktA3m1qN1xgJo6m4EjAj44VGaET+sxM3XpMtuKUQ7SytyNLQaOBQBIwJmOp/anB5WYr5AcBU237if2bQiZy6Apj9MwJCAt4jwTbP4fl+JGTIO1Njccj+zaUXOXABN/5SAIQEzuE+tgPnix0rMF02g99it+DqzaUXOXABN/52AMQFvIOC3u7Vpvzv9cKxR9/nuCRn3tSJnhK+pvxMwJuAtonqiz0ciZtgQ8vrQiXwvg0nIGaBryu8EjAmYQV1Cn3xC7WZIYAG3YvcIZNItcp0lAsMJsN/g7DsrNu+VFaJfWMkAcUjIvaqoi44lgF7zIeA2cSS0gFsxCbktjLZRCKDRfQm4pYTEFlZUjDgk5LYw2gYlgN7yKeCWEhJcwK2YhNwWRtsgBNDYvgXcUkKiCysqRhwSclsYbQcRQC+NQ8AtJSS8gFsxCbktjLa9CKCRxyXglhISX1hRMeKQkNvCaHsUAfTOOAXcUgKABdyKUchVG5u2IvAaAfTLFM6+sWLz12KO8j6yX1ghgDj+gl/DqyjJalAXBNgf8AXcks2HwH30CxB9BgKJBa4bFESfeV+5hj+atn3lHL09PgIVUqZbsnP8KOVySECDRczJjQp5CBddKwIpCAwWMIMMImIOJCGTgkwEOhMIImDOFkzEHExCJgWZCLxKIJiAOVNQEXNACZkUZCLwLIGgAuYswUXMQSVkUpCJwBMCwQXMGaKImANLyKQgE4EfBKIImKNHEzEHl5BJQSYCP0UTMNlGFTEnkJBJQTZiAlEFTK7RRcxJJGRSkI2QQHQBk2kSEXMiCZkUZCMikETA5JlMxJxMQiYF2QgIJBMwWSYVMSeUkElB5phAUgGTY3IRc1IJmRRkDgkkFzAZZhExJ5aQSUHmiEAWAZNfNhFzcgmZFGQOCGQTMNllFTEDkJBJQVYwgawCJrfsImYQEjIpyAokkF3AZGZCxAxEQiYFWUEETAiYvJ78VcRcEE9OTs4x922u+TWvCBxBwIyAGbOZlbgFiBV5jv2PcP0VxBaKtlYI8HPbKOCVlYAYhzkRMygIeYoNP4CPW5kIWCCwRhAUcG0hmN0YzDxO7wYFUBv4WxzjIzbvfjIRyEWgxsQU7ymc++bM5Eq8Swmr8gSvz+BX8AouE4EUBDaY5BOEu0wx2ZA5zIt4N7nmMZuCfgef7b6nfREYSGCL6yncL/CV1VX3UI5FiXg/AYi6wjG6TASGEKhLEu1+ov8HNJr5BA1F6okAAAAASUVORK5CYII=" alt="Robot Framework logo" class="ticket-profile_image" />
                          <div class="ticket-main-texts">
                            <p class="ticket-buy-text">Buy your</p>
                            <p class="ticket-buy-text">ticket here!</p>
                          </div>
                        </div>
                        <div class="col-12 row ticket-event-info ml-1 mr-1 pl-0 pr-0">
                          <div>Robocon</div>
                          <div>16-18/MAR-2021</div>
                          <div>Online</div>
                        </div>
                      </a>
                    </div>
                    <div class="ticket-visual_ticket-number-wrapper">
                      <h3 class="ticket-visual_ticket-number">№ 20210316-18</h3>
                    </div>
                  </div>
                </div>
              </div>
              `
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
              text: '<p>TBA!</a>',
              talks: [
                { type: "workshop", header: 'Half-day workshops' },

                {
                  type: "workshop",
                  author: "Luca Giovenzana",
                  title: "HTTP api testing and RPA with RequestsLibrary",
                  description: "This workshop is about HTTP api for direct test or as prerequisites for your end to end test automation suite.",
                  descriptionExpanded: "This workshop is about HTTP api for direct test or as prerequisites for your end to end test automation suite.

You will learn:
- how to setup a basic API testing/rpa project using the RequestsLibrary
- how to handle shared session and authentication
- how to validate the response
- what to address with api testing in your test suite
- how to use RF for basic stress tests
- how to use pabot and RequestsLibrary to execute many requests in parallel

We will use the new 0.9 pre-release version and we will talk about the development roadmap.",
                  bio: "https://www.linkedin.com/in/lucagiovenzana/

Luca Giovenzana is an Open Source and Linux passionate guy.
Before discovering RobotFramework he built his own Python framework to remotely control and test Linux based firewalls.
He has been Head of QA for many years and, together with an amazing team, created a full stack test automation suite with more than 2 thousands test cases.
Now he fosters the Quality culture as an Agile Coach.
Together with Angelo Caovilla founded the RobotFramework Italian community and Meetup.
He contributes to the community and he is the maintainer of RequestsLibrary.",
                  imgUrl: 'rf-icon-500-White.png'
                },


                {
                  type: "workshop",
                  author: "Joshua Gorospe",
                  title: "Getting started with the robotframework-appiumlibrary",
                  description: "This workshop will demonstrate setting up and using the robotframework-appiumlibrary to test iOS and Android apps. This will focus on a beginner audience level.",
                  descriptionExpanded: "Summary:
The examples and demonstrations in this workshop session will walk a beginner through the following...

- Set up Appium and robotframework-appiumlibrary on a new machine.
- Set up iOS simulators on a new machine.
- Set up Android emulators on a new machine.
- Demonstrate basic robotframework-appiumlibrary automation workflow examples.
- Demonstrate robotframework-appiumlibrary examples that utilize PaBot.
- Bonus Content: Demonstrate useful Appium Desktop features.
- Bonus Content: Demonstrate combining Charles Proxy with robotframework-appiumlibrary examples.

Audience Takeaway:
A Github repo containing all of the examples and the presentation slides. (coming soon... it will be kept here -> https://github.com/jg8481)",
                  bio: "Currently writing a book. https://leanpub.com/toolstrategiesforlonetesters

Currently working on various vulnerability and threat detection products at Secureworks, as a Principal QA Engineer. Was a Test Engineering Lead in Koala (https://koala.io/) working on web, mobile app, and APIs used for ordering and point-of-sale systems. Was a Senior Test Engineer in Intersection Co. (a Sidewalk Labs and Alphabet owned company) for the Intersection (ICS) Connected Communities Team working on test design and test strategy leadership for several initiatives with Hudson Yards, Related Company, and other clients. I run, monitor, and build the test infrastructure for the ICS (Intersection Consulting & Solutions) Buildkite CI pipelines. I also create and maintain several types of daily tests for the Hudson Yards Technology Platform, a technology platform used to integrate multiple building management systems for security, facial recognition, surveillance, visitor management systems, and building sensor data. I also worked on the Hertz eCommerce Test Tools Team for approximately 5 years. 

I love testing. I research and experiment with software test oracles, machine learning tools, model based test tools, GraphWalker, Kali Linux, Docker security tools, Haskell + Rust + Python + Go-lang + Elixir-lang test tools, Sikuli X IDE, various Robot Framework libraries, Appium, Zapier, Slack + Jenkins integrations with other CI tools (using my own approaches inspired by ChatOps pipeline patterns), headless Firefox Robot Framework scripts using an XVFB library (on Ubuntu), API testing with Robot Framework/Haskell/Rust, researching various test tools for creating cross-platform scalable tests using Docker containers, Kubernetes pods, GCP and AWS. Also created Test Results Metrics dashboards using Robot Framework's results and TestRail. 

",
                  imgUrl: 'rf-icon-500-White.png'
                },


                {
                  type: "workshop",
                  author: "Pekka Klärck",
                  title: "Extending Robot Framework with libraries, listeners, and so on",
                  description: "Deep end workshop.",
                  descriptionExpanded: "In this workshop you will learn how to extend Robot Framework using various different interfaces. The first half of the workshop is dedicated to the library API, starting from basics and quickly continuing to more advanced topics like the dynamic library interface (used e.g. by SeleniumLibrary) and automatic argument type conversion. During the second half you will get familiar with other extending and integration possibilities such as the listener API, parsing API, modifying tests dynamically before execution, starting execution programmatically and analyzing results.

This workshop is for you if you already know basics of using Robot Framework, includingo basics of writing tests libraries, and want to take your skills to the next level. These skills make it easier to adapt the framework to your own needs in different contexts.

The workshop is 100% hands-on, no slides, learn-by-doing. In addition to learning from the person who has designed these powerful APIs, you have a change to ask hard questions related Robot Framework from its creator.
",
                  bio: "Pekka Klärck is a tester, developer and independent consultant from Finland. He is the original author and lead developer of Robot Framework.",
                  imgUrl: 'rf-icon-500-White.png'
                },
                { type: "workshop", header: 'Full-day workshops', margin: true },
                {
                  type: "workshop",
                  author: "Henri Terho",
                  title: "Workshop on Qentinel pace and open source Qweb",
                  description: "One of the main goals of Qentinel this year is to support the community around robot framework and to support this effort we are open sourcing our web technologies and libraries. In this workshop we will share how to use them effectively and how to create the most maintainable web tests possible!",
                  descriptionExpanded: "Ever wanted to find out how easy it is to create end to end tests for web applications? Qentinel is now sharing how to create tests usign Qweb (FOR reviewers: the name of the library might change as we brand it as open source) on the local environemnt and showing what kind of advantages can be gained from running those tests in the Qentinel Pace cloud environment.

In this workshop you will learn how to use the Qweb library, how to deploy those tests to the cloud and how to setup continuous test runs on the qentinel pace platform. You will also learn how to use the Qweb library as standalone in your application and how it compares to Playwright, Selenium and other leading libraries. ",
                  bio: "",
                  imgUrl: 'rf-icon-500-White.png'
                },


                {
                  type: "workshop",
                  author: "Michael Hallik",
                  title: "WORKSHOP: HTTP-level testing with the Robot Framework RequestsLibrary",
                  description: "Experience the power, versatility and simplicity of Robot Framework!

In this workshop, we will cover everything from creating and maintaining an HTTP session, to validating every aspect of the response and everything in between.

Stop testing the GUI exclusively & start automating against the API!",
                  descriptionExpanded: "Contents:

* Use cases for HTTP-level test automation.
* HTTP compared to other API-level test automation interfaces (e.g. SOAP).
* Web-api vs. REST-api.
* Overview HTTP support within the RF ecosystem (all libraries compared).
* RequestsLibrary: it's place in a typical RF tool stack (architectural overview).
* Installation RequestsLibrary.
* Creating and maintaining an HTTP session with RequestsLibrary.
* The session object: exposed methods, attributes and how to access them.
* The session object: various ways to manipulate it (e.g. def headers, cookies).
* Making HTTP requests with RequestsLibrary (based on our session object).
* The response object: exposed methods, attributes and how to access them.
* Validate the response:
** status code and message
** headers
** cookies
** the response body

Required knowledge:
* Robot Framework - Excellent
* HTTP concepts (sessions, headers, cookies, etc.) - Good
* Object oriented programming concepts - Basic

Participants should have a good grasp of HTTP related concepts, such as sessions, methods (verbs/nouns), status codes/messages, headers and cookies. We will work with all of those, and will assume the concepts themselves to be understood.

Participants should have broad experience/skill wrt to working with Robot Framework. For instance, we will employ dictionaries, list, tuples and use the extended variable syntax and basic convenience libraries such as the Collections library. Participants *must* already know all of these, since learning them obviously is not the goal of the workshop. Too much time spent on these basic concepts will prevent other participants from reaching their learning goals.

Basic programming concepts (such as objects, methods, attributes, arguments, return values) should be known as well. Again, we will use these and presume them known by all participants.",
                  bio: "Michael has been a software tester since 2000, in various roles.

His first exposure to Robot Framework (and test automation) came as early as 2011. It was love at first sight. Since then he has utilized its unmatched power and versatility within such disparate domains as banking, real estate, insurance and the worlds of CMS, CDP and EDP systems. Just as diverse have been the interfaces that had to be automated against. But regardless whether it were web GUIs, SOAP services, database APIs, REST-APIs, proprietary JAVA APIs, MQ or ILE RPG based mainframe systems: RF and its rich ecosystem always came to the rescue.

Michael has written extensively about various aspects of working with Robot Framework, in the form of a series of blog posts. He has also created his own series of Robot Framework related workshops, around themes such as the Remote Library Interface, the testing of RESTful JSON APIs or the testing of SOAP services. For Michael's profile, please see: linkedin.com/in/michaelhallik/",
                  imgUrl: 'rf-icon-500-White.png'
                },


                {
                  type: "workshop",
                  author: "Maria Prokhorova",
                  title: "Image Library Workshop",
                  description: "The workshop is aimed to acquaint RobotFramework users with the Image Library. The attendees will learn about the library structure and design, get the detailed explanation about its effective usage and appliance along with an ability to try it practically and with their personal cases.",
                  descriptionExpanded: "Since the new major update of the library will be present soon the workshop is aimed to deep into new updates.

Along with some theory about the library in the beginning of the workshop we will focus on the specificity of keywords which help to automate almost any kind of tasks requiring only interaction with UI elements. Listeners will practice the keywords right during the workshop.


##### Agenda
1. Introduction lecture
2. Keywords and concepts explanation with examples
3. Practice section
        1) Working in small groups. 
        2) Solving testing tasks with Image Library
        3) Ideas sharing
4. Discussion


##### What to expect from this library:
The following concepts of the library will be thoroughly discussed:
- `YAML format`
To store and organize images entities effectively with the yaml format as a config file for to call them easy in test script.
- `Windows`
What is being understood under 'window' and how to deal with it.
- `Templates`
Detailed explanation of the templates idea as the key concept of the library.
- `Images`
For those who don't need complex templates' structure - automation simply with images is also possible.
- `Animations`
Some keywords to check the animations.
- `Buttons`
New version of Library contains different types of buttons, their settings and ways of implementation. 
- `Recognition`
Extracting text information from screen.",
                  bio: "Mobile QA Engineer at Hyundai Mobility Lab
Over 5 years in Test Automtaion 
Lead developer of Image Library (RobotFramework)",
                  imgUrl: 'rf-icon-500-White.png'
                },


                {
                  type: "workshop",
                  author: "Ed Manlove",
                  title: "Advanced SeleniumLibrary and Robot Framework",
                  description: "Techniques and tooling to ease up web testing and automation by expert developers and maintainer of the SeleniumLibrary. If you need to beef up your Selenium tests, this is the course for you.",
                  descriptionExpanded: "Outline/overview of the workshop

Browser Configuration - We will be taking a look at desired capabilities, Selenium options and Firefox profile. Differences between Open Browser and Create WebDriver keywords will be highlighted. Finally we will build small examples showing how to configure the browser in different situations.
Advanced Debugging - The course will cover when encountering flaky test(s), where to look and how to stabilize them.
Parallel Execution - We'll discuss running SeleniumLibrary in parallel with pabot and Selenium grid.
API - SeleniumLibrary has an public API which allows users to extend on top of the SeleniumLibrary. Here we take a look what is available in the public API.
Expanding the library - Looking at different pros and cons we will talk about how to extend SeleniumLibrary as well as building a new library and the Plugin API. We will show a small example. And we will discuss overriding existing keywords with functionality not covered by Selenium.
EventFiringWebDriver - Using and abusing EventFiringWebDriver for monitoring events and how they affect the interactions with SUT will be covered.
Page Objects - What are page objects and where it might be useful.
Python Page objects verses SeleniumLibrary - Looking inside of a page object library and how to build one.
Checking for time of tests - We will talk about verifying and reacting to execution times of tests/keywords/suites either via tags or the separate Timer library.
Using Javascript to interact with SUT - Extending SeleniumLibrary with new keywords where functionality is implemented in Javascript.

Learning Outcomes: At the end of the workshop, user should have broad overview of advanced features of SeleniumLibrary, web automation and ways to extend and debug test tooling.

Target Audience: This workshop is for people with previous hands on experience with testing in Robot Framework & SeleniumLibrary. Students should already have experience testing web applications, know how to identify locators for web elements and validate those locators, and feel comfortable working with SeleniumLibrary. Although the course will take a measured pace through the material, students should be prepared for advanced topics that will be thoroughly explained.

This workshop will be presented in English with two presenters, one who is bi-lingual in Finnish and English and the other English only.

Prerequisites:
* All participates will need to bring a laptop pre-configured to the workshop.
* Participates must have access to add and modify software on their laptops.
* Detailed setup instructions will be shared couple of weeks before workshop day.
* Configure your laptops well before the workshop day.

Any special needs should be requested through the conference organizers, at best two weeks prior to the workshop. We will do our best to accommodate any needs and will communicate back either our ability or inability to meet those needs.",
                  bio: "Ed Manlove has been a part of the Robot Framework community since 2011. He inherited the leadership of the Selenium2Library project from Ryan Tomac sharing it with Jeremy Johnson and recently passing on that role to Tatu Aalto. He is the author of a couple libraries dealing with timing issues within AJAX enabled websites. Ed is currently a Senior Software Test Engineer testing with Robot Framework and taught several teams how to test with Robot Framework. A member of the Selenium user community Ed has presented at the Selenium Conference, ran an unconference focusing on user issues, and volunteered at the conferences (even being a maître d').",
                  imgUrl: 'rf-icon-500-White.png'
                }


              /*  { type: "workshop", author: "Elias Hachichou, Kristina Sabotic",
                  title: "End-to-end testing through multiple interfaces",
                  description: "13:00-16:00<br>Welcome to this fun group exercise in how to build end-to-end test flows that can cover any type of interface for multiple applications in the same script. It will be a bonanza in problem solving, trying new libraries, exploring new ways of working – and music!",
                  descriptionExpanded: "Adwisit works with automating tests for end-users that have many integrating systems from different suppliers and little to no own development. To test full business processes from end to end we combine different tools and libraries and usually let our robots work the same way a user does. In this workshop, we will work together to script a flow through different interfaces and applications. We will introduce the way we are working with our customers, but instead of warehouse management and ERP systems, we will work with fun test flow through applications that anyone can access.<br><br>You should already be acquainted with working with RF. We will challenge you with a flow to script, but also provide a step-by-step solution suggestion so you can work in a pace that suits you. This is a fun workshop that we already have run variants of live, where it was a success. The ideal participant is someone who knows RF a bit, but have previously focused on testing one system or through one interface.<br><br>To accommodate different levels of users, we will provide the step-by-step solution from the start. That way, an advanced participant can move forward in their own pace, while less experienced participants can choose how much help to use to keep up. Since we are two hosts, we can cover all questions that arise. We also always have checkpoints where we make sure everyone has finished up to that point. Participants will need to bring their own computer, and have an installation of Python 3, and we will provide an installation package.<br><br><h3>At least basic knowledge of Robot Framework is recommended.</h3>",
                  bio: "<h3 class='mb-0 mt-2'>Elias Hachichou</h3>I’m a tester and a developer living and working in Stockholm, Sweden. Have a little more than a year of experience with Robot Framework and have built several libraries for it. Big Open Source and Linux enthusiast and I wish to contribute to the RF community through this workshop and through publishing some libraries in the future.<br>I spend a lot of time learning obscure things. Currently working on becoming a vim text editor expert.<h3 class='mb-0 mt-2'>Kristina Sabotic</h3>My professional roots are in test leading, but I have shifted towards test automation - because it's so much fun! I thrive on solving challenging technical issues, as much as I thrive on being the spider in the web, as a test leader often is.<br>I live in Stockholm, with a hubbie and two kids. Currently we spend every weekend renovating an old holiday house we bought last year.<br>If you don’t feel like gibbering more about RF, feel free to come and discuss knitting with me - I would love to learn which is Helsinki´s best yarn shop. Every time I have a chance to sit down a few minutes, you can find a knitting in my hands. At the moment it's a sock with pink flamingoes on."},
                { type: "workshop", author: "Tommi Oinonen",
                  title: "Get to grips with your test results",
                  description: "09:00-12:00<br>Are your test results drowning you? Would you like to archive your results for later inspection and analysis but available tools do not fit your needs? Would you want all your test results in the same place with the Robot Framework results? Good news – we developed a solution for these issues.",
                  descriptionExpanded: "If you have any of these issues (or any others) now there is a solution. SALabs has been developing a set of tools for managing your test results and the fundamental part of this tool set is the <a href='https://github.com/salabs/TestArchiver#testarchiver' target='blank'>TestArchiver</a>. It is a tool very similar to <a href='https://github.com/robotframework/DbBot' target='blank'>DbBot</a> (not maintained anymore) but much more capable. You can view it as DbBot 2.0 (or actually maybe 3.0).<br><br>The goal of the workshop is to explain the most useful features and give tips on how the best leverage the tool for:<br>* Collect almost all test execution data from RF tests in efficient and tested data structure<br>* Organise results arbitrarily into builds and different series of builds<br>* Collect results from different testing frameworks in to the place<br>* Run tests in parallel or at different times and organise them together for reporting<br>* Collect performance data on tests and keywords<br>* Profile the execution trees allowing you to find particular failures<br>* Set up reporting that allows complex and dynamic test execution<br>* Collect the vital data for machine learning algorithms in the feature<br><br>Or we can try solving your specific reporting and data collection challenges.<br><br>The basic usage of TestArchiver is very simple but since the tool is specifically designed to solve complex reporting issues there are some tips and tricks best explained in a workshop. Here I am talking about tens of thousands of RF test cases executed in multiple environments and multiple teams in complex and dynamic schedules.<br><br>In the same RoboCon SALabs is also going to premier a tool for browsing and managing tests archived using the TestArchiver so this workshop will allow you to also start using the managing tool with maximum benefits.<br><br><h3>For all skill levels</h3>",
                  bio: "Tommi Oinonen has six years of experience in test automation and supporting teams with testing infrastructure and reporting. Currently working as a consultant at Siili Solutions in Software Automation Laboratories (SALabs) unit. SALabs is aiming to move both state-of-the-practice and state-of-the-art of software automation using and developing open source tools and technologies. For the last two years researching and implementing test prioritization techniques as part of the TESTOMAT project." },
                { type: "workshop", author: "Adrian Yorke",
                  title: "Test Automation for the Enterprise Data Warehouse or Teaching an Old Dog New Tricks!",
                  description: "09:00-12:00<br>The concept of data warehousing dates back to the late 1980s so you would be forgiven for thinking that test automation has little to offer this domain. OP needed to find a way of improving the quality of DW solutions: enter Robot Framework. You really can teach an old dog new tricks!",
                  descriptionExpanded: "<br><h2 class='no-arrow'>Workshop Outline Agenda</h2><br><h3 class='mb-0'>Preparation</h3>* Installation of Python<br>* Installation of Robot Framework<br>* Clone github repository for participants that wish to follow along<br><br><h3 class='mb-0'>Python Database API Specification v2.0</h3>* https://www.python.org/dev/peps/pep-0249/<br>* Python Database API Specification v2.0<br><br><h3 class='mb-0'>Robot Framework Database External Library</h3>* <a href='http://franz-see.github.io/Robotframework-Database-Library/' target='blank'>http://franz-see.github.io/Robotframework-Database-Library/</a><br>* <a href='https://github.com/franz-see/Robotframework-Database-Library' target='blank'>https://github.com/franz-see/Robotframework-Database-Library</a><br>* Review the tests found in test subfolder.<br>* Why SQLite?<br>* Work through SQLite3_DB_Tests.robot and check our installation is working.<br><br><h3 class='mb-0'>Robot Framework Testing with Teradata</h3>* Vendor-specific Database Interfaces<br>* <a href='https://wiki.python.org/moin/DatabaseInterfaces' target='blank'>https://wiki.python.org/moin/DatabaseInterfaces</a><br>* Teradata DevOps - A Python Module to make it easy to script powerful interactions with Teradata Database in a DevOps friendly way.<br>* <a href='https://github.com/Teradata/PyTd' target'blank'>https://github.com/Teradata/PyTd</a><br>* ODBC vs REST API<br><br><h3 class='mb-0'>Teradata Database Library (in-house development @ OP)</h3>* Let's look at some of the additional keywords we have added at OP<br>* Discuss the different methods of extending keywords both locally and at group level<br>* Smoke Testing<br>* Functional Testing<br>* Regression Testing<br><br><h3 class='mb-0'>Test Automation with Jenkins CI</h3>* Continuous Integration 101<br>* Introducing EDW Test Runner for batch testing<br><br><h3 class='mb-0'>IBM InfoSphere DataStage Library (in-house development @ OP)</h3>* Robotic Process Automation (RPA)<br>* Main use case: smart data loading<br><br><h3 class='mb-0'>The future - what are we working on next @ OP?</h3>* Fully Automated Smoke Testing<br>* Jira & ServiceNow RPA Libraries<br>* AWS Cloud Workflow<br>* Control-M Workload Automation<br>* Kibana Dashboard Integration<br>* Integrating Machine Learning and Data Science<br><br>Pre-installation of Python, Robot Framework & Robotframework-Database-Library (External Library) is recommended if participants wish to follow along and try some of the code during the workshop. Passive mode welcome but I ask participants to be focused.<br><br><h3>For all skill levels</h3><br>",
                  bio: "Adrian Yorke is a senior Data Specialist and DevOps Engineer at OP, one of Finland's largest and oldest Financial groups.<br>* Driving force behind the adoption of DevOps and Test Automation using Robot Framework in the Data Warehousing tribe.<br>* During 2019 authored and presented a Python Summer Camp workshop series.  Some of the sessions had 60+ live attendees even though it was held during the month of July.<br>* Tech interests: Python, Raspberry Pi projects & recently I've been studying machine learning and data science.<br>* When I'm not being a geek: swimming (former national championship swimmer), long distance running (I actually completed the London marathon!), carpentry & just being there for my daughter and helping her grow." },
                { type: "workshop", author: "Joshua Gorospe", title: "Strategies for creating your own conversational test assistant with Robot Framework and other tools",
                  description: "13:00-16:00<br>Wouldn't it be nice to have a conversational approach to working with Robot Framework for RPA tasks and testing? In this workshop I will share some examples to help you come up with ideas to make your own conversational test assistant.",
		              descriptionExpanded: "<h2 class='no-arrow'>Workshop Idea</h2>* Strategies for local machine and remote test triggering using the conversational test assistant with Robot Framework and various tools.<br>* I have created a customizable conversational assistant using <a href='https://github.com/jg8481/leon' target='blank'>leon-ai</a>, that can be used as a template. I will demonstrate how it can help with various workflows for testers and possibly non-testers too.<br>* Demonstrate how this assistant can be used to control test processes and RPA tasks with your voice or with a text message sent directly to the assistant.<br>* Demonstrate how to trigger Robot Framework through a Docker container running a <a href='https://github.com/adnanh/webhook' target='blank'>Go-lang Webhook</a> and the conversational test assistant.<br>* Demonstrate how to use the conversational test assistant with other tools to share test results and notify your team.<br><br><h3>For all skill levels</h3>",
                  bio: "<a href='https://leanpub.com/toolstrategiesforlonetesters' target='blank'>Joshua is currently writing a book.</a> He was a Senior Test Engineer in Intersection Co. (a Sidewalk Labs and Alphabet owned company) and lead tester for the Intersection (ICS) Connected Communities Team working on test design and test strategy leadership for several initiatives with Hudson Yards, Related Company, and other clients. There he ran, monitored, and built the test infrastructure for the ICS (Intersection Consulting & Solutions) Buildkite CI pipelines. He also created and maintained several types of daily tests for the Hudson Yards Technology Platform, a technology platform used to integrate multiple building management systems for security, facial recognition, surveillance, visitor management systems, and building sensor data. He previously worked on the Hertz eCommerce Test Tools Team for approximately 5 years." },
                { type: "workshop", author: "Jani Mikkonen",
                  title: "Moving from Python 2 to Python 3 and learn new tricks while doing it",
                  description: "09:00-12:00<br>Going through the steps of porting or ensuring your libraries are Python 3 ready. Step by step guide and overview of tools and practices to help you take the steps for new brave world of Python 3 and learn new techniques to increase code quality afterwards. Workshop utilizes a set of existing libraries that are then ported to be useable within Python 3 ecosystem.",
                  descriptionExpanded: "<h2 class='no-arrow mb-0'>Audience</h2>People working on integration and/or development of robot framework libraries in any fashion.<h2 class='no-arrow mb-0 mt-3'>Requirements</h2>* Laptop with working python and pip <br>* Some hands on experience of with extending robot framework via python<h2 class='no-arrow mb-0 mt-3'>Objectives</h2>Attendees have gone thru an experience by porting a robot framework library to python3. During the project, people should learn about how to apply static analysis, testing, code coverage, virtual environments and coding practices into the porting process and how those steps can help even after the project.<h2 class='no-arrow mb-3 mt-3'>Detailed abstract</h2><h3 class='mb-0 mt-2'>Intro</h3>Workshop starts with the quick recap of what's to be archived by the end of the workshop<h3 class='mb-0 mt-2'>Tests, tests and more tests</h3>Succesful and easy transformation from python 2 to 3 starts with good set of tests.  In this section we'll be implementing a set of new testsuites and/or adding and fixing existing ones.<h3 class='mb-0 mt-2'>Tooling for the journey</h3>In order to start the journey, one needs working environment to test with multiple versions of python and how we can produce information about  what and where changes are needed by utilizing static analysis, code coverage measurements. And then making changes with automated tooling and how different tools can help with each other.<h3 class='mb-0 mt-2'>Old and new code</h3>In this section, we'll cover some of the main topics that have changed since introduction of Python3 that need to be modified. And what sort of new features are available that could be used to ease the development and improve code quality.<h2 class='no-arrow mb-0 mt-3'>Outline</h2>1. Intro (15 mins)<br><span class='ml-4'>1. Who am I?</span><br><span class='ml-4'>2. Why we are here.</span><br>2. Tests, Tests and More Tests.  (20 mins)<br>3. Tooling For The Journey. (90 mins)<br><span class='ml-4'>1. Virtual Environments And Art Of Choosing Your Python Interpreter</span><br><span class='ml-4'>2. Code Coverage For Clarity</span><br><span class='ml-4'>3. Static Analysis To The Rescue</span><br><span class='ml-5'>1. Code Analysis</span><br><span class='ml-5'>2. Type Checking</span><br><span class='ml-4'>4. Code \"Converters\"</span><br><span class='ml-4'>5. Putting it all together.</span><br>4. Old And New Code (30 mins)<br><span class='ml-4'>1. Old things that need to be checked</span><br><span class='ml-4'>2. And new things to be had!</span><br><br><h3>For all skill levels</h3>",
                  bio: "Jani Mikkonen - Automagician At Large - is recent convert to Robot Framework with few pull requests under his belt  so far but not a new comer to test automation and software development in general. He's currently maintaining few opensource projects like static analyzer frontend for C++ and tool to automate webdriver binary installations and on his spare time he's working on SeleniunTestability library that allows automatic waiting of asyncronous events from css animations to ajax requests. Jani works as a Testing Engineer at Varjo." },
                { type: "workshop", author: "Asko Soukka",
                  title: "Authoring Robot Framework tests and tasks with JupyterLab",
                  description: "13:00-16:00<br>What's better than writing plain language testing and automation with Robot Framework? Doing that interactively! We will deliver gentle hands-on introduction into writing Robot Framework tests and tasks using JupyterLab: modern and easy to use interactive computing and authoring environment.",
                  descriptionExpanded: "JupyterLab is a free and open source interactive computing environment from Project Jupyter. For Robot Framework users, JupyterLab provides an intuitive test authoring user-interface with many IDE-like features and built-in interactive test and keyword execution – logs and reports embedded.<br><br>For organisations, JupyterLab enables an option for controlled cloud-like deployment model called JupyterHub, where test authors may write and execute tests directly from their web browsers, without need of direct network access for the system under test from their own computers.<br><br>In this workshop we cover:<br><br>* installing JupyterLab with Robot Framework integration<br>* walkthrough on JupyterLab IDE features for Robot Framework<br>* authoring and executing Robot notebooks with JupyterLab<br>* authoring and using custom keyword libraries with JupyterLab<br>* authoring and using Python keyword libraries with JupyterLab<br>* advanced features of our Robot Framework Jupyter integrations<br>* writing interactive Robot Framework tutorials in JupyterLab<br>* executing Robot notebooks from command line<br>* exporting Robot notebooks into .robot-files<br><br>A testimony about RobotLab: \"After trying up few different setups ofRobot Framework combined with variety of GUI (graphical user interface) tools it turned out that there was a much easier way to do it. By installing Robotlab, the package mentioned earlier, the user can really focus on the testing  part  and  not  a  complicated  set  up.  This  is  especially  good  if  the  tester  is  not familiar with programming and updating advanced user settings for their operating sys-tem. GUI also provides testers easier ways to write and execute tests and view the test logs and screen captures.\" <a href='https://www.theseus.fi/bitstream/handle/10024/169008/Tiia-Rautavesi-thesis.pdf?sequence=2&isAllowed=y' target='blank'>(Link to the thesis)</a><br><br><h3>For all skill levels</h3>",
                  bio: "Asko Soukka is the author of RobotKernel, which is the first Robot Framework integration developed for the popular interactive computing environment called Jupyter. Asko bootstrapped the work on RobotKernel at the sprints of RoboCon 2018, and together with Nicholas Bollweg from Project Jupyter, presented the project at RoboCon 2019. Asko works as a Software Architect at Digital Services of University of Jyväskylä, where Robot Framework is used for both acceptance testing and business process automation. When working on those topics, Asko continues to explore new ways to ease test and task authoring with Jupyter." },
                { type: "workshop", header: 'Full-day workshops (09:00-16:00)', margin: true },
                { type: "workshop", author: "Jenna Kaisanlahti, Valtteri Kukkola",
                  title: "Robot Framework hands-on",
                  description: "A hands-on introduction to test automation with Robot Framework. No prior experience on Robot Framework or test automation is required.",
                  descriptionExpanded: "The target of this workshop is to learn the basics of Robot Framework. This includes creating test cases and new domain specific higher level keywords, running tests and analyzing results, as well as understanding the overall architecture of the framework and what is available in the wider Robot Framework ecosystem.<br><br>This workshop is especially targeted for testers, programmers, and other development team members, but it is suitable for everyone who is interested in Robot Framework. Participants should have some understanding about software development and testing, but no programming skills or previous test automation experience is necessary.<br><br>Participants should have a laptop with Python 3.6 or newer installed. Operating system does not matter, but participants should be comfortable using the machine and have local admin rights to it. It is possible to work also in pairs using only one laptop. The workshop will be held in English.<br><br><b>The workshop focuses on test automation purposes, but we warmly welcome newcomers with RPA (Robotic Process Automation) intentions as well. Note that applying Robot Framework to RPA typically requires further training and python skills, though.</b><br><br><h3>Recommended for beginners!</h3>",
                  bio: "<h3 class='mb-0 mt-2'>Jenna Kaisanlahti</h3>Jenna Kaisanlahti is a consultant combining the roles of test automation engineer and software developer. She has several years of test automation experience with Robot Framework in medical, finance and entertainment business domains. Jenna held the well-received hands-on workshop at robocon 2019.<br>In her free time, Jenna is either playing the saxophone or enjoying some live music that Helsinki jazz scene has to offer.<h3 class='mb-0 mt-2'>Valtteri Kukkola</h3>Valtteri is a Software Developer and Software Automation Specialist. He works as a consultant in software development projects with variety of roles. Valtteri's professional interests lie in Cloud computing, Containers, Full-Stack Development and properly automating the manual labour in RPA and Test automation tasks.<br>Valtteri has experience with using Robot Framework for web automation in industrial domain as well as in more general web based applications. His technical interests includes Robot Framework, Decision based automation, and Functional Programming (Clojure)." },
                { type: "workshop",
                  author: "Ed Manlove, Tatu Aalto",
                  title: "Advanced SeleniumLibrary and Robot Framework [SOLD OUT]",
                  description: "Techniques and tooling to ease up web testing and automation by expert developers and maintainer of the SeleniumLibrary. If you need to beef up your Selenium tests, this is the course for you.",
                  descriptionExpanded: "<h2 class='no-arrow mb-3 mt-5'>Outline/overview of the workshop</h2><h3 class='mb-0 mt-2'>Browser Configuration</h3>We will be taking a look at desired capabilites, Selenium options and Firefox profile. Differences between Open Browser and Create WebDriver keywords will be highlighted. Finally we will build small examples showing how to configure the browser in diffrent situations.<h3 class='mb-0 mt-2'>Advanced Debuging</h3>The course will cover when encountering flaky test(s), where to look and how to stabilise them.<h3 class='mb-0 mt-2'>Parallel Execution</h3>We'll discuss running SeleniumLibrary in parallel with pabot and Selenium grid.<h3 class='mb-0 mt-2'>API</h3>SeleniumLibrary has an public API which allows users to extend on top of the SeleniumLibrary. Here we take a look what is available in the public API.<h3 class='mb-0 mt-2'>Expanding the library</h3>Looking at different pros and cons we will talk about how to extend SeleniumLibrary as well as building a new library and the Plugin API. We will show a small exmample. And we will discuss overriding existing keywords with functionality not covered by Selenium.<h3 class='mb-0 mt-2'>EventFiringWebDriver</h3>Using and abusing EventFiringWebDriver for monitoring events and how they affect the interactions with SUT will be covered.<h3 class='mb-0 mt-2'>Page Objects</h3>What are page objects and where it might be useful.<h3 class='mb-0 mt-2'>Python Page objects verses SeleniumLibrary</h3>Looking inside of a page object library and how to build one.<h3 class='mb-0 mt-2'>Checking for time of tests</h3>We will talk about verifying and reacting to execution times of tests/keywords/suites either via tags or the separate Timer library.<h3 class='mb-0 mt-2'>Using Javascript to interact with SUT</h3>Extending SeleniumLibrary with new keywords where functionality is implemented in Javascript.<h2 class='no-arrow mb-3 mt-5'>Learning Outcomes</h2>At the end of the workshop, user should have broad overview of advanced features of SeleniumLibrary, web automation and ways to extend and debug test tooling.<h2 class='no-arrow mb-3 mt-5'>Target Audience</h2>This workshop is for people with previous hands on experience with testing in Robot Framework & SeleniumLibrary. Students should already have experience testing web applications, know how to identify locators for webelements and validate those loctors, and feel comfortable working with SeleniumLibrary. Although the course will take a measured pace through the material, students should be prepared for advanced topics that will be thoroughly explained.<br><br>This workshop will be presented in English with two presentors, both who are bi-lingual in Finnish and English.<h2 class='no-arrow mb-3 mt-5'>Prerequisites</h2>* All participates will need to bring a laptop preconfigured to the workshop.<br>* Particapte must have access to add and modify software on their laptops.<br>* Detailed setup instructions will be shared couple of weeks before workshop day.<br>* Configure your laptops well before the workshop day<br><br>Any special needs should be requested through the conference organizers, at best two weeks prior to the workshop. We will do our best to accomidate any needs and will communicate back either our ability or inability to meet those needs.",
                  bio: "<h3 class='mb-0 mt-4'>Ed Manlove</h3>Ed Manlove has been a part of the Robot Framework community since 2011. He inherited the leadership of the Selenium2Library project from Ryan Tomac sharing it with Jeremy Johnson and passing on that role to Tatu Aalto. He is the author of a couple libraries dealing with timing issues within AJAX enabled websites. Ed is currently a Senior Software Test Engineer at Cox Automotive testing with Robot Framework and taught several teams how to test with Robot Framework. A member of the Selenium user community Ed has presented at the Selenium Conference, ran an unconference focusing on user issues, and volunteered at the conferences (even being a maître d').<h3 class='mb-0 mt-5'>Tatu Aalto</h3>Tatu Aalto is the current lead developer of the <a href='https://github.com/robotframework/SeleniumLibrary' target='blank'>SeleniumLibrary</a> and he has been working with Robot Framework since 2011. In the 2011 he was a regular user, by sending many questions and problems to the community. After some time Tatu started to answer questions  send by other users and he did provide his very first pull request to the Robot Framework core in 2012. Tatu has been active community member all these years and 2016 he started as an SeleniumLibrary lead developer.<br><br>Tatu has used the Robot Framework in several work places to to guide and aid companies in their test automation efforts. Currently he is working at F-Secure as a Software Developer In Test, automating windows antivirus client for business users." },
                { type: "workshop", author: "Eeva Terkki, Ismo Aro",
                  title: "Hands-on Windows GUI automation with Robot Framework",
                  description: "Fully hands-on workshop to learn how to automate Windows GUI applications using Robot Framework and WhiteLibrary.",
                  descriptionExpanded: "In this workshop we will create test cases for Windows GUI applications. For this, we are using Robot Framework GUI testing library called <a href='https://github.com/Omenia/robotframework-whitelibrary' target='blank'>WhiteLibrary</a>, which supports automating Win32, WinForms and WPF applications. We will learn how to find different UI controls from the GUI and how to interact with them using WhiteLibrary. We will also learn how to write good quality test cases for your Windows GUI.<br><br>This session is fully hands-on, so bring your own Windows laptop with Python 2.7, 3.5 or 3.6 installed. Local admin rights are also recommended to be able to install additional software during the workshop.<br><br><h3>At least basic knowledge of Robot Framework is recommended.</h3><h3>Maximum number of participants is 10.</h3>",
                  bio: "<h3 class='mb-0 mt-2'>Eeva Terkki</h3>Eeva is a test automation specialist and one of the developers of WhiteLibrary. She has worked on test automation with Robot Framework in several projects and has an interest in developing automation tools. She is also very fond of birds.<h3 class='mb-0 mt-2'>Ismo Aro</h3>Ismo Aro is Partner/CTO in NorthCode and Chairman of the Board in Robot Framework Foundation. He has a strong focus in modernizing the ways of working and the quality of work. His previous roles have included Test Engineer, Scrum Master, Product Owner, Test Automation Specialist, Agile Coach, Lead QA Engineer and Partner and his employers were Nokia, Ericsson, Basware and Omenia." },
                { type: "workshop", author: "Markus Stahl, Christian Kokoska",
                  title: "Integrating Robot Framework to devops infrastructure",
                  description: "So, you got yourself some compelling test suites in Robot Framework. Now what? How do you execute tests automatically? How do you analyse test results? How do you monitor test runs? Join this workshop and learn from examples how to integrate your tests in your infrastructure.",
                  descriptionExpanded: "This course is best adviced for beginners. If you are uncertain how to start integrating Robot Framework in your infrastructure or you would like to learn by example, this course is for you.<br><br>In this course, you will learn, how to:<br>1. Manage version from tests<br>2. Apply <b>clean test</b> rules<br>3. Manage test executions<br>4. Create reports from test results<br><br>Tools used in this workshop are: Jenkins, Gitlab, PostgreSQL, DbBot and RFlint. The tools themselves are not mandatory for achieving test management with open source tools. Learnings from this workhops can be applied to most of competitive tools.<br><br><h3>Recommended for beginners!</h3>",
                  bio: "<h3 class='mb-0 mt-2'>Markus Stahl</h3>Markus has 10 years working experience as system administrator, java developer and lean management consultant. Since 2016 he's Automation Engineer for the quality assurance department at Deutsche Post Adress. His favorite tools are Robot Framework, Gitlab and Mattermost. Besides automation his favorite activities are gardening and entertaining his kids.<h3 class='mb-0 mt-2'>Christian Kokoska</h3>" },
                { type: "workshop",
                  author: "Pekka Klärck",
                  title: "Extending Robot Framework (advanced) [SOLD OUT]",
                  description: "In this workshop you will learn how to extend Robot Framework using various different interfaces. The first half of the workshop is dedicated to the library API, starting from basics and quickly continuing to more advanced topics like the dynamic library interface (used nowadays by SeleniumLibrary) and automatic argument type conversion. During the second half you will get familiar with other extending and integration possibilities such as the listener API, modifying tests dynamically before execution, starting execution programmatically, analyzing results, and new parsing APIs in Robot Framework 3.2.",
                  descriptionExpanded: "This workshop is for you if you already know basics of using Robot Framework, preferably also basics of writing tests libraries, and want to take your skills to the next level. These skills make it easier to adapt the framework to your own needs in different contexts.<br><br>The workshop is 100% hands-on, no slides, learn-by-doing. In addition to learning from the person who has designed these powerful APIs, you have a change to ask hard questions related to Robot Framework from its creator.<br><br>Participants should know basics of Robot Framework, including test library API, and Python programming. Participants should bring their own laptop with Python 3.6 or newer and Robot Framework 3.2 or newer installed. They should also have adequate admin rights to install possible additional Python modules using pip. A text editor or an IDE for writing Python code and Robot Framework tests is needed as well.<br><br><h3>Recommended for advanced users.</h3><h3>Max number of participants: 16</h3>",
                  bio: "Pekka Klärck is a tester, developer and independent consultant from Finland. He is the original author and lead developer of Robot Framework."}
              ] */
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
                { author: "Jeff King", title: "ROBOT FRAMEWORK AND THE ONE MAN ROBOT BAND", url: "https://www.youtube.com/embed/0yEnJt6Sf50" },
                { author: "Anaïs van Asselt", title: "IMPLEMENTING A TEST AUTOMATION ARCHITECTURE IN A GOVERNMENT ORGANIZATION", url: "https://www.youtube.com/embed/Asy5xHl0uRA" },
                { author: "Antti Karjalainen", title: "THE OPEN RPA ECOSYSTEM", url: "https://www.youtube.com/embed/cO6FxG-RAtQ" },
                { author: "Petteri Mannersalo", title: "ROBOT FRAMEWORK AS AN ENABLER FOR INTELLIGENT PROCESS AUTOMATION", url: "https://www.youtube.com/embed/ViSKJiuT6xo" },
                { author: "Tuomas Lempiäinen", title: "QA DRIVEN RPA AT VEIKKAUS", url: "https://www.youtube.com/embed/3Drlg1q4fkM" },
                { author: "Virpi Luostarinen, Mikael Siirtola", title: "RPA ON RAILS: AUTOMATING MANUAL PROCESSES AT VR", url: "https://www.youtube.com/embed/R7bNgxPjDJ4" },
                { author: "Kristina Sabotic", title: "END-TO-END TESTING FOR END-USERS", url: "https://www.youtube.com/embed/qkQpzGA51go" },
                { author: "Luca Giovenzana, Angelo Caovilla", title: "BEWARE THE BRITTLE DRAGON", url: "https://www.youtube.com/embed/rgpqyPblo28" },
                { title: "Lightning Talks I", url: "https://www.youtube.com/embed/0sKyczF0SDE" },
                { title: "Lightning Talks II", url: "https://www.youtube.com/embed/Xb9npqzJkFY" },
                { title: "Lightning Talks III", url: "https://www.youtube.com/embed/5axgakabN_0" },
                { title: "Lightning Talks IV", url: "https://www.youtube.com/embed/AZOZIW1BJJs" },
                { title: "Lightning Talks V", url: "https://www.youtube.com/embed/G24aU0unvVE" },
                { title: "Lightning Talks VI", url: "https://www.youtube.com/embed/oo11OlAaWWA" },
                { title: "Lightning Talks VII", url: "https://www.youtube.com/embed/7Ks8XSM2Uoc" },
                { title: "Lightning Talks VIII", url: "https://www.youtube.com/embed/jS-HZqLwmIY" },
                { title: "Lightning Talks IX", url: "https://www.youtube.com/embed/HTZ-R3HgByg" },
                { author: "Ismo Aro", title: "Day II", url: "https://www.youtube.com/embed/m1KA3PVukhg" },
                { author: "KEYNOTE: Pekka Klärck", title: "WHAT'S NEW? WHAT'S NEXT? WHO ARE WE?", url: "https://www.youtube.com/embed/DRAu1du3UFU" },
                { author: "Akseli Lukkarila", title: "ACCEPTANCE TESTING A REAL-TIME MUSIC EDUCATION APPLICATION WITH AUDIO", url: "https://www.youtube.com/embed/Fkh-EQ5O7zo" },
                { author: "Maria Prokhorova", title: "NEW IMAGE LIBRARY FOR ADVANCED IMAGE PROCESSING", url: "https://www.youtube.com/embed/AWuh-r-T6Yo" },
                { author: "Tatu Aalto", title: "SELENIUMLIBRARY 4.0: PLUGIN API AND EVENT FIRING WEBDRIVER SUPPORT", url: "https://www.youtube.com/embed/zyNZRTR821Q" },
                { author: "René Rohner", title: "DATADRIVER OR: HOW I LEARNED TO STOP WORRYING AND LOVE OPEN SOURCE", url: "https://www.youtube.com/embed/RtEUr1i4x3s" },
                { author: "Tommi Oinonen", title: "SELF MANAGING TESTING PIPELINES", url: "https://www.youtube.com/embed/W3JUzeV8lp4" },
                { author: "Juho Saarinen", title: "ROBOT FRAMEWORK REMOTE LIBRARY IN PRACTICE (WITH DEMOS)", url: "https://www.youtube.com/embed/B-67yPvMh8Q" },
                { author: "Maciej Brzozowski", title: "MICROSERVICES TESTING USING ARGO: CONTAINER-NATIVE WORKFLOWS FOR KUBERNETES", url: "https://www.youtube.com/embed/xBBTvv4mz0U" },
                { author: "Joonas Köppä, Riku Halonen", title: "ORCHESTRATING ROBOT FRAMEWORK TEST CONTAINERS AND REMOTE LIBRARIES IN KUBERNETES", url: "https://www.youtube.com/embed/SypNjILTRl0" },
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
                { author: "Ismo Aro / Pekka Klärck", title: "Welcome back! What's new since RoboCon 2018?", url: "https://www.youtube.com/embed/wBhY5Z2RoqQ" },
                { author: "Antti Karjalainen", title: "The start of the open source RPA movement", url: "https://www.youtube.com/embed/uv6dvcoxdvU" },
                { author: "Juho Saarinen", title: "Evolution of Robot Framework user", url: "https://www.youtube.com/embed/ynUmfWvZxpw" },
                { author: "Tatu Aalto", title: "Decade with SeleniumLibrary and browsers' UI automation", url: "https://www.youtube.com/embed/HVAnWH8t4rU" },
                { author: "Brady Hill", title: "RobotFramework for Embedded Software Testing", url: "https://www.youtube.com/embed/0q4-AjqpO9M" },
                { author: "Nguyen Huu Bach", title: "RENAT - a network testing plugin based on Robot Framework", url: "https://www.youtube.com/embed/FSjmJLq4S4A" },
                { author: "Mikael Siirtola", title: "Robot Framework with Patient Monitors: Test Automation at GE Healthcare Finland", url: "https://www.youtube.com/embed/gxbz5QJWdq4" },
                { author: "Päivi Raulamo-Jurvanen", title: "Practical Experiences on Evaluating Software Testing Tools", url: "https://www.youtube.com/embed/2qKa3GEqcvY" },
                { author: "Nicholas Bollweg / Asko Soukka", title: "Robots from Jupyter The Future of Authoring Tests and Tasks", url: "https://www.youtube.com/embed/rbYF_RmiAR8" },
                { author: "Joonas Lehtimäki", title: "Dynamically scalable test environment on top of Kubernetes", url: "https://www.youtube.com/embed/ivLsjU77Q6c" },
                { author: "Oleksandr Kravchenko", title: "Dynamic Generation of Model Based Testcases Using Listener Interface Version 3", url: "https://www.youtube.com/embed/qtEYZ5Om1Qk" },
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
                { author: "Ismo Aro", title: "Robot Framework Foundation: Welcome to RoboCon", url: "https://www.youtube.com/embed/eAG18mS8UXA" },
                { author: "Pekka Klärck", title: "How Did We Get Here? Where Do We Go Next?", url: "https://www.youtube.com/embed/6Kb1M3NECic" },
                { author: "Régis Déau", title: "The Naked Truth About Successful Test Automation Journey", url: "https://www.youtube.com/embed/Z-9XIGZBf9U" },
                { author: "Aldina Codesso-Lipponen", title: "Mega Robot Projects - What To Expect", url: "https://www.youtube.com/embed/KsRP9TsZwEQ" },
                { author: "Asko Soukka", title: "Robot Framework in Plone CMS Project", url: "https://www.youtube.com/embed/iJEWobuwPeI" },
                { author: "Ed Manlove", title: "The Importance of Open Source Communities", url: "https://www.youtube.com/embed/2GDrtvz_1Ds" },
                { author: "Anssi Syrjäsalo", title: "Towards Contract - Based API Testing with a New Rest Json Test Library", url: "https://www.youtube.com/embed/TMU4WCIq3NA" },
                { author: "Tatu Aalto", title: "Extending SeleniumLibrary 3.0", url: "https://www.youtube.com/embed/ZPqQ-RozkYQ" },
                { author: "Martin Taylor", title: "Design Patterns for Efficient Multi-Platform", url: "https://www.youtube.com/embed/QDaXTkiviT0" },
                { author: "Mikko Korpela", title: "Parallel test execution with Pabot", url: "https://www.youtube.com/embed/i0RV6SJSIn8" },
                { author: "", title: "Lightning Talks", url: "https://www.youtube.com/embed/xb1Udosom6o" },
              ]
            }
          }
        }
      ]
    }
  }
}

function utc_time(dataTime) {
  var locale = window.navigator.userLanguage || window.navigator.language;
  moment.locale(locale);
  return moment.tz(dataTime, "Africa/Freetown");
}
function local_time(dataTime) {
  var locale = window.navigator.userLanguage || window.navigator.language;
  moment.locale(locale);
  return moment.tz(dataTime, moment.tz.guess());
}
function local_tz() {
  return moment.tz.guess();
}

</script>
