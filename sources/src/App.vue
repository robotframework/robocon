<template>
  <div class="row no-gutters">
    <navigation-horizontal :pages="pages"/>

    <div class="col-md-12" ref="content" style="width:unset">
      <app-header/>
      <page-block
        v-for="(page, index) in pages"
        v-bind:page="page"
        v-bind:index="index"
        v-bind:key="index"
        class="pl-md-5 px-lg-2 p-sm-2 p-xs-1 link-fix"
      />
      <app-footer class="mt-0 py-5"/>
    </div>
  </div>
</template>
<script>
import PageBlock from "@/Components/PageBlock.vue";

export default {
  components: {
    PageBlock
  },
  data() {
    return {
      pages: [
        {
          title: "Welcome",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: true,
              header: "Welcome",
              text:
                '<p>RoboCon is an annual gathering for the <a href="http://robotframework.org" target="blank">Robot Framework community</a>. It provides a great possibility to learn from the experts, hear how the framework is used in different places, and most importantly, meet fellow Robot Framework users as well as its developers. <br><br> Date: Thursday, January 17, 2019, 09:00–18:00 (UTC+2) <br> Place: Bio Rex Helsinki, Mannerheimintie 22-24, 00100 Helsinki, Finland<br><br> On top of the RoboCon conference day we have interesting side events where you have a change to network with people from the same community. The schedule for the event week is: <br> <br>Wed, Jan 16: Workshops & Social Dinner (additional cost) <br>Thu, Jan 17: RoboCon Conference & Afterparty<br>Fri, Jan 18: Sprint & sauna (free) <br> <br> RoboCon is organized by Robot Framework Foundation, a non-profit consortium that also sponsors the development of Robot Framework. Possible profits from the conference will be used for this purpose too. </p>'
            }
          }
        },
        {
          title: "Sponsors",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: true,
          data: {
            text: {
              twitter: false,
              header: "Sponsors"
            },
            users: [
              {
                title: "Siili",
                href: "https://www.siili.com",
                img: require("@/assets/img/users/s_siili.png")
              },
              {
                title: "Comiq",
                href: "https://www.comiq.fi/",
                img: require("@/assets/img/users/s_comiq.png")
              },
              {
                title: "HiQ",
                href: "https://hiqfinland.fi/",
                img: require("@/assets/img/users/s_hiq.png")
              },
              {
                title: "knowit",
                href: "https://www.knowit.fi/",
                img: require("@/assets/img/users/s_knowit.png")
              },
              {
                title: "Qentinel",
                href: "https://qentinel.com/",
                img: require("@/assets/img/users/s_qentinel.png")
              },
              {
                title: "Q-factory",
                href: "https://www.q-factory.fi/",
                img: require("@/assets/img/users/s_qfactory.png")
              },
              {
                title: "Sogeti",
                href: "https://www.sogeti.com/",
                img: require("@/assets/img/users/s_sogeti.jpg")
              },
              {
                title: "Testimate",
                href: "https://www.testimate.fi/",
                img: require("@/assets/img/users/s_testimate.jpg")
              },
              {
                title: "Vala Group",
                href: "https://www.valagroup.com/",
                img: require("@/assets/img/users/s_vala.png")
              },
              {
                title: "Etteplan",
                href:
                  "https://www.etteplan.com/expertise/embedded-systems-and-iot/rd-testing-and-validation",
                img: require("@/assets/img/users/s_etteplan.png")
              },
              {
                title: "Symbio",
                href: "https://www.symbio.com/",
                img: require("@/assets/img/users/s_symbio.png")
              }
            ]
          }
        },
        {
          title: "Schedule",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: false,
          user_box_centered: true,
          data: {
            text: {
              twitter: false,
              talks: [
                {
                  title: "8:00 - Registration, Coffee",
                  description: "",
                  imgUrl: [],
                  descriptionExpanded: "",
                  bio: ""
                },
                {
                  title: "9:00 - Pekka Klärck (Eliga)",
                  description: "Welcome back! What's new since RoboCon 2018?",
                  imgUrl: ["Pekka_Klarck.jpg"],
                  descriptionExpanded:
                    "Welcome to RoboCon 2019! In this opening presentation Pekka will go through enhancements to Robot Framework itself and to the ecosystem and the community around it since RoboCon 2018. We will hear about  the cool new features in Robot Framework 3.1 like the RPA support and automatic argument conversion, about new libraries and tools added to the ecosystem, and how the community has been growing.<br><br>After looking at the past we will learn about the interesting future plans and how you can help the community to grow. ",
                  bio:
                    "Pekka Klärck is a tester, developer and independent consultant from Finland with experience from testing and test automation since 2000.<br><br>He is the lead developer of Robot Framework working with it from the very beginning."
                },
                {
                  title: "9:30 - Antti Karjalainen (Siili Solutions)",
                  description: "The start of the open source RPA movement",
                  imgUrl: ["Antti_Karjalainen.jpg"],
                  descriptionExpanded:
                    "Robot Framework 3.1 release brings a set of subtle but hugely important Robotic Process Automation (RPA) features. Namely, RPA reporting will be enabled in the form of a task log. But RPA is going to mean a lot more than just new terminology – it will bring a completely new domain and use case for the entire Robot Framework community. The field of RPA has been this far dominated by closed license-based software and the conventions of RPA haven’t been challenged this far. Robot Framework will go head-to-head with this establishment and challenge the current state-of-the-art in RPA.<br><br>This is a huge opportunity for the whole community. It will bring new development efforts to the tool, benefitting also test automation work in the process. Developers who are interested in getting into new and exciting RPA opportunities will need to recognize the differences between test automation and RPA before diving head first into business process automation. This talk is the starting point for a new open source RPA movement that is set out to change a whole industry.",
                  bio:
                    "Antti Karjalainen is currently the Director of Intelligent Automation at Siili Solutions and a long-time Robot Framework activist. Antti’s vision is to bring Robot Framework into the RPA domain and to change the ways in which we bring AI and machine learning applications into real-world use."
                },
                {
                  title: "10:00 - Break",
                  description: "",
                  imgUrl: [],
                  descriptionExpanded: "",
                  bio: ""
                },
                {
                  title: "10:30 - Juho Saarinen (Eficode)",
                  description: "Evolution of Robot Framework user",
                  imgUrl: ["Juho_Saarinen.jpg"],
                  descriptionExpanded:
                    "Robot Framework's syntax allows it to be utilized by all. But it's structure also allows extending it quite easily. In this talk I present the evolution of a single tester, who started the usage of Robot Framework just for web testing, and ended up writing extensions and publishing libraries for it. And none of this because of \"it's possible\", but because there was need for it. Either by making things possible in general, or making actual testcases doable by others who were not so familiar with the framework (yet).<br><br>The experience with Robot Framework is mainly from Java environment, but Python is used in extensions also that case. There're also some caveats presented which are easily encountered when running bigger RF test suites with Java.",
                  bio:
                    'Juho has been doing testing since 2005. He is interested of testing and it\'s efficiency, and eager to make all kind of testings as soon as possible. Juho maintains various java-based RF libraries. His "normal working day" to contain also application development and various operations related things in addition to testing.'
                },
                {
                  title: "11:00 - Tatu Aalto (F-Secure)",
                  description:
                    "Decade with SeleniumLibrary and browsers' UI automation",
                  imgUrl: ["Tatu_Aalto.jpg"],
                  descriptionExpanded:
                    'I have used Robot Framework and <a href="https://github.com/robotframework/SeleniumLibrary">SeleniumLibrary</a> since 2011. within those years I have had wonderful success with the SeleniumLibrary and I have also made several mistakes with the library. With this talk I want explain where I have succeeded with the SeleniumLibrary, what kind of mistakes I have made and what I learned form those mistakes. I want to share how I did grow from a user of the SeleniumLibrary, then growing to a contributor and finally being a lead developer for the SeleniumLibrary project.',
                  bio:
                    "Tatu Aalto is the current lead developer of the SeleniumLibrary and he has been working with Robot Framework since 2011. In the 2011 he was a regular user, by sending many questions and problems to the community. After some time Tatu started to answer questions  send by other users and he did provide his very first pull request to the Robot Framework core in 2012. Tatu has been active community member all these years and 2016 he started as an SeleniumLibrary lead developer. <br><br>Tatu has used the Robot Framework in several work places to to guide and aid companies in their test automation efforts. Currently he is working in F-Secure as a Software Developer In Test, automating windows antivirus client for business users."
                },
                {
                  title: "11:30 - Lunch",
                  description: "",
                  imgUrl: [],
                  descriptionExpanded: "",
                  bio: ""
                },
                {
                  title: "12:30 - Brady Hill (Trimble)",
                  description: "RobotFramework for Embedded Software Testing",
                  imgUrl: ["Brady_Hill.jpg"],
                  descriptionExpanded:
                    "RobotFramework was introduced to Trimble 2.5 years ago when I joined the Trimble team.  We had a very manual testing process prior to its introduction.  The test cycle took up to 2 months of very manual testing.  In the 2.5 years since we've gone from a 2 month testing cycle to a 2 week testing cycle (including manual tests).  We are able to run RF regression testing on a per build basis with testing coverage of 85%.  RF regression testing is able to be completed in a less than 3 hours.<br><br>Using Jenkins pipeline we are able to run all RF testing in parallel across any number of nodes.  Currently, we do not do the same testing on each of the devices but instead to get more coverage quickly we use tags to split the tests into equal sizes across the devices under test.  This allows us to balance hardware needs while holding to an acceptable feedback time for developers.  We've shifted our culture from delayed testing and bug reporting to a culture where features are not released unless RF tests are testing and passing for new code.",
                  bio:
                    "Brady Hill is from Denver, Colorado, USA.  He has been in the world of CI since the buzzword started making its rounds in the software community.  With more than 20 years of quality assurance and management experience; he has gained a good grasp on establishing quality practices with timely feedback while keeping the software development cycle in a constant state of feature development."
                },
                {
                  title: "12:55 - NGUYEN HUU BACH (NTT Communications)",
                  description:
                    "RENAT - a network testing plugin based on Robot Framework",
                  imgUrl: ["Nguyen_Huu_Bach.png"],
                  descriptionExpanded:
                    'In the network field, automation has been discussed a lot for Service Order, Operating but not very much for Testing. As a major telco company, Network testing has been a long and heavy task for us. A lot of trial has been done but did not give us much success. Until recently, bases on Robot Framework, we have developed the RENAT plugin, which is giving a very high potential results in our several services.<br>The effects of RENAT could be summarized<br><br>- new approach to conduct NW testing (now we could `write` the tests)<br>- hundreds hours have been saved (in some particular tests, the framework has reduced 20 days of work to 30 minutes)<br>- higher test quality (does not depend on who conducts)<br>- more efficiency machine time (long test could be done in weekends)<br>- easy to integrate with other systems like Jenkins, Slack...<br><br>RENAT has been publicized at <a href="https://github.com/bachng2017/RENAT">GitHub</a>',
                  bio:
                    "Nguyen Huu Bach joined NTT Communications in 2005 after graduating from the Tokyo Institute of Technology. He serves as an Senior IP Engineer in the Network Service Department at NTT Communications. His experience includes operating and network design for AS2914,  developing network operating systems and other network services such as traffic monitoring,  DPI and DDoS protection for both AS2914 and AS4713. Recently, he focuses on Automation technologies for Network Operating and Testing."
                },
                {
                  title: "13:20 - Mikael Siirtola (GE Healthcare)",
                  description:
                    "Robot Framework with Patient Monitors: Test Automation at GE Healthcare Finland",
                  imgUrl: ["Mikael_Siirtola.jpg"],
                  descriptionExpanded:
                    "Many known big internet companies ship a new version after every few seconds. When delivering embedded devices to customers especially in regulated environment the software is usually updated less often. In this speech you will learn how to tackle the challenges of regulated environment with test automation and DevOps practices. We will also go through a case example from one of GE Healthcare products where test automation was used and what were the benefits for adding automated testing. There will also be sharing of learnings based on this case and my general experience about test automation DevOps in embedded device context.",
                  bio:
                    "I grow digital factories. Before automation engineers went to paper mills to improve production quality and speed, now I employ latest methodologies and technologies to do the same to companies that work on software. I have successfully implemented improvements to various embedded and desktop production pipelines and made a huge turnaround in testing of a big project. In six months, we got same amount of work done as previous 2,5 years. The stagnating progress of automation testing of the system was nine times faster after I took leadership in the test automation activities. Now I set my sight to work where I can do the most impact. As a leader I specialize in running expert organizations and creating low hierarchy networks that produce best product at fastest speed, a team of teams. My motto is try fast, fail fast, improve fast. Companies need to win the minds and the hearts of their talent to succeed and I am a person who does that by creating an atmosphere where people thrive. <br><br>Core competences:<br>#devops #leadership #agile #lean #systemintegration #qa #quality #testing #testautomation #softwaredevelopment #organizationdevelopment #healthcare #medicaldevices"
                },
                {
                  title: "13:45 - Break",
                  description: "",
                  imgUrl: [],
                  descriptionExpanded: "",
                  bio: ""
                },
                {
                  title:
                    "14:00 - Päivi Raulamo-Jurvanen (University of Oulu / ITEE / M3S)",
                  description:
                    "Practical Experiences on Evaluating Software Testing Tools with focus on Robot Framework",
                  imgUrl: ["Paivi_Raulamo-Jurvanen.png"],
                  descriptionExpanded:
                    "We were interested to see how practitioners in the field evaluate software testing tools. We have conducted surveys, interviewing and data mining as instruments for collecting realistic opinions about some software testing tools, with focus on Robot Framework. Tool evaluations are specific to a given setting, are dependent on the interpretation of the construct under study.<br><br>In the case of Robot Framework, the findings highlight the important distinction between the core-tool and the related ecosystem. Such duality is challenging regarding the evaluation of a tool and comparison with other tools, as the quality of a related library is the responsibility of an individual project, independent of the core-tool. We conclude that by listening to a *voice of practitioners*, it is possible to dispel misconceptions, to highlight less obvious important verities or topical issues for using a tool.",
                  bio:
                    "Päivi Raulamo-Jurvanen is a PhD candidate in a M3S research group at the Faculty of ITEE, University of Oulu, Finland. She focuses on research on areas of software testing & related tools, and on teaching programming (C & Java). She has faith in working smarter than harder, although not always finding that possible in practice."
                },
                {
                  title:
                    "14:30 - Nicholas Bollweg (Georgia Tech Research Institute & Project Jupyter) / Asko Soukka (University of Jyväskylä)",
                  description:
                    "Robots from Jupyter – The Future of Authoring Tests and Tasks in Robot Framework",
                  imgUrl: ["Nicholas_Bollweg.jpg", "Asko_Soukka.jpg"],
                  descriptionExpanded:
                    "We present our open source projects <i>ipyrobotframework</i> and <i>robotkernel</i>, which give their users access to interactive computing sessions powered by Robot Framework in a number of web and desktop clients. Writing Tests and Tasks while learning and mastering the Robot Framework ecosystem are more approachable with features like code intelligence for Robot syntax, imported libraries and variables, direct run-time access to the test/task lifecycle and execution environments, rich media displays, and extensions for chores like linting and formatting.<br><br>In JupyterLab, the highly-configurable, extensible, next-generation Jupyter client, for Robot Framework, power users can enjoy one-click test/suite execution, syntax highlighting and inspectability of their tests and keywords, as well as interactive visualization of suite outputs and documentation, in a single, web-based environment. Looking forward, <i>prosemirror-robotframework</i> brings Robot to even more potential users, providing familiar word processor and spreadsheet-style authoring, while <i>blockly-robotframework</i> offers drag-and-drop visual editing.<br><br>Finally, we demonstrate <i>robotframework-jupyter</i>, a Robot Library of keywords for testing and automating Jupyter components itself, including JupyterLab and extensions, Jupyter Widgets, and the Jupyter notebook server.",
                  bio:
                    "Nick, while a newcomer to the Robot ecosystem, is a long-time contributor to many Jupyter, Python, and JavaScript projects, bringing skills and knowledge to integrate Robot across many parts of the Jupyter ecosystem and beyond. Nick works at the Georgia Tech Research Institute as a Systems Architect, while also providing code, design, and architecture contributions as a Jupyter Project core team member and local Jupyter User Group organizer.<br><br>Asko, an established Robot ecosystem contributor, bootstrapped the work on Robot support for interactive computing in Jupyter at the sprints of RoboCon 2018, and continues to explore new ways to ease test and task authoring with Jupyter. Asko works as a Systems Designer at Digital Services of University of Jyväskylä, where Robot Framework is used for both acceptance testing and process automation."
                },
                {
                  title: "15:00 - Coffee",
                  description: "",
                  imgUrl: [],
                  descriptionExpanded: "",
                  bio: ""
                },
                {
                  title: "15:30 - Joonas Lehtimäki (Eficode)",
                  description:
                    "Dynamically scalable test environment on top of Kubernetes",
                  imgUrl: ["Joonas_Lehtimaki.jpg"],
                  descriptionExpanded:
                    "This talk will present how Robot Framework test cases can be run in a dynamic and scalable environment utilizing Kubernetes and Zalenium.  Zalenium allows us to easily create disposable selenium grids running on top of Kubernetes. The talk will have a short description of the environment, explaining the benefits of having a dynamic test automation and a live demo.<br><br>Zalenium is based on Docker Selenium project but extends it's functionality in multiple ways, like dynamic scaling, video recording, live video, logging, 3rd party test integration, and 3rd party storage.",
                  bio:
                    "Currently influencing DevOps at Eficode. I’m a cloud and automation enthusiast with a strong passion for programming and helping people in DevOps, also a huge fan of green pipelines!<br>On my free time, I like to study new technologies and do some freelance coding. I’m actively participating in open source communities by helping / educating people in the forums and IRC. "
                },
                {
                  title: "16:00 - Oleksandr Kravchenko  (Samsung Electronics)",
                  description:
                    "Dynamic Generation of Model Based Testcases Using Listener Interface Version 3",
                  imgUrl: ["Oleksandr_Kravchenko.png"],
                  descriptionExpanded:
                    "Robot Framework Listener Interface 3 API allows for dynamic modification of test suites and test cases during execution.  This makes it a really useful tool when implementing dynamic model-based test systems in Robot Framework.<br><br>The talk focuses on several caveats related to using the interface for dynamic test flow modification, with suggested workarounds:<br><br>- how to connect the listener object to MBT suite<br>- how to update test suites and test cases during test execution<br>- how to modify test results during the execution or overwrite test results files after the test  is finished<br>- how to generate static test cases from dynamic execution to reproduce encountered issues",
                  bio:
                    'I have been involved in test automation project since the beginning of my career in 2003 including test framework development and extension, designing and implementing test tools and simulators as well as manual test cases automation for <a href="https://www.linkedin.com/in/oleksandr-kravchenko-8aa80244/">telecom systems</a><br><br>Currently I work as a test automation engineer in Samsung Electronics Poland'
                },
                {
                  title: "16:30 - Break",
                  description: "",
                  imgUrl: [],
                  descriptionExpanded: "",
                  bio: ""
                },
                {
                  title: "17:00 - Lightning talks",
                  description:
                    "Topic of the day, you decide! Sign-up your name, topic, and contact information to the lightning talk list at the venue during the conference day and get ready to present a 10 minute lightning talk on the big stage.",
                  imgUrl: [],
                  descriptionExpanded: "",
                  bio: ""
                },
                {
                  title: "18:00 - Networking",
                  description: "",
                  imgUrl: [],
                  descriptionExpanded: "",
                  bio: ""
                },
                {
                  title: "19:00 - Venue closes, after party starts.",
                  description:
                    "Official after party starting at 6:30pm at Vala offices close to the conference venue.",
                  imgUrl: [],
                  descriptionExpanded: "",
                  bio: ""
                }
              ],
              header: "Schedule and speakers"
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
          user_box_centered: true,
          data: {
            text: {
              twitter: false,
              header: "Workshops",
              text: '<p>Workhops provide a possibility to learn more about Robot Framework and related libraries and tools. They are mostly hands-on and participation is limited to 12-20 persons. They are organized on Wednesday, January 16, a day before the main conference at Ruoholahti, Helsinki. Click the titles below for more information.</p><p>Full day workshops cost 300€ and half day workshops are 150€. These prices are for people participating the main conference and for employeers of <a href="http://robotframework.org/foundation/">Robot Framework Foundation</a> member organizations. For others the prices are 400€ and 200€, respectively.</p><p>Workshop enrollment opens soon. Most likely on Wednesday, December 19, 2018, at 6am UTC.</p>',
              talks: [
                {
                  title: "09:00-12:00 - Asko Soukka / Nicholas Bollweg",
                  description:
                    "Authoring Robot Framework test and task suites with JupyterLab",
                  descriptionExpanded:
                    '<p>Asko Soukka<br>University of Jyväskylä</p><p>Nicholas Bollweg<br>Georgia Tech Research Institute &amp; Project Jupyter</p><p>09:00-12:00<br>150€ / 200€</p><p>Max 12 participants</p><p><a href="https://jupyterlab.readthedocs.io/">JupyterLab</a> is a browser based power user environment for interactive computing. For Robot Framework test and task suite authors, JupyterLab\'s user-friendly authoring environment provides a new fun way to learn, practice and even share Robot Framework. JupyterLab encourages fast iterations and learning by discovering, and <a href="https://youtu.be/-gU4srzslpc">our dedicated SeleniumLibrary support with &quot;sticky session&quot;</a> makes it an extremely productive for testing and automating with web browsers. At least for small projects, JupyterLab can replace traditional test and tasksuite authoring tools.</p><p>We welcome all level of Robot Framework users to our workshop. At our workshop, beginners will learn the very basics of Robot Framework for browser testing and automation in a new and fun way. Advanced Robot Framework users may not learn much new about Robot Framework, but will get a new open source tool into their toolbox from JupyterLab.</p><p>This is a hands-on workshops for maximum of 12 participants. Asko is native in Finnish and Nick in English. Own laptop is required with permissions to install new software. We provide a "single click installer" for the JupyterLab environment used in the workshop for Windows, MacOS and Linux. Installing JupyterLab with the installer is part of the workshop. The installation  provides uninstaller for Windows and single removable directory for MacOS and Linux.</p><p>In this workshop we cover:</p><ul><li>installing JupyterLab with Robot Framework integration</li><li>walkthrough JupyterLab IDE features for Robot Framework</li><li>authoring and executing Robot notebooks with JupyterLab</li><li>authoring and using custom keyword libraries with JupyterLab</li><li>authoring and using Python keyword libraries with JupyterLab</li><li>advanced features of our Robot Framework Jupyter integrations</li><li>writing inline documentation into notebooks in JupyterLab</li><li>executing Robot notebooks from command line</li><li>exporting Robot notebooks into .robot-files</li><li>highlights of the current JupyterLab extension ecosystem</li></ul><p>JupyterLab is being developed and maintained by <a href="http://jupyter.org/">Project Jupyter</a> and its large community. The hosts of this workshop are the authors of Robot Framework support for Jupyter environments, including JupyterLab. 100% of the registration fees for this workshop will be used to cover the costs and support the Robot Framework foundation.</p><p>Participants should bring their own laptop with Windows, OSX or Linux. Local admin rights are also needed for JupyterLab installations.</p>',
                  bio:
                    "<p>Asko, an established Robot ecosystem contributor, bootstrapped the work on Robot support for interactive computing in Jupyter at the sprints of RoboCon 2018, and continues to explore new ways to ease test and task authoring with Jupyter. Asko works as a Systems Designer at Digital Services of University of Jyväskylä, where Robot Framework is used for both acceptance testing and process automation.</p><p>Nick, while a newcomer to the Robot ecosystem, is a long-time contributor to many Jupyter, Python, and JavaScript projects, bringing skills and knowledge to integrate Robot across many parts of the Jupyter ecosystem and beyond. Nick works at the Georgia Tech Research Institute as a Systems Architect, while also providing code, design and architecture contributions as a Jupyter Project core team member and local Jupyter User Group organizer.</p>",
                  imgUrl: ["Asko_Soukka.jpg", "Nicholas_Bollweg.jpg"]
                },
                {
                  title: "13:00-16:00 - Ismo Aro / Eeva Terkki",
                  description:
                    "Hands-on Windows GUI testing with Robot Framework",
                  descriptionExpanded:
                    '<p>Ismo Aro<br>Siili Solutions Oyj</p><p>Eeva Terkki<br>Siili Solutions Oyj<br><p>13:00-16:00<br>150€ / 200€</p><p>Max 12 participants</p><p>In the workshop we will create test cases for Windows application with the GUI. For this, we are using Robot Framework GUI testing library called <a href="https://github.com/Omenia/robotframework-whitelibrary">WhiteLibrary</a>. We will learn how to find different UI-components from the GUI and how to interact with them with WhiteLibrary. We also learn how to write good quality test cases for your Windows GUI.</p><p>Supported GUI technologies:</p><ul><li>Win32</li><li>WinForms</li><li>Windows Presentation Foundation (WPF)</li><li>Java Standard Widget Toolkit (SWT)</li></ul><p>Session is fully hands-on, so bring your own Windows laptop with Python 2.7, 3.5 or 3.6 installed. Unfortunately Python 3.7 is not (yet) supported by all the tools used by the WhiteLibrary. Local admin rights are also recommended to be able to install additional software during the workshop.</p>',
                  bio:
                    "<p>Ismo Aro is Heading the Software Automation at Siili and Chairman of the Board in Robot Framework Foundation. He has a strong focus in modernizing the ways of working and the quality of work. His previous roles have included Test Engineer, Scrum Master, Product Owner, Test Automation Specialist, Agile Coach, Lead QA Engineer and Partner and his employers were Nokia, Ericsson, Basware and Omenia.</p><p>Eeva is a software automation engineer at Siili Solutions SALabs and the lead developer of WhiteLibrary. She has worked on test automation in several projects and also given trainings on Robot Framework. Eeva is interested in developing test automation tools, and also very fond of birds.</p>",
                  imgUrl: ["Ismo_Aro.jpg"]
                },
                {
                  title: "13:00-16:00 - Joshua Gorospe",
                  description: "Robot Framework strategies for the lone tester",
                  descriptionExpanded:
                    '<p>Joshua Gorospe<br>Intersection</p><p>13:00-16:00<br>150€ / 200€</p><p>Max 20 participants</p><h2>Description</h2><p><em>Intended Audience</em></p><p>Any testers of any level of experience are welcome, but this would probably be more helpful for people with beginner-to-intermediate experience. Emphasis on people just starting out in an "<a href="http://www.satisfice.com/articles/omega_tester.pdf">omega tester</a>" role.</p><p><em>Overview</em></p><p>This is a high-level outline of what will be covered. At the workshop, a Github repo with all of the examples will be provided.</p><ol><li><p>Very briefly describe the “omega tester” role mentioned often by James Bach. Briefly discuss how Robot Framework offers a lot to a lone tester who is open minded on the use of tools. </p></li><li><p>Walk through how to set up a Robot Framework project geared towards rapidly setting up tests that should make it easier for other members of your team to jump in and contribute to. Show various examples that can run tests in serial, and examples that run tests in parallel. Briefly show both examples running in Docker (python:3.5-jessie base image). Spend time helping the audience run these serial/parallel examples on their machines. </p></li><li><p>Walk through how to set up a hybrid-manual approach that uses the Dialogs library. Show some examples that work locally on a Macbook, and some examples that work with a Macbook + mobile phone + Appium. Spend time helping the audience run some of these hybrid-manual examples on their machines. </p></li><li><p>Using the results from the previous examples. Walk through how to set up a simple script that can collect the results of all the demos in (2) and (3) to combine them into one results log.html file that can be deployed as a static html dashboard on Heroku. Spend time helping the audience run some of the Rebot examples on their machines.</p></li></ol><p><em>Technical Requirements</em></p><p>The workshop will be presented mostly from a Macbook and a phone for demonstrating the Appium Robot Framework examples. Please bring a laptop (OSX, Ubuntu, or Windows) that has the following already installed on it:</p><ul><li><p>Robot Framework</p><ul><li><a href="https://github.com/robotframework/robotframework/blob/master/INSTALL.rst">https://github.com/robotframework/robotframework/blob/master/INSTALL.rst</a></li></ul></li><li><p>Docker CE</p><ul><li>OSX: <a href="https://docs.docker.com/docker-for-mac/install">https://docs.docker.com/docker-for-mac/install</a> </li><li>Windows: <a href="https://docs.docker.com/docker-for-windows/install">https://docs.docker.com/docker-for-windows/install</a> </li><li>Ubuntu: <a href="https://docs.docker.com/install/linux/docker-ce/ubuntu">https://docs.docker.com/install/linux/docker-ce/ubuntu</a> </li></ul></li><li><p>Docker Compose</p><ul><li>OSX: Included in Docker CE </li><li>Windows: Included in Docker CE </li><li>Ubuntu: <a href="https://docs.docker.com/compose/install/#install-compose">https://docs.docker.com/compose/install/#install-compose</a></li></ul></li><li><p>Appium does not need to be installed.</p></li></ul>',
                  bio:
                    "<p>I am doing exciting work with Intersection (a Sidewalk Labs and Alphabet owned company) as a Senior Test Engineer and lead tester for various Intersection Consulting &amp; Solutions projects. Several of those projects are tied to the Hudson Yards smart city redevelopment in New York City.</p><p>I love testing, and have an insatiable curiosity for researching anything related to testing. At the moment I am most interested in experimenting with software test oracles, a few machine learning tools, properties-based testing, fuzz testing, and model based testing.</p>",
                  imgUrl: ["Joshua_Gorospe.png"]
                },
                {
                  title: "09:00-16:00 - Ed Manlove / Tatu Aalto",
                  description:
                    "Web Testing using Selenium Library and Robot Framework",
                  descriptionExpanded:
                    '<p>Ed Manlove<br>Cox Automotive, Inc</p><p>Tatu Aalto<br>F-Secure Oyj</p><p>09:00-16:00<br>300€ / 400€</p><p>Max 12 participants</p><h2>Description</h2><p>Are you interested in using Robot Framework to test web applications and websites? Do you want to combine the advantage of using Robot Frameworks natural language testing framework with Selenium? If you want learn from the maintainers of the SeleniumLibrary then this is the course for you.</p><p><em>Introduction and Overview</em></p><p>We will introduce the Selenium Library and present an overview of keywords the library provides for testing websites and web based applications.</p><p><em>Getting Started</em></p><p>Starting with some of the core SeleniumLibrary keywords we will build tests starting with basic tasks and then growing complexity.</p><p><em>Locators</em></p><p>Web testing is, in part, interacting with elements on the page. How one specifies which element they are working with is done with locators. We will discuss locators and the usage throughout the library.</p><p><em>Testing Philosophy and Test Design</em></p><p>Building off of the previous exercises and lessons we will take a largepicture look at testing philosophy and talk about design for test frameworksand test suites.</p><p><em>Waiting</em></p><p>We will look at some basic and advanced techniques for dealing with timing issues on the web pages we are testing.</p><p><em>Debug Techniques</em></p><p>Different techniques for debugging issues within the scripts and within the browser will be shown.</p><p><em>Advanced Topics</em></p><p>We will look at some advanced topics, like extending SeleniumLibrary page object model and special browser configuration.</p><p><em>Audience</em></p><p>This workshop is for those who have some prior experience with Robot Framework and are starting to apply it to web testing. Students should have some experience with running Robot Framework and have used RIDE or similar editor before. Some command line experience is necessary. We will discuss some Python programing topics and some basic programming topics like for loops.</p><p><em>Requirements</em></p><ul><li>All participates will need to bring a laptop pre-configured to the workshop.</li><li>Participates must have access to add and modify software on their laptops.</li><li>Detailed setup instructions will be shared couple of weeks before workshop day.<ul><li>Participants should install latests <a href="https://github.com/robotframework/SeleniumLibrary#installation">Robot Framework and SeleniumLibrary</a></li><li>Chrome browser installed and ChromeDriver set to PATH:http://chromedriver.chromium.org/</li><li>Good editor to create and editing Robot Framework test data. Example RIDE, RED, PyCharm.</li><li>Python 3.4 or newer is preferred but Python 2.7 is OK too. </li></ul></li><li>Configure your laptops well before the workshop day</li></ul>',
                  bio:
                    '<p>Ed Manlove has been a part of the Robot Framework community since 2011. He inherited the leadership of the Selenium2Library project from Ryan Tomac sharing it with Jeremy Johnson and recently passing on that role to Tatu Aalto.He is the author of a couple libraries dealing with timing issues within AJAXenabled websites. Ed is currently a Senior Software Test Engineer testing with Robot Framework and taught several teams how to test with Robot Framework. A member of the Selenium user community Ed has presented at the Selenium Conference, ran an unconference focusing on user issues, and volunteered at the conferences (even being a maître d\').</p><p>Tatu Aalto is the current lead developer of the <a href="https://github.com/robotframework/SeleniumLibrary">SeleniumLibrary</a> and hehas been working with Robot Framework since 2011. In the 2011 he was a regular user, by sending many questions and problems to the community. After some time Tatu started to answer questions  send by other users and he did provide his very first pull request to the Robot Framework core in 2012. Tatu has been active community member all these years and 2016 he started as an SeleniumLibrary lead developer.</p><p>Tatu has used the Robot Framework in several work places to to guide and aid companies in their test automation efforts. Currently he is working in F-Secure as a Software Developer In Test, automating windows antivirus client for business users.</p>',
                  imgUrl: ["Ed_Manlove.jpg", "Tatu_Aalto.jpg"]
                },
                {
                  title: "09:00-16:00 - Jenna Kaisanlahti",
                  description: "Robot Framework basics",
                  descriptionExpanded:
                    "<p>Jenna Kaisanlahti<br>Siili Solutions</p><p>09:00-16:00<br>300€ / 400€</p><p>Max 12 participants</p><h2>Description</h2><p>The target of this workshop is to learn the basics of Robot Framework. This includes creating test cases and new domain specific higher level keywords, running tests and analyzing results, as well as understanding the overall architecture of the framework and what is available in the wider Robot Framework ecosystem.</p><p>This workshop is especially targeted for testers, programmers, and otherdevelopment team members, but it is suitable for everyone who is interested in Robot Framework. Participants should have at least some testing experience, but no programming skills or previous test automation experience is necessary.</p><p>Participants should have a laptop with Python 3.6 or newer installed. Operating system does not matter, but participants should be comfortable using the machine and have local admin rights to it. If a participant is comfortable with some certain IDE or code editor, it is beneficial to install Robot Framework extension to it beforehand (if available). This is not mandatory, however. It is possible to work also in pairs using only one laptop.</p>",
                  bio:
                    "<p>Jenna Kaisanlahti works as a consultant concentrating on test automation and lately on Robot Framework library development as well. She has several years of test automation experience with Robot Framework in medical and finance business domains.</p><p>In her free time, Jenna is either playing the saxophone or looking for an inspiration in the forest.</p>",
                  imgUrl: ["Jenna_Kaisanlahti.jpg"]
                },
                {
                  title: "09:00-16:00 - Pekka Klärck",
                  description: "Extending Robot Framework",
                  descriptionExpanded:
                    "<p>Pekka Klärck<br>Eliga</p><p>09:00-16:00<br>30€ / 400€</p><p>Max 12 participants</p><h2>Description</h2><p>In this workshop you will learn how to extend Robot Framework using various different interfaces. The first half of the workshop is dedicated to the library API. We will start from the basics and quickly continue to more advanced topics like the dynamic library interface (used nowadays by SeleniumLibrary) and automatic argument type conversion (new feature in RF 3.1). During the second half you will get familiar with other extending and integration possibilities such as the listener API, variable files,modifying tests dynamically before execution, starting execution programmatically and analyzing results.</p><p>This workshop is for you if you already know basics of using Robot Framework, possibly also basics of writing tests libraries, and want to take your skills to the next level. The workshop is 100% hands-on, no slides, learn-by-doing, and there should be something new for even experienced Robot Framework users.In addition to learning about these powerful extension APIs, you have a change to ask hard questions related to Robot Framework from its creator. </p><p>Extending Robot Framework means coding, and participants should thus knowthe basics of Python programming. You should bring your own laptop withPython 3.6 or newer and Robot Framework 3.1 or newer installed. You shouldalso have adequate admin rights to install possible additional Python modules using pip. An editor for writing Python code and Robot Framework tests is needed as well.</p>",
                  bio:
                    "<p>Pekka Klärck is a tester, developer and independent consultant from Finland with experience from testing and test automation since 2000. He is the lead developer of Robot Framework working with it from the very beginning.</p>",
                  imgUrl: ["Pekka_Klarck.jpg"]
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
                '<p><a target="blank" href="https://www.lyyti.in/robocon2019">Tickets available here.</a> <br><br> Prices are valid as follows: <br> <b>Blind robot</b> 300€ (excluding VAT 24%) until November 15, 2018. <br> <b>Early robot</b> 400€ (excluding VAT 24%) until December 31, 2018. <br> <b>Late robot</b> 500€ (excluding VAT 24%) until January 17, 2019. <br> </p>'
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
              header: "Arrival and Accommodation",
              text:
                "<div><h2>TRANSPORTATION: AIRPORT</h2><p>The distance from Helsinki airport to Bio Rex is 21 km. Trains marked as “I” and “P” go from the airport to Helsinki Central Station. From the Helsinki Central Station it is only 5 minutes' walk to Bio Rex.</p><p>Buses operate between Helsinki airport and Helsinki Central Station. The bus stops for both arriving and departing buses are located in front of the terminals (T1 & T2). Finnair bus goes from airport to Eliel Square and bus nr. 615 goes from airport to Rautatientori. There is a short walk to Bio Rex from both Eliel Square (300 meters) and Rautatientori (350 meters).</p><p>Time estimation for the journey is 40 minutes by bus and about 30-35 minutes by train or taxi. Taxi cost is approximately 40-55 euros depending on the traffic and the taxi company.</p><p>At Helsinki airport there are informative signage for trains, buses and taxis to ensure that you won’t get lost.</p><h2>TRANSPORTATION: RAILWAY STATION</h2><p>Railway station is only 5 minutes’ walk (350 meters) from Bio Rex.</p><h2>TRANSPORTATION: BUS STATION</h2><p>Intercity bus connections from Kamppi bus station (400 meters away) and bus connections for Helsinki's internal traffic from Rautatientori (350 meters) located close to Helsinki Central Station. Buses to Helsinki Airport leave from Eliel Square (300 meters) and Rautatientori (350 meters).</p><h2>Hotel deals</h2><p><a href='https://www.sokoshotels.fi/en/helsinki/sokos-hotel-presidentti'>Original Sokos Hotel Presidentti</a> – reservation code <span style='color: #ff5152'>BRobocon2019</span><br>- Reservations for 14-21 Jan, 2019. Code valid until 31 Dec 2018<br>- Standard single room: 145€ / night<br>- Standard double room: 165€ / night<br><br><a href='https://www.sokoshotels.fi/en/helsinki/sokos-hotel-vaakuna'>Original Sokos Hotel Vaakuna</a> – reservation code <span style='color: #ff5152'>BRobocon19</span><br>- Reservations for 14-21 Jan, 2019. Code valid until 31 Dec 2018<br>- Standard single room: 155€ / night<br>- Standard double room: 175€ / night</p></div>"
            }
          }
        },
        {
          title: "Sauna-and-Dinner",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Sauna and Dinner",
              text: "<p>More info coming later</p>"
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
              header: "Sprints",
              text: "<p>More info coming later</p>"
            }
          }
        },
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
          title: "Previous talks",
          text_block: false,
          text_block_centered: false,
          tab_box: false,
          tab_box_centered: false,
          feature_box: true,
          data: {
            text: {
              header: "Previous talks",
              src:
                "https://www.youtube.com/embed/?listType=playlist&list=PLSK6YK5OGX1AUdykW4DYwNeSN_6qDE_-z"
            }
          }
        }
      ]
    };
  }
};
</script>
