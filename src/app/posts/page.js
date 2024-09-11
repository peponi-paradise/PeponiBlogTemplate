import Main from "@/layouts/globalMain";
import PostList from "@/components/postList";
import { totalCategories } from "@/lib/postsParser";
import { applyPostFilter, pagenation } from "@/lib/postsParser";
import Link from "next/link";
import { MetaInformation, PostInformation } from "../constants";
import Pagenation from "@/components/pagination";

export const metadata = {
  title: `${MetaInformation.title} - Posts`,
  description: "Blog posts",
};

const selectedCategoryClass =
  "ml-1.5 pl-4 border-l border-sky-400 text-sky-400 pb-1 pt-1 last:pb-0";
const otherCategoryClass =
  "ml-1.5 pl-4 border-l border-slate-700 pb-1 pt-1 last:pb-0";

export default function Posts(props) {
  let currentPosts = applyPostFilter(
    props.searchParams.folderPath,
    props.searchParams.title
  );
  let posts = pagenation(
    currentPosts,
    PostInformation.viewCount,
    props.searchParams.page
  );
  let currentPage = Number(props.searchParams.page);
  if (isNaN(currentPage)) {
    currentPage = 0;
  }
  let totalPages =
    Math.ceil(currentPosts.length / PostInformation.viewCount) - 1;
  let start = currentPage - PostInformation.pagenationRange;
  let end =
    currentPage + PostInformation.pagenationRange > totalPages
      ? totalPages
      : currentPage + PostInformation.pagenationRange;
  return (
    <Main>
      <section className="flex flex-row">
        <div className="hidden pr-4 max-w-64 border-r border-slate-700 sm:block">
          <ul>
            <li className="mb-2">
              <Link
                href={`/posts?folderPath=all`}
                className={
                  props.searchParams.folderPath == "all"
                    ? "text-xl text-sky-400"
                    : "text-xl text-slate-200/90"
                }
              >
                Categories
              </Link>
            </li>
            {totalCategories.map((category) => (
              <li
                key={category[0]}
                className={
                  category[1] == props.searchParams.folderPath
                    ? selectedCategoryClass
                    : otherCategoryClass
                }
              >
                <Link href={`/posts?folderPath=${category[1]}`}>
                  {category[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grow sm:pl-4 flex flex-col justify-between">
          <PostList posts={posts}></PostList>
          <Pagenation current={currentPage} start={start} end={end} />
        </div>
      </section>
    </Main>
  );
}
