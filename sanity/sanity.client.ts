import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "marzv5lx",
  dataset: "production",
  apiVersion: "2024-05-07",
  useCdn: false,
};

const client = createClient(config);

export default client;
