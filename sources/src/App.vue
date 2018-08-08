<template>
    <div class="row no-gutters">

         <navigation-horizontal :pages="pages"/>

    <div class="col-md-12" id="scroller"
    ref="content" style="position:relative;height:100vh;overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling: touch;">
        <app-header/>
        <page-block v-for="(page, index) in pages"
          v-bind:page="page"
          v-bind:index="index"
          v-bind:key="index"
          class="pl-md-5 px-lg-2 p-sm-3 py-5 p-xs-1"/>
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
              twitter: false,
              header: "Welcome to ROBOCON 2019!",
              text:
                '<p> <b>RoboCon</b> is the first, annual, gathering for the Robot Framework community. It provides a great possibility to learn from the experts, hear how the framework is used in different places, and, most importantly, meet fellow Robot Framework users as well as its developers.</p> Date: 18.1.2018, klo 09:00 – 18:00 Place: Valkoinen sali, Aleksanterinkatu 16-18, 00170 Helsinki RoboCon is organized by Robot Framework Foundation, a non-profit consortium that also sponsors the development of Robot Framework. Possible profits from the conference will be used for this purpose too. </p>'
            }
          }
        },
        {
          title: "Sponsors",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          user_box: false,
          user_box_centered: true,
          data: {
            text: {
              header: "Sponsors"
            },
            users: [
              {
                title: "Nokia",
                href: "http://www.nokia.com",
                img: require("@/assets/img/users/nokia.png")
              },
              {
                title: "KONE",
                href: "http://www.kone.com",
                img: require("@/assets/img/users/kone.png")
              },
              {
                title: "Finnair",
                href: "http://www.finnair.com",
                img: require("@/assets/img/users/finnair.png")
              },
              {
                title: "ABB",
                href: "http://www.abb.com",
                img: require("@/assets/img/users/abb.png")
              },
              {
                title: "metso",
                href: "http://www.metso.com",
                img: require("@/assets/img/users/metso.png")
              },
              {
                title: "FICOSA",
                href: "http://www.ficosa.com",
                img: require("@/assets/img/users/ficosa.png")
              },
              {
                title: "OpenDaylight",
                href: "http://www.opendaylight.org",
                img: require("@/assets/img/users/opendaylight.png")
              },
              {
                title: "Adwisit",
                href: "http://www.adwisit.se",
                img: require("@/assets/img/users/adwisit.png")
              },
              {
                title: "ryerson",
                href: "http://www.ryerson.org",
                img: require("@/assets/img/users/ryerson.png")
              },

              {
                title: "axon",
                href: "http://www.axon.tv",
                img: require("@/assets/img/users/axon.png")
              },
              {
                title: "CENX",
                href: "http://www.cenx.com",
                img: require("@/assets/img/users/cenx.png")
              },
              {
                title: "Conde Nast",
                href: "https://technology.condenast.com/",
                img: require("@/assets/img/users/condenast.png")
              },
              {
                title: "Opuscapita",
                href: "https://www.opuscapita.com/",
                img: require("@/assets/img/users/opuscapita.png")
              },
              {
                title: "steeri",
                href: "http://www.steeri.fi/en",
                img: require("@/assets/img/users/steeri.png")
              },
              {
                title: "NRL",
                href: "https://www.nrl.navy.mil",
                img: require("@/assets/img/users/nrl.png")
              },
              {
                title: "zilogic",
                href: "http://www.zilogic.com",
                img: require("@/assets/img/users/zilogic.png")
              }
            ]
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
                '<p> <b>RoboCon</b> is the first, annual, gathering for the Robot Framework community. It provides a great possibility to learn from the experts, hear how the framework is used in different places, and, most importantly, meet fellow Robot Framework users as well as its developers.</p> Date: 18.1.2018, klo 09:00 – 18:00 Place: Valkoinen sali, Aleksanterinkatu 16-18, 00170 Helsinki RoboCon is organized by Robot Framework Foundation, a non-profit consortium that also sponsors the development of Robot Framework. Possible profits from the conference will be used for this purpose too. </p>'
            }
          }
        },
        {
          title: "Program",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Program",
              text:
                '<h4>Speakers</h1><p>'
            }
          }
        },
        {
          title: "Support",
          text_block: false,
          text_block_centered: true,
          tab_box: true,
          feature_box: false,
          data: {
            text: {
              header: "Support"
            },
            tabs: [
              {
                title: "General",
                items: [
                  {
                    title: "@robotframework",
                    href: "http://twitter.com/robotframework",
                    text: "Announcements in Twitter."
                  },
                  {
                    title: "#robotframework",
                    href:
                      "http://webchat.freenode.net/?channels=robotframework&amp;prompt=1",
                    text: "#robotframework IRC channel on freenode."
                  },
                  {
                    title: "Slack",
                    href: "https://robotframework-slack-invite.herokuapp.com/",
                    text: "Robot Framework Slack community."
                  },
                  {
                    title: "robotframework-users",
                    href: "http://groups.google.com/group/robotframework-users",
                    text: "Community mailing list."
                  },
                  {
                    title: "Robot Framework issue tracker",
                    href:
                      "https://github.com/robotframework/robotframework/issues",
                    text:
                      "Notice that external libraries and tools developed as separate projects have their own issue trackers."
                  }
                ]
              },
              {
                title: "Other",
                items: [
                  {
                    title: "LinkedIn",
                    href:
                      "http://www.linkedin.com/groups/Robot-Framework-3710899",
                    text: "Robot Framework group on LinkedIn."
                  },
                  {
                    title: "AT.info",
                    href:
                      "http://automated-testing.info/category/robot-framework",
                    text: "Robot Framework help forum по-русски."
                  },
                  {
                    title: "robotframework-devel",
                    href: "http://groups.google.com/group/robotframework-devel",
                    text:
                      "Mailing list for contributors and developers of the Robot Framework ecosystem."
                  },
                  {
                    title: "Helsinki Meetup group",
                    href: "https://www.meetup.com/Robot-Framework-Helsinki/",
                    text: "Robot Framework Meetup group in Helsinki, Finland."
                  },
                  {
                    title: "Stack Overflow",
                    href:
                      "http://stackoverflow.com/questions/tagged/robotframework",
                    text:
                      "Questions in Stack Overflow tagged with Robot Framework."
                  },
                  {
                    title: "robotframework-announce",
                    href:
                      "http://groups.google.com/group/robotframework-announce",
                    text:
                      "Mailing list for just release announcements, nothing more."
                  }
                ]
              },
              {
                title: "Vendors",
                items: [
                  {
                    title: "Comiq",
                    href: "http://comiq.fi/",
                    text:
                      "Comiq is a Finnish software quality service provider founded in                2003 employing around 60 QA consultants."
                  },
                  {
                    title: "Digia",
                    href: "http://www.digia.com",
                    text:
                      "Digia is a IT service company that helps its customers developing and innovating solutions that support business operations together with customers."
                  },
                  {
                    title: "Eficode",
                    href: "http://www.eficode.com/",
                    text:
                      "Eficode is the leading devops company in Finland relying on automation, virtualisation and smart tool choices."
                  },
                  {
                    title: "Eliga",
                    href: "http://eliga.fi/",
                    text:
                      "Eliga is a one-man company by Pekka Klärck, the lead developer of Robot Framework. It provides top-notch training, consultation and support services related to Robot Framework and Python programming."
                  },
                  {
                    title: "Etteplan",
                    href: "http://www.espotel.com/",
                    text:
                      "Etteplan is a specialist in industrial equipment engineering, embedded systems and IoT and technical documentation solutions and services with deep knowledge in QA from network edge to cloud in Nordics."
                  },
                  {
                    title: "HiQ",
                    href: "http://www.hiqfinland.fi/",
                    text:
                      "HiQ is a Nordic ICT service and consultancy company focusing on streamlining our customers' businesses and simplifying people's lives."
                  },
                  {
                    title: "Knowit",
                    href: "https://www.knowit.fi/",
                    text:
                      "Knowit is a consulting company that helps its clients succeed by operating close and in an innovative, business-oriented way."
                  },
                  {
                    title: "Mykhailo Poliarush",
                    href: "http://poliarush.com/trainings/robotframework",
                    text: "Commercial Robot Framework training по-русски."
                  },
                  {
                    title: "Q-Factory",
                    href: "http://www.q-factory.fi/",
                    text:
                      "Q-Factory is specialized in test automation and quality assurance services."
                  },
                  {
                    title: "Qentinel",
                    href: "https://qentinel.com/",
                    text:
                      "Qentinel is a Finnish company that specialises in information system quality assurance."
                  },
                  {
                    title: "Reaktor",
                    href: "https://www.reaktor.com/",
                    text:
                      "Reaktor is a creative technology house that constructs exceptional digital services for clients."
                  },
                  {
                    title: "Siili",
                    href: "http://siili.com/",
                    text:
                      "Siili is a modern, full-service technology company, helping you create better business and meaningful digital experiences by combining strategic insight, creative design, data management, and technology expertise."
                  },
                  {
                    title: "Symbio",
                    href: "https://www.symbio.com/",
                    text:
                      "Symbio is international co-creation innovation partner. We help our customers create high quality products and future services in digital world."
                  },
                  {
                    title: "VALA Group",
                    href: "http://www.valagroup.com/",
                    text:
                      "VALA Group provides outstanding software development and quality assurance services by utilizing automation, co-operation and intelligent tool selection for companies ranging from start-ups to major publicly listed companies."
                  }
                ]
              }
            ]
          }
        }
      ]
    };
  }
};
</script>
