import Main from "@/layouts/globalMain";
import PostList from "@/components/postList";
import { totalCategories } from "@/lib/postsParser";
import { applyPostFilter, pagenation } from "@/lib/postsParser";
import Link from "next/link";
import { MetaInformation, PostInformation } from "@/app/constants";
import Pagenation from "@/components/pagination";

export const metadata = {
  title: `Posts`,
  description: "Blog posts",
  keywords: totalCategories.map((category) => category[0]),
  openGraph: {
    title: "Posts",
    description: "Blog posts",
    url: MetaInformation.baseUrl + "/posts?folderPath=all",
    images: [
      {
        url: "./opengraph-image.png",
        width: 256,
        height: 256,
        type: "image/png",
        alt: "Favicon",
      },
    ],
  },
};

const selectedCategoryClass =
  "ml-1.5 pl-4 border-l border-sky-400 truncate text-sky-400 pb-1 pt-1 last:pb-0";
const otherCategoryClass =
  "ml-1.5 pl-4 border-l border-slate-700 truncate pb-1 pt-1 last:pb-0";

export default function Posts(props) {
  let currentPosts = applyPostFilter(
    props.searchParams.folderPath,
    props.searchParams.title,
  );
  let posts = pagenation(
    currentPosts,
    PostInformation.viewCount,
    props.searchParams.page,
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
    <Main className="my-8">
      <section className="flex flex-row">
        <div className="ml-auto hidden max-w-40 border-r border-slate-700 pr-8 sm:block sm:basis-1/4 lg:max-w-56 xl:max-w-64">
          <ul>
            <li className="mb-2">
              <Link
                href={`/posts?folderPath=all`}
                className={
                  props.searchParams.folderPath == "all"
                    ? "text-xl text-sky-400"
                    : "text-xl text-slate-200/90 hover:text-sky-400"
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
                <Link
                  className="hover:text-sky-400"
                  href={`/posts?folderPath=${category[1]}`}
                >
                  {category[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mr-auto flex flex-col justify-between sm:basis-3/4 sm:pl-8">
          <p className="mb-5 text-2xl font-bold text-slate-200/90 sm:hidden">
            Posts
          </p>
          <PostList posts={posts}></PostList>
          <Pagenation current={currentPage} start={start} end={end} />
        </div>
      </section>
    </Main>
  );
}
