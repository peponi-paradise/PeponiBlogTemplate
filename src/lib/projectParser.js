import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

const projectPath = path.join(process.cwd(), "projects");
export const totalProjects = getAllProjects();
export const projectsPreview = totalProjects.slice(0, 4);

export function getProject(slug) {
  let filePath = path.join(process.cwd(), "projects", `${slug}.mdx`);
  return parseProject(filePath);
}

function parseProject(filepath) {
  let { data, content } = matter(fs.readFileSync(filepath, "utf8"));
  let grayMatter = data;
  let sl = filepath
    .slice(filepath.indexOf(`${path.sep}projects`))
    .replace(`${path.sep}projects${path.sep}`, "");
  let slug = sl.slice(sl.indexOf(`${path.sep}`) + 1).replace(".mdx", "");
  let minutesToRead = Math.ceil(readingTime(content).minutes);
  return { ...grayMatter, slug, minutesToRead, content };
}

function getAllProjects() {
  let paths = sync(`/*.mdx`, {
    root: projectPath,
  });
  let projects = paths.map((path) => parseProject(path));
  projects.sort(function (a, b) {
    return b.dateFrom - a.dateFrom;
  });
  return projects;
}
