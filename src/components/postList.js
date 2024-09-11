import Link from "next/link";
import Image from "next/image";
import { Chips } from "./chip";
import timer from "@/public/images/timer.svg";

export default function PostList(props) {
  return (
    <ul className={props.className}>
      {props.posts.map((post) => (
        <li key={post.title} className="mb-6 last:mb-0">
          <article className="bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-2">
            <Link href={`/posts/${post.folderPath}/${post.slug}`}>
              <div className="flex flex-row justify-between text-sm text-slate-400/50 pb-1">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <div className="flex flex-row items-center">
                  <Image
                    src={timer}
                    alt="Minutes to read"
                    className="size-3.5 mr-1"
                  ></Image>
                  <span>{post.minutesToRead}m</span>
                </div>
              </div>
              <h2 className="pb-2 text-2xl text-slate-200/90">{post.title}</h2>
              <p className="text-sm line-clamp-3 mb-4">{post.description}</p>
              <div className="flex flex-row">
                <Chips
                  className="text-xs text-blue-400/75 bg-blue-900/40 px-1 border border-blue-800/60 rounded-full mr-1"
                  contents={post.tags}
                ></Chips>
              </div>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
