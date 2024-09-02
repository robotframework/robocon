import { strict as assert } from "assert";
import { createClient, type Environment } from "contentful-management";
import { config } from "dotenv";

config({ path: ".env.local" });

const {
  VITE_CONTENTFUL_ACCESS_TOKEN,
  VITE_CONTENTFUL_SPACE_ID,
  VITE_CONTENTFUL_ENVIRONMENT_ID,
} = process.env;

assert(VITE_CONTENTFUL_ACCESS_TOKEN);
assert(VITE_CONTENTFUL_SPACE_ID);
assert(VITE_CONTENTFUL_ENVIRONMENT_ID);

const getContentfulEnvironment = (): Promise<Environment> => {
  const contentfulClient = createClient({
    accessToken: VITE_CONTENTFUL_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(VITE_CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(VITE_CONTENTFUL_ENVIRONMENT_ID));
};

module.exports = getContentfulEnvironment;
