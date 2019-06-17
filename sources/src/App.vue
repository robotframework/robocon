<template>
  <div class="row no-gutters">
    <navigation-horizontal :pages="pages"/>
    <b-img :src="require('@/assets/img/ROBOTFW_Mark_White_LOW_cropped.png')" class="logo-fixed" alt="Robot Frameworkg logo"/>
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
                '<p>Hello, Robocon is coming soon!</p>'
            }
          }
        },
        {
          title: "proposals",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Call for Proposals",
              text:
                "<p>papercall.io</p>"
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
                '<p>Ticket sales starting soon!</p>'
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
              /*text: '<a target="blank" href="https://www.lyyti.fi/reg/roboconworkshops">Workshop tickets available here.</a><p><br>Workshops provide a possibility to learn more about Robot Framework and related libraries and tools. They are mostly hands-on and participation is limited to 12-20 persons. They are organized on Wednesday, January 16, a day before the main conference. Workshops are held in <a href="https://goo.gl/maps/xaUHT6s3Uao" target="blank">Siili facilities</a>. If parking is needed see instructions <a href="https://www.europark.fi/hki-ruoholahti-eng/" target="blank">here</a>. Further info about the exact room for each workshop is provided in the workshops venue. Click the titles below for more information.</p><p>Full day workshops cost 300€ and half day workshops are 150€. These prices are for people participating the main conference and for employees of <a href="http://robotframework.org/foundation/">Robot Framework Foundation</a> member organizations. For others the prices are 400€ and 200€, respectively.</p>',*/
              text: '<p>Workshops are held on January 14th. Workshop tickets and topics will be available soon!</p>'
              /* talks: [
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
              text: "<div><p>Sprints are on January 17th.</p></div>"
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
          title: "Previous-talks",
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
