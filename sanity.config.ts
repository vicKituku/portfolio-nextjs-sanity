import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
// import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "portfolio-site",

  projectId: "marzv5lx",
  dataset: "production",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
});
