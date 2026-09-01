import { webResources } from "./web";
import { frontendResources } from "./frontend";
import { backendResources } from "./backend";
import { databaseResources } from "./databases";
import { devopsResources } from "./devops";
import { toolsResources } from "./tools";
import { mobileResources } from "./mobile";

export const resources = [
  ...webResources,
  ...frontendResources,
  ...backendResources,
  ...databaseResources,
  ...devopsResources,
  ...toolsResources,
  ...mobileResources,
];

export const resourceCategories = [
  "All",
  ...new Set(resources.map((resource) => resource.category)),
];
