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
              header: "Welcome",
              text:
                '<p>RoboCon is an annual gathering for the Robot Framework community. It provides a great possibility to learn from the experts, hear how the framework is used in different places, and most importantly, meet fellow Robot Framework users as well as its developers. <br> <br> On top of the RoboCon seminar we have interesting side events where you have a change to network with people from the same community. The schedule for the event week is: <br> <br> 16.1 Workshops & Social Dinner (additional cost) <br> 17.1 RoboCon Conference + Afterparty (Afterparty included in the ticket) <br> 18.1 Sprint & sauna (free) <br> <br> Date: Thursday 17.1.2019, klo 09:00 – 18:00 <br> Place: Bio Rex Helsinki, Mannerheimintie 22-24, 00100 Helsinki <br> <br> RoboCon is organized by Robot Framework Foundation, a non-profit consortium that also sponsors the development of Robot Framework. Possible profits from the conference will be used for this purpose too. </p>'
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
              header: "Sponsors",
              text: '<p>Contact <a href="mailto:info@robocon.io">info@robocon.io</a> about becoming a sponsor.</p>'
            },
            users: [
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
                '<p><a target="blank" href="https://www.lyyti.in/robocon2019">Tickets available here.</a> <br><br> Prices are valid as follows: <br> <b>Blind robot</b> 300€ (excluding VAT 24%) until October 31st 2018. <br> <b>Early robot</b> 400€ (excluding VAT 24%) until December 31st 2018. <br> <b>Late robot</b> 500€ (excluding VAT 24%) until January 17th 2019. <br> </p>'
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
                "<div class='ml-3'><h2 class='mb-3'>Speakers</h2><p>TBA</p><h2 class='mt-5'>Lightning Talks</h3><p>After the presentations there is a time allocation for 10 minute lightning talks. Sign-up your name, topic, and contact information to the lightning talk list at the venue during the conference day.</p><h2 class='mt-5'>After Party</h3><p>Official after party starting at 6:30pm at Vala offices close to the conference venue.</p></div>"
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
              }
            ]
          }
        }
      ]
    };
  }
};
</script>
