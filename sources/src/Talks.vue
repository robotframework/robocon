<template>
    <div class="row no-gutters">

         <navigation-horizontal :pages="pages"/>

    <div class="col-md-12" ref="content" style="width:unset">
        <app-header/>
        <page-block v-for="(page, index) in pages"
          v-bind:page="page"
          v-bind:index="index"
          v-bind:key="index"
          class="pl-md-5 px-lg-2 p-sm-2 p-xs-1 link-fix"/>
        <app-footer class="mt-0 py-5"/>
      </div>
    </div>
</template>
<script>
import PageBlock from '@/Components/PageBlock.vue'

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
                href: "https://www.etteplan.com/expertise/embedded-systems-and-iot/rd-testing-and-validation",
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
              header: "Schedule and speakers",
              text: "<div><h2 class='mb-0'>8:00 - Registration, coffee</h2><p></p><h2 class='mb-0'>9:00 - Pekka Klärck</h2><p>State of the Robot Framework union</p><h2 class='mb-0'>9:30 - Antti Karjalainen</h2><p>The start of the open source RPA movement</p><h2 class='mb-0'>10:00 - Break</h2><p></p><h2 class='mb-0'>10:30 - Juho Saarinen</h2><p>Evolution of Robot Framework user</p><h2 class='mb-0'>11:00 - Tatu Aalto</h2><p>Decade with SeleniumLibrary and browsers' UI automation</p><h2 class='mb-0'>11:30 - Lunch</h2><p></p><h2 class='mb-0'>12:30 - Brady Hill</h2><p>RobotFramework for Embedded Software Testing </p><h2 class='mb-0'>12:55 - Nguyen Huu Bach</h2><p>RENAT - a network testing plugin based on Robot Framework </p><h2 class='mb-0'>13:20 - Mikael Siirtola</h2><p>Robot Framework with Patient Monitors: Test Automation at GE Healthcare Finland </p><h2 class='mb-0'>13:45 - Break</h2><p></p><h2 class='mb-0'>14:00 - Päivi Raulamo-Jurvanen</h2><p>Practical Experiences on Evaluating Software Testing Tools with focus on Robot Framework </p><h2 class='mb-0'>14:30 - Nicholas Bollweg / Asko Soukka</h2><p>Robots from Jupyter – The Future of Authoring Tests and Tasks in Robot Framework</p><h2 class='mb-0'>15:00 - Coffee</h2><p></p><h2 class='mb-0'>15:30 - Joonas Lehtimäki</h2><p>Dynamically scalable test environment on top of Kubernetes</p><h2 class='mb-0'>16:00 - Oleksandr Kravchenko</h2><p>Dynamic Generation of Model Based Testcases Using Listener Interface Version 3 </p><h2 class='mb-0'>16:30 - Break</h2><p></p><h2 class='mb-0'>17:00 - Lightning talks</h2><p>Topic of the day, you decide! Sign-up your name, topic, and contact information to the lightning talk list at the venue during the conference day and get ready to present a 10 minute lightning talk on the big stage.</p><h2 class='mb-0'>18:00 - Networking</h2><p></p><h2 class='mb-0'>19:00 - Venue closes, after party starts.</h2><p>Official after party starting at 6:30pm at Vala offices close to the conference venue.</p></div>"

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
              text: "<div><p>Sign up for workshops coming soon!</p><h2 class='mb-0'>Asko Soukka / Nicholas Bollweg</h2><p>Authoring Robot Framework test and task suites with JupyterLab</p><h2 class='mb-0'>Ismo Aro / Eeva Terkki</h2><p>Hands-on Windows desktop testing with Robot Framework</p><h2 class='mb-0'>Joshua Gorospe</h2><p>Robot Framework strategies for the lone tester</p><h2 class='mb-0'>Ed Manlove / Tatu Aalto</h2><p>Web Testing using Selenium Library and Robot Framework</p><h2 class='mb-0'>Jenna Kaisanlahti</h2><p>Robot Framework hands-on</p><h2 class='mb-0'>Pekka Klärck</h2><p>Extending Robot Framework</p></div>"
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
                "<p>More info coming later</p>"
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
              text:
                "<p>More info coming later</p>"
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
              text:
                "<p>More info coming later</p>"
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
              src: "https://www.youtube.com/embed/?listType=playlist&list=PLSK6YK5OGX1AUdykW4DYwNeSN_6qDE_-z"
            }
          }
        }
      ]
    };
  }
};
</script>
