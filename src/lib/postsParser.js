import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

const postPath = path.join(process.cwd(), "posts");
export const totalPosts = getAllPosts();
export const totalCategories = getAllCategories();

export function applyPostFilter(category, title) {
  let currentPosts = [];
  if (category == "all" || title == "") {
    currentPosts = totalPosts;
  } else if (category != undefined || category != null) {
    currentPosts = totalPosts.filter((post) => post.category == category);
  } else if (title != undefined || title != null) {
    currentPosts = totalPosts.filter((post) =>
      post.title.toLowerCase().includes(title.toLowerCase()),
    );
  } else {
    currentPosts = totalPosts;
  }

  return currentPosts;
}

export function pagenation(posts, count, page) {
  let sliced = [];
  if (count != undefined || count != null) {
    let startIndex = 0;
    if (page != undefined || page != null) {
      startIndex += page * count;
    }
    sliced = posts.slice(startIndex, startIndex + count);
  }

  return sliced.length != 0 ? sliced : posts;
}

export function getPost(filePath) {
  let totalPath = path.join(process.cwd(), "posts", filePath + ".mdx");
  return parsePost(totalPath);
}

function parsePost(filepath) {
  let { data, content } = matter(fs.readFileSync(filepath, "utf8"));
  let grayMatter = data;
  let folderPath = path.dirname(filepath).replace(process.cwd(), "");
  let slug = path.basename(filepath, ".mdx");
  let minutesToRead = Math.ceil(readingTime(content).minutes);
  return { ...grayMatter, folderPath, slug, minutesToRead, content };
}

function getAllPosts() {
  let paths = sync(`/**/*.mdx`, {
    root: postPath,
  });
  let posts = paths.map((path) => parsePost(path));
  posts.sort(function (a, b) {
    return b.date - a.date;
  });
  return posts;
}

function getAllCategories() {
  let categories = [];
  totalPosts.forEach((post) => {
    if (!categories.some((category) => category == post.category)) {
      categories.push(post.category);
    }
  });
  return categories;
}
