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
                '<p>RoboCon is an annual gathering for the <a href="http://robotframework.org" target="blank">Robot Framework community</a>. It provides a great possibility to learn from the experts, hear how the framework is used in different places, and most importantly, meet fellow Robot Framework users as well as its developers. <br><br> Date: January 15-16 (Wed-Thu), 2020 <br> Place: Bio Rex Helsinki, <a target="blank" href="https://goo.gl/maps/gnd4duvnunP2">Mannerheimintie 22-24</a>, 00100 Helsinki, Finland<br><br> On top of the RoboCon conference day we have interesting side events where you have a chance to network with people from the same community. The schedule for the event week is: <br> <br>Tue, Jan 14: <a href="#workshops">Workshops</a> <br>Wed - Thu, Jan 15-16: <a href="#program">RoboCon Conference</a><br>Fri, Jan 17: <a href="#sprints">Sprints</a><br> <br> RoboCon is organized by <a href="http://robotframework.org/foundation/">Robot Framework Foundation</a>, a non-profit consortium that also sponsors the development of Robot Framework. Possible profits from the conference will be used for this purpose too. </p><p>Conference hashtag to use on Twitter and elsewhere is <code><b>#robocon</b></code>. <a href="https://robotframework-slack-invite.herokuapp.com/" target="blank">Robot Framework Slack community</a> also has a dedicated <code>#robocon</code> channel to ask question and chat with other participants. To contact the organizers directly, use <a href="mailto:info&#64;robocon.io">info&#64;robocon.io</a>.</p>'
            }
          }
        },
        {
          title: "CFP",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Call for Proposals",
              text:
                "<p>RoboCon 2020 call for proposals is open at <a href='https://www.papercall.io/robocon2020'>papercall.io/robocon2020</a> and closes on September 16, 2019. We are proud to partner with <a href='https://speaking-easy.com'>SpeakEasy</a> — a technical conference diversity initiative supporting first time international conference speakers with a focus on women and people of color.</p>"
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
                '<p>Ticket sales opening soon!</p> <table style="width: 100%; display: flex; margin-top: 10px"><tr><th></th><th>1 day</th><th>2 days</th><th>Available until</th></tr><tr><td>Blind Robot</td><td>-</td><td>600€</td><td>30.09.2019</td></tr><tr><td>Early Robot</td><td>600€</td><td>900€</td><td>31.12.2019</td></tr><tr><td>Late Robot</td><td>800€</td><td>1200€</td><td>15.01.2020</td></tr></table><br><p>All prices are exclusive of 24 % VAT. <a href="#workshops">Workshop</a> tickets are sold separately.</p>'
            }
          }
        },
        /*{
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
                img: require("@/assets/img/users/s_sogeti.png")
              },
              {
                title: "Testimate",
                href: "https://www.testimate.fi/",
                img: require("@/assets/img/users/s_testimate.png")
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
              },
              {
                title: "Eficode",
                href: "https://www.eficode.com/home",
                img: require("@/assets/img/users/s_eficode.png")
              }
            ]
          }
        },*/
        {
          title: "Program",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: false,
          user_box_centered: true,
          data: {
            text: {
              twitter: false,
              text: '<p>Conference program TBA</p>',
              header: "Conference program"
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
              text: '<p>Workshops are announced on October 1, 2019.</p>'
              /*talks: [
                {
                  title: "09:00-12:00 - Asko Soukka / Nicholas Bollweg",
                  description:
                    "Authoring Robot Framework test and task suites with JupyterLab",
                  descriptionExpanded:
                    '<p>Asko Soukka<br>University of Jyväskylä</p><p>Nicholas Bollweg<br>Georgia Tech Research Institute &amp; Project Jupyter</p><p>09:00-12:00<br>150€ / 200€</p><p>Max 12 participants</p><p><a href="https://jupyterlab.readthedocs.io/">JupyterLab</a> is a browser based power user environment for interactive computing. For Robot Framework test and task suite authors, JupyterLab\'s user-friendly authoring environment provides a new fun way to learn, practice and even share Robot Framework. JupyterLab encourages fast iterations and learning by discovering, and <a href="https://youtu.be/-gU4srzslpc">our dedicated SeleniumLibrary support with &quot;sticky session&quot;</a> makes it an extremely productive for testing and automating with web browsers. At least for small projects, JupyterLab can replace traditional test and tasksuite authoring tools.</p><p>We welcome all level of Robot Framework users to our workshop. At our workshop, beginners will learn the very basics of Robot Framework for browser testing and automation in a new and fun way. Advanced Robot Framework users may not learn much new about Robot Framework, but will get a new open source tool into their toolbox from JupyterLab.</p><p>This is a hands-on workshops for maximum of 12 participants. Asko is native in Finnish and Nick in English. Own laptop is required with permissions to install new software. We provide a "single click installer" for the JupyterLab environment used in the workshop for Windows, MacOS and Linux. Installing JupyterLab with the installer is part of the workshop. The installation  provides uninstaller for Windows and single removable directory for MacOS and Linux.</p><p>In this workshop we cover:</p><ul><li>installing JupyterLab with Robot Framework integration</li><li>walkthrough JupyterLab IDE features for Robot Framework</li><li>authoring and executing Robot notebooks with JupyterLab</li><li>authoring and using custom keyword libraries with JupyterLab</li><li>authoring and using Python keyword libraries with JupyterLab</li><li>advanced features of our Robot Framework Jupyter integrations</li><li>writing inline documentation into notebooks in JupyterLab</li><li>executing Robot notebooks from command line</li><li>exporting Robot notebooks into .robot-files</li><li>highlights of the current JupyterLab extension ecosystem</li></ul><p>JupyterLab is being developed and maintained by <a href="http://jupyter.org/">Project Jupyter</a> and its large community. The hosts of this workshop are the authors of Robot Framework support for Jupyter environments, including JupyterLab. 100% of the registration fees for this workshop will be used to cover the costs and support the Robot Framework foundation.</p><p>Participants should bring their own laptop with Windows, OSX or Linux. Local admin rights are also needed for JupyterLab installations.</p>',
                  bio:
                    "<p>Asko, an established Robot ecosystem contributor, bootstrapped the work on Robot support for interactive computing in Jupyter at the sprints of RoboCon 2018, and continues to explore new ways to ease test and task authoring with Jupyter. Asko works as a Systems Designer at Digital Services of University of Jyväskylä, where Robot Framework is used for both acceptance testing and process automation.</p><p>Nick, while a newcomer to the Robot ecosystem, is a long-time contributor to many Jupyter, Python, and JavaScript projects, bringing skills and knowledge to integrate Robot across many parts of the Jupyter ecosystem and beyond. Nick works at the Georgia Tech Research Institute as a Systems Architect, while also providing code, design and architecture contributions as a Jupyter Project core team member and local Jupyter User Group organizer.</p>",
                  imgUrl: ["Asko_Soukka.jpg", "Nicholas_Bollweg.jpg"]
                }]*/
            }}
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
              text: "<div><p>Sprints are free of charge and open for everyone, including those not participating the conference itself. Sprint facilities are provided by Eficode. The address is <a target='blank' href='https://goo.gl/maps/YoeBPqtGyGo'>Pohjoinen Rautatiekatu 25</a>. Food and drinks will be available.</p></div>"
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
                "<div><p>The main conference venue is Bio Rex Helsinki, <a target='blank' href='https://goo.gl/maps/gnd4duvnunP2'>Mannerheimintie 22-24</a>.</p><h2>TRANSPORTATION: AIRPORT</h2><p>The distance from Helsinki airport to Bio Rex is 21 km. Trains marked as “I” and “P” go from the airport to Helsinki Central Station. From the Helsinki Central Station it is only 5 minutes' walk to Bio Rex.</p><p>Buses operate between Helsinki airport and Helsinki Central Station. The bus stops for both arriving and departing buses are located in front of the terminals (T1 & T2). Finnair bus goes from airport to Eliel Square and bus nr. 615 goes from airport to Rautatientori. There is a short walk to Bio Rex from both Eliel Square (300 meters) and Rautatientori (350 meters).</p><p>Time estimation for the journey is 40 minutes by bus and about 30-35 minutes by train or taxi. Taxi cost is approximately 40-55 euros depending on the traffic and the taxi company.</p><p>At Helsinki airport there are informative signage for trains, buses and taxis to ensure that you won’t get lost.</p><h2>TRANSPORTATION: RAILWAY STATION</h2><p>Railway station is only 5 minutes’ walk (350 meters) from Bio Rex.</p><h2>TRANSPORTATION: BUS STATION</h2><p>Intercity bus connections from Kamppi bus station (400 meters away) and bus connections for Helsinki's internal traffic from Rautatientori (350 meters) located close to Helsinki Central Station. Buses to Helsinki Airport leave from Eliel Square (300 meters) and Rautatientori (350 meters).</p></div>"
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
          title: "talks-2019",
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
          title: "talks-2018",
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
