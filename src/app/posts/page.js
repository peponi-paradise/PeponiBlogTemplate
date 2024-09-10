import Main from "@/layouts/globalMain";
import PostList from "@/components/postList";
import { totalCategories } from "@/lib/postsParser";
import { applyPostFilter, pagenation } from "@/lib/postsParser";
import Link from "next/link";
import { MetaInformation, PostInformation } from "../constants";

export const metadata = {
  title: `${MetaInformation.title} - Posts`,
  description: "Blog posts",
};

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
  return (
    <Main>
      <section className="flex flex-row">
        <div className="hidden max-w-64 pr-4 border-r border-slate-700 sm:inline-block">
          <h3 className="mb-2">Categories</h3>
          <ul>
            {totalCategories.map((category) => (
              <li key={category[0]} className="pl-4 border-l border-slate-700">
                <Link href={`/posts?folderPath=${category[1]}`}>
                  {category[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grow pl-4 flex flex-col justify-between">
          <PostList posts={posts}></PostList>
          <nav aria-labelledby="pagenation" className="mt-8 text-center">
            <p>1,2,3,4,5</p>
          </nav>
        </div>
      </section>
    </Main>
  );
}
