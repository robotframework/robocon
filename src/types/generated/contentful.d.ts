// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBannerFields {
  /** Banner key */
  bannerKey?: string | undefined;

  /** Text Fields */
  textFields: Record<string, any>;

  /** first slide start date */
  startDate: string;

  /** first slide end date */
  endDate?: string | undefined;

  /** Banner background images */
  banners: Asset[];
}

export interface IBanner extends Entry<IBannerFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "banner";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ICardFields {
  /** Card Key */
  cardKey: string;

  /** Card Title */
  cardTitle?: string | undefined;

  /** SubTitle */
  subTitle?: string | undefined;

  /** Description */
  description?: string | undefined;

  /** Card Body */
  cardBody?: Document | undefined;

  /** Card Image */
  cardImage?: Asset | undefined;
}

export interface ICard extends Entry<ICardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "card";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IDatasetCardFields {
  /** Label */
  label?: string | undefined;

  /** key */
  key: string;

  /** Title */
  title?: string | undefined;

  /** Datasets */
  datasets?: Record<string, any> | undefined;
}

export interface IDatasetCard extends Entry<IDatasetCardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "datasetCard";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface INavigationBarFields {
  /** Entry Title */
  entryTitle: string;

  /** Navigation Links */
  navigationLinks: IPage[];
}

export interface INavigationBar extends Entry<INavigationBarFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "navigationBar";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Page Key */
  pageKey: string;

  /** Page Name */
  pageName: string;

  /** Page Body */
  pageBody: Document;
}

/** Includes
- page key (uniq field)
- page name
- page body (includes inline page sections)
 */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageSectionFields {
  /** Page Section Key */
  sectionKey?: string | undefined;

  /** Title on Page */
  shownTitle: string;

  /** Show Title */
  showTitle: boolean;

  /** Body */
  body: Document;

  /** Images */
  images?: Asset[] | undefined;
}

/** One section on a robocon.io main page. Can contain text, images, tickets, talkers etc. */

export interface IPageSection extends Entry<IPageSectionFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageSection";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISponsorFields {
  /** Sponsor Name */
  sponsorName: string;

  /** Sponsor Tier */
  sponsorTier: "Platinum" | "Gold" | "Silver";

  /** Href */
  href: string;

  /** Sponsor Logo */
  sponsorLogo: Asset;
}

/** Sponsor to be ambedded in Page Content */

export interface ISponsor extends Entry<ISponsorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sponsor";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITicketFields {
  /** Ticket Name */
  name: string;

  /** Href */
  href: string;

  /** Valid From */
  validFrom?: string | undefined;

  /** Valid Until */
  validUntil?: string | undefined;

  /** Ticket Info */
  ticketInfo: Record<string, any>;

  /** Ticket Display Index */
  index: number;
}

/** A graphical ticket link that can be pointed to specific ticket type in pretix. Url can possibly contain discount codes etc */

export interface ITicket extends Entry<ITicketFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "ticket";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "banner"
  | "card"
  | "datasetCard"
  | "navigationBar"
  | "page"
  | "pageSection"
  | "sponsor"
  | "ticket";

export type IEntry =
  | IBanner
  | ICard
  | IDatasetCard
  | INavigationBar
  | IPage
  | IPageSection
  | ISponsor
  | ITicket;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";