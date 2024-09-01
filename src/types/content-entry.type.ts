import type { CONTENT_TYPE, IPage, ITicket, ISponsorBenefits } from '.';

type ContentType = IPage | ITicket | ISponsorBenefits;

type ContentEntry<ID extends CONTENT_TYPE> = Pick<ContentType, 'fields'> & {
  sys: {
    contentType: {
      sys: {
        id: ID;
      };
    };
  };
};

export type ContentTypeID<CT extends IPage = IPage> =
  CT['sys']['contentType']['sys']['id'];

export type ContentEntryByID<ID extends CONTENT_TYPE> = Extract<
  ContentType,
  ContentEntry<ID>
>;
