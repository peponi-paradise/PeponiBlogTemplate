import fs from "fs";
import path from "path";
import { sync } from "glob";
import matter from "gray-matter";
import readingTime from "reading-time";

const postPath = path.join(process.cwd(), "src\\posts");
export const totalPosts = getAllPosts();
export const totalCategories = getAllCategories();

function parsePost(path) {
  let { data, content } = matter(fs.readFileSync(path, "utf8"));
  let grayMatter = data;
  let sl = path.slice(path.indexOf("\\posts")).replace("\\posts\\", "");
  let folderPath = sl.substring(0, sl.indexOf("\\"));
  let slug = sl.slice(sl.indexOf("\\") + 1).replace(".mdx", "");
  let minutesToRead = Math.ceil(readingTime(content).minutes);
  return { ...grayMatter, folderPath, slug, minutesToRead, content };
}

function getAllPosts() {
  let paths = sync(`/**/*.mdx`, {
    root: postPath,
  });
  let posts = paths.map((path) => parsePost(path));
  posts.sort(function (a, b) {
    return a.date - b.date;
  });
  return posts;
}

function getAllCategories() {
  let categories = [];
  totalPosts.forEach((post) => {
    if (categories.some((item) => item[1] === post.folderPath) == false) {
      categories.push([post.category, post.folderPath]);
    }
  });
  return categories;
}

export function applyPostFilter(folderPath, title) {
  let currentPosts = [];
  if (folderPath == "all" || title == "") {
    currentPosts = totalPosts;
  } else if (folderPath != undefined || folderPath != null) {
    currentPosts = totalPosts.filter((post) => post.folderPath == folderPath);
  } else if (title != undefined || title != null) {
    currentPosts = totalPosts.filter((post) =>
      post.title.toLowerCase().includes(title.toLowerCase())
    );
  } else {
    currentPosts = totalPosts;
  }

  return currentPosts;
}

export function getPost(folderPath, slug) {
  let filePath = path.join(
    process.cwd(),
    "src\\posts",
    folderPath,
    `${slug}.mdx`
  );
  return parsePost(filePath);
}
