import type { MetadataRoute } from "next";
import { projects, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/experience", "/research", "/achievements", "/contact"];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date()
  }));
}
