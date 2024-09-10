import Main from "@/layouts/globalMain";
import PostList from "@/components/postList";
import { totalCategories } from "@/lib/postsParser";
import { applyPostFilter, pagenation } from "@/lib/postsParser";
import Link from "next/link";

export default function Posts(props) {
  let currentPosts = applyPostFilter(
    props.searchParams.folderPath,
    props.searchParams.title
  );
  let posts = pagenation(
    currentPosts,
    props.searchParams.count,
    props.searchParams.page
  );
  return (
    <Main>
      <h1>This is post page</h1>
      <ul>
        {totalCategories.map((category) => (
          <li key={category[0]}>
            <Link href={`/posts?folderPath=${category[1]}`}>
              {category[0]},{category[1]}
            </Link>
          </li>
        ))}
      </ul>
      {PostList(posts)}
    </Main>
  );
}
