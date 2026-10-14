import { links, projectsData, servicesData } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectItem = (typeof projectsData)[number];
export type ServiceItem = (typeof servicesData)[number];
