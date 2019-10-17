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
import PageBlock from "@/Components/PageBlock.vue";

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
                '<p>RoboCon is an annual gathering for the <a href="http://robotframework.org" target="blank">Robot Framework community</a>. It provides a great possibility to learn from the experts, hear how the framework is used in different places, and most importantly, meet fellow Robot Framework users as well as its developers. <br><br>RoboCon 2020 is organized at Helsinki, Finland, in January 14-17. The agenda for the conference week is as follows:<br><br>Jan 14: <a href="#workshops">Workshops</a><br>Jan 15-16: <a href="#program">RoboCon Conference</a><br>Jan 17: <a href="#sprints">Sprints</a><br><br>RoboCon is organized by <a href="http://robotframework.org/foundation/">Robot Framework Foundation</a>, a non-profit consortium that also sponsors the development of Robot Framework. Possible profits from the conference will be used for this purpose too. </p><p>Conference hashtag to use on Twitter and elsewhere is <code><b>#robocon</b></code>. <a href="https://robotframework-slack-invite.herokuapp.com/" target="blank">Robot Framework Slack community</a> also has a dedicated <code>#robocon</code> channel to ask question and chat with other participants. To contact the organizers directly, use <a href="mailto:info&#64;robocon.io">info&#64;robocon.io</a>.</p>'
            }
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
              text: '<p>Detailed talk descriptions coming soon!</p>',
              talks: [
                { header: 'Wednesday, January 15' },
                { author: "Esko Valtaoja", title: "Keynote: Topic to be announced" },
                { author: "Jeff King", title: "Robot Framework and the One Man Robot Band" },
                { author: "Anaïs van Asselt", title: "A Robot Rainbow Cake: Implementing a test automation architecture in a government organization" },
                { author: "Antti Karjalainen", title: "The Open RPA Ecosystem" },
                { author: "Petteri Mannersalo", title: "Robot Framework as an enabler for Intelligent Process Automation" },
                { author: "Tuomas Lempiäinen", title: "QA driven RPA at Veikkaus" },
                { author: "Mikael Siirtola", title: "RPA on Rails: Automating manual processes at VR" },
                { author: "Kristina Sabotic", title: "End-to-end testing for end-users" },
                { author: "Luca Giovenzana, Angelo Caovilla", title: "Bewere the Brittle Dragon" },
                { author: "", title: "Lighning talks" },
                { author: "", title: "Dinner and evening program at Bio Rex" },
                { header: 'Thursday, January 16', margin: true },
                { author: "Pekka Klärck", title: "Keynote: What's new? What's next? Who are we?" },
                { author: "Akseli Lukkarila", title: "Acceptance testing a real-time music education application with audio" },
                { author: "Maria Prokhorova", title: "New Image Library for advanced image processing" },
                { author: "Tatu Aalto", title: "SeleniumLibrary 4.0: Plugin API and Event Firing WebDriver support" },
                { author: "René Rohner", title: "DataDriver or: How I learned to stop worrying and love open source" },
                { author: "Tommi Oinonen", title: "Self managing testing pipelines" },
                { author: "Juho Saarinen", title: "Robot Framework Remote library in practice (with demos)" },
                { author: "Joonas Köppä", title: "Orchestrating Robot Framework test containers and remote libraries in Kubernetes" },
                { author: "Maciej Brzozowski", title: "Microservices testing using Argo: container-native workflows for Kubernetes" },
                { author: "", title: "Lightning talks" },
                { author: "", title: "Networking" },
                { author: "", title: "After party at Vala" }
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
                '<p><a href="https://www.lyyti.in/Robocon_2020_6339" target="blank">Tickets available here!</a></p> <table style="width: 100%; display: flex; margin-top: 10px"><tr><th></th><th>1 day</th><th>2 days</th><th>Available until</th></tr><tr><td><del>Blind Robot</del></td><td>-</td><td><del>600€</del></td><td><del>2019-09-30</del></td></tr><tr><td>Early Robot</td><td>600€</td><td>900€</td><td>2019-12-31</td></tr><tr><td>Late Robot</td><td>800€</td><td>1200€</td><td>2020-01-15</td></tr></table><br><p>All prices are exclusive of 24 % VAT. <a href="#workshops">Workshop</a> tickets are sold separately.</p>'
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
              text: '<p>Date: January 14, 2020<br>Location: Siili Solutions, <a href="https://goo.gl/maps/CPUAifmpZ56sTUaH9">Ruoholahdenkatu 21</a><br><br>Detailed workshop descriptions coming soon!<br>Ticket sale opening soon!</p>',
              talks: [
                { header: 'Half-day workshops' },
                { author: "Elias Hachichou, Kristina Sabotic",
                  title: "End-to-end testing through multiple interfaces",
                  description: "Welcome to this fun group exercise in how to build end-to-end test flows that can cover any type of interface for multiple applications in the same script. It will be a bonanza in problem solving, trying new libraries, exploring new ways of working – and music!",
                  descriptionExpanded: "Adwisit works with automating tests for end-users that have many integrating systems from different suppliers and little to no own development. To test full business processes from end to end we combine different tools and libraries and usually let our robots work the same way a user does. In this workshop, we will work together to script a flow through different interfaces and applications. We will introduce the way we are working with our customers, but instead of warehouse management and ERP systems, we will work with fun test flow through applications that anyone can access.<br><br>You should already be acquainted with working with RF. We will challenge you with a flow to script, but also provide a step-by-step solution suggestion so you can work in a pace that suits you. This is a fun workshop that we already have run variants of live, where it was a success. The ideal participant is someone who knows RF a bit, but have previously focused on testing one system or through one interface.<br><br>To accommodate different levels of users, we will provide the step-by-step solution from the start. That way, an advanced participant can move forward in their own pace, while less experienced participants can choose how much help to use to keep up. Since we are two hosts, we can cover all questions that arise. We also always have checkpoints where we make sure everyone has finished up to that point. Participants will need to bring their own computer, and have an installation of Python 3, and we will provide an installation package.<br><br><h3>At least basic knowledge of Robot Framework is recommended.</h3>",
                  bio: "<h3 class='mb-0 mt-2'>Elias Hachichou</h3>I’m a tester and a developer living and working in Stockholm, Sweden. Have a little more than a year of experience with Robot Framework and have built several libraries for it. Big Open Source and Linux enthusiast and I wish to contribute to the RF community through this workshop and through publishing some libraries in the future.<br>I spend a lot of time learning obscure things. Currently working on becoming a vim text editor expert.<h3 class='mb-0 mt-2'>Kristina Sabotic</h3>My professional roots are in test leading, but I have shifted towards test automation - because it's so much fun! I thrive on solving challenging technical issues, as much as I thrive on being the spider in the web, as a test leader often is.<br>I live in Stockholm, with a hubbie and two kids. Currently we spend every weekend renovating an old holiday house we bought last year.<br>If you don’t feel like gibbering more about RF, feel free to come and discuss knitting with me - I would love to learn which is Helsinki´s best yarn shop. Every time I have a chance to sit down a few minutes, you can find a knitting in my hands. At the moment it's a sock with pink flamingoes on."},
                { author: "Tommi Oinonen",
                  title: "Get to grips with your test results",
                  description: "Are your test results drowning you? Would you like to archive your results for later inspection and analysis but available tools do not fit your needs? Would you want all your test results in the same place with the Robot Framework results? Good news – we developed a solution for these issues.",
                  descriptionExpanded: "If you have any of these issues (or any others) now there is a solution. SALabs has been developing a set of tools for managing your test results and the fundamental part of this tool set is the <a href='https://github.com/salabs/TestArchiver#testarchiver' target='blank'>TestArchiver</a>. It is a tool very similar to <a href='https://github.com/robotframework/DbBot' target='blank'>DbBot</a> (not maintained anymore) but much more capable. You can view it as DbBot 2.0 (or actually maybe 3.0).<br><br>The goal of the workshop is to explain the most useful features and give tips on how the best leverage the tool for:<br>* Collect almost all test execution data from RF tests in efficient and tested data structure<br>* Organise results arbitrarily into builds and different series of builds<br>* Collect results from different testing frameworks in to the place<br>* Run tests in parallel or at different times and organise them together for reporting<br>* Collect performance data on tests and keywords<br>* Profile the execution trees allowing you to find particular failures<br>* Set up reporting that allows complex and dynamic test execution<br>* Collect the vital data for machine learning algorithms in the feature<br><br>Or we can try solving your specific reporting and data collection challenges.<br><br>The basic usage of TestArchiver is very simple but since the tool is specifically designed to solve complex reporting issues there are some tips and tricks best explained in a workshop. Here I am talking about tens of thousands of RF test cases executed in multiple environments and multiple teams in complex and dynamic schedules.<br><br>In the same RoboCon SALabs is also going to premier a tool for browsing and managing tests archived using the TestArchiver so this workshop will allow you to also start using the managing tool with maximum benefits.<br><br><h3>For all skill levels</h3>",
                  bio: "Tommi Oinonen has six years of experience in test automation and supporting teams with testing infrastructure and reporting. Currently working as a consultant at Siili Solutions in Software Automation Laboratories (SALabs) unit. SALabs is aiming to move both state-of-the-practice and state-of-the-art of software automation using and developing open source tools and technologies. For the last two years researching and implementing test prioritization techniques as part of the TESTOMAT project." },
                { author: "Adrian Yorke",
                  title: "Test Automation for the Enterprise Data Warehouse or Teaching an Old Dog New Tricks!",
                  description: "The concept of data warehousing dates back to the late 1980s so you would be forgiven for thinking that test automation has little to offer this domain. OP needed to find a way of improving the quality of DW solutions: enter Robot Framework. You really can teach an old dog new tricks!",
                  descriptionExpanded: "<br><h2 class='no-arrow'>Workshop Outline Agenda</h2><br><h3 class='mb-0'>Preparation</h3>* Installation of Python<br>* Installation of Robot Framework<br>* Clone github repository for participants that wish to follow along<br><br><h3 class='mb-0'>Python Database API Specification v2.0</h3>* https://www.python.org/dev/peps/pep-0249/<br>* Python Database API Specification v2.0<br><br><h3 class='mb-0'>Robot Framework Database External Library</h3>* <a href='http://franz-see.github.io/Robotframework-Database-Library/' target='blank'>http://franz-see.github.io/Robotframework-Database-Library/</a><br>* <a href='https://github.com/franz-see/Robotframework-Database-Library' target='blank'>https://github.com/franz-see/Robotframework-Database-Library</a><br>* Review the tests found in test subfolder.<br>* Why SQLite?<br>* Work through SQLite3_DB_Tests.robot and check our installation is working.<br><br><h3 class='mb-0'>Robot Framework Testing with Teradata</h3>* Vendor-specific Database Interfaces<br>* <a href='https://wiki.python.org/moin/DatabaseInterfaces' target='blank'>https://wiki.python.org/moin/DatabaseInterfaces</a><br>* Teradata DevOps - A Python Module to make it easy to script powerful interactions with Teradata Database in a DevOps friendly way.<br>* <a href='https://github.com/Teradata/PyTd' target'blank'>https://github.com/Teradata/PyTd</a><br>* ODBC vs REST API<br><br><h3 class='mb-0'>Teradata Database Library (in-house development @ OP)</h3>* Let's look at some of the additional keywords we have added at OP<br>* Discuss the different methods of extending keywords both locally and at group level<br>* Smoke Testing<br>* Functional Testing<br>* Regression Testing<br><br><h3 class='mb-0'>Test Automation with Jenkins CI</h3>* Continuous Integration 101<br>* Introducing EDW Test Runner for batch testing<br><br><h3 class='mb-0'>IBM InfoSphere DataStage Library (in-house development @ OP)</h3>* Robotic Process Automation (RPA)<br>* Main use case: smart data loading<br><br><h3 class='mb-0'>The future - what are we working on next @ OP?</h3>* Fully Automated Smoke Testing<br>* Jira & ServiceNow RPA Libraries<br>* AWS Cloud Workflow<br>* Control-M Workload Automation<br>* Kibana Dashboard Integration<br>* Integrating Machine Learning and Data Science<br><br>Pre-installation of Python, Robot Framework & Robotframework-Database-Library (External Library) is recommended if participants wish to follow along and try some of the code during the workshop. Passive mode welcome but I ask participants to be focused.<br><br><h3>For all skill levels</h3><br>",
                  bio: "Adrian Yorke is a senior Data Specialist and DevOps Engineer at OP, one of Finland's largest and oldest Financial groups.<br>* Driving force behind the adoption of DevOps and Test Automation using Robot Framework in the Data Warehousing tribe.<br>* During 2019 authored and presented a Python Summer Camp workshop series.  Some of the sessions had 60+ live attendees even though it was held during the month of July.<br>* Tech interests: Python, Raspberry Pi projects & recently I've been studying machine learning and data science.<br>* When I'm not being a geek: swimming (former national championship swimmer), long distance running (I actually completed the London marathon!), carpentry & just being there for my daughter and helping her grow." },
                { author: "Joshua Gorospe", title: "Strategies for creating your own conversational test assistant with Robot Framework and other tools",
                  description: "Wouldn't it be nice to have a conversational approach to working with Robot Framework? In this workshop I will share some examples to help you come up with ideas to make your own conversational test assistant.",
                  descriptionExpanded: "<h2 class='no-arrow'>Workshop Idea</h2>* Strategies for remote test triggering, test scheduling, and various tools to create a conversational test assistant with Robot Framework<br>* Create a conversational test assistant and demonstrate it.<br>* Demonstrate how to trigger Robot Framework through the parameterized Docker container running the Go-lang Webhook and the conversational test assistant.<br>* Demonstrate how to trigger Robot Framework through a Jenkins Freestyle Job (parameterized build through Jenkins API) and the conversational test assistant.<br>* Demonstrate how to trigger Robot Framework through a Zapier email Zap and the conversational test assistant.<br><br><h3>For all skill levels</h3>",
                  bio: "<a href='https://leanpub.com/toolstrategiesforlonetesters' target='blank'>Joshua is currently writing a book.</a> He Was a Senior Test Engineer in Intersection Co. (a Sidewalk Labs and Alphabet owned company) and lead tester for the Intersection (ICS) Connected Communities Team working on test design and test strategy leadership for several initiatives with Hudson Yards, Related Company, and other clients. There he ran, monitored, and built the test infrastructure for the ICS (Intersection Consulting & Solutions) Buildkite CI pipelines. He also created and maintained several types of daily tests for the Hudson Yards Technology Platform, a technology platform used to integrate multiple building management systems for security, facial recognition, surveillance, visitor management systems, and building sensor data. He previously worked on the Hertz eCommerce Test Tools Team for approximately 5 years." },
                { author: "Jani Mikkonen",
                  title: "Moving from Python 2 to Python 3 and learn new tricks while doing it",
                  description: "Going through the steps of porting or ensuring your libraries are Python 3 ready. Step by step guide and overview of tools and practices to help you take the steps for new brave world of Python 3 and learn new techniques to increase code quality afterwards. Workshop utilizes a set of existing libraries that are then ported to be useable within Python 3 ecosystem.",
                  descriptionExpanded: "<h2 class='no-arrow mb-0'>Audience</h2>People working on integration and/or development of robot framework libraries in any fashion.<h2 class='no-arrow mb-0 mt-3'>Requirements</h2>* Laptop with working python and pip <br>* Some hands on experience of with extending robot framework via python<h2 class='no-arrow mb-0 mt-3'>Objectives</h2>Attendees have gone thru an experience by porting a robot framework library to python3. During the project, people should learn about how to apply static analysis, testing, code coverage, virtual environments and coding practices into the porting process and how those steps can help even after the project.<h2 class='no-arrow mb-3 mt-3'>Detailed abstract</h2><h3 class='mb-0 mt-2'>Intro</h3>Workshop starts with the quick recap of what's to be archived by the end of the workshop<h3 class='mb-0 mt-2'>Tests, tests and more tests</h3>Succesful and easy transformation from python 2 to 3 starts with good set of tests.  In this section we'll be implementing a set of new testsuites and/or adding and fixing existing ones.<h3 class='mb-0 mt-2'>Tooling for the journey</h3>In order to start the journey, one needs working environment to test with multiple versions of python and how we can produce information about  what and where changes are needed by utilizing static analysis, code coverage measurements. And then making changes with automated tooling and how different tools can help with each other.<h3 class='mb-0 mt-2'>Old and new code</h3>In this section, we'll cover some of the main topics that have changed since introduction of Python3 that need to be modified. And what sort of new features are available that could be used to ease the development and improve code quality.<h2 class='no-arrow mb-0 mt-3'>Outline</h2>1. Intro (15 mins)<br><span class='ml-4'>1. Who am I?</span><br><span class='ml-4'>2. Why we are here.</span><br>2. Tests, Tests and More Tests.  (20 mins)<br>3. Tooling For The Journey. (90 mins)<br><span class='ml-4'>1. Virtual Environments And Art Of Choosing Your Python Interpreter</span><br><span class='ml-4'>2. Code Coverage For Clarity</span><br><span class='ml-4'>3. Static Analysis To The Rescue</span><br><span class='ml-5'>1. Code Analysis</span><br><span class='ml-5'>2. Type Checking</span><br><span class='ml-4'>4. Code \"Converters\"</span><br><span class='ml-4'>5. Putting it all together.</span><br>4. Old And New Code (30 mins)<br><span class='ml-4'>1. Old things that need to be checked</span><br><span class='ml-4'>2. And new things to be had!</span><br><br><h3>For all skill levels</h3>",
                  bio: "Jani Mikkonen - Automagician At Large - is recent convert to Robot Framework with few pull requests under his belt  so far but not a new comer to test automation and software development in general. He's currently maintaining few opensource projects like static analyzer frontend for C++ and tool to automate webdriver binary installations and on his spare time he's working on SeleniunTestability library that allows automatic waiting of asyncronous events from css animations to ajax requests. Jani works as a Testing Engineer at Varjo." },
                { author: "Asko Soukka",
                  title: "Authoring Robot Framework tests and tasks with JupyterLab",
                  description: "What's better than writing plain language testing and automation with Robot Framework? Doing that interactively! We will deliver gentle hands-on introduction into writing Robot Framework tests and tasks using JupyterLab: modern and easy to use interactive computing and authoring environment.",
                  descriptionExpanded: "JupyterLab is a free and open source interactive computing environment from Project Jupyter. For Robot Framework users, JupyterLab provides an intuitive test authoring user-interface with many IDE-like features and built-in interactive test and keyword execution – logs and reports embedded.<br><br>For organisations, JupyterLab enables an option for controlled cloud-like deployment model called JupyterHub, where test authors may write and execute tests directly from their web browsers, without need of direct network access for the system under test from their own computers.<br><br>In this workshop we cover:<br><br>* installing JupyterLab with Robot Framework integration<br>* walkthrough on JupyterLab IDE features for Robot Framework<br>* authoring and executing Robot notebooks with JupyterLab<br>* authoring and using custom keyword libraries with JupyterLab<br>* authoring and using Python keyword libraries with JupyterLab<br>* advanced features of our Robot Framework Jupyter integrations<br>* writing interactive Robot Framework tutorials in JupyterLab<br>* executing Robot notebooks from command line<br>* exporting Robot notebooks into .robot-files<br><br>A testimony about RobotLab: \"After trying up few different setups ofRobot Framework combined with variety of GUI (graphical user interface) tools it turned out that there was a much easier way to do it. By installing Robotlab, the package mentioned earlier, the user can really focus on the testing  part  and  not  a  complicated  set  up.  This  is  especially  good  if  the  tester  is  not familiar with programming and updating advanced user settings for their operating sys-tem. GUI also provides testers easier ways to write and execute tests and view the test logs and screen captures.\" <a href='https://www.theseus.fi/bitstream/handle/10024/169008/Tiia-Rautavesi-thesis.pdf?sequence=2&isAllowed=y' target='blank'>(Link to the thesis)</a><br><br><h3>For all skill levels</h3>",
                  bio: "Asko Soukka is the author of RobotKernel, which is the first Robot Framework integration developed for the popular interactive computing environment called Jupyter. Asko bootstrapped the work on RobotKernel at the sprints of RoboCon 2018, and together with Nicholas Bollweg from Project Jupyter, presented the project at RoboCon 2019. Asko works as a Software Architect at Digital Services of University of Jyväskylä, where Robot Framework is used for both acceptance testing and business process automation. When working on those topics, Asko continues to explore new ways to ease test and task authoring with Jupyter." },
                { header: 'Full-day workshops', margin: true },
                { author: "Jenna Kaisanlahti, Valtteri Kukkola",
                  title: "Robot Framework hands-on",
                  description: "A hands-on introduction to test automation with Robot Framework. No prior experience on Robot Framework or test automation is required.",
                  descriptionExpanded: "The target of this workshop is to learn the basics of Robot Framework. This includes creating test cases and new domain specific higher level keywords, running tests and analyzing results, as well as understanding the overall architecture of the framework and what is available in the wider Robot Framework ecosystem.<br><br>This workshop is especially targeted for testers, programmers, and other development team members, but it is suitable for everyone who is interested in Robot Framework. Participants should have some understanding about software development and testing, but no programming skills or previous test automation experience is necessary.<br><br>Participants should have a laptop with Python 3.6 or newer installed. Operating system does not matter, but participants should be comfortable using the machine and have local admin rights to it. It is possible to work also in pairs using only one laptop. The workshop will be held in English.<br><br><b>The workshop focuses on test automation purposes, but we warmly welcome newcomers with RPA (Robotic Process Automation) intentions as well. Note that applying Robot Framework to RPA typically requires further training and python skills, though.</b><br><br><h3>Recommended for beginners!</h3>",
                  bio: "<h3 class='mb-0 mt-2'>Jenna Kaisanlahti</h3>Jenna Kaisanlahti is a consultant combining the roles of test automation engineer and software developer. She has several years of test automation experience with Robot Framework in medical, finance and entertainment business domains. Jenna held the well-received hands-on workshop at robocon 2019.<br>In her free time, Jenna is either playing the saxophone or enjoying some live music that Helsinki jazz scene has to offer.<h3 class='mb-0 mt-2'>Valtteri Kukkola</h3>Valtteri is a Software Developer and Software Automation Specialist. He works as a consultant in software development projects with variety of roles. Valtteri's professional interests lie in Cloud computing, Containers, Full-Stack Development and properly automating the manual labour in RPA and Test automation tasks.<br>Valtteri has experience with using Robot Framework for web automation in industrial domain as well as in more general web based applications. His technical interests includes Robot Framework, Decision based automation, and Functional Programming (Clojure)." },
                { author: "Ed Manlove",
                  title: "Introduction to Web Testing using SeleniumLibrary and Robot Framework",
                  description: "We will introduce the Selenium Library and present an overview of keywords the library provides for testing websites and web based applications. Starting with some of the core SeleniumLibrary keywords we will build tests starting with basic tasks and then growing complexity.",
                  descriptionExpanded: "<h2 class='no-arrow mt-3'>Outline/overview of the workshop</h2><h3 class='mb-0'>Getting Started with Seleniumlibrary</h3>We will introduce the Selenium Library and present an overview of keywords the library provides for testing websites and web based applications. Starting with some of the core SeleniumLibrary keywords we will build tests starting with basic tasks and then growing complexity.<br><br><h3 class='mb-0'>Locators</h3>Web testing is, in part, interacting with elements on the page. How one specifies which element they are working with is done with locators. We will discuss locators and the usage throughout the library; looking at both \"action\" and \"validation\" keywords.<br><br><h3 class='mb-0'>Debug Techniques</h3>Different techniques for debugging issues within the scripts and within the browser will be shown. We will demonstarte both simple debugging techniques and more advanced methods for debugging the scripts.<br><br><h3 class='mb-0'>Waiting</h3>We will look at some basic and advanced techniques for dealing with timing issues on the web pages we are testing.<br><br><h3 class='mb-0'>Advanced Topics</h3>We will briefly look at some advanced topics, like page object model and special browser configuration.<br><br><h2 class='no-arrow mb-0'>Learning Outcomes</h2>Participates will come away with detailed introduction to SeleniumLibrary. They will be able to distinguish between different sets of keywords. They will have pratical, hands-on experience writing scripts navigating, interacting with, and validating webpages and the elements they contain. They will have different solutions for solving some common problems testers experience when testing web applications. They will also have a good introduction into advanced topics and resources for further exploring those advanced topics.<br><br><h2 class='no-arrow mb-0'>Target Audience</h2>This workshop is for those who have some prior experience with Robot Framework and are starting to apply it to web testing. Students should have some experience with running Robot Framework and have used RIDE before. Some command line experience is necessary. We will discuss some Python programing topics and some basic programming topics like For Loops.<br><br>This workshop will be presented in English with three presentors, two who are bi-lingual in Finnish and English and the third, a native English speaker.<br><br><h2 class='no-arrow mb-0'>Prerequisites</h2>* All participates will need to bring a laptop preconfigured to the workshop.<br>* Particapte must have access to add and modify software on their laptops.<br>* Detailed setup instructions will be shared couple of weeks before workshop day.<br>* Configure your laptops well before the workshop day<br><br>Any special needs should be requested through the conference organizers, at best two weeks prior to the workshop. We will do our best to accomidate any needs and will communicate back either our ability or inability to meet those needs.<br><br><h3>At least basic knowledge of Robot Framework is recommended.</h3>",
                  bio: "Ed Manlove has been a part of the Robot Framework community since 2011. He inherited the leadership of the Selenium2Library project from Ryan Tomac sharing it with Jeremy Johnson and passing on that role to Tatu Aalto. He is the author of a couple libraries dealing with timing issues within AJAX enabled websites. Ed is currently a Senior Software Test Engineer at Cox Automotive testing with Robot Framework and taught several teams how to test with Robot Framework. A member of the Selenium user community Ed has presented at the Selenium Conference, ran an unconference focusing on user issues, and volunteered at the conferences (even being a maître d')." },
                { author: "Tatu Aalto", title: "Advanced SeleniumLibrary and Robot Framework" },
                { author: "Eeva Terkki, Ismo Aro",
                  title: "Hands-on Windows GUI automation with Robot Framework",
                  description: "Fully hands-on workshop to learn how to automate Windows GUI applications using Robot Framework and WhiteLibrary.",
                  descriptionExpanded: "In this workshop we will create test cases for Windows GUI applications. For this, we are using Robot Framework GUI testing library called <a href='https://github.com/Omenia/robotframework-whitelibrary' target='blank'>WhiteLibrary</a>, which supports automating Win32, WinForms and WPF applications. We will learn how to find different UI controls from the GUI and how to interact with them using WhiteLibrary. We will also learn how to write good quality test cases for your Windows GUI.<br><br>This session is fully hands-on, so bring your own Windows laptop with Python 2.7, 3.5 or 3.6 installed. Local admin rights are also recommended to be able to install additional software during the workshop.<br><br><h3>At least basic knowledge of Robot Framework is recommended.</h3><h3>Maximum number of participants is 10.</h3>",
                  bio: "<h3 class='mb-0 mt-2'>Eeva Terkki</h3>Eeva is a test automation specialist and one of the developers of WhiteLibrary. She has worked on test automation with Robot Framework in several projects and has an interest in developing automation tools. She is also very fond of birds.<h3 class='mb-0 mt-2'>Ismo Aro</h3>Ismo Aro is Partner/CTO in NorthCode and Chairman of the Board in Robot Framework Foundation. He has a strong focus in modernizing the ways of working and the quality of work. His previous roles have included Test Engineer, Scrum Master, Product Owner, Test Automation Specialist, Agile Coach, Lead QA Engineer and Partner and his employers were Nokia, Ericsson, Basware and Omenia." },
                { author: "Markus Stahl, Christian Kokoska",
                  title: "Integrating Robot Framework to devops infrastructure",
                  description: "So, you got yourself some compelling test suites in Robot Framework. Now what? How do you execute tests automatically? How do you analyse test results? How do you monitor test runs? Join this workshop and learn from examples how to integrate your tests in your infrastructure.",
                  descriptionExpanded: "This course is best adviced for beginners. If you are uncertain how to start integrating Robot Framework in your infrastructure or you would like to learn by example, this course is for you.<br><br>In this course, you will learn, how to:<br>1. Manage version from tests<br>2. Apply <b>clean test</b> rules<br>3. Manage test executions<br>4. Create reports from test results<br><br>Tools used in this workshop are: Jenkins, Gitlab, PostgreSQL, DbBot and RFlint. The tools themselves are not mandatory for achieving test management with open source tools. Learnings from this workhops can be applied to most of competitive tools.<br><br><h3>Recommended for beginners!</h3>",
                  bio: "<h3 class='mb-0 mt-2'>Markus Stahl</h3>Markus has 10 years working experience as system administrator, java developer and lean management consultant. Since 2016 he's Automation Engineer for the quality assurance department at Deutsche Post Adress. His favorite tools are Robot Framework, Gitlab and Mattermost. Besides automation his favorite activities are gardening and entertaining his kids.<h3 class='mb-0 mt-2'>Christian Kokoska</h3>" },
                { author: "Pekka Klärck",
                  title: "Extending Robot Framework (advanced)",
                  description: "In this workshop you will learn how to extend Robot Framework using various different interfaces. The first half of the workshop is dedicated to the library API, starting from basics and quickly continuing to more advanced topics like the dynamic library interface (used nowadays by SeleniumLibrary) and automatic argument type conversion. During the second half you will get familiar with other extending and integration possibilities such as the listener API, modifying tests dynamically before execution, starting execution programmatically, analyzing results, and new parsing APIs in Robot Framework 3.2.",
                  descriptionExpanded: "This workshop is for you if you already know basics of using Robot Framework, preferably also basics of writing tests libraries, and want to take your skills to the next level. These skills make it easier to adapt the framework to your own needs in different contexts.<br><br>The workshop is 100% hands-on, no slides, learn-by-doing. In addition to learning from the person who has designed these powerful APIs, you have a change to ask hard questions related to Robot Framework from its creator.<br><br>Participants should know basics of Robot Framework, including test library API, and Python programming. Participants should bring their own laptop with Python 3.6 or newer and Robot Framework 3.2 or newer installed. They should also have adequate admin rights to install possible additional Python modules using pip. A text editor or an IDE for writing Python code and Robot Framework tests is needed as well.<br><br><h3>Recommended for advanced users.</h3><h3>Max number of participants: 16</h3>" }
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
              header: "Sprints",
              text: "<div><p>Date: January 17, 2020<br>Location: Eficode, <a href='https://goo.gl/maps/h3FYLAHAW8TCvadX6'>Pohjoinen Rautatiekatu 25</a><br><br>After the main conference we have development sprints. Sprints are for you if you want to contribute to some existing project in Robot Framework ecosystem, have a project or project idea you'd like to work with others, or just want to meet with other Robot Framework users and developers. We'll also have sauna afterwards!<br><br>Developers will select tasks suitable for new contributors beforehand (typically labeled with <code>good new issue</code> or <code>help wanted</code> in their issue trackers), but participants can obviously select issues they’d like to work with themselves. Many of the tasks are likely to involve coding, but there certainly are also non-coding tasks like testing, documentation and work with infrastructure like CI.</p> <p>If you are new to contributing to open source, we recommend you to take a look at the <a target='blank' href='https://opensource.guide/how-to-contribute/'>How to Contribute to Open Source</a> guide. Individual projects typically also have their own contribution guidelines you can find via their project pages and may want to study beforehand.<br><br>Sprints are free of charge and open for everyone, including those not participating the conference itself. Sprint facilities are provided by Eficode. The address is <a target='blank' href='https://goo.gl/maps/YoeBPqtGyGo'>Pohjoinen Rautatiekatu 25</a>. Food and drinks will be available.</p></div>"
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
                "<div><p>The main conference venue is Bio Rex, <a href='https://goo.gl/maps/gnd4duvnunP2'>Mannerheimintie 22-24</a>. Pre-conference workshops are organize at Siili, <a href='https://goo.gl/maps/CPUAifmpZ56sTUaH9'>Ruoholahdenkatu 21</a>, and post-conference sprints at Eficode, <a href='https://goo.gl/maps/h3FYLAHAW8TCvadX6'>Pohjoinen Rautatiekatu 25</a>.</p><h2>TRANSPORTATION: AIRPORT</h2><p>The distance from Helsinki airport to Bio Rex is 21 km. Trains marked as “I” and “P” go from the airport to Helsinki Central Station. From the Helsinki Central Station it is only 5 minutes' walk to Bio Rex.</p><p>Buses operate between Helsinki airport and Helsinki Central Station. The bus stops for both arriving and departing buses are located in front of the terminals (T1 & T2). Finnair bus goes from airport to Eliel Square and bus nr. 615 goes from airport to Rautatientori. There is a short walk to Bio Rex from both Eliel Square (300 meters) and Rautatientori (350 meters).</p><p>Time estimation for the journey is 40 minutes by bus and about 30-35 minutes by train or taxi. Taxi cost is approximately 40-55 euros depending on the traffic and the taxi company.</p><p>At Helsinki airport there are informative signage for trains, buses and taxis to ensure that you won’t get lost.</p><h2>TRANSPORTATION: RAILWAY STATION</h2><p>Railway station is only 5 minutes’ walk (350 meters) from Bio Rex. To reach Siili's and Eficode's offices you can either walk or go one stop to Kamppi with the metro departing from Railway station.</p><h2>TRANSPORTATION: BUS STATION</h2><p>Intercity bus connections from Kamppi bus station (400 meters away) and bus connections for Helsinki's internal traffic from Rautatientori (350 meters) located close to Helsinki Central Station. Buses to Helsinki Airport leave from Eliel Square (300 meters) and Rautatientori (350 meters).</p></div>"
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
                "<div><h2>Hotel deals</h2><p><a href='https://www.sokoshotels.fi/en/helsinki/sokos-hotel-presidentti'>Original Sokos Hotel Presidentti</a><br>- Standard single room: 150€ / night<br>- Standard double room: 170€ / night<br>- Breakfast and Wi-Fi included<br>- Promo code will be sent after ticket purchase</p></div>"
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
              header: "Previous talks - 2019",
              text: '<p>(Click title for video)</p>',
              talks: [
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
              text: '<p>(Click title for video)</p>',
              talks: [
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
</script>
