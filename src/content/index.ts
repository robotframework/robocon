import { createClient } from 'contentful'
import type { Asset, Entry } from 'contentful'
import type { Document } from "@contentful/rich-text-types";

const client = createClient({
  space: '0375ld2k0qal',
  environment: 'fix',
  accessToken: 'nZdhpmjS5mocnrAhJVF8ckZ_B4jd0OJVL4to27WzkwI'
})

export const getEntries = () => client
  .getEntries()

export interface Page {
  contentTypeId: 'page';
  fields: {
    pageKey: string;
    pageName: string;
    slug: string;
    pageBody: Document;
  }
}

export interface PageSection {
  contentTypeId: 'pageSection';
  fields: {
    title: string;
    body: Document;
  }
}

export interface Sponsor {
  contentTypeId: 'pageSection';
  fields: {
    sponsorName: string,
    sponsorTier: "Platinum" | "Gold" | "Silver",
    href: string,
    sponsorLogo: Asset
  }
}

export interface Ticket {
  contentTypeId: 'ticket';
  fields: {
    name: string;
    specifier: string;
    price: number;
    comparePrice: number;
    href: string;
    validFrom: string;
    validUntil: string;
    isPremium: boolean;
  }
}

export interface Row {
  contentTypeId: 'row';
  fields: {
    content: Entry<Ticket>[];
  }
}

export interface Banner {
  contentTypeId: 'banner';
  fields: {
    title: string;
    image: Asset;
  }
}

export interface Card {
  contentTypeId: 'card';
  fields: {
    title: string;
    subTitle: string;
    content: Document;
  }
}
