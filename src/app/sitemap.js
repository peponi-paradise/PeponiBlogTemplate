import { totalPosts } from "@/lib/postsParser";
import { totalProjects } from "@/lib/projectParser";
import path from "path";

import { MetaInformation } from "./constants";

export default function sitemap() {
  let home = {
    url: MetaInformation.baseUrl,
    lastModified: new Date(),
  };
  let about = {
    url: `${MetaInformation.baseUrl}/about`,
    lastModified: new Date(),
  };
  let posts = totalPosts.map((post) => ({
    url: `${MetaInformation.baseUrl}${path.join(post.folderPath, post.slug).replaceAll("\\", "/")}`,
    lastModified: post.date,
  }));
  let projects = totalProjects.map((project) => ({
    url: `${MetaInformation.baseUrl}/projects/${project.slug}`,
    lastModified: project.published,
  }));

  return [home, about, ...posts, ...projects];
}
