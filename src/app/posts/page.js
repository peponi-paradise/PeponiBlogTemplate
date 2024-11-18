import { MetaInformation, PostInformation } from "@/app/constants";
import { TextLink } from "@/components/linkButtons";
import Pagination from "@/components/pagination";
import PostList from "@/components/postList";
import Main from "@/layouts/globalMain";
import {
  applyPostFilter,
  getCategoryCount,
  pagination,
  totalCategories,
} from "@/lib/postsParser";

export const metadata = {
  title: `Posts`,
  description: "Blog posts",
  keywords: totalCategories,
  openGraph: {
    title: "Posts",
    description: "Blog posts",
    url: MetaInformation.baseUrl + "/posts?category=all",
  },
};

const selectedCategoryClass =
  "ml-1.5 pl-4 border-l border-sky-400 truncate text-sky-400 pb-1 pt-1 last:pb-0";
const otherCategoryClass =
  "ml-1.5 pl-4 border-l border-slate-700 truncate pb-1 pt-1 last:pb-0";

export default function Posts({ searchParams, ...props }) {
  let currentPosts = applyPostFilter(searchParams.category, searchParams.title);
  let posts = pagination(
    currentPosts,
    PostInformation.viewCount,
    searchParams.page,
  );
  let currentPage = Number(searchParams.page);
  if (isNaN(currentPage)) {
    currentPage = 0;
  }
  let totalPages =
    Math.ceil(currentPosts.length / PostInformation.viewCount) - 1;
  let start = currentPage - PostInformation.paginationRange;
  let end =
    currentPage + PostInformation.paginationRange > totalPages
      ? totalPages
      : currentPage + PostInformation.paginationRange;
  return (
    <Main {...props}>
      <section className="flex flex-row">
        <SmCategories searchParams={searchParams} />
        <LgCategories searchParams={searchParams} />
        <div className="flex flex-col justify-between mr-auto sm:basis-3/4 sm:pl-8">
          <p className="mb-5 text-2xl font-bold text-slate-200/90 sm:hidden">
            Posts
          </p>
          <PostList posts={posts}></PostList>
          <Pagination
            current={currentPage}
            start={start}
            end={end}
            total={totalPages}
          />
        </div>
      </section>
    </Main>
  );
}

function SmCategories({ searchParams }) {
  return (
    <div className="hidden pr-8 ml-auto border-r max-w-40 border-slate-700 sm:block sm:basis-1/4 lg:hidden">
      <ul>
        <li className="mb-2">
          <TextLink
            className={
              searchParams.category == "all"
                ? "text-xl text-sky-400"
                : "text-xl text-slate-200/90"
            }
            href="/posts?category=all"
            text="Categories"
          />
        </li>
        {totalCategories.map((category) => (
          <li
            key={category}
            className={
              category == searchParams.category
                ? selectedCategoryClass
                : otherCategoryClass
            }
          >
            <TextLink
              href={`/posts?category=${encodeURIComponent(category)}`}
              text={category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function LgCategories({ searchParams }) {
  return (
    <div className="hidden pr-8 ml-auto border-r max-w-40 border-slate-700 lg:block lg:basis-1/4 lg:max-w-56 xl:max-w-64">
      <ul>
        <li className="mb-2">
          <TextLink
            className={
              searchParams.category == "all"
                ? "text-xl text-sky-400"
                : "text-xl text-slate-200/90"
            }
            href="/posts?category=all"
            text={`Categories (${getCategoryCount("all")})`}
          />
        </li>
        {totalCategories.map((category) => (
          <li
            key={category}
            className={
              category == searchParams.category
                ? selectedCategoryClass
                : otherCategoryClass
            }
          >
            <TextLink
              href={`/posts?category=${encodeURIComponent(category)}`}
              text={`${category} (${getCategoryCount(category)})`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
