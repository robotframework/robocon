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
                '<p><a href="https://www.lyyti.fi/reg/Robocon2020">Tickets available here!</a></p> <table style="width: 100%; display: flex; margin-top: 10px"><tr><th></th><th>1 day</th><th>2 days</th><th>Available until</th></tr><tr><td><del>Blind Robot</del></td><td>-</td><td><del>600€</del></td><td><del>2019-09-30</del></td></tr><tr><td>Early Robot</td><td>600€</td><td>900€</td><td>2019-12-31</td></tr><tr><td>Late Robot</td><td>800€</td><td>1200€</td><td>2020-01-15</td></tr></table><br><p>All prices are exclusive of 24 % VAT. <a href="#workshops">Workshop</a> tickets are sold separately.</p>'
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
                { author: "Elias Hachichou, Kristina Sabotic", title: "End-to-end testing through multiple interfaces" },
                { author: "Tommi Oinonen", title: "Get to grips with your test results" },
                { author: "Adrian Yorke", title: "Test Automation for the Enterprise Data Warehouse or Teaching an Old Dog New Tricks!" },
                { author: "Joshua Gorospe", title: "Strategies for creating your own conversational test assistant with Robot Framework and other tools" },
                { author: "Jani Mikkonen", title: "Moving from Python 2 to Python 3 and learn new tricks while doing it" },
                { author: "Asko Soukka", title: "Authoring Robot Framework tests and tasks with JupyterLab " },
                { header: 'Full-day workshops', margin: true },
                { author: "Jenna Kaisanlahti, Valtteri Kukkola", title: "Robot Framework hands-on" },
                { author: "Ed Manlove", title: "Introduction to Web Testing using SeleniumLibrary and Robot Framework" },
                { author: "Tatu Aalto", title: "Advanced SeleniumLibrary and Robot Framework" },
                { author: "Eeva Terkki, Ismo Aro", title: "Hands-on Windows GUI automation with Robot Framework" },
                { author: "Markus Stahl, Christian Kokoska", title: "Integrating Robot Framework to devops infrastructure" },
                { author: "Pekka Klärck", title: "Extending Robot Framework (advanced)" }
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
