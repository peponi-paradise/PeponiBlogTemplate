import Link from "next/link";
import { applyPostFilter } from "@/lib/postsParser";
import { Chips } from "./chip";

export default function PostList(props) {
  let currentPosts = applyPostFilter(props.folderPath, props.title);

  return (
    <ul>
      {currentPosts.map((post) => (
        <li key={post.title}>
          <article className="border border-slate-700">
            <Link href={`/posts/${post.folderPath}/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{new Date(post.date).toLocaleDateString()}</p>
              <p>{post.category}</p>
              <p>{post.minutesToRead}</p>
              {Chips(post.tags)}
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
