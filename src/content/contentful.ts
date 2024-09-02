import { createClient, EntryCollection } from 'contentful';

/* ******************************************************** */
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT_ID || 'master',
  accessToken: import.meta.env.VITE_CONTENTFUL_CMA_TOKEN
});

// 1. main.tx (root action)
const getEntries = () => client.getEntries().then((res) => client.parseEntries((res as any).items));

const getEntry = async (
  contentTypeID?: string
): Promise<EntryCollection<any>> => {
  return client.getEntries({
    content_type: contentTypeID
    // select: 'sys.id'
  });
};

export { getEntries, getEntry };
