import type { Entry } from "contentful";
import { get } from "lodash-es";
import { defineStore } from "pinia";

import { IBannerFields } from "@/types";

type contentType = { nodeType?: string } & { [key: string]: any }

const useGlobalStore = defineStore("global", {
  state: () => ({
    mainPage2025: [] as Array<Entry>,
    sponsorPage2025: [] as Array<Entry>,
    ticketPage2025: undefined as (Entry | undefined),
    eventPage2025: [] as Array<Entry>,
    sponsor2025: [] as Array<Entry>,
    main2025Banner: undefined as IBannerFields | undefined,
    main2024: [] as Array<Entry>,
  }),
  getters: {
    getMainPage2025(): Array<Entry> {
      console.log(this.mainPage2025)
      return this.mainPage2025;
    },
    getMainIntro2025(): Record<string, any> | undefined {
      return this.mainPage2025.find((section) => {
        const sectionKey = get(section, "data.target.fields.sectionKey") ?? ""
        return sectionKey?.startsWith("intro_2025")
      })
    },
    getMainEvents2025(): Record<string, any> | undefined {
      const found = this.mainPage2025.find((section) =>
        get(section, "data.target.fields.sectionKey") === "event_section_2025")
      return found
    },
    getMainTickets2025(): Record<string, any> | undefined {
      return this.mainPage2025.find((section) => {
        const sectionKey = get(section, "data.target.fields.sectionKey") ?? ""
        return (sectionKey as string) === 'ticket_section_2025'
      })
    },
    getMainSponsor2025(): Record<string, any> | undefined {
      return this.mainPage2025.find((section) => {
        const sectionKey = get(section, "data.target.fields.sectionKey") ?? ""
        return sectionKey?.startsWith("sponsor_2025")
      })
    },
    getFooter(): Record<string, any> | undefined {
      const found = this.mainPage2025.find((section) => {
        return get(section, "data.target.fields.key") === "footer"
      })
      return get(found, 'data.target.fields.datasets');
    },
    get2025Banner(): IBannerFields | undefined {
      return this.main2025Banner;
    },
    getSponsorPageIntro2025(): Record<string, any> | undefined {
      return this.sponsorPage2025?.[0]
    },
    getSponsorPage2025(): Array<Record<string, any>> | undefined {
      return this.sponsorPage2025?.slice(1, this.sponsorPage2025?.length)
    },
    getTicketPage2025(): Record<string, any> | undefined {
      return this.ticketPage2025
    },
    getEventPageIntro2025(): Record<string, any> | undefined {
      return this.eventPage2025?.[0]
    },
    getEventPage2025(): Array<Record<string, any>> | undefined {
      return this.eventPage2025?.slice(1, this.eventPage2025?.length)
    },
  },
  actions: {
    setBanner(items: any) {
      const mainBanner = items?.filter((item: any) => item?.fields?.bannerKey === "main_2025_banner")?.[0]
      this.main2025Banner = mainBanner.fields
    },
    setPages(pages: Array<Entry>) {
      pages.forEach((p) => {
        const key = p.fields?.pageKey
        if (key === "sponsor_page_2025") {
          this.sponsorPage2025 = getEntryBlock(p);
        } else if (key === "ticket_page_2025") {
          const entryBlock = getEntryBlock(p);
          this.ticketPage2025 = entryBlock
        } else if (key === "event_page_2025") {
          const entryBlock = getEntryBlock(p);
          this.eventPage2025 = entryBlock
        } else if (key === "main_page_2025") {
          this.mainPage2025 = getEntryBlock(p);
        }
      }

      )

    },
  },
});




// const _content = get(p, "fields.pageBody.content")

// if (!p || !_content) return

// const sponsorContent = (_content as contentType).reduce(
//   (prev: contentType[], curr: contentType) => {
//     return curr.nodeType === "embedded-entry-block" ? [...prev, curr] : prev
//   },
//   []
// )
// this.sponsorPage2025 = sponsorContent


function getEntryBlock(page: Entry | undefined) {
  const content = get(page, "fields.pageBody.content")

  if (!page || !content) return undefined

  return (content as contentType).reduce(
    (prev: contentType[], curr: contentType) => {
      return curr.nodeType === "embedded-entry-block" ? [...prev, curr] : prev
    },
    []
  )



}
export { useGlobalStore };
