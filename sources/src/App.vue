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
                { author: "Gojko Adzic",
                  title: "Keynote: You're testing WHAT?",
                  description: "Gojko presents five universal rules for test automation, that will help you bring continuous integration and testing to the darkest corners of your system. Learn how to wrestle large test suites into something easy to understand, maintain and evolve, at the same time increasing the value from your automated tests. See how to bring aspects that people don't even consider automating, such as layout checks and even video into an automated continuously integrated process.",
                  bio: "Gojko Adzic is a partner at Neuri Consulting LLP. He one of the 2019 AWS Serverless Heroes, the winner of the 2016 European Software Testing Outstanding Achievement Award, and the 2011 Most Influential Agile Testing Professional Award. Gojko’s book Specification by Example won the Jolt Award for the best book of 2012, and his <a href='https://gojko.net/posts.html'>blog</a> won the UK Agile Award for the best online publication in 2010.",
                  imgUrl: 'gojko.jpg'
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
                `<p>Blind tickets are available for a discounted price of <span class="blue">99€ + 24% VAT</span>. The regular ticket price will be <span class="blue">149€ + 24% VAT</span> when the conference program is announced.</p>
                <p>For those who can't afford the ticket, budget vouchers are available. Please contact <a href="mailto: rene@robotframework.org">René</a> for more info.</p>
                <div class="ticket-visual_visual" id="ticket">
                <canvas id="ticket-canvas"></canvas>
                <div class="ticket-visual-wrapper">
                  <div class="ticket-visual_profile">
                    <a href="http://tickets.robotframework.org/" class="row ticket-buy-container p-4">
                      <div class="ticket-link col-12 row m-0 p-0">
                        <img src="data:image/png;base64,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ERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAhKxekAECicgERdeQIUvAqP4+8RtmQ/8sfH2LW19EeAfN183f+fZV2YHshmFiCHeCrlfwedwmX8CM6R4hbrX2N5AzEts3Zr7x2kUco7q3cO5lY2LQIV0F+iBezj3XZprEaNwC1SNPnFZPSXVlcAUJ1LI3LoztyJGwa5Rrbm7iimhvgR4I7/zKGSXIkahZigYvwaWicAuAQqZT2auzKWIUSF3hXLVdXmTmTZPaXmjCDi7OxGjQHPwqQIy0lD+CHxAn3BVdmHuRIyqfHBRGSURkwAFfBZzgpRjuxJxc3edpgSouYol8K7YyPcCdyVi5CYB7xVYL58lMHv2ncLekIgLK5jCDUagCjZS5oG8iZhf68hEYFQEvIl4VMVTsiJAAt5EvFZZRaAjgW3H88yf5k3EtXniCtAKgbWVQIbG4UrE+JWzGkDoMhF4jQB/59iFuRJxU5E/XFRGScQmsIo9QarxPYr4FvDcfL2TqhFGNs+yeWpzkbY7EaM4FPCNi+ooiRgE2B+XMQbONaY7ERMkhMzVeJULquY1TeC8udGbDvKY4FyKuAFwju3mGBg61z0BCtjdzd2tiJu77Snacum+NZXgawS2OOE9emL52oklvu9WxCwGhQznivweXsNl4yOwRMpv0QfuVuC2lK5F3CbJAsLf4DXFvITXcJlfAmukdgt/g7qfw2vsu7VRfO50Wz0Uk3djt3fkNk9tx0VgFCvxuEqqbMdGQCIeW8WVrzsCErG7kiqhsRGQiMdWceXrjoBE7K6kSmhsBCTisVVc+bojIBG7K6kSGhsBiXhsFVe+7ghIxO5KqoTGRkAiHlvFla87AhKxu5IqobERkIjHVnHl646AROyupEpobARSibgaG1jlKwIgMEtBIZWIf02RjOYQAWMEfkkRTyoRn6VIRnOIgDECSfo+lYgr/AHwuTHACkcEohFAv19g8Em0CXYGTiViTvkRiSVJaic/7YpAcgLo8wqTXqWamCLeJJqMAr6TkBPR1jRZCDT9/RmTJ1uwKOK/E2Y7xVwSckLgmiodgUbAd5iRfZ7MKOJtstm+TyQhJwau6eITyCVgZLZJ+Ti9S1JC3qWh/aIJZBQwudUn/BdB/MNtBttgzlN8lGzqp4EMqWpKjwQyC5h/HOFnrsS01fdN8n+1IidHrglDEcgsYKbxoNtWxF9CJdZjHAm5BzRdkpeAAQETwFf+0z5OT7D/Fw9ktA3m1qN1xgJo6m4EjAj44VGaET+sxM3XpMtuKUQ7SytyNLQaOBQBIwJmOp/anB5WYr5AcBU237if2bQiZy6Apj9MwJCAt4jwTbP4fl+JGTIO1Njccj+zaUXOXABN/5SAIQEzuE+tgPnix0rMF02g99it+DqzaUXOXABN/52AMQFvIOC3u7Vpvzv9cKxR9/nuCRn3tSJnhK+pvxMwJuAtonqiz0ciZtgQ8vrQiXwvg0nIGaBryu8EjAmYQV1Cn3xC7WZIYAG3YvcIZNItcp0lAsMJsN/g7DsrNu+VFaJfWMkAcUjIvaqoi44lgF7zIeA2cSS0gFsxCbktjLZRCKDRfQm4pYTEFlZUjDgk5LYw2gYlgN7yKeCWEhJcwK2YhNwWRtsgBNDYvgXcUkKiCysqRhwSclsYbQcRQC+NQ8AtJSS8gFsxCbktjLa9CKCRxyXglhISX1hRMeKQkNvCaHsUAfTOOAXcUgKABdyKUchVG5u2IvAaAfTLFM6+sWLz12KO8j6yX1ghgDj+gl/DqyjJalAXBNgf8AXcks2HwH30CxB9BgKJBa4bFESfeV+5hj+atn3lHL09PgIVUqZbsnP8KOVySECDRczJjQp5CBddKwIpCAwWMIMMImIOJCGTgkwEOhMIImDOFkzEHExCJgWZCLxKIJiAOVNQEXNACZkUZCLwLIGgAuYswUXMQSVkUpCJwBMCwQXMGaKImANLyKQgE4EfBKIImKNHEzEHl5BJQSYCP0UTMNlGFTEnkJBJQTZiAlEFTK7RRcxJJGRSkI2QQHQBk2kSEXMiCZkUZCMikETA5JlMxJxMQiYF2QgIJBMwWSYVMSeUkElB5phAUgGTY3IRc1IJmRRkDgkkFzAZZhExJ5aQSUHmiEAWAZNfNhFzcgmZFGQOCGQTMNllFTEDkJBJQVYwgawCJrfsImYQEjIpyAokkF3AZGZCxAxEQiYFWUEETAiYvJ78VcRcEE9OTs4x922u+TWvCBxBwIyAGbOZlbgFiBV5jv2PcP0VxBaKtlYI8HPbKOCVlYAYhzkRMygIeYoNP4CPW5kIWCCwRhAUcG0hmN0YzDxO7wYFUBv4WxzjIzbvfjIRyEWgxsQU7ymc++bM5Eq8Swmr8gSvz+BX8AouE4EUBDaY5BOEu0wx2ZA5zIt4N7nmMZuCfgef7b6nfREYSGCL6yncL/CV1VX3UI5FiXg/AYi6wjG6TASGEKhLEu1+ov8HNJr5BA1F6okAAAAASUVORK5CYII=" alt="Robot Framework logo" class="ticket-profile_image">
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
              text: '<p>TBA!</a>',
              /* talks: [
                { type: "workshop", header: 'Half-day workshops' },
                { type: "workshop", author: "Elias Hachichou, Kristina Sabotic",
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
