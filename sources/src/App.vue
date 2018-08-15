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
              src: "https://www.youtube.com/embed/6Kb1M3NECic?rel=0",
              header: "Welcome",
              text:
                '<p><b>ALL TEXTS ARE PLACEHOLDER!</b><br><br>RoboCon is the first, annual, gathering for the Robot Framework community. It provides a great possibility to learn from the experts, hear how the framework is used in different places, and, most importantly, meet fellow Robot Framework users as well as its developers. <br> <br> Date: 18.1.2018, klo 09:00 – 18:00 Place: Valkoinen sali, Aleksanterinkatu 16-18, 00170 Helsinki RoboCon is organized by Robot Framework Foundation, a non-profit consortium that also sponsors the development of Robot Framework. Possible profits from the conference will be used for this purpose too. </p>'
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
                '<p>Early bird tickets are available until 10.12.2017 with 250€ (incl. VAT 24%). </p><p>Starting from 11.12.2017 the conference ticket price is 470€ (incl. VAT 24%). </p><p>If you would like to purchase tickets with an invoice, contact tickets@robocon.io and include your billing information into the message. All invoiced tickets will be delivered as a one-time promocode that can be used to reclaim tickets from the online store. </p><p>If you are a member of the Robot Framework Foundation, you will receive your membership tickets similarly as a promocode.</p>'
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
                "<div class='ml-3'><h2 class='mb-3'>Speakers</h2><a class='color mt-5 text-left' href='http://www.siili.com'>Anssi Syrjäsalo, Siili</a><p>Keynote: How did we get here? Where do we go next?</p><a class='color mt-5 text-left' href='http://www.kone.fi'>Martin Taylor, Nymi</a><p>Design Patterns for Efficient Multi-Platform and Multi-Device Testing with Robot Framework</p><a class='color mt-5 text-left' href='http://www.kone.fi'>Aldina Codesso-Lipponen, Kone</a><p>Keynote: How did we get here? Where do we go next?</p><h2 class='mt-5'>Hallway Track</h3><p>In addition to the main conference room, there is dedicated space for an official “hallway track”. There you can chat with other users, show demos, work together, organize ad-hoc open space sessions, meet sponsor companies, and so on. This space can be used between the presentations, but it’s fine to use it also during presentations that aren’t so relevant for you.</p><h2 class='mt-5'>Lightning Talks</h3><p>After the presentations there is a time allocation for 10 minute lightning talks. Sign-up your name, topic, and contact information to the lightning talk list at the venue during the conference day.</p><h2 class='mt-5'>After Party</h3><p>Official after party starting at 6:30pm at Vala offices close to the conference venue. The address is Erottajankatu 11 B 9, 3rd floor. The entrance B is located in the inner courtyard. There will be some finger food and drinks to be served. In case you have trouble finding the right entrance you can call the number +358 45 633 8743 for more detailed information.</p><p>Sign up to after party and other extra activities here.</p></div>"
            }
          }
        },
        {
          title: "Accomodation",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          feature_box: false,
          data: {
            text: {
              twitter: false,
              header: "Accomodation",
              text:
                "<p>We have partner agreement with Scandic Hotel Grand Marina located close to the venue and you can book your stay here.</p><p>Promotion code: <b>BBOB160118</b></p><p>The negotiated price is valid from 16th of January until 21st of January.</p><p>Prices:<br>Single room – 120€ / night<br>Twin room – 140€ / night</p>"
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
                "<p>We start the conference activities with sauna, swimming and dinner at Allas Sea Pool on Wednesday, January 17.</p><p>Sauna and swimming starts at 6pm. The sauna that is reserved for us is mixed and swimsuit is obligatory. In addition to that, there are separate public saunas for men and woman. The open air swimming pool at the harbour in the heart of Helsinki is magnificent. Don’t worry the weather possibly being cold as the water is warm (except for the cold seawater pool for the brave).</p><p>After getting fresh at the sauna we continue with a dinner at the same premises at 8pm.</p><p>Sauna is free of charge for conference participants, but there’s only room for 40 people. Possible friends and family members can buy normal tickets if they want to join. Dinner is on own costs, except for conference speakers, and you need to select a set menu beforehand. Dinner is open for everyone and has same 40 people limit as sauna.</p><p>Registration for sauna and dinner opens during the first week of 2018. Conference participants will be informed about the exact time beforehand.</p><p>Sign up to sauna, dinner and other extra activities here.</p>"
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
                "<p>After the main conference we still have Friday, January 19, dedicated for development sprints. This event is for those who’d like to contribute to Robot Framework or any library or tool in its ecosystem. The event is free and open for everyone, including those not participating the conference itself. Sprint facilities are provided by Eficode and the address is Pohjoinen Rautatiekatu 25. Food and drinks will be available.<p><div class='ml-3'><h2 class='mb-3'>Agenda</h2><p>10:00 Welcome words. Introduction to participating projects and tasks they have available. </p><p>10:30 Introduction to contributing to open source projects. Git and GitHub introduction. Those familiar with these topics can skip this. </p><p>11:00 Development! Participants can work with tasks they find interesting either alone, in pairs, or in small groups. Project leaders help as much as they can. </p><p>16:00 Presenting what we have accomplished. </p><p>17:00 Official program ends. Sauna opens. Coding continues.</p></div><p>Confirmed project represented in the sprints are Robot Framework (Pekka Klärck), SeleniumLibrary (Tatu Aalto) and Jenkins plugin (Tatu Kairi and others), but it is also possible to work with other projects and even start totally new ones. If you have a project you’d like others to work with, please send an email to info@robocon.io and we can add it here. Especially with new projects, consider also presenting the project to others in lighting talks during the conference.</p>"
            }
          }
        },
        {
          title: "Misc",
          text_block: false,
          text_block_centered: true,
          tab_box: false,
          tab_box_centered: true,
          feature_box: false,
          data: {
            text: {
              header: "Misc"
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
                title: "Video",
                items: [
                  {
                    src: "https://www.youtube.com/embed/sZ_-yb-TN9M?rel=0"
                  },
                  {
                    src: "https://www.youtube.com/embed/8vIT2da6N_o?rel=0"
                  },
                  {
                    src: "https://www.youtube.com/embed/K_CjzCjmggY?rel=0"
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
