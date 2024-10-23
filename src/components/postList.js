import * as Icons from "@/components/svgComponents";
import Link from "next/link";
import path from "path";

import "./_postList.css";
import { Chip, Chips } from "./chip";

export default function PostList({ className = "", posts, ...props }) {
  return (
    <ul className={className} {...props}>
      {posts.map((post) => (
        <li key={post.title} className="mb-7 last:mb-0">
          <article className="rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 hover:border-sky-400 hover:bg-gradient-to-br hover:from-slate-800 hover:from-30% hover:to-slate-700">
            <Link href={path.join(post.folderPath, post.slug)}>
              <div className="flex flex-row justify-between pb-1 text-sm text-slate-400/50">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <div className="flex flex-row items-center">
                  <Icons.Clock className="mr-1 size-3.5 fill-slate-400/50 hover:fill-slate-400/50" />
                  <span>{post.minutesToRead}m</span>
                </div>
              </div>
              <h2 className="pb-2 text-2xl text-slate-200/90">{post.title}</h2>
              <p className="mb-4 text-sm line-clamp-3">{post.description}</p>
              <div>
                <Chip
                  className="px-1 text-xs border rounded-full border-fuchsia-800/60 bg-fuchsia-900/40 text-fuchsia-400/75"
                  content={post.category}
                />
              </div>
              <Chips
                className="px-1 mr-1 text-xs border rounded-full border-blue-800/60 bg-blue-900/40 text-blue-400/75"
                contents={post.tags}
              ></Chips>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}
