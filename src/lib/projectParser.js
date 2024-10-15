import fs from "fs";
import path from "path";
import { sync } from "glob";
import matter from "gray-matter";
import readingTime from "reading-time";

const projectPath = path.join(process.cwd(), "projects");
export let totalProjects = getAllProjects();
export let projectsPreview = totalProjects.slice(0, 4);

export function getProject(slug) {
  let filePath = path.join(process.cwd(), "projects", `${slug}.mdx`);
  return parseProject(filePath);
}

function parseProject(path) {
  let { data, content } = matter(fs.readFileSync(path, "utf8"));
  let grayMatter = data;
  let sl = path.slice(path.indexOf("\\projects")).replace("\\projects\\", "");
  let slug = sl.slice(sl.indexOf("\\") + 1).replace(".mdx", "");
  let minutesToRead = Math.ceil(readingTime(content).minutes);
  return { ...grayMatter, slug, minutesToRead, content };
}

function getAllProjects() {
  let paths = sync(`/*.mdx`, {
    root: projectPath,
  });
  let projects = paths.map((path) => parseProject(path));
  projects.sort(function (a, b) {
    return b.date - a.date;
  });
  return projects;
}
