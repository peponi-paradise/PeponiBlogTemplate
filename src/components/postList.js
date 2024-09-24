import Link from "next/link";
import Image from "next/image";
import "./_postList.css";
import { Chip, Chips } from "./chip";
import timer from "@/public/images/timer.svg";

export default function PostList(props) {
  return (
    <ul className={props.className}>
      {props.posts.map((post) => (
        <li key={post.title} className="mb-7 last:mb-0">
          <article className="rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 hover:bg-slate-700">
            <Link href={`/posts/${post.folderPath}/${post.slug}`}>
              <div className="flex flex-row justify-between pb-1 text-sm text-slate-400/50">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <div className="flex flex-row items-center">
                  <Image
                    src={timer}
                    alt="Minutes to read"
                    className="mr-1 size-3.5"
                  ></Image>
                  <span>{post.minutesToRead}m</span>
                </div>
              </div>
              <h2 className="pb-2 text-2xl text-slate-200/90">{post.title}</h2>
              <p className="mb-4 line-clamp-3 text-sm">{post.description}</p>
              <div>
                <Chip
                  className="rounded-full border border-fuchsia-800/60 bg-fuchsia-900/40 px-1 text-xs text-fuchsia-400/75"
                  content={post.category}
                />
              </div>
              <Chips
                className="mr-1 rounded-full border border-blue-800/60 bg-blue-900/40 px-1 text-xs text-blue-400/75"
                contents={post.tags}
              ></Chips>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
