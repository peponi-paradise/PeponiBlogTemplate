import { totalPosts } from "@/lib/postsParser";
import { MetaInformation } from "./constants";
import { totalProjects } from "@/lib/projectParser";

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
    url: `${MetaInformation.baseUrl}/posts/${post.folderPath}/${post.slug}`,
    lastModified: post.date,
  }));
  let projects = totalProjects.map((project) => ({
    url: `${MetaInformation.baseUrl}/projects/${project.slug}`,
    lastModified: project.published,
  }));

  return [home, about, ...posts, ...projects];
}
